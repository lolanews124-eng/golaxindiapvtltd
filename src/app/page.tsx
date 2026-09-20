import type { Metadata } from "next";
import Index from "@/views/Index";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import ProfessionalServiceSchema from "@/components/seo/ProfessionalServiceSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Offshore Software Development Company",
  description:
    "Hire senior engineers from India at $25-45/hr. Web, SaaS and mobile development for US, UK and global teams. NDA, IP assignment and USD billing.",
  keywords:
    "offshore software development company, hire dedicated developers from India, outsource software development to India, SaaS development company India, hire React developers",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <ProfessionalServiceSchema />
      <FAQPageSchema faqs={homeFaqs} />
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <Index />
    </>
  );
}
