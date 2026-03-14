"use client";

import type { PortfolioData } from "@/data/types";

interface EducationProps {
  data: PortfolioData["education"];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="glass-card p-10 rounded-[8px] border-l-4 border-[#3abff8]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold">{data.university}</h3>
              <p className="text-[#3abff8] font-mono">{data.degree}</p>
              <p className="text-slate-400 text-sm mt-1 font-mono">{data.period}</p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 md:flex-shrink-0">
              <span className="inline-flex px-3 py-1 bg-[#3abff8]/10 text-[#3abff8] rounded-full text-sm font-bold md:whitespace-nowrap">
                {data.badge}
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-slate-400">
            <ul className="space-y-4">
              {data.achievements.map((achievement, index) => (
                <li key={`${data.university}-achievement-${index}`} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#3abff8] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 100 12 6 6 0 000-12zm0 9a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
