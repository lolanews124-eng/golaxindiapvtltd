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
    "united-states": "Offshore Partner for USA Product Teams",
    "united-kingdom": "Offshore Partner for UK Companies",
    canada: "Offshore Partner for Canada Startups",
    australia: "Offshore Partner for Australia Teams",
    "united-arab-emirates": "Offshore Partner for UAE Businesses",
    "saudi-arabia": "Offshore Partner for Saudi Arabia",
    singapore: "Offshore Partner for Singapore Teams",
    germany: "Offshore Partner for Germany Teams",
    "new-zealand": "Offshore Partner for New Zealand",
    qatar: "Offshore Partner for Qatar Businesses",
  };

  const descriptionBySlug: Record<string, string> = {
    "united-states":
      "Outsource software development to India from the USA. USD billing, EST/PST overlap, NDA/IP ready. Hire Golax India as your offshore product partner today.",
    "united-kingdom":
      "Outsource software development to India from the UK. GBP quotes, GMT overlap and GDPR-aware delivery. Talk to Golax India about your next build.",
    canada:
      "Outsource software development to India from Canada. CAD billing, timezone overlap and clear IP assignment. Partner with Golax India for your product.",
    australia:
      "Outsource software development to India from Australia. AUD quotes and AEST-friendly collaboration. Start a discovery call with Golax India now.",
    "united-arab-emirates":
      "Software development partner for UAE startups and free-zone teams. AED quotes, Gulf-hour overlap, bilingual web when needed. Contact Golax India.",
    "saudi-arabia":
      "Software development partner for Saudi Arabia. SAR/USD quotes, Arabic/English RTL capability and Gulf-hour collaboration. Reach Golax India today.",
    singapore:
      "Outsource software development to India from Singapore. SGD billing and full SGT overlap. Hire Golax India for SaaS and secure product engineering.",
    germany:
      "Software development partner for Germany. EUR billing, CET overlap and GDPR-first defaults. Discuss your roadmap with Golax India.",
    "new-zealand":
      "Outsource software development to India from New Zealand. NZD-friendly commercials and clear IP terms. Book a discovery call with Golax India.",
    qatar:
      "Software development partner for Qatar. QAR/USD quotes, bilingual Arabic/English delivery and Gulf-hour overlap. Contact Golax India to start.",
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
