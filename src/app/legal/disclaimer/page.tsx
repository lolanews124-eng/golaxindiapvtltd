import Disclaimer from "@/views/legal/Disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "General information disclaimer for the Golax India website, covering content accuracy, estimates, third-party links and results.",
  canonicalUrl: "/legal/disclaimer",
});

export default function Page() {
  return <Disclaimer />;
}
