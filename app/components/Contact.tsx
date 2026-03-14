"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import type { PortfolioData } from "@/data/types";
import { useTranslations } from "next-intl";
import {
  CONTACT_API_ENDPOINT,
  CONTACT_EMAIL_REGEX,
  CONTACT_ERROR_CODES,
  CONTACT_FORM_FIELDS,
} from "./contact.constants";

interface ContactProps {
  data: PortfolioData["contact"];
}

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function Contact({ data }: ContactProps) {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const fieldRefs = useRef<
    Partial<Record<keyof ContactFormData, HTMLInputElement | HTMLTextAreaElement | null>>
  >({});

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (submitState !== "idle") {
        setSubmitState("idle");
        setSubmitMessage("");
      }
    };

  const validate = () => {
    const nextErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = t("nameRequired");
    }

    if (!formData.email.trim()) {
      nextErrors.email = t("emailRequired");
    } else if (!CONTACT_EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = t("emailInvalid");
    }

    if (!formData.message.trim()) {
      nextErrors.message = t("messageRequired");
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = t("messageMinLength");
    }

    return nextErrors;
  };

  const focusFirstError = (nextErrors: ContactFormErrors) => {
    const firstInvalidField = CONTACT_FORM_FIELDS.find(
      (field) => nextErrors[field],
    );
    if (firstInvalidField) {
      fieldRefs.current[firstInvalidField]?.focus();
    }
  };

  const getErrorMessageByCode = (code: string) => {
    switch (code) {
      case CONTACT_ERROR_CODES.rateLimited:
        return t("errorRateLimited");
      case CONTACT_ERROR_CODES.serverNotConfigured:
        return t("errorServiceUnavailable");
      case CONTACT_ERROR_CODES.invalidPayload:
        return t("errorCheckFields");
      default:
        return t("errorTryAgain");
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitMessage(t("errorCheckFields"));
      focusFirstError(nextErrors);
      return;
    }

    try {
      setSubmitState("loading");
      setSubmitMessage("");

      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; code?: string };

      if (!response.ok || !result.ok) {
        setSubmitState("error");
        setSubmitMessage(getErrorMessageByCode(result.code ?? ""));
        return;
      }

      setSubmitState("success");
      setSubmitMessage(t("successMessage"));
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch {
      setSubmitState("error");
      setSubmitMessage(t("errorTryAgain"));
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t("description")}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-[8px] text-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    {t("emailLabel")}
                  </div>
                  <div className="text-white font-medium">
                    {data.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-[8px] text-accent">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    {t("githubLabel")}
                  </div>
                  <a
                    className="text-white font-medium hover:text-accent transition-colors"
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.githubText}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[8px]">
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
                value={formData.website}
                onChange={handleChange("website")}
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    id="contact-name"
                    ref={(node) => {
                      fieldRefs.current.name = node;
                    }}
                    className={`w-full bg-[#0a0a0f] border rounded-[8px] text-white p-3 outline-none transition-colors ${
                      errors.name
                        ? "border-rose-400 focus:ring-rose-400 focus:border-rose-400"
                        : "border-white/8 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)]"
                    }`}
                    placeholder={t("namePlaceholder")}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name ? (
                    <div id="contact-name-error" className="text-rose-300 text-sm mt-2">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    {t("emailFieldLabel")}
                  </label>
                  <input
                    id="contact-email"
                    ref={(node) => {
                      fieldRefs.current.email = node;
                    }}
                    className={`w-full bg-[#0a0a0f] border rounded-[8px] text-white p-3 outline-none transition-colors ${
                      errors.email
                        ? "border-rose-400 focus:ring-rose-400 focus:border-rose-400"
                        : "border-white/8 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)]"
                    }`}
                    placeholder={t("emailPlaceholder")}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email ? (
                    <div
                      id="contact-email-error"
                      className="text-rose-300 text-sm mt-2"
                    >
                      {errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="contact-message"
                  ref={(node) => {
                    fieldRefs.current.message = node;
                  }}
                  className={`w-full bg-[#0a0a0f] border rounded-[8px] text-white p-3 outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-rose-400 focus:ring-rose-400 focus:border-rose-400"
                      : "border-white/8 focus:ring-[color:var(--color-accent)] focus:border-[color:var(--color-accent)]"
                  }`}
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                />
                {errors.message ? (
                  <div
                    id="contact-message-error"
                    className="text-rose-300 text-sm mt-2"
                  >
                    {errors.message}
                  </div>
                ) : null}
              </div>
              {submitMessage ? (
                <div
                  className={`rounded-[8px] border px-4 py-3 text-sm flex items-start gap-2 ${
                    submitState === "success"
                      ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-400/40 bg-rose-500/10 text-rose-200"
                  }`}
                  aria-live="polite"
                  role={submitState === "error" ? "alert" : "status"}
                >
                  {submitState === "success" ? (
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.41l2.293 2.29 6.493-6.5a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-11a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0V7zm0 7a.75.75 0 011.5 0v.5a.75.75 0 01-1.5 0V14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span>{submitMessage}</span>
                </div>
              ) : null}
              <button
                className="btn-primary w-full font-bold py-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? t("sending") : t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
