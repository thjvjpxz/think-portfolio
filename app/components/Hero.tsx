"use client";

import { useTranslations } from "next-intl";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

export default function Hero() {
  const t = useTranslations("Hero");
  const words = t.raw("words") as string[];
  const displayText = useTypingAnimation(words);
  const highlights = t.raw("highlights") as Array<{
    label: string;
    value: string;
  }>;

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
            <h2 className="text-accent font-mono mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[color:var(--color-accent)]" />
              {t("greeting")}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("headline")} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent)] to-blue-400">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-[1em] bg-[color:var(--color-accent)] ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary px-8 py-3 font-semibold inline-flex items-center"
            >
              {t("viewProjects")}
            </a>
            <a
              href="#contact"
              className="btn-secondary px-8 py-3 font-semibold inline-flex items-center"
            >
              {t("contactMe")}
            </a>
          </div>
          <div className="lg:hidden relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3abff8]/40 to-purple-500/40 rounded-lg blur opacity-20 group-hover:opacity-45 transition duration-700" />
            <div className="relative glass-card rounded-[8px] overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="terminal-header px-4 py-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-xs text-slate-400 font-mono ml-2">
                  {t("terminalTitle")}
                </span>
              </div>
              <div className="px-4 py-4 font-mono text-xs leading-relaxed space-y-2">
                <div className="flex gap-2">
                  <span className="text-accent">➜</span>
                  <span className="text-purple-400">~/developer</span>
                  <span className="text-slate-500">whoami</span>
                </div>
                <div className="text-slate-300">
                  {`{ "name": "${t("terminalName")}" }`}
                </div>
                <div className="text-slate-300">
                  {`{ "role": "${t("terminalRole")}", "location": "${t("terminalLocation")}" }`}
                </div>
                <div className="text-slate-400">
                  {`[${t("terminalSkill1")}, ${t("terminalSkill2")}, ${t("terminalSkill3")}]`}
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-accent">➜</span>
                  <span className="text-purple-400">~/developer</span>
                  <span className="animate-pulse inline-block w-1.5 h-3 bg-[color:var(--color-accent)] align-middle ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-[8px] px-4 py-3"
              >
                <p className="text-xl font-bold text-white leading-tight">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
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
                {t("terminalTitle")}
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-3">
                <span className="text-accent">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="text-slate-500">git status</span>
              </div>
              <div className="mt-2 text-slate-400">{t("terminalBranch")}</div>
              <div className="mt-1 text-slate-400">{t("terminalUpToDate")}</div>
              <div className="mt-4 flex gap-3">
                <span className="text-accent">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="text-slate-500">whoami</span>
              </div>
              <div className="mt-2 text-slate-300">
                {`{`}
                <br />
                &nbsp;&nbsp;&quot;name&quot;: &quot;{t("terminalName")}&quot;,
                <br />
                &nbsp;&nbsp;&quot;role&quot;: &quot;{t("terminalRole")}&quot;,
                <br />
                &nbsp;&nbsp;&quot;location&quot;: &quot;{t("terminalLocation")}
                &quot;,
                <br />
                &nbsp;&nbsp;&quot;skills&quot;: [&quot;{t("terminalSkill1")}
                &quot;, &quot;{t("terminalSkill2")}&quot;, &quot;
                {t("terminalSkill3")}&quot;, &quot;{t("terminalSkill4")}&quot;]
                <br />
                {`}`}
              </div>
              <div className="mt-4 flex gap-3">
                <span className="text-accent">➜</span>
                <span className="text-purple-400">~/developer</span>
                <span className="animate-pulse inline-block w-2 h-4 bg-[color:var(--color-accent)] align-middle ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
