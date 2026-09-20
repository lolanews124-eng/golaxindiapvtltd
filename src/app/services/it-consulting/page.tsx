import ITConsulting from "@/views/services/ITConsulting";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IT Consulting & Cloud Services",
  description:
    "Architecture reviews, cloud migration and DevOps baselines for global product teams. Written recommendations you can action. Talk to Golax India.",
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
