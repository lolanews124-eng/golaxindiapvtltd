import Portfolio from "@/views/Portfolio";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Offshore Web & SaaS Project Portfolio",
  description:
    "See selected web, SaaS and mobile work shipped for international buyers. Review stacks and outcomes, then talk to Golax India about your next build.",
  keywords:
    "offshore development portfolio, SaaS development company India, custom software development India, Flutter app examples",
  canonicalUrl: "/portfolio",
});

const portfolioItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/portfolio#itemlist`,
  name: "Golax India portfolio projects",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "US SaaS Analytics Dashboard",
      url: `${BASE_URL}/portfolio`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "UK Healthcare Patient App",
      url: `${BASE_URL}/portfolio`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UAE Retail ERP Platform",
      url: `${BASE_URL}/portfolio`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <OrganizationSchema />
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
