import Industries from "@/views/Industries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Industries We Serve – IT Solutions India",
  description: "Golax India delivers tailored IT solutions for healthcare, education, retail, manufacturing, logistics and finance — for international startups and enterprises.",
  canonicalUrl: "/industries",
});

export default function Page() {
  return <Industries />;
}
