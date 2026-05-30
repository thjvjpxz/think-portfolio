"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import type { PortfolioData } from "@/data/types";
import { useTranslations } from "next-intl";
import {
  IconCheck,
  IconExclamationCircle,
  IconGithub,
  IconMail,
  IconPhone,
  IconGlobe,
} from "./icons";
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
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              {t("description")}
            </p>
            
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 p-4 rounded-xl dossier-card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <IconMail />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">
                    {t("emailLabel")}
                  </p>
                  <p className="text-slate-900 font-medium">{data.email}</p>
                </div>
              </a>

              {data.phone && (
                <a
                  href={`tel:${data.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl dossier-card group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <IconPhone />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">
                      {t("phoneLabel")}
                    </p>
                    <p className="text-slate-900 font-medium">{data.phone}</p>
                  </div>
                </a>
              )}

              {data.website && (
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl dossier-card group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <IconGlobe />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">
                      {t("websiteLabel")}
                    </p>
                    <p className="text-slate-900 font-medium">{data.website.replace('https://', '')}</p>
                  </div>
                </a>
              )}

              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl dossier-card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <IconGithub />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">
                    {t("githubLabel")}
                  </p>
                  <p className="text-slate-900 font-medium">
                    {data.githubText}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl dossier-card"
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

            <div className="flex flex-col gap-1.5">
              <label
                className="text-slate-700 text-sm font-semibold"
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
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-slate-700 text-sm font-semibold"
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
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-slate-700 text-sm font-semibold"
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
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitState === "loading"}
              className="btn-primary w-full mt-2"
            >
              {submitState === "loading" ? t("sending") : t("send")}
            </button>

            {submitMessage && (
              <div
                role="alert"
                className={`mt-3 rounded-lg border px-4 py-3 flex items-start gap-3 text-sm ${
                  submitState === "success"
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {submitState === "success" ? (
                  <IconCheck className="w-5 h-5 shrink-0 mt-0.5 text-green-600" aria-hidden />
                ) : (
                  <IconExclamationCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" aria-hidden />
                )}
                <p className="pt-0.5 font-medium">{submitMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
