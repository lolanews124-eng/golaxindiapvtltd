import Portfolio from "@/views/Portfolio";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { portfolioFaqs } from "@/data/siteFaqs";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Offshore Development Portfolio",
  description:
    "Case studies of web, SaaS and mobile projects delivered by Golax India for US, UK and international clients, with results and tech stacks.",
  keywords:
    "offshore development portfolio, SaaS development company India, custom software development India, Flutter app examples",
  canonicalUrl: "/portfolio",
});

const portfolioItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/portfolio#itemlist`,
  name: "Golax India portfolio projects",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "US SaaS analytics MVP (example)",
      url: `${BASE_URL}/portfolio`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Telemedicine patient app (example)",
      url: `${BASE_URL}/portfolio`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UK e-commerce rebuild (example)",
      url: `${BASE_URL}/portfolio`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={portfolioFaqs} />
      <JsonLd data={portfolioItemList} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <Portfolio />
    </>
  );
}
