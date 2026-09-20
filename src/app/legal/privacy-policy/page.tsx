import PrivacyPolicy from "@/views/legal/PrivacyPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Golax India Private Limited collects, uses and protects personal data when you use our website or enquire about offshore software services. Read the full policy.",
  canonicalUrl: "/legal/privacy-policy",
});

export default function Page() {
  return <PrivacyPolicy />;
}
