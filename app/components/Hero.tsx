"use client";

import { useTranslations } from "next-intl";
import type { PortfolioData } from "@/data/types";
import { IconCheck } from "./icons";

interface HeroProps {
  data: PortfolioData["hero"];
}

export default function Hero({ data }: HeroProps) {
  const t = useTranslations("Hero");
  const evidenceItems = data.facts.slice(1);
  const stack = ["PHP", "CakePHP", "Laravel", "SQL", "Docker"];
  const [metricValue, ...metricLabelParts] = data.facts[0].split(" ");
  const metricLabel = metricLabelParts.join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-18 pb-10 sm:pt-20 sm:pb-12 overflow-hidden bg-background"
    >
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-[-12rem] top-28 h-80 w-80 rounded-full bg-primary-light/70 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
        <div className="flex flex-col gap-5 lg:col-span-7 z-10">
          <div className="flex flex-col gap-4">
            <div className="text-sm sm:text-base font-semibold text-primary">
              {data.role}
            </div>
            <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-[3.55rem] font-bold leading-[1.05] tracking-tight text-slate-950 font-heading">
              {t("greeting")}
              <span className="block text-slate-500">{t("headline")}</span>
            </h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed text-base sm:text-lg">
              {data.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-1">
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

        <div className="lg:col-span-5 relative z-10">
          <div data-hero-board className="rounded-2xl border border-border bg-surface text-slate-900 shadow-lg overflow-hidden">
            <div className="border-b border-border px-4 py-3 sm:px-5">
              <div className="text-sm font-semibold text-primary">{t("engineeringBrief")}</div>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              <div className="rounded-xl border border-accent-border bg-accent-soft p-3.5">
                <div>
                  <div className="text-xs font-medium text-slate-500">{t("primaryMetric")}</div>
                  <div className="mt-1.5 flex items-end gap-2.5">
                    <span className="text-5xl sm:text-6xl font-bold leading-none text-primary">{metricValue}</span>
                    <span className="pb-1.5 text-sm font-semibold leading-tight text-slate-700">{metricLabel}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900">CakePHP 2.x</span>
                  <span className="h-px flex-1 bg-accent-border" />
                  <span className="text-sm font-semibold text-primary">CakePHP 5.x</span>
                </div>
              </div>

              <div className="grid gap-2.5 sm:gap-3">
                {evidenceItems.map((fact) => (
                  <div key={fact} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-2.5 sm:p-3 shadow-xs">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-700">{fact}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                {stack.map((item) => (
                  <span key={item} className="rounded-md border border-accent-border bg-accent-soft px-2.5 py-1 text-xs font-semibold text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
