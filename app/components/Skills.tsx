"use client";

import React from "react";
import type { PortfolioData } from "@/data/types";
import { IconCode, IconCog, IconCube } from "./icons";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <IconCode className="w-5 h-5 text-accent" />,
  frameworks: <IconCube className="w-5 h-5 text-accent" />,
  tools: <IconCog className="w-5 h-5 text-accent" />,
};

interface SkillsProps {
  data: PortfolioData["skills"];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.categories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                {CATEGORY_ICONS[category.id] ?? CATEGORY_ICONS.tools}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full glass-card text-slate-300 text-sm font-mono hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
