import Careers from "@/views/Careers";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { careersFaqs } from "@/data/siteFaqs";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Careers | Software Jobs in Patna",
  description:
    "Join Golax India to build software for US, UK and global clients. See open roles for developers, designers and project managers.",
  keywords:
    "Golax India careers, offshore engineering jobs, React developer jobs India, Flutter developer careers",
  canonicalUrl: "/careers",
});

export default function Page() {
  const careersPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/careers#webpage`,
    url: `${BASE_URL}/careers`,
    name: "Careers at Golax India",
    description:
      "Build software for US, UK and global clients from Patna. Roles we hire for in engineering, design and delivery.",
  };

  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={careersFaqs} />
      <JsonLd data={careersPage} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <Careers />
    </>
  );
}
