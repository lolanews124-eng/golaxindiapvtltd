import DigitalMarketing from "@/views/services/DigitalMarketing";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Digital Marketing & SEO Services",
  description:
    "Technical SEO, content and paid acquisition for international brands. Honest reporting and clear retainers — no fake ranking promises. Get a plan.",
  keywords:
    "digital marketing company India, SEO services for international brands, Google Ads management, offshore SEO agency",
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
