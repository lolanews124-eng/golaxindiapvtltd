import Locations from "@/views/Locations";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { internationalLocations } from "@/data/internationalLocations";
import { locationsFaqs } from "@/data/siteFaqs";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Offshore IT Partner for International Businesses",
  description:
    "Golax India serves businesses in the US, UK, Canada, Australia, UAE, Saudi Arabia, Singapore, Germany, New Zealand and Qatar.",
  keywords:
    "outsource software development to India from USA, software development partner for UK startups, offshore development Canada UAE Australia",
  canonicalUrl: "/locations",
});

export default function Page() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/locations#itemlist`,
    name: "International markets served by Golax India",
    numberOfItems: internationalLocations.length,
    itemListElement: internationalLocations.map((loc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: loc.country,
      url: `${BASE_URL}/locations/global/${loc.slug}`,
      description: loc.heroTagline,
    })),
  };

  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={locationsFaqs} />
      <JsonLd data={itemList} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <Locations />
    </>
  );
}
