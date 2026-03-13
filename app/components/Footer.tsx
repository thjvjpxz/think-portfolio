"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-12 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">{t("copyright")}</div>
        <div>
          <span className="font-mono text-xs text-[#3abff8]">{t("env")}</span>
        </div>
      </div>
    </footer>
  );
}
