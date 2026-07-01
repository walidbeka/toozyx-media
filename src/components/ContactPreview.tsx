"use client";

import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { ContactForm } from "./ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export function ContactPreview() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="contact" className="section-padding bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contactPreview.title}
          </h2>
          <p className="text-lg text-gray-500">{t.contactPreview.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-[1rem] p-6 sm:p-8 border border-gray-100 shadow-sm">
              <ContactForm showSelectService={true} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contactPreview.emailUs}
                  </p>
                  <a
                    href="mailto:media@toozyx.com"
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    media@toozyx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contactPreview.location}
                  </p>
                  <p className="text-sm text-gray-500">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contactPreview.whatsapp}
                  </p>
                  <a
                    href="https://wa.me/201061763978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    +20 10 61763978
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
