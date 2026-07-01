"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { OrganizationSchema, WebsiteSchema } from "@/components/JsonLd";

export default function NotFoundPage() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />

      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FC] px-4">
        <div className="text-center max-w-md">
          <div className="text-7xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t.notFound.title}
          </h1>
          <p className="text-gray-500 mb-6">{t.notFound.subtitle}</p>
          <Link href="/" className="btn-primary text-sm px-6 py-2.5">
            {t.notFound.button}
          </Link>
        </div>
      </div>
    </>
  );
}
