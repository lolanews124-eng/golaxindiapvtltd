import Certificates from "@/views/Certificates";
import JsonLd from "@/components/seo/JsonLd";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import { certificates } from "@/data/certificates";
import { certificatesFaqs } from "@/data/siteFaqs";
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
  /** Credential graph only — does not redefine Organization address (avoids conflicting @id). */
  const credentialsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/certificates#webpage`,
    url: `${BASE_URL}/certificates`,
    name: "Certificates & Company Registration — Golax India Private Limited",
    description:
      "Golax India Private Limited — MCA registered (CIN U42102BR2025PTC079250), GST, Startup India and ISO certificates.",
    about: { "@id": `${ENTITY.url}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${ENTITY.url}/#organization`,
      hasCredential: certificates.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.title,
        credentialCategory: c.standard,
        recognizedBy: { "@type": "Organization", name: c.issuer },
        identifier: c.certificateNumber,
        url: `${BASE_URL}/certificates`,
      })),
    },
  };

  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={certificatesFaqs} />
      <JsonLd data={credentialsSchema} />
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
