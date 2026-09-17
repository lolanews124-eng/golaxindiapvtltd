import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://golaxindiapvtltd.in/#organization",
    name: "Golax India Pvt Ltd",
    url: "https://golaxindiapvtltd.in",
    logo: "https://golaxindiapvtltd.in/logo.png",
    description:
      "Offshore software and web development partner for USA, UK, UAE, Canada, Australia and global clients — senior engineers from India with USD billing, NDA/IP assignment and timezone-aware delivery.",
    foundingLocation: {
      "@type": "Place",
      name: "Patna, Bihar, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Qatar" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9470024607",
      contactType: "customer service",
      email: "contact@golaxindia.com",
      availableLanguage: ["English"],
      areaServed: ["US", "GB", "CA", "AU", "AE", "SA", "SG", "DE", "NZ", "QA"],
    },
    sameAs: [
      "https://www.facebook.com/golaxindiapvtltd",
      "https://www.linkedin.com/company/golaxindiapvtltd",
      "https://twitter.com/golaxindiapvtltd",
      "https://www.instagram.com/golaxindiapvtltd",
    ],
  };

  return <JsonLd data={schemaData} />;
}
