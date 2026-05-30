"use client";

import type { PortfolioData } from "@/data/types";

interface CapabilityBriefProps {
  data: PortfolioData["capabilities"];
}

export default function CapabilityBrief({ data }: CapabilityBriefProps) {
  return (
    <section id="capabilities" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.blocks.map((block, index) => (
            <div 
              key={`cap-${index}`}
              className="dossier-card p-6 sm:p-8 flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold text-primary font-heading">
                {block.title}
              </h3>
              <ul className="space-y-3 flex-1 mt-2">
                {block.evidencePoints.map((point, idx) => (
                  <li key={`point-${idx}`} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="text-primary mt-0.5 text-xs opacity-70">▹</span>
                    <span>{point}</span>
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
