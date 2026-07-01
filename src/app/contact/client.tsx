"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

export function ContactPageClient() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-500">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-[1rem] p-6 sm:p-8 border border-gray-100 shadow-sm">
              <ContactForm showSelectService={true} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <MailIcon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contact.form.email}
                  </p>
                  <a
                    href="mailto:media@toozyx.com"
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contact.location}
                  </p>
                  <p className="text-sm text-gray-500">{t.contact.info.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                    {t.contact.whatsapp}
                  </p>
                  <a
                    href="https://wa.me/201061763978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {t.contact.info.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
