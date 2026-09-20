import CookiePolicy from "@/views/legal/CookiePolicy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How Golax India uses cookies and similar technologies on golaxindiapvtltd.in. Learn what we store, why, and how you can control tracking preferences.",
  canonicalUrl: "/legal/cookie-policy",
});

export default function Page() {
  return <CookiePolicy />;
}
