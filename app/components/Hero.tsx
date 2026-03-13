"use client";

import { useTranslations } from "next-intl";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

export default function Hero() {
  const t = useTranslations("Hero");
  const words = t.raw("words") as string[];
  const displayText = useTypingAnimation(words);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#3abff8]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="space-y-8 z-10">
          <div>
            <h2 className="text-[#3abff8] font-mono mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#3abff8]" />
              {t("greeting")}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("headline")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3abff8] to-blue-400">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-[1em] bg-[#3abff8] ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#3abff8] text-[#0a0a0f] font-semibold rounded-[8px] hover:shadow-[0_0_20px_rgba(58,191,248,0.4)] transition-all"
            >
              {t("viewProjects")}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-card rounded-[8px] font-semibold hover:bg-white/5 transition-all"
            >
              {t("contactMe")}
            </a>
          </div>
        </div>

        {/* Right: Terminal graphic */}
        <div className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3abff8]/50 to-purple-500/50 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative glass-card rounded-lg overflow-hidden">
            <div className="terminal-header p-3 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-slate-500 font-mono ml-4">
                thjvjpxz — -zsh — 80x24
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-3">
                <span className="text-[#3abff8]">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="text-slate-500">git status</span>
              </div>
              <div className="mt-2 text-slate-400">{t("terminalBranch")}</div>
              <div className="mt-1 text-slate-400">{t("terminalUpToDate")}</div>
              <div className="mt-4 flex gap-3">
                <span className="text-[#3abff8]">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="text-slate-500">whoami</span>
              </div>
              <div className="mt-2 text-slate-300">
                {`{`}
                <br />
                &nbsp;&nbsp;&quot;name&quot;: &quot;Nguyễn Kim Thi&quot;,
                <br />
                &nbsp;&nbsp;&quot;role&quot;: &quot;Backend Engineer&quot;,
                <br />
                &nbsp;&nbsp;&quot;location&quot;: &quot;Vietnam&quot;,
                <br />
                &nbsp;&nbsp;&quot;skills&quot;: [&quot;Java&quot;,
                &quot;Spring Boot&quot;, &quot;Laravel&quot;,
                &quot;Docker&quot;]
                <br />
                {`}`}
              </div>
              <div className="mt-4 flex gap-3">
                <span className="text-[#3abff8]">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="animate-pulse inline-block w-2 h-4 bg-[#3abff8] align-middle ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
