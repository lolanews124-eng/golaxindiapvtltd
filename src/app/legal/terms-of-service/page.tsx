import TermsOfService from "@/views/legal/TermsOfService";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of Golax India’s website and offshore software services for international clients. Review obligations before you engage our team.",
  canonicalUrl: "/legal/terms-of-service",
});

export default function Page() {
  return <TermsOfService />;
}
