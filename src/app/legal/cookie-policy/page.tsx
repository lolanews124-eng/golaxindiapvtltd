import CookiePolicy from "@/views/legal/CookiePolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Which cookies the Golax India website uses, why we use them and how you can control or disable them in your browser.",
  canonicalUrl: "/legal/cookie-policy",
});

export default function Page() {
  return <CookiePolicy />;
}
