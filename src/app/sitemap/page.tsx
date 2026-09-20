import Sitemap from "@/views/Sitemap";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "HTML Sitemap of All Pages",
  description:
    "Browse every public Golax India page — services, international locations, blog posts and legal policies. Find the right offshore development resource fast.",
  canonicalUrl: "/sitemap",
});

export default function Page() {
  return <Sitemap />;
}
