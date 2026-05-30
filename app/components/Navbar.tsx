"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { IconMenu } from "./icons";

const SECTION_IDS = [
  "hero",
  "capabilities",
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
    { href: "#capabilities", label: t("capabilities") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("professionalWork") },
    { href: "#skills", label: t("skills") },
  ];
  const cvUrl = `/api/cv?locale=${currentLocale}`;

  const isSectionActive = (href: string) =>
    activeSection === href.replace("#", "");

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? "border-border bg-surface/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      aria-label={t("navigationAria")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between h-16 items-center">
          <a
            href="#hero"
            className="font-heading text-primary font-bold text-xl min-h-11 inline-flex items-center tracking-tight"
          >
            Nguyen Kim Thi
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
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className={`text-sm font-medium transition-colors min-h-11 inline-flex items-center ${
                  isSectionActive("#contact")
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {t("contact")}
              </a>
            </div>
            
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-4 inline-flex items-center justify-center rounded-md bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm"
            >
              {t("downloadCV")}
            </a>
            
            <button
              onClick={switchLocale}
              className="h-9 px-3 border border-border text-secondary rounded-md hover:border-primary hover:text-primary transition-colors font-mono text-xs uppercase cursor-pointer"
              aria-label={t("switchLocale", { locale: otherLocale })}
            >
              {otherLocale}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={switchLocale}
              className="min-h-10 min-w-10 px-2 border border-border text-secondary rounded-md hover:border-primary hover:text-primary transition-colors font-mono text-xs uppercase cursor-pointer flex items-center justify-center"
              aria-label={t("switchLocale", { locale: otherLocale })}
            >
              {otherLocale}
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="min-h-10 min-w-10 inline-flex items-center justify-center rounded-md border border-border text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
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
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("closeMenu")}
            />
            <div
              id="mobile-navigation"
              className="relative mx-4 mt-3 rounded-xl border border-border bg-surface p-3 shadow-xl"
            >
              <div className="flex flex-col gap-1 text-sm font-medium">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isSectionActive(href) ? "page" : undefined}
                    className={`min-h-11 px-3 rounded-md flex items-center transition-colors ${
                      isSectionActive(href)
                        ? "text-primary bg-primary-light/50"
                        : "text-secondary hover:text-primary hover:bg-surface-hover"
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-11 px-3 rounded-md flex items-center transition-colors ${
                    isSectionActive("#contact")
                      ? "text-primary bg-primary-light/50"
                      : "text-secondary hover:text-primary hover:bg-surface-hover"
                  }`}
                >
                  {t("contact")}
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 min-h-11 px-3 rounded-md inline-flex items-center justify-center bg-primary text-white font-medium hover:bg-primary-hover transition-colors shadow-sm"
                >
                  {t("downloadCV")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
