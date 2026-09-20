import Blog from "@/views/Blog";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Blog – Offshore Development, Web & SEO Insights",
  description:
    "Guides for US, UK, UAE and global buyers on outsourcing to India, web/SaaS development, mobile apps, SEO and digital growth.",
  keywords:
    "outsource software development to India guide, offshore web development blog, hire developers India tips, SEO for US startups, SaaS MVP cost India",
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
