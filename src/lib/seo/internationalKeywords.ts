import { getServiceKeywords } from "@/data/serviceKeywords";
import type { InternationalLocationData } from "@/data/internationalLocations";
import { slugifyCity } from "@/data/internationalLocations";
import { getServiceCountryHref } from "@/data/serviceCountryContent";

const SERVICE_SLUGS = [
  "web-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
  "seo-services",
  "it-consulting",
] as const;

const SERVICE_LABELS: Record<(typeof SERVICE_SLUGS)[number], string> = {
  "web-development": "Web Development",
  "software-development": "Software Development",
  "mobile-app-development": "Mobile App Development",
  "digital-marketing": "Digital Marketing",
  "seo-services": "SEO Services",
  "it-consulting": "IT Consulting",
};

/** Meta keywords for /locations/global/[country] */
export function buildInternationalCountryKeywords(loc: InternationalLocationData): string {
  const phrases = new Set<string>();
  const { country, slug } = loc;

  [
    `offshore web development company for ${country}`,
    `offshore software development company for ${country}`,
    `outsource software development to India from ${country}`,
    `outsource web development to India from ${country}`,
    `hire offshore developers from India ${country}`,
    `hire dedicated developers for ${country}`,
    `IT outsourcing company for ${country}`,
    `offshore IT services ${country}`,
    `web development company in ${country}`,
    `software development company in ${country}`,
    `mobile app development company in ${country}`,
    `digital marketing agency ${country}`,
    `SEO services for ${country} businesses`,
    `best IT company for ${country}`,
    `affordable web development ${country}`,
    `SaaS development company ${country}`,
    `e-commerce development ${country}`,
    `React development company ${country}`,
    `Next.js development ${country}`,
    `Flutter app development ${country}`,
  ].forEach((p) => phrases.add(p));

  SERVICE_SLUGS.forEach((serviceSlug) => {
    getServiceKeywords(serviceSlug)
      .slice(0, 8)
      .forEach((kw) => {
        phrases.add(`${kw} in ${country}`);
        phrases.add(`${kw} for ${country}`);
        phrases.add(`offshore ${kw} ${country}`);
      });
  });

  loc.majorCities.slice(0, 8).forEach((city) => {
    phrases.add(`web development company in ${city}`);
    phrases.add(`software development company in ${city}`);
    phrases.add(`mobile app development company in ${city}`);
    phrases.add(`IT company in ${city}, ${country}`);
    phrases.add(`offshore development for ${city}`);
    getServiceKeywords("web-development")
      .slice(0, 4)
      .forEach((kw) => phrases.add(`${kw} in ${city}`));
  });

  // Service × country page intents
  SERVICE_SLUGS.forEach((serviceSlug) => {
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} for ${country}`);
  });

  return Array.from(phrases).slice(0, 12).join(", ");
}

/** Meta keywords for /locations/global/[country]/[city] */
export function buildInternationalCityKeywords(
  city: string,
  loc: InternationalLocationData,
): string {
  const phrases = new Set<string>();
  const { country, slug } = loc;

  [
    `web development company in ${city}`,
    `software development company in ${city}`,
    `mobile app development company in ${city}`,
    `IT company in ${city}`,
    `IT services in ${city}`,
    `digital marketing agency ${city}`,
    `SEO company in ${city}`,
    `best web development company in ${city}`,
    `affordable website design ${city}`,
    `hire developers in ${city}`,
    `outsource development from ${city} to India`,
    `offshore web development for ${city} businesses`,
    `${city} startup development partner`,
    `software company in ${city}, ${country}`,
    `web design company ${city}`,
    `app development company ${city}`,
  ].forEach((p) => phrases.add(p));

  SERVICE_SLUGS.forEach((serviceSlug) => {
    getServiceKeywords(serviceSlug)
      .slice(0, 10)
      .forEach((kw) => {
        phrases.add(`${kw} in ${city}`);
        phrases.add(`${kw} ${city}`);
        phrases.add(`best ${kw} in ${city}`);
      });
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} in ${city}`);
    phrases.add(`${SERVICE_LABELS[serviceSlug].toLowerCase()} company ${city}`);
  });

  phrases.add(`offshore IT services ${city} ${country}`);
  phrases.add(`web development ${country} ${city}`);

  return Array.from(phrases).slice(0, 12).join(", ");
}

/** Meta keywords for /services/[service]/global/[country] */
export function buildServiceInternationalKeywords(
  serviceSlug: string,
  loc: InternationalLocationData,
): string {
  const pool = getServiceKeywords(serviceSlug);
  const serviceTitle = SERVICE_LABELS[serviceSlug as (typeof SERVICE_SLUGS)[number]] ?? serviceSlug.replace(/-/g, " ");
  const { country } = loc;
  const phrases = new Set<string>();

  [
    `${serviceTitle.toLowerCase()} for ${country}`,
    `${serviceTitle.toLowerCase()} company in ${country}`,
    `offshore ${serviceTitle.toLowerCase()} for ${country} businesses`,
    `outsource ${serviceTitle.toLowerCase()} from ${country} to India`,
    `hire ${serviceTitle.toLowerCase()} team for ${country}`,
    `best ${serviceSlug.replace(/-/g, " ")} agency for ${country}`,
    `affordable ${serviceTitle.toLowerCase()} ${country}`,
    `top ${serviceTitle.toLowerCase()} company ${country}`,
  ].forEach((p) => phrases.add(p));

  pool.slice(0, 20).forEach((kw) => {
    phrases.add(`${kw} in ${country}`);
    phrases.add(`${kw} for ${country}`);
    phrases.add(`offshore ${kw} ${country}`);
  });

  loc.majorCities.slice(0, 6).forEach((city) => {
    phrases.add(`${serviceTitle.toLowerCase()} company in ${city}`);
    pool.slice(0, 5).forEach((kw) => phrases.add(`${kw} in ${city}`));
  });

  return Array.from(phrases).slice(0, 12).join(", ");
}

export interface SearchTermLink {
  label: string;
  href?: string;
}

/** Visible on-page keyword topics with internal links (country pages). */
export function getCountrySearchTerms(loc: InternationalLocationData): SearchTermLink[] {
  const terms: SearchTermLink[] = [];
  const { country, slug } = loc;

  SERVICE_SLUGS.forEach((serviceSlug) => {
    const label = SERVICE_LABELS[serviceSlug];
    const href = getServiceCountryHref(serviceSlug, slug);
    terms.push({
      label: `${label.toLowerCase()} company in ${country}`,
      href,
    });
    terms.push({
      label: `offshore ${label.toLowerCase()} for ${country}`,
      href,
    });
    getServiceKeywords(serviceSlug)
      .slice(0, 2)
      .forEach((kw) => {
        terms.push({
          label: `${kw} in ${country}`,
          href,
        });
      });
  });

  loc.majorCities.slice(0, 6).forEach((city) => {
    terms.push({
      label: `web development company in ${city}`,
      href: `/locations/global/${slug}/${slugifyCity(city)}`,
    });
    terms.push({
      label: `software development company in ${city}`,
      href: `/locations/global/${slug}/${slugifyCity(city)}`,
    });
  });

  [
    `outsource software development to India from ${country}`,
    `hire offshore developers from India for ${country}`,
    `IT outsourcing company for ${country}`,
    `SaaS development company ${country}`,
    `e-commerce website development ${country}`,
    `React Next.js development ${country}`,
    `mobile app developers for ${country} startups`,
    `digital marketing agency ${country}`,
    `SEO services for ${country} businesses`,
    `dedicated development team ${country}`,
  ].forEach((label) => terms.push({ label }));

  return terms.slice(0, 14);
}

/** Visible on-page keyword topics (city pages). */
export function getCitySearchTerms(city: string, loc: InternationalLocationData): SearchTermLink[] {
  const terms: SearchTermLink[] = [];
  const { country, slug } = loc;

  SERVICE_SLUGS.forEach((serviceSlug) => {
    const label = SERVICE_LABELS[serviceSlug];
    const href = getServiceCountryHref(serviceSlug, slug);
    terms.push({
      label: `${label.toLowerCase()} in ${city}`,
      href,
    });
    getServiceKeywords(serviceSlug)
      .slice(0, 2)
      .forEach((kw) => {
        terms.push({
          label: `${kw} in ${city}`,
          href,
        });
      });
  });

  [
    `best web development company in ${city}`,
    `hire developers in ${city}`,
    `outsource development from ${city} to India`,
    `IT company in ${city}, ${country}`,
    `SaaS development ${city}`,
  ].forEach((label) => terms.push({ label }));

  return terms.slice(0, 12);
}

/** Short fallback copy for city pages that have no hand-written content. */
export function buildCitySeoSections(
  city: string,
  loc: InternationalLocationData,
): { heading: string; body: string }[] {
  const { country, currency, timezoneOverlap, majorCities } = loc;
  const cityList = majorCities.filter((c) => c !== city).slice(0, 4).join(", ");

  return [
    {
      heading: `Web Development for ${city} Businesses`,
      body: `We build websites, online stores and web apps for teams in ${city}. We use React, Next.js, WordPress and Shopify, depending on what fits. A senior engineer leads each project, and a project contact is available during ${city} business hours (about ${timezoneOverlap} of overlap).`,
    },
    {
      heading: `Software and SaaS Development in ${city}`,
      body: `If you are building a SaaS product, an internal tool or a CRM, we can take it from an MVP to a maintained product. We write tests, set up CI/CD and leave documentation behind. Quotes follow a discovery call, and we can bill in ${currency}.`,
    },
    {
      heading: `Mobile Apps for ${city} Companies`,
      body: `We build iOS and Android apps in Flutter, React Native or native code, plus the backend and admin tools behind them. We also help with App Store and Google Play submission.`,
    },
    {
      heading: `SEO and Digital Marketing for ${city}`,
      body: `We do technical SEO, content and paid campaigns for ${city} businesses. SEO takes months, and we cannot promise a Google ranking. We can promise clear reporting.`,
    },
    {
      heading: `Working With Us From ${city}`,
      body: `Our team is in Patna, India. We sign an NDA and IP assignment before work starts, and the code belongs to your ${country} company. Senior engineers are usually quoted at around $25–$45 per hour equivalent. Email contact@golaxindia.com to talk it through.`,
    },
    {
      heading: `Also Serving ${cityList ? `${cityList} and the Rest of ${country}` : `All of ${country}`}`,
      body: cityList
        ? `Besides ${city}, we have pages for ${cityList} and work with clients across ${country}. Delivery is from Patna, with overlap for ${country} business hours.`
        : `We work with clients across ${country}, delivering from Patna with overlap for local business hours and billing in ${currency}.`,
    },
  ];
}