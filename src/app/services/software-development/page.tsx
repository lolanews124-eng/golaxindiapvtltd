import SoftwareDevelopment from "@/views/services/SoftwareDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SaaS & Custom Software Development India",
  description:
    "Build SaaS products, ERP, CRM and internal tools with senior Indian engineers. MVPs from $15,000, NDA and full IP ownership.",
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
