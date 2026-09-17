import type { NextConfig } from "next";
import { SERVICE_COUNTRY_ALLOWLIST } from "./src/data/serviceCountryContent";

/** Pruned thin city pages → country hub (301). Keep in sync with majorCities cuts. */
const prunedCityRedirects: { source: string; destination: string }[] = [
  // UK
  { source: "/locations/global/united-kingdom/bristol", destination: "/locations/global/united-kingdom" },
  { source: "/locations/global/united-kingdom/leeds", destination: "/locations/global/united-kingdom" },
  { source: "/locations/global/united-kingdom/glasgow", destination: "/locations/global/united-kingdom" },
  { source: "/locations/global/united-kingdom/liverpool", destination: "/locations/global/united-kingdom" },
  // Canada
  { source: "/locations/global/canada/ottawa", destination: "/locations/global/canada" },
  { source: "/locations/global/canada/edmonton", destination: "/locations/global/canada" },
  { source: "/locations/global/canada/mississauga", destination: "/locations/global/canada" },
  { source: "/locations/global/canada/winnipeg", destination: "/locations/global/canada" },
  // Australia
  { source: "/locations/global/australia/adelaide", destination: "/locations/global/australia" },
  { source: "/locations/global/australia/gold-coast", destination: "/locations/global/australia" },
  { source: "/locations/global/australia/canberra", destination: "/locations/global/australia" },
  { source: "/locations/global/australia/hobart", destination: "/locations/global/australia" },
  // UAE
  { source: "/locations/global/united-arab-emirates/ajman", destination: "/locations/global/united-arab-emirates" },
  { source: "/locations/global/united-arab-emirates/ras-al-khaimah", destination: "/locations/global/united-arab-emirates" },
  { source: "/locations/global/united-arab-emirates/fujairah", destination: "/locations/global/united-arab-emirates" },
  { source: "/locations/global/united-arab-emirates/al-ain", destination: "/locations/global/united-arab-emirates" },
  { source: "/locations/global/united-arab-emirates/umm-al-quwain", destination: "/locations/global/united-arab-emirates" },
  // Saudi
  { source: "/locations/global/saudi-arabia/mecca", destination: "/locations/global/saudi-arabia" },
  { source: "/locations/global/saudi-arabia/medina", destination: "/locations/global/saudi-arabia" },
  { source: "/locations/global/saudi-arabia/khobar", destination: "/locations/global/saudi-arabia" },
  { source: "/locations/global/saudi-arabia/tabuk", destination: "/locations/global/saudi-arabia" },
  { source: "/locations/global/saudi-arabia/abha", destination: "/locations/global/saudi-arabia" },
  // Germany
  { source: "/locations/global/germany/cologne", destination: "/locations/global/germany" },
  { source: "/locations/global/germany/stuttgart", destination: "/locations/global/germany" },
  { source: "/locations/global/germany/dusseldorf", destination: "/locations/global/germany" },
  { source: "/locations/global/germany/leipzig", destination: "/locations/global/germany" },
  // New Zealand
  { source: "/locations/global/new-zealand/christchurch", destination: "/locations/global/new-zealand" },
  { source: "/locations/global/new-zealand/hamilton", destination: "/locations/global/new-zealand" },
  { source: "/locations/global/new-zealand/tauranga", destination: "/locations/global/new-zealand" },
  { source: "/locations/global/new-zealand/dunedin", destination: "/locations/global/new-zealand" },
  { source: "/locations/global/new-zealand/palmerston-north", destination: "/locations/global/new-zealand" },
  { source: "/locations/global/new-zealand/queenstown", destination: "/locations/global/new-zealand" },
  // Qatar
  { source: "/locations/global/qatar/al-wakrah", destination: "/locations/global/qatar" },
  { source: "/locations/global/qatar/al-khor", destination: "/locations/global/qatar" },
  { source: "/locations/global/qatar/al-rayyan", destination: "/locations/global/qatar" },
  { source: "/locations/global/qatar/umm-salal", destination: "/locations/global/qatar" },
  { source: "/locations/global/qatar/mesaieed", destination: "/locations/global/qatar" },
  { source: "/locations/global/qatar/dukhan", destination: "/locations/global/qatar" },
];

const ALL_SERVICE_SLUGS = [
  "web-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
  "seo-services",
  "it-consulting",
] as const;

const ALL_COUNTRY_SLUGS = [
  "united-states",
  "united-kingdom",
  "united-arab-emirates",
  "australia",
  "canada",
  "singapore",
  "germany",
  "saudi-arabia",
  "new-zealand",
  "qatar",
] as const;

function hubForService(service: string, country: string): string {
  if (service === "seo-services") {
    if (SERVICE_COUNTRY_ALLOWLIST["digital-marketing"]?.includes(country)) {
      return `/services/digital-marketing/global/${country}`;
    }
    return "/services/digital-marketing";
  }
  return `/services/${service}`;
}

const prunedServiceCountryRedirects: { source: string; destination: string }[] = [];
for (const service of ALL_SERVICE_SLUGS) {
  for (const country of ALL_COUNTRY_SLUGS) {
    const allowed = SERVICE_COUNTRY_ALLOWLIST[service]?.includes(country);
    if (!allowed) {
      prunedServiceCountryRedirects.push({
        source: `/services/${service}/global/${country}`,
        destination: hubForService(service, country),
      });
    }
  }
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    // shadcn ui components copied from Vite project; unused ones have minor type drift
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/locations/patna",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/patna/:path*",
        destination: "/locations",
        permanent: true,
      },
      // Legacy India city pages only — do not match /locations/global/*
      {
        source: "/locations/:city((?!global)[^/]+)",
        destination: "/locations",
        permanent: true,
      },
      // Legacy India service×location pages — do not match /services/:service/global/*
      {
        source: "/services/:service/:location((?!global)[^/]+)",
        destination: "/services/:service",
        permanent: true,
      },
      ...prunedCityRedirects.map((r) => ({
        ...r,
        permanent: true,
      })),
      ...prunedServiceCountryRedirects.map((r) => ({
        ...r,
        permanent: true,
      })),
      // Retired India-local blog posts
      {
        source: "/blog/digital-transformation-patna-businesses",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/seo-tips-local-businesses-patna",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/social-media-marketing-bihar",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/government-schemes-digital-india",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/digital-transformation-guide-patna",
        destination: "/blog",
        permanent: true,
      },
      // seo-services has no hub — consolidate into digital marketing
      {
        source: "/services/seo-services",
        destination: "/services/digital-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
