"use client";

import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("Education");

  return (
    <section id="education" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{t("title")}</h2>
        <div className="glass-card p-10 rounded-[8px] border-l-4 border-[#3abff8]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold">{t("university")}</h3>
              <p className="text-[#3abff8] font-mono">{t("degree")}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="px-3 py-1 bg-[#3abff8]/10 text-[#3abff8] rounded-full text-sm font-bold">
                {t("badge")}
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-slate-400">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3abff8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                </svg>
                {t("gpa")}
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3abff8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fillRule="evenodd" />
                </svg>
                {t("scholarship")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
