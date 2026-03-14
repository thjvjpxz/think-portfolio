"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

const SECTION_IDS = ["hero", "about", "experience", "projects", "skills", "contact"];

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
        if (!section) {
          return false;
        }

        const top = section.offsetTop - 120;
        return window.scrollY >= top;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
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

  const isSectionActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-white/8 bg-[#0a0a0f]/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      aria-label={t("navigationAria")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a
            href="#hero"
            className="font-mono text-accent font-bold text-xl min-h-11 inline-flex items-center"
          >
            &lt;THINK /&gt;
          </a>

          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center text-sm font-medium text-slate-400">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={isSectionActive(href) ? "page" : undefined}
                className={`min-h-11 px-2 inline-flex items-center rounded-[8px] transition-colors ${
                  isSectionActive(href)
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="min-h-11 px-4 py-2 inline-flex items-center accent-soft border text-accent rounded-[8px] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-contrast)] transition-all"
            >
              {t("hireMe")}
            </a>
            <button
              onClick={switchLocale}
              className="min-h-11 px-3 py-1.5 border border-white/15 text-slate-400 rounded-[8px] hover:border-[color:var(--color-accent-border)] hover:text-accent transition-all font-mono text-xs uppercase tracking-widest cursor-pointer"
              aria-label={`Switch to ${otherLocale}`}
            >
              {otherLocale}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={switchLocale}
              className="min-h-11 min-w-11 px-3 border border-white/15 text-slate-400 rounded-[8px] hover:border-[color:var(--color-accent-border)] hover:text-accent transition-all font-mono text-xs uppercase tracking-widest cursor-pointer"
              aria-label={`Switch to ${otherLocale}`}
            >
              {otherLocale}
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-[8px] border border-white/15 text-slate-300 hover:border-[color:var(--color-accent-border)] hover:text-accent transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div
            className="md:hidden fixed inset-0 top-16 z-40"
            aria-hidden={!mobileMenuOpen}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#09090b]/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("closeMenu")}
            />
            <div
              id="mobile-navigation"
              className="relative mx-4 mt-3 rounded-[10px] border border-white/10 bg-[#0a0a0f]/95 p-3 shadow-xl"
            >
              <div className="flex flex-col gap-1 text-sm font-medium">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isSectionActive(href) ? "page" : undefined}
                    className={`min-h-11 px-3 rounded-[8px] flex items-center transition-colors ${
                      isSectionActive(href)
                        ? "text-accent accent-soft"
                        : "text-slate-300 hover:text-accent hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 min-h-11 px-3 rounded-[8px] inline-flex items-center justify-center accent-soft border text-accent hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-contrast)] transition-all"
                >
                  {t("hireMe")}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
