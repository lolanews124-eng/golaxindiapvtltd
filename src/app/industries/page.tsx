import Industries from "@/views/Industries";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { industriesFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Industries We Serve – Offshore IT for Global Sectors",
  description:
    "Golax India delivers tailored offshore IT for education, healthcare, startups, retail, real estate and finance — USA, UK, UAE and global buyers.",
  keywords:
    "offshore IT industries, healthcare software development India, EdTech development offshore, retail ecommerce development, fintech offshore partner",
  canonicalUrl: "/industries",
});

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={industriesFaqs} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <Industries />
    </>
  );
}
