import type { Metadata } from "next";
import { ContactPageClient } from "./client";
import { OrganizationSchema, WebsiteSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Toozyx Media. Start your video production project in Cairo. Email: media@toozyx.com, WhatsApp: +20 10 61763978.",
  alternates: {
    canonical: "https://media.toozyx.com/contact",
  },
  openGraph: {
    title: "Contact — Toozyx Media",
    description:
      "Get in touch with Toozyx Media. Start your video production project in Cairo.",
    url: "https://media.toozyx.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ]} />

      <ContactPageClient />
    </>
  );
}
