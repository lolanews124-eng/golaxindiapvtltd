import ServiceLandingView from "@/views/services/ServiceLandingView";
import ServiceHubSchemas from "@/components/seo/ServiceHubSchemas";
import { getServiceLanding } from "@/data/serviceLandings";
import { buildMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

const slug = "hire-nodejs-developers";
const data = getServiceLanding(slug);

export const metadata = data
  ? buildMetadata({
      title: data.seoTitle,
      description: data.metaDescription,
      keywords: data.keywords,
      canonicalUrl: `/services/${slug}`,
    })
  : {};

export default function Page() {
  if (!data) notFound();
  return (
    <>
      <ServiceHubSchemas slug={slug} />
      <ServiceLandingView data={data} />
    </>
  );
}
