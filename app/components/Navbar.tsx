"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { IconMenu } from "./icons";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const currentSection = SECTION_IDS.findLast((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        return window.scrollY >= section.offsetTop - 120;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const currentLocale =
    routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ??
    routing.defaultLocale;
  const otherLocale = currentLocale === "vi" ? "en" : "vi";

  const switchLocale = () => {
    setMobileMenuOpen(false);
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/") || `/${otherLocale}`);
  };

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
  ];

  const isSectionActive = (href: string) =>
    activeSection === href.replace("#", "");

  return (
    <nav
      className={`sticky top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-white/8 bg-[#0a0a0f]/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      aria-label={t("navigationAria")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between h-16 items-center">
          <a
            href="#hero"
            className="font-mono text-accent font-bold text-xl min-h-11 inline-flex items-center tracking-tight"
          >
            &lt;THINK /&gt;
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-current={isSectionActive(href) ? "page" : undefined}
                  className={`text-sm font-medium transition-colors min-h-11 inline-flex items-center ${
                    isSectionActive(href)
                      ? "text-accent"
                      : "text-slate-300 hover:text-accent"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className={`text-sm font-medium transition-colors min-h-11 inline-flex items-center ${
                  isSectionActive("#contact")
                    ? "text-accent"
                    : "text-slate-300 hover:text-accent"
                }`}
              >
                {t("contact")}
              </a>
            </div>
            <a
              href="#contact"
              className="h-10 px-6 inline-flex items-center justify-center rounded-lg bg-accent text-[#0a0a0f] text-sm font-bold shadow-[0_0_15px_rgba(58,191,248,0.4)] hover:shadow-[0_0_25px_rgba(58,191,248,0.6)] transition-all"
            >
              {t("hireMe")}
            </a>
            <button
              onClick={switchLocale}
              className="h-10 px-3 border border-white/8 text-slate-400 rounded-lg hover:border-accent/50 hover:text-accent transition-all font-mono text-xs uppercase tracking-widest cursor-pointer"
              aria-label={t("switchLocale", { locale: otherLocale })}
            >
              {otherLocale}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={switchLocale}
              className="min-h-11 min-w-11 px-3 border border-white/8 text-slate-400 rounded-lg hover:border-accent/50 hover:text-accent transition-all font-mono text-xs uppercase tracking-widest cursor-pointer"
              aria-label={t("switchLocale", { locale: otherLocale })}
            >
              {otherLocale}
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg border border-white/8 text-slate-300 hover:border-accent/50 hover:text-accent transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
            >
              <IconMenu open={mobileMenuOpen} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40">
            <button
              type="button"
              className="absolute inset-0 bg-[#0a0a0f]/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("closeMenu")}
            />
            <div
              id="mobile-navigation"
              className="relative mx-4 mt-3 rounded-xl border border-white/8 bg-[#0a0a0f]/95 backdrop-blur-md p-3 shadow-xl"
            >
              <div className="flex flex-col gap-1 text-sm font-medium">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isSectionActive(href) ? "page" : undefined}
                    className={`min-h-11 px-3 rounded-lg flex items-center transition-colors ${
                      isSectionActive(href)
                        ? "text-accent bg-accent/10"
                        : "text-slate-300 hover:text-accent hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 min-h-11 px-3 rounded-lg inline-flex items-center justify-center bg-accent text-[#0a0a0f] font-bold shadow-[0_0_15px_rgba(58,191,248,0.3)] transition-all"
                >
                  {t("hireMe")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
