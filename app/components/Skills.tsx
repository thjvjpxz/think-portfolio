"use client";

import type { PortfolioData } from "@/data/types";

function SkillList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 text-slate-300 text-sm sm:text-base">
          <span className="w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}

interface SkillsProps {
  data: PortfolioData["skills"];
}

export default function Skills({ data }: SkillsProps) {

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.categories.map((category) => (
            <div key={category.id} className="glass-card p-8 rounded-[8px]">
              <h3 className="font-mono text-[#3abff8] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3abff8] rounded-full" />
                {category.title}
              </h3>
              <SkillList items={category.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
