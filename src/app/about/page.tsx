import About from "@/views/About";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { aboutFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Golax India – Offshore Partner for USA & Global Clients",
  description:
    "Golax India Private Limited (incorporated 2025) — offshore web, SaaS and mobile engineering for US, UK, UAE, Canada and Australia. Team shipping since 2014. USD billing, NDA/IP ready. HQ Patna, India.",
  keywords:
    "offshore IT company for USA, hire software developers from India, dedicated development team India, Golax India about, outsource product engineering to India",
  canonicalUrl: "/about",
});

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={aboutFaqs} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <About />
    </>
  );
}
