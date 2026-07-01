"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";

interface ContactFormProps {
  successMessage?: string;
  showSelectService?: boolean;
}

export function ContactForm({
  successMessage: customSuccessMessage,
  showSelectService = true,
}: ContactFormProps) {
  const { lang } = useLanguage();
  const t = getTranslation(lang);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 rounded-[1rem] bg-[#F7F8FC]">
        <div className="w-14 h-14 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-base font-medium text-gray-900">
          {customSuccessMessage || t.contact.form.successMessage}
        </p>
      </div>
    );
  }

  const services = [
    t.servicesList.commercial,
    t.servicesList.documentary,
    t.servicesList.motion,
    t.servicesList.ai,
    t.servicesList.post,
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.contact.form.name}
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 rounded-[0.625rem] border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder={t.contact.form.name}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.contact.form.email}
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-[0.625rem] border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          placeholder="you@example.com"
        />
      </div>

      {showSelectService && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.contact.form.service}
          </label>
          <select
            id="service"
            required
            className="w-full px-4 py-3 rounded-[0.625rem] border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          >
            <option value="">{t.contact.form.selectService}</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-[0.625rem] border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          placeholder={t.contact.form.message}
        />
      </div>

      <button type="submit" className="btn-primary w-full text-sm py-3">
        {t.contact.form.send}
      </button>
    </form>
  );
}
