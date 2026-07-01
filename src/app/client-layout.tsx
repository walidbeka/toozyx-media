"use client";

import { type ReactNode, useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

function HtmlLangUpdater({ children }: { children: ReactNode }) {
  const { lang, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return <>{children}</>;
}

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLangUpdater>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </HtmlLangUpdater>
    </LanguageProvider>
  );
}
