import About from "@/views/About";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { aboutFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Our Offshore Engineering Team",
  description:
    "Meet Golax India — an offshore software partner for USA, UK, UAE, Canada and Australia. Senior engineers, USD billing, NDA/IP assignment. Learn how we work.",
  keywords:
    "offshore software development company, hire dedicated developers from India, outsource software development to India, Golax India about",
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
