import { notFound } from "next/navigation";
import ServiceInternationalTemplate from "@/components/services/ServiceInternationalTemplate";
import { getServiceInternationalData } from "@/data/internationalLocations";
import { getServiceCountryContent, SERVICE_COUNTRY_ALLOWLIST } from "@/data/serviceCountryContent";
import { getCountryGeo } from "@/data/countryGeo";
import { getServiceInternationalParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceInternationalKeywords } from "@/lib/seo/internationalKeywords";

export async function generateStaticParams() {
  return getServiceInternationalParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; country: string }>;
}) {
  const { service, country } = await params;
  const data = getServiceInternationalData(service, country);
  if (!data) return {};
  const unique = getServiceCountryContent(service, country);
  const geo = getCountryGeo(country);
  const allowed = SERVICE_COUNTRY_ALLOWLIST[service] ?? [];
  const languages: Record<string, string> = {};
  for (const c of allowed) {
    const g = getCountryGeo(c);
    if (g) languages[g.hreflang] = `/services/${service}/global/${c}`;
  }
  languages["x-default"] = `/services/${service}`;

  return buildMetadata({
    title:
      unique?.metaTitle ??
      `${data.service.title} for ${data.location.country} | Offshore from India`,
    description:
      unique?.metaDescription ??
      `Offshore ${data.service.title.toLowerCase()} for ${data.location.country} businesses. Hire Golax India — senior engineers, transparent ${data.location.currency} pricing, ${data.location.timezoneOverlap} timezone overlap.`,
    keywords: buildServiceInternationalKeywords(service, data.location),
    canonicalUrl: `/services/${service}/global/${country}`,
    locale: geo?.locale ?? "en_US",
    languages,
    geo: geo
      ? {
          region: geo.region,
          placename: geo.placename,
          position: geo.position,
          icbm: geo.icbm,
        }
      : undefined,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string; country: string }>;
}) {
  const { service, country } = await params;
  const data = getServiceInternationalData(service, country);
  if (!data) notFound();
  return <ServiceInternationalTemplate data={data} />;
}
