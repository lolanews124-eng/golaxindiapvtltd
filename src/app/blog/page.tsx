import Blog from "@/views/Blog";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Offshore Development Insights Blog",
  description:
    "Practical guides on outsourcing to India, SaaS costs, dedicated teams and choosing an offshore partner. Written for international buyers. Read more.",
  keywords:
    "outsource software development to India, dedicated team vs fixed price, SaaS MVP development cost, how to choose offshore partner",
  canonicalUrl: "/blog",
});

export default function Page() {
  const collection = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog#blog`,
    name: "Golax India Blog",
    description:
      "Guides for US, UK, UAE and global buyers on outsourcing to India, web/SaaS development, mobile apps, SEO and digital growth.",
    url: `${BASE_URL}/blog`,
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  return (
    <>
      <OrganizationSchema />
      <JsonLd data={collection} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Blog />
    </>
  );
}
