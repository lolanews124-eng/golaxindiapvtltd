import TermsOfService from "@/views/legal/TermsOfService";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply to use of the Golax India website and to services provided by Golax India Pvt Ltd to international clients.",
  canonicalUrl: "/legal/terms-of-service",
});

export default function Page() {
  return <TermsOfService />;
}
