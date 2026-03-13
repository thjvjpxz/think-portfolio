"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">{t("description")}</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-[8px] text-[#3abff8]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t("emailLabel")}</div>
                  <div className="text-white font-medium">thi12a3qv2@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card flex items-center justify-center rounded-[8px] text-[#3abff8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t("githubLabel")}</div>
                  <a
                    className="text-white font-medium hover:text-[#3abff8] transition-colors"
                    href="https://github.com/thjvjpxz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/thjvjpxz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[8px]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    {t("nameLabel")}
                  </label>
                  <input
                    className="w-full bg-[#0a0a0f] border border-white/8 rounded-[8px] focus:ring-[#3abff8] focus:border-[#3abff8] text-white p-3 outline-none transition-colors"
                    placeholder={t("namePlaceholder")}
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    {t("emailFieldLabel")}
                  </label>
                  <input
                    className="w-full bg-[#0a0a0f] border border-white/8 rounded-[8px] focus:ring-[#3abff8] focus:border-[#3abff8] text-white p-3 outline-none transition-colors"
                    placeholder={t("emailPlaceholder")}
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  {t("messageLabel")}
                </label>
                <textarea
                  className="w-full bg-[#0a0a0f] border border-white/8 rounded-[8px] focus:ring-[#3abff8] focus:border-[#3abff8] text-white p-3 outline-none transition-colors resize-none"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-[#3abff8] text-[#0a0a0f] font-bold py-3 rounded-[8px] hover:opacity-90 transition-opacity"
                type="submit"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
