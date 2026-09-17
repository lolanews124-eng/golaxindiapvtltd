import MobileAppDevelopment from "@/views/services/MobileAppDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Offshore Mobile App Development for USA & Global Clients",
  description:
    "Flutter, React Native, iOS & Android apps for US and global launches. Store-ready builds, USD quotes, stack advice before you waste a quarter.",
  keywords:
    "offshore mobile app development, hire Flutter developers India, React Native developers for USA, outsource app development to India, iOS Android app development company India",
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
