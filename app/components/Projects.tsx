"use client";

import React from "react";
import type { PortfolioData, ProjectItem } from "@/data/types";
import { useTranslations } from "next-intl";

const ICON_MAP: Record<ProjectItem["icon"], React.ReactNode> = {
  book: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 14l1 2.4L22.4 17 20 18l-1 2.4L18 18l-2.4-1 2.4-.6L19 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  video: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14m-8 4h6a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  "graduation-cap": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 4L3 8l9 4 9-4-9-4zM6.5 10.3V14c0 1.8 2.4 3.2 5.5 3.2s5.5-1.4 5.5-3.2v-3.7M20.5 8.7V13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  wallet: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 7a2 2 0 012-2h13a1 1 0 010 2H5v10h14a2 2 0 002-2v-4h-5a2 2 0 01-2-2 2 2 0 012-2h5V9a2 2 0 00-2-2H3zm13 4h6v4h-6a2 2 0 010-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
};

const BORDER_HOVER_COLORS: Record<string, string> = {
  "text-[#3abff8]": "hover:border-cyan-500/50",
  "text-lime-400": "hover:border-lime-500/50",
  "text-emerald-400": "hover:border-emerald-500/50",
  "text-red-400": "hover:border-red-500/50",
  "text-sky-400": "hover:border-sky-500/50",
  "text-purple-400": "hover:border-purple-500/50",
};

interface ProjectsProps {
  data: PortfolioData["projects"];
}

export default function Projects({ data }: ProjectsProps) {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100">{data.title}</h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((project) => {
            const borderHover =
              BORDER_HOVER_COLORS[project.accentTextClass] ??
              "hover:border-accent/50";

            return (
              <div
                key={project.id}
                className={`flex flex-col gap-4 p-6 rounded-xl glass-card ${borderHover} transition-all group hover:-translate-y-1 duration-300`}
              >
                <div className="flex justify-between items-start">
                  <div
                    className={`w-12 h-12 rounded-lg ${project.accentBgClass} flex items-center justify-center ${project.accentTextClass} group-hover:scale-110 transition-transform`}
                  >
                    {ICON_MAP[project.icon]}
                  </div>
                  {project.links?.[0] && (
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-100 transition-colors p-1"
                      aria-label={project.links[0].ariaLabel}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  {project.metaLabel && (
                    <p
                      className={`${project.accentTextClass} text-xs font-mono mb-3`}
                    >
                      {project.metaLabel}
                    </p>
                  )}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-white/5 border border-white/8 text-slate-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
