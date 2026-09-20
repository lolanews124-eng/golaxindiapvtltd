import Contact from "@/views/Contact";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { contactFaqs } from "@/data/siteFaqs";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import { ENTITY } from "@/lib/seo/entity";

export const metadata = buildMetadata({
  title: "Contact | Get a USD Quote for Your Project",
  description:
    "Contact Golax India for a free discovery call and a USD quote. Reply within 24 hours. NDA available before you share project details.",
  keywords:
    "hire offshore developers contact, outsource software development quote, Golax India contact, free development quote",
  canonicalUrl: "/contact",
});

export default function Page() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: "Contact Golax India",
    description:
      "Contact Golax India for a free discovery call and a USD quote. Reply within 24 hours. NDA available before you share project details.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${ENTITY.url}/#organization`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: ENTITY.phoneSchema,
        email: ENTITY.email,
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: [...ENTITY.areaServedCodes],
      },
    },
  };

  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={contactFaqs} />
      <JsonLd data={contactPage} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Contact />
    </>
  );
}
