"use client";

import { WhatsAppIcon } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/201061763978"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
