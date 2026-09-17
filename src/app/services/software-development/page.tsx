import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Offshore Software & SaaS Development for USA & Global Clients",
  description:
    "Custom SaaS, portals and software from India — senior squads, $25–$45/hr USD, NDA/IP ready for US, UK, UAE and global teams.",
  keywords:
    "offshore software development company, outsource software development to India, hire SaaS developers India, dedicated development team India USA, custom software development for US startups",
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
