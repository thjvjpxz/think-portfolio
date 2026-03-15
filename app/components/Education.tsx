"use client";

import type { PortfolioData } from "@/data/types";
import { IconCheckCircle, IconGraduationCap, IconStar } from "./icons";

interface EducationProps {
  data: PortfolioData["education"];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 w-full mb-12">
          <div className="section-line" style={{ background: "linear-gradient(to left, rgba(255,255,255,0.08), transparent)" }} />
          <h2 className="text-3xl font-bold text-slate-100 text-center whitespace-nowrap">
            {data.title}
          </h2>
          <div className="section-line" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl text-center hover:border-accent/30 transition-all">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
              <IconGraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              {data.university}
            </h3>
            <p className="text-slate-400 font-mono mb-6">
              {data.degree} &bull; {data.period}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/8 flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-slate-300 text-sm font-medium">
                  {data.badge}
                </span>
              </div>
              {data.achievements.map((achievement, index) => (
                <div
                  key={`edu-ach-${index}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/8 flex items-center gap-2"
                >
                  <IconStar className="w-4 h-4 text-accent" />
                  <span className="text-slate-300 text-sm font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
