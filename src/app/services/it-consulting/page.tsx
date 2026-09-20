import ITConsulting from "@/views/services/ITConsulting";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IT Consulting & Cloud DevOps Services",
  description:
    "AWS and Azure migration, DevOps, security and architecture reviews from senior engineers for product teams shipping globally.",
  keywords:
    "IT consulting India, cloud migration partner, DevOps outsourcing, AWS Azure GCP consulting for startups",
  canonicalUrl: "/services/it-consulting",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="it-consulting" />
      <ITConsulting />
    </>
  );
}
