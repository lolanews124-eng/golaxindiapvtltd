import ITConsulting from "@/views/services/ITConsulting";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "IT Consulting & Cloud for USA & Global Product Teams",
  description:
    "Cloud migration, DevOps and security baselines for US and international teams. Written assessments you can action — senior consultants from India.",
  keywords:
    "offshore IT consulting, AWS consulting India for USA, DevOps outsourcing India, cloud migration partner India, managed IT for US startups",
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
