import type { Metadata } from "next";
import Index from "@/views/Index";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import { homeFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Offshore Software Development Company for USA & Global Businesses",
  description:
    "Outsource web, SaaS & mobile app development to Golax India. Senior engineers for US startups & enterprises — $25–$45/hr USD, 4–5 hrs timezone overlap, NDA & IP assignment ready.",
  keywords:
    "offshore software development company USA, hire developers from India, outsource web development to India, dedicated development team India, offshore React Next.js developers, SaaS MVP development for US startups, hire Flutter developers India",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQPageSchema faqs={homeFaqs} />
      <Index />
    </>
  );
}
