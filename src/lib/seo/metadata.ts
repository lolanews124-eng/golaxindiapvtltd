import type { Metadata } from "next";

/** Short brand for SERP titles (keeps | Brand within 50–60 chars). */
export const SITE_BRAND = "Golax India";
/** Legal / schema display name */
export const SITE_NAME = "Golax India Pvt Ltd";

/**
 * Preferred public origin. Override with NEXT_PUBLIC_SITE_URL when the
 * canonical domain changes (no code edits required).
 */
export const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://golaxindiapvtltd.in"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image`;

const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 155;
const BRAND_SUFFIX = ` | ${SITE_BRAND}`;

export interface PageSeoInput {
  /**
   * Primary keyword / page title WITHOUT the brand suffix.
   * Final document title becomes `${title} | Golax India` (clamped to 50–60).
   */
  title: string;
  /** Benefit-led meta description; clamped to 140–155 characters. */
  description: string;
  keywords?: string;
  /** Path or absolute URL; always emitted as an absolute self-referencing canonical. */
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  locale?: string;
  languages?: Record<string, string>;
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

/** Strip a brand suffix if callers accidentally include it. */
function stripBrand(title: string): string {
  return title
    .replace(/\s*\|\s*Golax India( Pvt Ltd)?\s*$/i, "")
    .replace(/\s*[–—-]\s*Golax India( Pvt Ltd)?\s*$/i, "")
    .trim();
}

/**
 * Build a SERP title: primary keyword first, brand last, 50–60 characters.
 * Prefer shortening the primary phrase over dropping the brand.
 */
export function formatSeoTitle(primary: string): string {
  let core = stripBrand(primary);
  // Drop secondary pipe segments (currency/timezone badges) — brand is appended once.
  if (core.includes(" | ")) {
    core = core.split(" | ")[0].trim();
  }
  let full = `${core}${BRAND_SUFFIX}`;

  if (full.length > TITLE_MAX) {
    const maxCore = TITLE_MAX - BRAND_SUFFIX.length;
    core = core.slice(0, maxCore).replace(/[\s,;:.\-/|]+$/u, "").trim();
    full = `${core}${BRAND_SUFFIX}`;
  }

  if (full.length < TITLE_MIN && process.env.NODE_ENV === "development") {
    console.warn(
      `[seo] Title under ${TITLE_MIN} chars (${full.length}): "${full}"`,
    );
  }

  return full;
}

/** Clamp description to 140–155 chars without cutting mid-word when possible. */
export function formatSeoDescription(text: string): string {
  let d = text.replace(/\s+/g, " ").trim();
  if (d.length <= DESC_MAX) {
    if (d.length < DESC_MIN && process.env.NODE_ENV === "development") {
      console.warn(
        `[seo] Description under ${DESC_MIN} chars (${d.length}): "${d.slice(0, 40)}…"`,
      );
    }
    return d;
  }
  const sliced = d.slice(0, DESC_MAX);
  const lastSpace = sliced.lastIndexOf(" ");
  const cut = lastSpace > DESC_MIN - 20 ? sliced.slice(0, lastSpace) : sliced;
  return cut.replace(/[,;:\-\s]+$/u, "").trim();
}

export function buildMetadata({
  title,
  description,
  keywords = "offshore software development company, hire dedicated developers from India, outsource software development to India, SaaS development company India, hire React developers",
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  locale = "en_US",
  languages,
  geo,
}: PageSeoInput): Metadata {
  const fullTitle = formatSeoTitle(title);
  const metaDescription = formatSeoDescription(description);
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  const languageAlternates = languages
    ? Object.fromEntries(
        Object.entries(languages).map(([code, href]) => [code, toAbsolute(href)]),
      )
    : undefined;

  const canonical = canonicalUrl ? toAbsolute(canonicalUrl) : undefined;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description: metaDescription,
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
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      type: ogType as "website" | "article",
      siteName: SITE_NAME,
      locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@golaxindiapvtltd",
      creator: "@golaxindiapvtltd",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: canonical
      ? {
          canonical,
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
  title: "Offshore Software Development Company",
  description:
    "Hire dedicated developers from India for web, SaaS and mobile. Outsource to Golax India with USD billing, timezone overlap and NDA/IP-ready contracts. Get a free quote today.",
  canonicalUrl: "/",
  locale: "en_US",
});
