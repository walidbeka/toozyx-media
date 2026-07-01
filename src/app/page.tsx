import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { AboutSection } from "@/components/AboutSection";
import { Process } from "@/components/Process";
import { CtaSection } from "@/components/CtaSection";
import { LatestArticles } from "@/components/LatestArticles";
import { ContactPreview } from "@/components/ContactPreview";
import { OrganizationSchema, WebsiteSchema, BreadcrumbSchema } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

      <Hero />
      <Services />
      <Portfolio />
      <AboutSection />
      <Process />
      <CtaSection />
      <LatestArticles />
      <ContactPreview />
    </>
  );
}
