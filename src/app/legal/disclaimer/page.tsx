import Disclaimer from "@/views/legal/Disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important limitations and disclaimers for Golax India’s website content and offshore IT information. Read before relying on any material on this site.",
  canonicalUrl: "/legal/disclaimer",
});

export default function Page() {
  return <Disclaimer />;
}
