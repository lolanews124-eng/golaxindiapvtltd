import Locations from "@/views/Locations";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { internationalLocations } from "@/data/internationalLocations";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "International Locations – Offshore Markets We Serve",
  description:
    "Golax India delivers offshore web, software and app development for clients in the USA, UK, Canada, UAE, Australia, Singapore, Germany and more.",
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
