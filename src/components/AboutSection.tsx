"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";

export function AboutSection() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section className="section-padding bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            {t.about.body}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(t.servicesList).map(([key, value]) => (
              <span
                key={key}
                className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm text-gray-700 font-medium shadow-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
