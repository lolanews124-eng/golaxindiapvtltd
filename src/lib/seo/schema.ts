import { BASE_URL } from "@/lib/seo/metadata";
import { ENTITY, areaServedCountryList, organizationRef } from "@/lib/seo/entity";

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFAQPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Speakable for voice / answer-engine extraction (AEO). */
export function buildSpeakableSchema(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}

export function buildServiceSchema({
  name,
  description,
  slug,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}#service`,
    name,
    description,
    serviceType: serviceType ?? name,
    provider: organizationRef(),
    areaServed: areaServedCountryList(),
    url: `${BASE_URL}/services/${slug}`,
  };
}

/** HowTo — “how to start an offshore project” for AEO procedural queries. */
export function buildOffshoreKickoffHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BASE_URL}/#howto-kickoff`,
    name: "How to start an offshore development project with Golax India",
    description:
      "Steps for US, UK, UAE and global buyers to kick off a web, SaaS or mobile engagement with Golax India.",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
      description: "Discovery call is free; project pricing quoted after scope",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book a discovery call",
        text: "Share your goals via the contact form, email contact@golaxindia.com, or WhatsApp +91 9128666005. Free 30-minute discovery call.",
        url: `${BASE_URL}/contact`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive a written multi-currency proposal",
        text: "Within about 48 hours you get a written scope and quote in USD, GBP, AED, AUD or CAD.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Sign NDA, MSA and IP assignment",
        text: "Contracts are signed before coding. IP is assigned to your US/UK/EU or other foreign entity on payment.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Kickoff within 5–7 business days",
        text: "Dedicated PM, senior lead, shared Slack/GitHub and a clear sprint plan. Weekly staging demos follow.",
      },
    ],
    tool: [
      { "@type": "HowToTool", name: "Slack or Microsoft Teams" },
      { "@type": "HowToTool", name: "GitHub or GitLab" },
    ],
  };
}

export interface BlogPostingInput {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  author?: string;
  category?: string;
}

export function parseBlogDateToIso(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export function buildBlogPostingSchema({
  slug,
  headline,
  description,
  datePublished,
  author = "Golax India",
  category,
}: BlogPostingInput) {
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    datePublished: parseBlogDateToIso(datePublished),
    dateModified: parseBlogDateToIso(datePublished),
    author: {
      "@type": "Person",
      name: author,
      worksFor: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: ENTITY.brandName,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: ENTITY.brandName,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en",
    ...(category ? { articleSection: category } : {}),
  };
}

/** HQ coordinates — only use on Patna / home LocalBusiness schema */
export const HQ_GEO = {
  latitude: ENTITY.geo.latitude,
  longitude: ENTITY.geo.longitude,
};
