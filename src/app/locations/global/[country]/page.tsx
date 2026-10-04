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
    "united-states": "Offshore Development for USA Teams",
    "united-kingdom": "Offshore Development for UK Teams",
    canada: "Offshore Software Development for Canada",
    australia: "Offshore Software Development for Australia",
    "united-arab-emirates": "Offshore Software Development for UAE",
    "saudi-arabia": "Offshore Software Development for Saudi Arabia",
    singapore: "Offshore Software Development for Singapore",
    germany: "Offshore Software Development for Germany",
    "new-zealand": "Offshore Software Development for New Zealand",
    qatar: "Offshore Software Development for Qatar",
  };

  const descriptionBySlug: Record<string, string> = {
    "united-states":
      "Offshore web, SaaS and mobile development for United States businesses. Senior Indian engineers, USD billing, NDA and IP assignment.",
    "united-kingdom":
      "Offshore web, SaaS and mobile development for United Kingdom businesses. Senior Indian engineers, GBP billing, NDA and IP assignment.",
    canada:
      "Offshore web, SaaS and mobile development for Canada businesses. Senior Indian engineers, CAD billing, NDA and IP assignment.",
    australia:
      "Offshore web, SaaS and mobile development for Australia businesses. Senior Indian engineers, AUD billing, NDA and IP assignment.",
    "united-arab-emirates":
      "Offshore web, SaaS and mobile development for United Arab Emirates businesses. Senior Indian engineers, AED billing, NDA and IP assignment.",
    "saudi-arabia":
      "Offshore web, SaaS and mobile development for Saudi Arabia businesses. Senior Indian engineers, SAR billing, NDA and IP assignment.",
    singapore:
      "Offshore web, SaaS and mobile development for Singapore businesses. Senior Indian engineers, SGD billing, NDA and IP assignment.",
    germany:
      "Offshore web, SaaS and mobile development for Germany businesses. Senior Indian engineers, EUR billing, NDA and IP assignment.",
    "new-zealand":
      "Offshore web, SaaS and mobile development for New Zealand businesses. Senior Indian engineers, NZD billing, NDA and IP assignment.",
    qatar:
      "Offshore web, SaaS and mobile development for Qatar businesses. Senior Indian engineers, QAR billing, NDA and IP assignment.",
  };

  return buildMetadata({
    title: titleBySlug[data.slug] ?? `Software Partner for ${data.country}`,
    description:
      descriptionBySlug[data.slug] ??
      `Outsource software development to India from ${data.country}. Clear billing, timezone overlap and NDA/IP terms. Talk to Golax India about your project today.`,
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
