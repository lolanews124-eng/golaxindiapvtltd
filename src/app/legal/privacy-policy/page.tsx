import PrivacyPolicy from "@/views/legal/PrivacyPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Golax India collects, uses and protects personal data from website visitors and clients, including your rights under GDPR and other laws.",
  canonicalUrl: "/legal/privacy-policy",
});

export default function Page() {
  return <PrivacyPolicy />;
}
