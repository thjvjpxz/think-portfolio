"use client";

import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{t("title")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Smart Manga Platform */}
          <div className="group relative overflow-hidden rounded-[8px] border border-white/8 glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-[#3abff8]/10 rounded-lg text-[#3abff8]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex gap-4">
                <a className="text-slate-400 hover:text-[#3abff8] transition-colors" href="#">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{t("manga.title")}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">{t("manga.description")}</p>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <span className="text-[#3abff8]">#Spring Boot</span>
              <span className="text-[#3abff8]">#Next.js</span>
              <span className="text-[#3abff8]">#OCR</span>
              <span className="text-[#3abff8]">#TTS</span>
            </div>
          </div>

          {/* Texture-Based Image Retrieval */}
          <div className="group relative overflow-hidden rounded-[8px] border border-white/8 glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-slate-400 text-sm">{t("teamLead")}</div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{t("imageRetrieval.title")}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">{t("imageRetrieval.description")}</p>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <span className="text-purple-400">#C-Sharp</span>
              <span className="text-purple-400">#Algorithms</span>
              <span className="text-purple-400">#Gabor Filters</span>
              <span className="text-purple-400">#Computer Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
