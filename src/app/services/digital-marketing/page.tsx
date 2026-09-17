import DigitalMarketing from "@/views/services/DigitalMarketing";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Digital Marketing & SEO for USA & International Brands",
  description:
    "Technical SEO, content and paid acquisition for US, UK, Canada, Australia and Gulf brands. Clear USD retainers — no fake ranking guarantees.",
  keywords:
    "offshore SEO agency, digital marketing for US businesses, Google Ads management India, SEO company for USA startups, international SEO agency India",
  canonicalUrl: "/services/digital-marketing",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="digital-marketing" />
      <DigitalMarketing />
    </>
  );
}
