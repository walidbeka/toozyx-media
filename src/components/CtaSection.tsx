"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";

export function CtaSection() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section className="section-padding bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.ctaSection.title}
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {t.ctaSection.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold rounded-[0.625rem] hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.ctaSection.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
