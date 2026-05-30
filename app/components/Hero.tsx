"use client";

import { useTranslations } from "next-intl";
import type { PortfolioData } from "@/data/types";

interface HeroProps {
  data: PortfolioData["hero"];
}

export default function Hero({ data }: HeroProps) {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Brief Intro */}
        <div className="flex flex-col gap-6 lg:col-span-7 z-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 font-heading">
              {t("greeting")}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary border-l-4 border-primary pl-4 py-1">
              {data.role}
            </h2>
            <p className="text-slate-600 max-w-xl leading-relaxed text-lg">
              {data.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="btn-primary"
            >
              {t("contactMe")}
            </a>
            <a
              href={data.contactLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("downloadCV")}
            </a>
            <a
              href={data.contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("github")}
            </a>
          </div>
        </div>

        {/* Right Column: Engineering Brief Panel */}
        <div className="lg:col-span-5 relative z-10">
          <div className="dossier-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <h3 className="font-heading font-semibold text-slate-900 tracking-tight">
                {t("engineeringBrief")}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {data.facts.map((fact, idx) => (
                <li key={`fact-${idx}`} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
