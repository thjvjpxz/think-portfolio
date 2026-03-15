"use client";

import { useTranslations } from "next-intl";
import { IconArrowUp } from "./icons";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t border-white/8 bg-[#0a0a0f]/80 backdrop-blur-md py-6 px-4 sm:px-6 lg:px-20 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">{t("copyright")}</p>
        <div className="flex items-center gap-6">
          <a
            className="text-slate-400 hover:text-accent transition-colors text-sm"
            href="#about"
          >
            {t("about")}
          </a>
          <a
            className="text-slate-400 hover:text-accent transition-colors text-sm"
            href="#projects"
          >
            {t("projects")}
          </a>
          <a
            className="text-slate-400 hover:text-accent transition-colors text-sm"
            href="#contact"
          >
            {t("contact")}
          </a>
        </div>
        <a
          href="#hero"
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-colors"
          aria-label={t("backToTop")}
        >
          <IconArrowUp />
        </a>
      </div>
    </footer>
  );
}
