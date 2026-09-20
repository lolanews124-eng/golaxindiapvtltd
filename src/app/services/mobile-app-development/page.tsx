import MobileAppDevelopment from "@/views/services/MobileAppDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Mobile App Development Company",
  description:
    "Flutter, React Native, iOS and Android apps for international launches. Store-ready builds and clear USD quotes. Start with Golax India today.",
  keywords:
    "mobile app development company India, hire Flutter developers, React Native developers India, outsource app development to India",
  canonicalUrl: "/services/mobile-app-development",
});

export default function Page() {
  return (
    <>
      <ServiceHubSchemas slug="mobile-app-development" />
      <MobileAppDevelopment />
    </>
  );
}
