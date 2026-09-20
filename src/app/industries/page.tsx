import Industries from "@/views/Industries";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { industriesFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Industry IT Solutions for USA & Global Buyers",
  description:
    "Software for e-commerce, healthcare, EdTech, finance, real estate, logistics and more. Offshore engineering built for regulated industries.",
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
