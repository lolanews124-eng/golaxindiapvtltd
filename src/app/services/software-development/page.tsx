import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SaaS & Custom Software Development",
  description:
    "Custom SaaS and software from India for global product teams. Dedicated pods or fixed scopes, NDA/IP ready. Book a discovery call with Golax India.",
  keywords:
    "SaaS development company India, custom software development India, hire dedicated developers from India, outsource software development to India",
  canonicalUrl: "/services/software-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="software-development" />
      <SoftwareDevelopment />
    </>
  );
}
