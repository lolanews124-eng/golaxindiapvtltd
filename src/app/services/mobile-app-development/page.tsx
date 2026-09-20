import MobileAppDevelopment from "@/views/services/MobileAppDevelopment";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Mobile App Development Company India",
  description:
    "iOS, Android, Flutter and React Native apps built by senior Indian engineers for US, UK and global clients. Store launch included.",
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
