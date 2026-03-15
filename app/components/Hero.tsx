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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-accent">
                {t("availableForWork")}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-100">
              {t("greeting")}
            </h1>
            <h2 className="text-xl font-mono text-slate-400 border-l-2 border-accent pl-4 py-1">
              &gt; {t("headline")} [{displayText}
              <span className="inline-block w-0.5 h-[1em] bg-accent ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
              ]
            </h2>
            <p className="text-slate-400 max-w-md leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="h-12 px-8 inline-flex items-center justify-center rounded-lg bg-accent text-[#0a0a0f] text-base font-bold shadow-[0_0_15px_rgba(58,191,248,0.3)] hover:shadow-[0_0_25px_rgba(58,191,248,0.5)] transition-all"
            >
              {t("viewProjects")}
            </a>
            <a
              href="#contact"
              className="h-12 px-8 inline-flex items-center justify-center rounded-lg border border-white/8 text-slate-100 text-base font-bold hover:border-accent/50 hover:bg-white/5 transition-all"
            >
              {t("contactMe")}
            </a>
          </div>

          {/* Mobile terminal */}
          <div className="lg:hidden relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-purple-500/40 rounded-xl blur opacity-20 group-hover:opacity-45 transition duration-700" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-accent/10 border border-white/8">
              <div className="terminal-header px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-slate-400 font-mono ml-2 flex-1 text-center">
                  {t("terminalTitle")}
                </span>
              </div>
              <div className="terminal-body p-4 font-mono text-xs leading-relaxed space-y-2">
                <div className="text-accent">$ git status</div>
                <div className="text-slate-300">
                  {t("terminalBranch")}
                  <br />
                  {t("terminalUpToDate")}
                </div>
                <div className="text-accent mt-2">$ cat profile.json</div>
                <div className="text-green-400">
                  {"{"}<br />
                  &nbsp;&nbsp;<span className="text-blue-400">&quot;name&quot;</span>: <span className="text-yellow-300">&quot;{t("terminalName")}&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">&quot;role&quot;</span>: <span className="text-yellow-300">&quot;{t("terminalRole")}&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">&quot;location&quot;</span>: <span className="text-yellow-300">&quot;{t("terminalLocation")}&quot;</span><br />
                  {"}"}
                </div>
                <div className="flex items-center text-accent">
                  <span>$</span>
                  <span className="ml-2 w-2 h-4 bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl px-4 py-3"
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

        {/* Desktop terminal */}
        <div className="relative group hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-purple-500/50 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-accent/10 border border-white/8">
            <div className="terminal-header px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-400 font-mono ml-2 flex-1 text-center">
                {t("terminalTitle")}
              </span>
            </div>
            <div className="terminal-body p-6 font-mono text-sm leading-relaxed">
              <div className="text-accent mb-2">$ git status</div>
              <div className="text-slate-300 mb-4">
                {t("terminalBranch")}
                <br />
                {t("terminalUpToDate")}
              </div>
              <div className="text-accent mb-2">$ cat profile.json</div>
              <div className="text-green-400 mb-4">
                {"{"}<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;role&quot;</span>: <span className="text-yellow-300">&quot;{t("terminalRole")}&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;focus&quot;</span>: <span className="text-yellow-300">&quot;{t("terminalFocus")}&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;languages&quot;</span>: [<span className="text-yellow-300">&quot;{t("terminalSkill1")}&quot;</span>, <span className="text-yellow-300">&quot;{t("terminalSkill3")}&quot;</span>, <span className="text-yellow-300">&quot;{t("terminalSkill4")}&quot;</span>],<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;frameworks&quot;</span>: [<span className="text-yellow-300">&quot;{t("terminalSkill2")}&quot;</span>, <span className="text-yellow-300">&quot;{t("terminalSkill3")}&quot;</span>]<br />
                {"}"}
              </div>
              <div className="flex items-center text-accent">
                <span>$</span>
                <span className="ml-2 w-2 h-4 bg-accent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
