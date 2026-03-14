"use client";

import type { PortfolioData } from "@/data/types";

interface ExperienceProps {
  data: PortfolioData["experience"];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="space-y-8">
          {data.items.map(({ id, role, company, period, description, tags, active }) => (
            <div
              key={id}
              className="relative pl-8 sm:pl-10 border-l border-white/8 group"
            >
              <div
                className={`absolute w-4 h-4 rounded-full -left-2 top-5 transition-all duration-300 ${
                  active
                    ? "bg-[color:var(--color-accent)] group-hover:scale-125 shadow-[0_0_10px_rgba(58,191,248,0.8)]"
                    : "bg-slate-700 group-hover:bg-[color:var(--color-accent)]"
                }`}
              />
              <div className="glass-card p-6 sm:p-8 rounded-[8px]">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    {period}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{role}</h3>
                  <span className="text-accent font-mono text-sm">{company}</span>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-800/80 text-xs text-slate-300 rounded-full border border-white/8"
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
