import WebDevelopment from "@/views/services/WebDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Offshore Web Development Company",
  description:
    "Outsource React, Next.js and Shopify builds to India. Clear USD scopes, timezone overlap and NDA/IP assignment. Talk to Golax India about your site.",
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
