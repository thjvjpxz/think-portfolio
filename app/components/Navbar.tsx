"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentLocale = routing.locales.find((loc) =>
    pathname.startsWith(`/${loc}`)
  ) ?? routing.defaultLocale;

  const otherLocale = currentLocale === "vi" ? "en" : "vi";

  const switchLocale = () => {
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/8 bg-[#0a0a0f]/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#hero" className="font-mono text-[#3abff8] font-bold text-xl">
            &lt;NKT /&gt;
          </a>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-400">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-[#3abff8] transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-[#3abff8]/10 border border-[#3abff8]/20 text-[#3abff8] rounded-[8px] hover:bg-[#3abff8] hover:text-[#0a0a0f] transition-all"
            >
              {t("hireMe")}
            </a>
            <button
              onClick={switchLocale}
              className="px-3 py-1.5 border border-white/15 text-slate-400 rounded-[8px] hover:border-[#3abff8]/50 hover:text-[#3abff8] transition-all font-mono text-xs uppercase tracking-widest"
              aria-label={`Switch to ${otherLocale}`}
            >
              {otherLocale}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
