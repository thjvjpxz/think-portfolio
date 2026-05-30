"use client";

import type { PortfolioData } from "@/data/types";
import { useTranslations } from "next-intl";

interface ExperienceProps {
  data: PortfolioData["experience"];
}

export default function Experience({ data }: ExperienceProps) {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="flex flex-col gap-8">
          {data.items.map(({ id, role, company, period, responsibilities, stack, active }) => (
            <div key={id} className="dossier-card p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-xl font-bold text-slate-900">{role}</h3>
                <h4 className="text-lg font-semibold text-primary">{company}</h4>
                <p className="text-slate-500 text-sm mt-1">{period}</p>
                {active && (
                  <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md">
                    {t("current")}
                  </span>
                )}
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-3 mb-6">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="text-primary mt-1 text-xs">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded bg-surface border border-border text-slate-600 text-xs font-mono">
                      {tech}
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
