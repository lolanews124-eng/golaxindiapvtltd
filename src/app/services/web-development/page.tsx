import WebDevelopment from "@/views/services/WebDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Web Development Company India for US & UK",
  description:
    "Custom websites and web apps in React and Next.js by senior Indian engineers. Fast, SEO-ready builds with USD pricing and NDA.",
  keywords:
    "offshore web development company, outsource web development to India, Shopify development company India, hire Next.js developers",
  canonicalUrl: "/services/web-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="web-development" />
      <WebDevelopment />
    </>
  );
}
