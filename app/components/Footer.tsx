"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-12 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-3">
          <p className="font-mono text-accent font-bold">&lt;THINK /&gt;</p>
          <div className="text-slate-500 text-sm">{t("copyright")}</div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {t("quickLinks")}
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a
              className="text-slate-400 hover:text-accent transition-colors min-h-11 inline-flex items-center"
              href="#about"
            >
              {t("about")}
            </a>
            <a
              className="text-slate-400 hover:text-accent transition-colors min-h-11 inline-flex items-center"
              href="#projects"
            >
              {t("projects")}
            </a>
            <a
              className="text-slate-400 hover:text-accent transition-colors min-h-11 inline-flex items-center"
              href="#contact"
            >
              {t("contact")}
            </a>
          </div>
        </div>

        <div className="md:text-right space-y-3">
          <div className="flex md:justify-end gap-3">
            <a
              href="https://github.com/thjvjpxz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 inline-flex items-center text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:thi12a3qv2@gmail.com"
              className="btn-secondary px-4 py-2 inline-flex items-center text-sm"
            >
              Email
            </a>
          </div>
          <a
            href="#hero"
            className="text-sm text-slate-400 hover:text-accent transition-colors min-h-11 inline-flex items-center"
          >
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
