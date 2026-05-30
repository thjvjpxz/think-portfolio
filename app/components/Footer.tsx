"use client";

import { useTranslations } from "next-intl";
import { IconArrowUp } from "./icons";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t border-border bg-surface py-8 px-4 sm:px-6 lg:px-20 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-medium">{t("copyright")}</p>
        <div className="flex items-center gap-6">
          <a
            className="text-slate-500 hover:text-primary transition-colors text-sm font-medium"
            href="#capabilities"
          >
            {t("capabilities") || "Capabilities"}
          </a>
          <a
            className="text-slate-500 hover:text-primary transition-colors text-sm font-medium"
            href="#projects"
          >
            {t("projects") || "Projects"}
          </a>
          <a
            className="text-slate-500 hover:text-primary transition-colors text-sm font-medium"
            href="#contact"
          >
            {t("contact") || "Contact"}
          </a>
        </div>
        <a
          href="#hero"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors bg-background"
          aria-label={t("backToTop")}
        >
          <IconArrowUp />
        </a>
      </div>
    </footer>
  );
}
