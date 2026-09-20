import Sitemap from "@/views/Sitemap";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "HTML Sitemap",
  description:
    "Browse every page on the Golax India website: services, industries, locations, blog articles and company information in one place.",
  canonicalUrl: "/sitemap",
  noindex: true,
});

export default function Page() {
  return <Sitemap />;
}
