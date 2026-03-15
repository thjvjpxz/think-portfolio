"use client";

import React from "react";
import type { PortfolioData, ProjectItem } from "@/data/types";
import { useTranslations } from "next-intl";
import {
  IconBook,
  IconGraduationCap,
  IconGithub,
  IconSearch,
  IconSparkles,
  IconVideo,
  IconWallet,
} from "./icons";

const ICON_MAP: Record<ProjectItem["icon"], React.ReactNode> = {
  book: <IconBook />,
  sparkles: <IconSparkles />,
  video: <IconVideo />,
  "graduation-cap": <IconGraduationCap />,
  wallet: <IconWallet />,
  search: <IconSearch />,
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
                      <IconGithub className="w-5 h-5" />
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
