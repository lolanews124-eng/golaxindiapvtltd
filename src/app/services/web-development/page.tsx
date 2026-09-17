import WebDevelopment from "@/views/services/WebDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Offshore Web Development for USA & Global Clients | React & Next.js",
  description:
    "Outsource website & web app development to India — React, Next.js, Shopify, headless commerce. From $3,500 USD. EST/PST overlap, NDA & IP ready. Golax India.",
  keywords:
    "offshore web development company, outsource web development to India, hire Next.js developers India, React development company for USA, website development for US startups, headless commerce development India",
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
