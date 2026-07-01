"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { ServiceIcon } from "./Icons";

export function Services() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="services" className="section-padding bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-500">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {t.services.items.map((service, index) => {
            const keys = ["commercial", "documentary", "motion", "ai", "post"];
            return (
              <div
                key={index}
                className="group gradient-card rounded-[1rem] p-6 border border-gray-100/80 card-hover hover:border-primary/20 hover:shadow-card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ServiceIcon type={keys[index]} className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
