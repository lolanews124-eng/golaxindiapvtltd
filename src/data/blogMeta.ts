import { getSeoBlogMeta } from "@/data/seoBlogPosts";

/** Metadata for legacy blog posts (pre–seoBlogPosts.ts). Titles are primary-only; brand is appended by buildMetadata. */
const legacyBlogMeta: Record<
  string,
  { seoTitle: string; description: string; keywords: string }
> = {
  "mobile-app-development-trends-2026": {
    seoTitle: "Mobile App Development Trends 2026",
    description:
      "Practical 2026 mobile trends: on-device AI, Flutter and React Native, privacy defaults and release discipline. Apply them with Golax India’s mobile team.",
    keywords:
      "mobile app trends 2026, Flutter development, hire Flutter developers, mobile app development company India",
  },
  "choosing-right-technology-stack": {
    seoTitle: "How to Choose a Startup Tech Stack",
    description:
      "Pick frontend, backend and mobile stacks by time-to-market, hiring and scale — not hype. Get a stack review from Golax India before you build.",
    keywords:
      "choose technology stack, startup tech stack, hire React developers, software architecture consulting",
  },
  "ecommerce-website-essentials": {
    seoTitle: "Must-Have E-commerce Features 2026",
    description:
      "Store features international buyers expect: mobile checkout, multi-currency payments, trust and SEO. Plan your build with Golax India today.",
    keywords:
      "e-commerce website features, Shopify development company India, headless commerce, online store UX",
  },
  "cloud-migration-guide-smes": {
    seoTitle: "Cloud Migration Guide for Growing Teams",
    description:
      "Phased AWS, Azure or GCP migration with cost control, security baselines and cutover plans. Ask Golax India for a landing-zone assessment.",
    keywords:
      "cloud migration guide, AWS Azure GCP migration, IT consulting cloud, SME cloud computing",
  },
  "website-security-best-practices": {
    seoTitle: "Website Security Best Practices 2026",
    description:
      "TLS, MFA, backups, WAF and dependency hygiene founders can actually run. Request a web hardening review from Golax India.",
    keywords:
      "website security best practices, web application hardening, secure website development, WAF SSL backups",
  },
  "react-vs-angular-2026": {
    seoTitle: "React vs Angular in 2026",
    description:
      "Compare React and Angular for hiring, architecture and delivery speed in 2026. Decide with Golax India’s frontend leads before kickoff.",
    keywords:
      "React vs Angular 2026, hire React developers, JavaScript framework comparison, Next.js vs Angular",
  },
  "ai-transforming-business-operations": {
    seoTitle: "How AI Transforms Business Operations",
    description:
      "Practical AI for support, sales, ops and finance with ROI metrics and governance. Scope a pilot workshop with Golax India.",
    keywords:
      "AI business operations, AI automation ROI, applied AI consulting, AI software development",
  },
  "building-scalable-web-applications": {
    seoTitle: "Scalable Web Application Architecture",
    description:
      "Scale in stages with caching, async jobs and observability — not premature microservices. Review your architecture with Golax India.",
    keywords:
      "scalable web application, web app architecture, Node.js scalability, Redis caching",
  },
  "ux-design-principles-conversion": {
    seoTitle: "UX Principles That Boost Conversion",
    description:
      "Clarity, hierarchy, friction cuts and trust near CTAs that beat cosmetic redesigns. Book a conversion UX audit with Golax India.",
    keywords:
      "UX design conversion, conversion rate optimization, website UX audit, CRO tips 2026",
  },
};

export function getBlogMetadata(slug: string) {
  return getSeoBlogMeta(slug) ?? legacyBlogMeta[slug] ?? null;
}

export function getAllBlogSlugs(): string[] {
  return [...Object.keys(legacyBlogMeta)];
}
