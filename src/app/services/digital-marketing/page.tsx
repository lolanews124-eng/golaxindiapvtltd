import DigitalMarketing from "@/views/services/DigitalMarketing";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "SEO & Digital Marketing from India for Global Brands",
  description:
    "Technical SEO, content, Google Ads and Meta campaigns for US, UK and international markets, run by an India team with clear reporting.",
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
