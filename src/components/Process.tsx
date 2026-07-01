"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";

export function Process() {
  const { lang, dir } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-lg text-gray-500">{t.process.subtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 hidden sm:block" />

          <div className="space-y-8 lg:space-y-12">
            {t.process.steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const alignClass = dir === "rtl"
                ? (isLeft ? "lg:pr-[calc(50%+2rem)] lg:pl-0" : "lg:pl-[calc(50%+2rem)] lg:pr-0")
                : (isLeft ? "lg:pr-[calc(50%+2rem)] lg:pl-0" : "lg:pl-[calc(50%+2rem)] lg:pr-0");

              return (
                <div key={index} className={`relative ${alignClass} pl-14 lg:pl-0`}>
                  <div
                    className={`absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-primary to-secondary shadow-md ${
                      dir === "rtl" ? "lg:right-1/2 lg:translate-x-1/2 lg:left-auto" : ""
                    }`}
                    style={{ zIndex: 1 }}
                  >
                    {index + 1}
                  </div>

                  <div className="glass-card rounded-[1rem] p-5 lg:p-6 card-hover">
                    <h3 className="font-semibold text-gray-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
