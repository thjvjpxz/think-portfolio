"use client";

import type { PortfolioData } from "@/data/types";
import { useTranslations } from "next-intl";

interface ExperienceProps {
  data: PortfolioData["experience"];
}

export default function Experience({ data }: ExperienceProps) {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/8">
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-accent to-transparent" />
          </div>

          <div className="flex flex-col gap-12">
            {data.items.map(
              ({ id, role, company, period, description, tags, active }, index) => {
                const isEven = index % 2 === 0;

                const card = (
                  <div className="glass-card p-6 rounded-xl group-hover:border-accent/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-100">
                        {role}
                      </h3>
                      <span className="md:hidden text-xs font-mono text-accent mt-1">
                        {period}
                      </span>
                    </div>
                    <h4 className="text-lg text-slate-300 mb-1 font-mono">
                      {company}
                    </h4>
                    <p className="text-slate-400 text-xs font-mono mb-4">
                      {period}
                    </p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${!isEven ? "md:justify-end" : ""}`}>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded text-xs font-mono ${
                            active
                              ? "bg-accent/10 text-accent"
                              : "bg-white/5 text-slate-300"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );

                const label = (
                  <div
                    className={`font-mono text-sm ${
                      active ? "text-accent" : "text-slate-400"
                    }`}
                  >
                    {active ? t("current") : t("previous")}
                  </div>
                );

                return (
                  <div
                    key={id}
                    className="relative flex flex-col md:flex-row items-start md:justify-between w-full group"
                  >
                    {/* Timeline node */}
                    <div
                      className={`absolute left-[-21px] md:left-1/2 md:-ml-3 top-5 w-6 h-6 rounded-full bg-[#0a0a0f] border-2 flex items-center justify-center z-10 ${
                        active
                          ? "border-accent shadow-[0_0_10px_rgba(58,191,248,0.5)]"
                          : "border-white/8 group-hover:border-accent/50"
                      } transition-colors`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          active
                            ? "bg-accent animate-pulse"
                            : "bg-white/8 group-hover:bg-accent/50"
                        } transition-colors`}
                      />
                    </div>

                    {isEven ? (
                      <>
                        {/* Even: label left, card right */}
                        <div className="hidden md:flex w-5/12 justify-end pr-12 pt-5">
                          {label}
                        </div>
                        <div className="w-full md:w-5/12 md:pl-12">
                          {card}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Odd: card left, label right */}
                        <div className="hidden md:block w-5/12 pr-12">
                          <div className={`${!isEven ? "text-right" : ""}`}>
                            {card}
                          </div>
                        </div>
                        {/* Mobile: show card normally */}
                        <div className="w-full md:hidden">
                          {card}
                        </div>
                        <div className="hidden md:flex w-5/12 pl-12 pt-5">
                          {label}
                        </div>
                      </>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
