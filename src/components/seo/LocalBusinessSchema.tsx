import JsonLd from "./JsonLd";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://golaxindiapvtltd.in/#localbusiness",
    name: "Golax India Pvt Ltd",
    image: "https://golaxindiapvtltd.in/logo.png",
    description:
      "Offshore software, web and mobile development company for USA, UK, UAE, Canada, Australia and global clients — senior engineers from India with USD billing, NDA/IP assignment and timezone-aware collaboration.",
    url: "https://golaxindiapvtltd.in",
    telephone: "+91-9470024607",
    email: "contact@golaxindia.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
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
    sameAs: [
      "https://www.facebook.com/golaxindiapvtltd",
      "https://www.linkedin.com/company/golaxindiapvtltd",
      "https://twitter.com/golaxindiapvtltd",
      "https://www.instagram.com/golaxindiapvtltd",
    ],
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
