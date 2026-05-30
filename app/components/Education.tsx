"use client";

import type { PortfolioData } from "@/data/types";
import { IconGraduationCap, IconCheckCircle, IconStar } from "./icons";

interface EducationProps {
  data: PortfolioData["education"];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="dossier-card p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0">
            <IconGraduationCap className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{data.university}</h3>
            <p className="text-slate-600 font-medium mb-4">{data.degree} &bull; {data.period}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="px-3 py-1.5 rounded-md bg-green-50 border border-green-200 flex items-center gap-2 text-green-700 text-sm font-medium">
                <IconCheckCircle className="w-4 h-4" />
                {data.badge}
              </div>
              {data.achievements.map((achievement, index) => (
                <div key={index} className="px-3 py-1.5 rounded-md bg-blue-50 border border-blue-200 flex items-center gap-2 text-blue-700 text-sm font-medium">
                  <IconStar className="w-4 h-4" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
