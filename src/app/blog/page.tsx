import type { Metadata } from "next";
import { BlogListClient } from "./client";
import { OrganizationSchema, WebsiteSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, stories, and updates from Toozyx Media. Explore articles about video production, filmmaking, motion graphics, and creative technology.",
  alternates: {
    canonical: "https://media.toozyx.com/blog",
  },
  openGraph: {
    title: "Blog — Toozyx Media",
    description:
      "Insights, stories, and updates from Toozyx Media. Explore articles about video production, filmmaking, motion graphics, and creative technology.",
    url: "https://media.toozyx.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
      ]} />

      <BlogListClient />
    </>
  );
}
