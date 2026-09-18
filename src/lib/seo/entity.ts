/**
 * Single source of truth for company entity facts (SEO / AEO / GEO / AIO).
 * Keep phone, email, address and sameAs identical across all schemas.
 */

export const ENTITY = {
  legalName: "Golax India Private Limited",
  brandName: "Golax India Pvt Ltd",
  shortName: "Golax India",
  url: "https://golaxindiapvtltd.in",
  email: "contact@golaxindia.com",
  /** Display format for humans */
  phoneDisplay: "+91 9128666005",
  /** E.164-style for schema / tel: links */
  phoneE164: "+919128666005",
  /** Schema telephone (hyphenated common form) */
  phoneSchema: "+91-9128666005",
  /** MCA incorporation date (Companies Act) */
  foundingDate: "2025-09-25",
  /** Engineering team operating history (pre-incorporation brand continuity) */
  teamSince: "2014",
  twitterHandle: "@golaxindiapvtltd",
  description:
    "Offshore software, web and mobile development partner for USA, UK, UAE, Canada, Australia and global clients — senior engineers from India with transparent multi-currency billing, NDA/IP assignment and timezone-aware delivery.",
  taxIds: {
    cin: "U42102BR2025PTC079250",
    gstin: "10AAMCG4053A1ZA",
    tan: "PTNG16445C",
    pan: "AAMCG4053A",
  },
  /** Primary delivery / correspondence HQ (shown sitewide) */
  address: {
    streetAddress:
      "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800020",
    addressCountry: "IN",
  },
  /** MCA registered office (Certificate of Incorporation) */
  registeredAddress: {
    streetAddress:
      "5/B, Anand Palace, New Bypass, Kankarbagh, Ashok Nagar (Patna), Sampatchak",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800020",
    addressCountry: "IN",
  },
  geo: {
    latitude: 25.5941,
    longitude: 85.1376,
  },
  sameAs: [
    "https://www.facebook.com/golaxindiapvtltd",
    "https://www.linkedin.com/company/golaxindiapvtltd",
    "https://twitter.com/golaxindiapvtltd",
    "https://www.instagram.com/golaxindiapvtltd",
  ],
  knowsAbout: [
    "Offshore software development",
    "Web development",
    "SaaS development",
    "Mobile app development",
    "Digital marketing",
    "SEO",
    "IT consulting",
    "React",
    "Next.js",
    "Flutter",
    "Dedicated development teams",
  ],
  /** Buyer markets only — India is delivery HQ, not a primary sales market */
  areaServedCountries: [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Saudi Arabia",
    "Singapore",
    "Germany",
    "New Zealand",
    "Qatar",
  ] as const,
  areaServedCodes: ["US", "GB", "CA", "AU", "AE", "SA", "SG", "DE", "NZ", "QA"] as const,
} as const;

export function postalAddressSchema(
  which: "delivery" | "registered" = "delivery",
) {
  const addr = which === "registered" ? ENTITY.registeredAddress : ENTITY.address;
  return {
    "@type": "PostalAddress" as const,
    streetAddress: addr.streetAddress,
    addressLocality: addr.addressLocality,
    addressRegion: addr.addressRegion,
    postalCode: addr.postalCode,
    addressCountry: addr.addressCountry,
  };
}

export function organizationRef() {
  return {
    "@type": "Organization" as const,
    "@id": `${ENTITY.url}/#organization`,
    name: ENTITY.brandName,
    url: ENTITY.url,
    email: ENTITY.email,
    telephone: ENTITY.phoneSchema,
    address: postalAddressSchema(),
  };
}

export function areaServedCountryList() {
  return ENTITY.areaServedCountries.map((name) => ({
    "@type": "Country" as const,
    name,
  }));
}
