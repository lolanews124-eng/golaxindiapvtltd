import { notFound } from "next/navigation";
import InternationalLocationTemplate from "@/components/locations/InternationalLocationTemplate";
import { internationalLocations } from "@/data/internationalLocations";
import { getCountryGeo, buildInternationalHreflang } from "@/data/countryGeo";
import { getInternationalCountryParams } from "@/lib/static-params";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { buildInternationalCountryKeywords } from "@/lib/seo/internationalKeywords";

export async function generateStaticParams() {
  return getInternationalCountryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = internationalLocations.find((l) => l.slug === country);
  if (!data) return {};

  const geo = getCountryGeo(data.slug);
  const titleBySlug: Record<string, string> = {
    "united-states": "Hire Offshore Developers from India for USA | $25–$45/hr USD",
    "united-kingdom": "Hire Offshore Developers from India for UK | £20–£35/hr GBP",
    canada: "Hire Offshore Developers from India for Canada | CAD Pricing",
    australia: "Hire Offshore Developers from India for Australia | AUD",
    "united-arab-emirates": "Web & App Development for Dubai & Abu Dhabi | AED Quotes",
    "saudi-arabia": "Web & App Development for Saudi Arabia | SAR & RTL",
    singapore: "Hire Offshore Developers from India for Singapore | SGD",
    germany: "Hire Offshore Developers from India for Germany | GDPR & EUR",
    "new-zealand": "Hire Offshore Developers from India for New Zealand | NZD",
    qatar: "Web & App Development for Qatar | Doha & Lusail",
  };

  return buildMetadata({
    title: titleBySlug[data.slug] ?? `Offshore Web & Software Development for ${data.country}`,
    description: data.description,
    keywords: buildInternationalCountryKeywords(data),
    canonicalUrl: `/locations/global/${country}`,
    ogImage: DEFAULT_OG_IMAGE,
    locale: geo?.locale ?? "en_US",
    languages: buildInternationalHreflang((slug) => `/locations/global/${slug}`, "/locations"),
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

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = internationalLocations.find((l) => l.slug === country);
  if (!data) notFound();
  return <InternationalLocationTemplate location={data} />;
}
