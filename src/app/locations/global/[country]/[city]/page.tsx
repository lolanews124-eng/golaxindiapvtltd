import { notFound } from "next/navigation";
import InternationalCityTemplate from "@/components/locations/InternationalCityTemplate";
import { getInternationalCity } from "@/data/internationalLocations";
import { getCityPageContent } from "@/data/cityPageContent";
import { getCountryGeo } from "@/data/countryGeo";
import { getInternationalCityParams } from "@/lib/static-params";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildInternationalCityKeywords } from "@/lib/seo/internationalKeywords";

export async function generateStaticParams() {
  return getInternationalCityParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  const data = getInternationalCity(country, city);
  if (!data) return {};
  const unique = getCityPageContent(country, city);
  const geo = getCountryGeo(country);
  const pagePath = `/locations/global/${country}/${city}`;
  return buildMetadata({
    title:
      unique?.metaTitle ??
      `Web Development Company in ${data.city}, ${data.country.country} | Offshore from India`,
    description:
      unique?.metaDescription ??
      `Hire Golax India for web development, software, mobile apps & SEO in ${data.city}, ${data.country.country}. Senior offshore team from India — ${data.country.currency} pricing, ${data.country.timezoneOverlap} overlap.`,
    keywords: buildInternationalCityKeywords(data.city, data.country),
    canonicalUrl: pagePath,
    noindex: !unique,
    locale: geo?.locale ?? "en_US",
    languages: geo
      ? {
          [geo.hreflang]: pagePath,
          "x-default": `/locations/global/${country}`,
        }
      : undefined,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  const { country, city } = await params;
  const data = getInternationalCity(country, city);
  if (!data) notFound();
  return <InternationalCityTemplate data={data} />;
}
