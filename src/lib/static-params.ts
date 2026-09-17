import { internationalLocations } from "@/data/internationalLocations";
import { seoBlogSlugs } from "@/data/seoBlogPosts";
import { SERVICE_COUNTRY_ALLOWLIST } from "@/data/serviceCountryContent";

export function slugifyCity(city: string) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getServiceInternationalParams() {
  const params: { service: string; country: string }[] = [];
  for (const [service, countries] of Object.entries(SERVICE_COUNTRY_ALLOWLIST)) {
    for (const country of countries) {
      params.push({ service, country });
    }
  }
  return params;
}

export function getInternationalCountryParams() {
  return internationalLocations.map((loc) => ({ country: loc.slug }));
}

export function getInternationalCityParams() {
  const params: { country: string; city: string }[] = [];
  for (const loc of internationalLocations) {
    for (const city of loc.majorCities) {
      params.push({ country: loc.slug, city: slugifyCity(city) });
    }
  }
  return params;
}

/** Blog slugs — international-facing only (Patna/Bihar posts retired via 301) */
export const blogSlugs = [
  ...seoBlogSlugs,
  "mobile-app-development-trends-2026",
  "choosing-right-technology-stack",
  "ecommerce-website-essentials",
  "cloud-migration-guide-smes",
  "website-security-best-practices",
  "react-vs-angular-2026",
  "ai-transforming-business-operations",
  "building-scalable-web-applications",
  "ux-design-principles-conversion",
];

export const legacyBlogRedirects: Record<string, string> = {
  "digital-transformation-guide-patna": "/blog",
  "digital-transformation-patna-businesses": "/blog",
  "seo-tips-local-businesses-patna": "/blog",
  "social-media-marketing-bihar": "/blog",
  "government-schemes-digital-india": "/blog",
};

export const serviceHubSlugs = [
  "web-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
  "it-consulting",
];
