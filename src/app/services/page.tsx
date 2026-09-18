import Services from "@/views/Services";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { servicesFaqs } from "@/data/siteFaqs";
import { services } from "@/data/serviceLocations";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Offshore IT Services for USA & Global Clients",
  description:
    "Web, SaaS, mobile apps, SEO and cloud consulting for US startups and international brands. Hire senior engineers from India — Golax India.",
  keywords:
    "offshore IT services, hire developers from India, outsource software development, web development for USA, SaaS development India, mobile app outsourcing",
  canonicalUrl: "/services",
});

export default function Page() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/services#itemlist`,
    name: "Golax India offshore IT services",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${BASE_URL}/services/${s.slug}`,
      description: s.description,
    })),
  };

  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={servicesFaqs} />
      <JsonLd data={itemList} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Services />
    </>
  );
}
