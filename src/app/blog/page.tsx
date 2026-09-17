import Blog from "@/views/Blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Blog – Offshore Development, Web & SEO Insights",
  description:
    "Guides for US, UK, UAE and global buyers on outsourcing to India, web/SaaS development, mobile apps, SEO and digital growth.",
  canonicalUrl: "/blog",
});

export default function Page() {
  return <Blog />;
}
