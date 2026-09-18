import JsonLd from "./JsonLd";
import {
  ENTITY,
  areaServedCountryList,
  postalAddressSchema,
} from "@/lib/seo/entity";

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ENTITY.url}/#organization`,
    name: ENTITY.brandName,
    legalName: ENTITY.legalName,
    alternateName: ENTITY.shortName,
    url: ENTITY.url,
    logo: `${ENTITY.url}/logo.png`,
    image: `${ENTITY.url}/logo.png`,
    description: ENTITY.description,
    email: ENTITY.email,
    telephone: ENTITY.phoneSchema,
    foundingDate: ENTITY.foundingDate,
    taxID: ENTITY.taxIds.gstin,
    identifier: [
      { "@type": "PropertyValue", name: "CIN", value: ENTITY.taxIds.cin },
      { "@type": "PropertyValue", name: "TAN", value: ENTITY.taxIds.tan },
      { "@type": "PropertyValue", name: "PAN", value: ENTITY.taxIds.pan },
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Patna, Bihar, India",
    },
    address: postalAddressSchema(),
    knowsAbout: [...ENTITY.knowsAbout],
    areaServed: areaServedCountryList(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ENTITY.phoneSchema,
      contactType: "customer service",
      email: ENTITY.email,
      availableLanguage: ["English"],
      areaServed: [...ENTITY.areaServedCodes],
    },
    sameAs: [...ENTITY.sameAs],
  };

  return <JsonLd data={schemaData} />;
}
