import JsonLd from "./JsonLd";
import { BASE_URL } from "@/lib/seo/metadata";
import { ENTITY } from "@/lib/seo/entity";

export default function WebSiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: ENTITY.brandName,
    url: BASE_URL,
    description: ENTITY.description,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: ENTITY.brandName,
      url: BASE_URL,
    },
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-premium p", "[data-speakable='true']"],
    },
  };

  return <JsonLd data={schemaData} />;
}
