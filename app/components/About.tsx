"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { value: "2+", label: t("stats.experience") },
    { value: "10+", label: t("stats.projects") },
    { value: "3.27", label: t("stats.gpa") },
    { value: "Distinction", label: t("stats.degree") },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-[#3abff8] pl-4">
              {t("title")}
            </h2>
            <div className="text-slate-400 space-y-4 leading-relaxed text-lg">
              <p>
                {t.rich("p1", {
                  strong: (chunks) => (
                    <span className="text-white font-medium">{chunks}</span>
                  ),
                })}
              </p>
              <p>
                {t.rich("p2", {
                  brand: (chunks) => (
                    <span className="text-[#3abff8]">{chunks}</span>
                  ),
                })}
              </p>
              <p>{t("p3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass-card p-6 rounded-[8px] text-center"
              >
                <div className="text-[#3abff8] text-3xl font-bold mb-1">
                  {value}
                </div>
                <div className="text-slate-500 text-sm font-mono">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
