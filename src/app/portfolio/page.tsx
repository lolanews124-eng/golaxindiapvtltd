import Portfolio from "@/views/Portfolio";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Portfolio – Offshore Web, SaaS & App Projects for Global Clients",
  description:
    "Selected Golax India case studies — React/Next.js websites, SaaS platforms, Flutter apps and SEO campaigns for USA, UK, UAE and international buyers.",
  keywords:
    "offshore development portfolio, Golax India case studies, web development projects USA, SaaS development India portfolio, Flutter app development examples",
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
