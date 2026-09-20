import RefundPolicy from "@/views/legal/RefundPolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "How payments, milestones, cancellations and refunds work for projects and monthly teams provided by Golax India.",
  canonicalUrl: "/legal/refund-policy",
});

export default function Page() {
  return <RefundPolicy />;
}
