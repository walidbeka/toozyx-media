"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { socialLinks } from "@/lib/social";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  MailIcon,
} from "./Icons";

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
  x: XIcon,
};

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const { lang, dir } = useLanguage();
  const t = getTranslation(lang);

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-base">M</span>
              </div>
              <span className="font-semibold text-base text-gray-900">
                {t.siteName}
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Premium video production company based in Cairo. We craft compelling visual stories that make an impact.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:media@toozyx.com"
                  className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MailIcon className="w-3.5 h-3.5 shrink-0" />
                  media@toozyx.com
                </a>
              </li>
              <li className="text-sm text-gray-500">Cairo, Egypt</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Parent Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://toozyx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Toozyx
                </a>
              </li>
              <li>
                <a
                  href="https://toozyx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  Visit Toozyx →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">
              {t.footer.followUs}
            </h3>
            <div className="flex flex-wrap gap-3" style={{ direction: dir === "rtl" ? "rtl" : "ltr" }}>
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">{t.footer.copyright}</p>
          <p className="text-xs text-gray-400">
            {t.footer.builtBy}{" "}
            <a
              href="https://toozyx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Toozyx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
