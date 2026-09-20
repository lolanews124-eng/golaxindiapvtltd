import { notFound, redirect } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import BlogPostingSchema from "@/components/seo/BlogPostingSchema";
import JsonLd from "@/components/seo/JsonLd";
import { blogSlugs, legacyBlogRedirects } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { getBlogMetadata } from "@/data/blogMeta";
import { getBlogSchemaData } from "@/lib/seo/blogSchema";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (legacyBlogRedirects[slug]) return {};
  if (!blogSlugs.includes(slug)) return {};
  const meta = getBlogMetadata(slug);
  return buildMetadata({
    title: meta?.seoTitle ?? slug.replace(/-/g, " "),
    description:
      meta?.description ??
      "Expert IT insights from Golax India — web development, SEO, mobile apps & digital transformation.",
    keywords: meta?.keywords,
    canonicalUrl: `/blog/${slug}`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "article",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (legacyBlogRedirects[slug]) {
    redirect(
      legacyBlogRedirects[slug].startsWith("/")
        ? legacyBlogRedirects[slug]
        : `/blog/${legacyBlogRedirects[slug]}`,
    );
  }
  if (!blogSlugs.includes(slug)) notFound();
  const schemaData = getBlogSchemaData(slug);
  const title =
    schemaData?.headline ?? getBlogMetadata(slug)?.seoTitle ?? slug.replace(/-/g, " ");

  return (
    <>
      {schemaData ? <BlogPostingSchema {...schemaData} /> : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${slug}` },
        ])}
      />
      <BlogPost slug={slug} />
    </>
  );
}
