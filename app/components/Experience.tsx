"use client";

import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  const experiences = [
    {
      role: t("kaopiz.role"),
      company: t("kaopiz.company"),
      description: t("kaopiz.description"),
      tags: ["Spring Boot", "Laravel", "AWS"],
      active: true,
    },
    {
      role: t("nganGiang.role"),
      company: t("nganGiang.company"),
      description: t("nganGiang.description"),
      tags: ["C#", "SOAP", "Point Cloud"],
      active: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{t("title")}</h2>
        <div className="space-y-12">
          {experiences.map(({ role, company, description, tags, active }) => (
            <div
              key={company}
              className="relative pl-8 border-l border-white/8 group"
            >
              <div
                className={`absolute w-4 h-4 rounded-full -left-2 top-0 transition-all duration-300 ${
                  active
                    ? "bg-[#3abff8] group-hover:scale-125 shadow-[0_0_10px_rgba(58,191,248,0.8)]"
                    : "bg-slate-700 group-hover:bg-[#3abff8]"
                }`}
              />
              <div className="glass-card p-8 rounded-[8px]">
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{role}</h3>
                  <span className="text-[#3abff8] font-mono text-sm">
                    {company}
                  </span>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
