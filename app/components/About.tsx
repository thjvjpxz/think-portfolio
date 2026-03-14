"use client";

import type { PortfolioData } from "@/data/types";

interface AboutProps {
  data: PortfolioData["about"];
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-[#3abff8] pl-4">
              {data.title}
            </h2>
            <div className="text-slate-400 space-y-4 leading-relaxed text-lg">
              {data.paragraphs.map((paragraph, index) => (
                <p key={`${data.title}-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass-card p-5 sm:p-6 rounded-[8px] text-center"
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
