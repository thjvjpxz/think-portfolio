"use client";

import React from "react";
import type { PortfolioData, PublicProjectItem } from "@/data/types";
import { IconBook, IconGraduationCap, IconGithub, IconSearch, IconSparkles, IconVideo, IconWallet } from "./icons";

const ICON_MAP: Record<NonNullable<PublicProjectItem["icon"]>, React.ReactNode> = {
  book: <IconBook />,
  sparkles: <IconSparkles />,
  video: <IconVideo />,
  "graduation-cap": <IconGraduationCap />,
  wallet: <IconWallet />,
  search: <IconSearch />,
};

interface ProjectsProps {
  professionalData: PortfolioData["professionalProjects"];
  publicData: PortfolioData["publicProjects"];
}

export default function Projects({ professionalData, publicData }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Professional Work */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{professionalData.title}</h2>
            <div className="section-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalData.items.map((project) => (
              <div key={project.id} className="dossier-card p-6 flex flex-col gap-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                    <span className="text-slate-500 text-sm font-medium whitespace-nowrap">{project.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mt-1">{project.company} &bull; {project.role}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                <ul className="space-y-2 flex-1">
                  {project.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-primary mt-1 text-[10px]">▹</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-background rounded text-xs font-mono text-slate-600 border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Samples */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-slate-900">{publicData.title}</h2>
            <div className="section-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicData.items.map((project) => (
              <div key={project.id} className="dossier-card p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center ${project.accentBgClass || "bg-primary-light"} ${project.accentTextClass || "text-primary"}`}>
                    {project.icon && ICON_MAP[project.icon]}
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors" aria-label="GitHub">
                      <IconGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{project.title}</h3>
                <p className="text-slate-600 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-slate-500">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
