import JsonLd from "./JsonLd";
import {
  ENTITY,
  areaServedCountryList,
  postalAddressSchema,
} from "@/lib/seo/entity";

/** ProfessionalService node for IT / software outsourcing buyers. */
export default function ProfessionalServiceSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${ENTITY.url}/#professionalservice`,
    name: ENTITY.brandName,
    url: ENTITY.url,
    image: `${ENTITY.url}/logo.png`,
    logo: `${ENTITY.url}/logo.png`,
    description: ENTITY.description,
    email: ENTITY.email,
    telephone: ENTITY.phoneSchema,
    address: postalAddressSchema("delivery"),
    areaServed: areaServedCountryList(),
    sameAs: [...ENTITY.sameAs],
    knowsAbout: [...ENTITY.knowsAbout],
    priceRange: "$$",
    parentOrganization: {
      "@id": `${ENTITY.url}/#organization`,
    },
  };

  return <JsonLd data={data} />;
}
