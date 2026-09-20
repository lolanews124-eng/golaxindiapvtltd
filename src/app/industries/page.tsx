import Industries from "@/views/Industries";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { industriesFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Industries We Serve Worldwide",
  description:
    "Offshore IT for education, healthcare, startups, retail, real estate and finance buyers outside India. See how Golax India approaches your sector.",
  keywords:
    "offshore IT industries, healthcare software development, EdTech development, retail ecommerce development, fintech offshore partner",
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
