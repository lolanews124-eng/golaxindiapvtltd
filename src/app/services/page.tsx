import Services from "@/views/Services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Offshore IT Services for USA & Global Clients",
  description:
    "Web, SaaS, mobile apps, SEO and cloud consulting for US startups and international brands. Hire senior engineers from India — Golax India.",
  keywords:
    "offshore IT services, hire developers from India, outsource software development, web development for USA, SaaS development India, mobile app outsourcing",
  canonicalUrl: "/services",
});

export default function Page() {
  return <Services />;
}
