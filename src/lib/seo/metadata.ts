import type { Metadata } from "next";

const SITE_NAME = "Golax India Pvt Ltd";
export const BASE_URL = "https://golaxindiapvtltd.in";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image`;

export interface PageSeoInput {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  /** Open Graph locale, e.g. en_US */
  locale?: string;
  /** hreflang map: BCP-47 code → path or absolute URL */
  languages?: Record<string, string>;
  /** GEO meta: geo.region, geo.placename, geo.position, ICBM */
  geo?: {
    region: string;
    placename: string;
    position: string;
    icbm: string;
  };
}

function toAbsolute(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function buildMetadata({
  title,
  description,
  keywords = "offshore software development company, hire developers from India, outsource web development to India, dedicated development team India, offshore IT company for USA, hire React developers India, SaaS development India for US startups",
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  locale = "en_US",
  languages,
  geo,
}: PageSeoInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  const languageAlternates = languages
    ? Object.fromEntries(
        Object.entries(languages).map(([code, href]) => [code, toAbsolute(href)]),
      )
    : undefined;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon.png", type: "image/png", sizes: "16x16" },
      ],
      apple: "/favicon.png",
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      title: fullTitle,
      description,
      type: ogType as "website" | "article",
      siteName: SITE_NAME,
      locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      ...(canonicalUrl ? { url: `${BASE_URL}${canonicalUrl}` } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@golaxindiapvtltd",
      creator: "@golaxindiapvtltd",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl
      ? {
          canonical: `${BASE_URL}${canonicalUrl}`,
          ...(languageAlternates ? { languages: languageAlternates } : {}),
        }
      : languageAlternates
        ? { languages: languageAlternates }
        : undefined,
    ...(geo
      ? {
          other: {
            "geo.region": geo.region,
            "geo.placename": geo.placename,
            "geo.position": geo.position,
            ICBM: geo.icbm,
          },
        }
      : {}),
  };
}

export const defaultMetadata = buildMetadata({
  title: "Offshore Software & Web Development Partner for USA & Global Clients",
  description:
    "Hire senior engineers from India for web, SaaS, mobile apps and digital marketing. USD billing, timezone overlap, NDA/IP ready — for USA, UK, UAE, Canada, Australia and beyond.",
  canonicalUrl: "/",
  locale: "en_US",
});
