"use client";

import type { PortfolioData } from "@/data/types";

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
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4L3 8l9 4 9-4-9-4zM6.5 10.3V14c0 1.8 2.4 3.2 5.5 3.2s5.5-1.4 5.5-3.2v-3.7M20.5 8.7V13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              {data.university}
            </h3>
            <p className="text-slate-400 font-mono mb-6">
              {data.degree} &bull; {data.period}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/8 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm font-medium">
                  {data.badge}
                </span>
              </div>
              {data.achievements.map((achievement, index) => (
                <div
                  key={`edu-ach-${index}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/8 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
