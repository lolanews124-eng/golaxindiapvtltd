import JsonLd from "./JsonLd";
import { BASE_URL } from "@/lib/seo/metadata";

export default function WebSiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Golax India Pvt Ltd",
    url: BASE_URL,
    description:
      "Offshore software, web and mobile development partner for USA, UK, UAE, Canada, Australia and global clients — senior engineers from India.",
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Golax India Pvt Ltd",
      url: BASE_URL,
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/sitemap?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schemaData} />;
}
