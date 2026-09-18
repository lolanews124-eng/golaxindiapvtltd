import Certificates from "@/views/Certificates";
import JsonLd from "@/components/seo/JsonLd";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import { companyRegistration, certificates } from "@/data/certificates";
import { ENTITY } from "@/lib/seo/entity";

export const metadata = buildMetadata({
  title: "Certificates & Company Registration | CIN, GST, Startup India, ISO",
  description:
    "Golax India Private Limited — MCA registered (CIN U42102BR2025PTC079250), GST 10AAMCG4053A1ZA, TAN PTNG16445C. DPIIT Startup India recognised (DIPP225612). View Certificate of Incorporation, ISO 9001:2015 and ISO/IEC 27001:2022.",
  keywords:
    "Golax India CIN, Golax India GST, Startup India DIPP225612, Golax India Private Limited registration, ISO 9001 Golax India, ISO 27001 Golax India, MCA certificate Patna",
  canonicalUrl: "/certificates",
});

export default function Page() {
  const taxSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ENTITY.url}/#organization`,
    name: ENTITY.brandName,
    legalName: companyRegistration.legalName,
    taxID: companyRegistration.gstin,
    vatID: companyRegistration.gstin,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "CIN",
        value: companyRegistration.cin,
      },
      {
        "@type": "PropertyValue",
        name: "TAN",
        value: companyRegistration.tan,
      },
      {
        "@type": "PropertyValue",
        name: "PAN",
        value: companyRegistration.pan,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "5/B, Anand Palace, New Bypass, Kankarbagh, Ashok Nagar (Patna), Sampatchak",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    hasCredential: certificates.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      credentialCategory: c.standard,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      identifier: c.certificateNumber,
      url: `${BASE_URL}/certificates`,
    })),
  };

  return (
    <>
      <OrganizationSchema />
      <JsonLd data={taxSchema} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Certificates", path: "/certificates" },
        ])}
      />
      <Certificates />
    </>
  );
}
