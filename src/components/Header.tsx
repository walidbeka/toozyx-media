"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { MenuIcon, CloseIcon } from "./Icons";

const navItems = ["home", "services", "portfolio", "blog", "contact"] as const;
type NavItem = (typeof navItems)[number];

const navHref: Record<NavItem, string> = {
  home: "#hero",
  services: "#services",
  portfolio: "#portfolio",
  blog: "/blog",
  contact: "#contact",
};

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const t = getTranslation(lang);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-base">M</span>
            </div>
            <span className="font-semibold text-base text-gray-900">
              {t.siteName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={navHref[item]}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t.nav[item as NavItem]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors uppercase tracking-wider"
              aria-label="Toggle language"
            >
              {lang === "en" ? "ع" : "EN"}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              {t.cta}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={navHref[item]}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t.nav[item as NavItem]}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 btn-primary text-sm px-5 py-2.5 text-center"
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
