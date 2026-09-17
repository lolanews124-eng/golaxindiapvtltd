import JsonLd from "./JsonLd";
import {
  ENTITY,
  areaServedCountryList,
  postalAddressSchema,
} from "@/lib/seo/entity";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${ENTITY.url}/#localbusiness`,
    name: ENTITY.brandName,
    legalName: ENTITY.legalName,
    image: `${ENTITY.url}/logo.png`,
    description: ENTITY.description,
    url: ENTITY.url,
    telephone: ENTITY.phoneSchema,
    email: ENTITY.email,
    foundingDate: ENTITY.foundingDate,
    address: postalAddressSchema(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: ENTITY.geo.latitude,
      longitude: ENTITY.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    areaServed: areaServedCountryList(),
    sameAs: [...ENTITY.sameAs],
    parentOrganization: {
      "@type": "Organization",
      "@id": `${ENTITY.url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offshore IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Offshore Web Development",
            description: "Custom websites and web apps for US and international businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Offshore Software & SaaS Development",
            description: "SaaS MVPs and custom software for startups and enterprises abroad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "iOS and Android apps for international product teams",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing & SEO",
            description: "SEO and paid acquisition for US, UK and global markets",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedicated Development Teams",
            description: "Hire dedicated offshore engineers from India for US and global clients",
          },
        },
      ],
    },
  };

  return <JsonLd data={schemaData} />;
}
