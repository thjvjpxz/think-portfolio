"use client";

import type { PortfolioData } from "@/data/types";

interface AboutProps {
  data: PortfolioData["about"];
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed text-base">
            {data.paragraphs.map((paragraph, index) => (
              <p key={`about-p-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass-card p-6 rounded-xl text-center hover:border-accent/50 transition-colors"
              >
                <div className="text-accent text-3xl font-bold mb-1">
                  {value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
