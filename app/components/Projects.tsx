"use client";

import type { PortfolioData, ProjectItem } from "@/data/types";
import { useTranslations } from "next-intl";

function renderProjectIcon(icon: ProjectItem["icon"]) {
  if (icon === "book") {
    return (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (icon === "sparkles") {
    return (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 14l1 2.4L22.4 17 20 18l-1 2.4L18 18l-2.4-1 2.4-.6L19 14zM5 14l.8 1.9L7.7 16 5.8 16.8 5 18.7l-.8-1.9L2.3 16l1.9-.1L5 14z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "video") {
    return (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14m-8 4h6a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "graduation-cap") {
    return (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4L3 8l9 4 9-4-9-4zM6.5 10.3V14c0 1.8 2.4 3.2 5.5 3.2s5.5-1.4 5.5-3.2v-3.7M20.5 8.7V13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "wallet") {
    return (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 7a2 2 0 012-2h13a1 1 0 010 2H5v10h14a2 2 0 002-2v-4h-5a2 2 0 01-2-2 2 2 0 012-2h5V9a2 2 0 00-2-2H3zm13 4h6v4h-6a2 2 0 010-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

interface ProjectsProps {
  data: PortfolioData["projects"];
}

export default function Projects({ data }: ProjectsProps) {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[8px] border border-white/8 glass-card p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="mb-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-lg ${project.accentBgClass} ${project.accentTextClass}`}
                  >
                    {renderProjectIcon(project.icon)}
                  </div>
                  <div className="text-sm text-slate-400">
                    {t("projectPreview")}
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  {project.metaLabel ? (
                    <span className="status-chip text-slate-400">
                      {project.metaLabel}
                    </span>
                  ) : null}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                  {t("techStack")}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full border border-white/8 ${project.accentTextClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex font-mono text-xs">
                {project.links && project.links[0] ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.links[0].href}
                    className="btn-secondary px-4 py-2 inline-flex items-center justify-center text-sm min-w-[180px]"
                    aria-label={project.links[0].ariaLabel}
                  >
                    {t("viewCaseStudy")}
                  </a>
                ) : (
                  <span className="btn-secondary px-4 py-2 inline-flex items-center justify-center text-sm min-w-[180px] opacity-70 cursor-default">
                    {t("noPublicLink")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
