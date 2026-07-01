"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";

export function Hero() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {t.siteTagline}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary text-base px-7 py-3">
              {t.hero.ctaPrimary}
            </a>
            <a href="#portfolio" className="btn-secondary text-base px-7 py-3">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
