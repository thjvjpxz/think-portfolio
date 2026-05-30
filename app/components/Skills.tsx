"use client";

import type { PortfolioData } from "@/data/types";

interface SkillsProps {
  data: PortfolioData["skills"];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.categories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary font-heading border-b border-border pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-slate-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
