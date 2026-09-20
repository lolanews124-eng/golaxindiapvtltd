import RefundPolicy from "@/views/legal/RefundPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Refund and payment terms for Golax India offshore software engagements. Understand milestone billing and how change requests are handled before you buy.",
  canonicalUrl: "/legal/refund-policy",
});

export default function Page() {
  return <RefundPolicy />;
}
