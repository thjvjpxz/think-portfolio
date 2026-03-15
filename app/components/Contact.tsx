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
    Partial<
      Record<
        keyof ContactFormData,
        HTMLInputElement | HTMLTextAreaElement | null
      >
    >
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
    if (!formData.name.trim()) nextErrors.name = t("nameRequired");
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
      (field) => nextErrors[field]
    );
    if (firstInvalidField) fieldRefs.current[firstInvalidField]?.focus();
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        code?: string;
      };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">{t("title")}</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-slate-400 leading-relaxed text-lg">
              {t("description")}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-accent/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono mb-1">
                    {t("emailLabel")}
                  </p>
                  <p className="text-slate-100 font-medium">{data.email}</p>
                </div>
              </a>
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-accent/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono mb-1">
                    {t("githubLabel")}
                  </p>
                  <p className="text-slate-100 font-medium">
                    {data.githubText}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 p-6 rounded-2xl glass-card"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange("website")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2">
              <label
                className="text-slate-300 text-sm font-medium"
                htmlFor="contact-name"
              >
                {t("nameLabel")}
              </label>
              <input
                ref={(el) => { fieldRefs.current.name = el; }}
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder={t("namePlaceholder")}
                data-invalid={errors.name ? "true" : undefined}
                className="ui-input"
              />
              {errors.name && (
                <p className="text-red-400 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-slate-300 text-sm font-medium"
                htmlFor="contact-email"
              >
                {t("emailFieldLabel")}
              </label>
              <input
                ref={(el) => { fieldRefs.current.email = el; }}
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder={t("emailPlaceholder")}
                data-invalid={errors.email ? "true" : undefined}
                className="ui-input"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-slate-300 text-sm font-medium"
                htmlFor="contact-message"
              >
                {t("messageLabel")}
              </label>
              <textarea
                ref={(el) => { fieldRefs.current.message = el; }}
                id="contact-message"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder={t("messagePlaceholder")}
                data-invalid={errors.message ? "true" : undefined}
                className="ui-input resize-none h-32"
              />
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitState === "loading"}
              className="w-full h-12 rounded-lg bg-accent text-[#0a0a0f] text-base font-bold shadow-[0_0_15px_rgba(58,191,248,0.3)] hover:shadow-[0_0_25px_rgba(58,191,248,0.5)] transition-all disabled:opacity-60 mt-2 cursor-pointer"
            >
              {submitState === "loading" ? t("sending") : t("send")}
            </button>

            {submitMessage && (
              <p
                className={`text-sm mt-2 ${
                  submitState === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
