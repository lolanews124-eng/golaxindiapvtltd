import { getSeoBlogMeta } from "@/data/seoBlogPosts";

/** Metadata for legacy blog posts (pre–seoBlogPosts.ts). */
const legacyBlogMeta: Record<
  string,
  { seoTitle: string; description: string; keywords: string }
> = {
  "mobile-app-development-trends-2026": {
    seoTitle: "Mobile App Trends 2026 for Product Teams",
    description:
      "2026 mobile trends that matter: practical AI, Flutter/React Native, privacy defaults, offline-first UX, and release discipline for global apps.",
    keywords:
      "mobile app trends 2026, Flutter development, React Native 2026, cross-platform apps, mobile app development company",
  },
  "choosing-right-technology-stack": {
    seoTitle: "How to Choose a Startup Tech Stack",
    description:
      "A practical framework for choosing frontend, backend, data and mobile stacks—time-to-market, hiring, cost and scale without cargo-cult architecture.",
    keywords:
      "choose technology stack, startup tech stack, React Node PostgreSQL, Flutter vs native, software architecture consulting",
  },
  "ecommerce-website-essentials": {
    seoTitle: "Must-Have E-commerce Features 2026",
    description:
      "Essential e-commerce features for international stores—mobile checkout, multi-currency payments, SEO, trust and conversion UX in 2026.",
    keywords:
      "e-commerce website features, online store development, Shopify headless, multi-currency checkout, e-commerce UX 2026",
  },
  "cloud-migration-guide-smes": {
    seoTitle: "Cloud Migration Guide for Growing Businesses",
    description:
      "Phased cloud migration to AWS, Azure or GCP—cost control, security baselines, landing zones and cutover plans for SMEs and mid-market teams.",
    keywords:
      "cloud migration guide, AWS Azure GCP migration, SME cloud computing, cloud landing zone, IT consulting cloud",
  },
  "website-security-best-practices": {
    seoTitle: "Website Security Best Practices 2026",
    description:
      "Security baseline for marketing sites and SaaS—TLS, MFA, backups, WAF, dependency hygiene and an incident playbook founders can run.",
    keywords:
      "website security best practices, web application hardening, SSL WAF backups, cybersecurity SMB, secure website development",
  },
  "react-vs-angular-2026": {
    seoTitle: "React vs Angular in 2026",
    description:
      "React vs Angular for 2026 product teams—hiring, architecture, Next.js defaults, enterprise fit and when each framework pays off.",
    keywords:
      "React vs Angular 2026, JavaScript framework comparison, Next.js vs Angular, frontend framework choice, React development",
  },
  "ai-transforming-business-operations": {
    seoTitle: "How AI Transforms Business Operations",
    description:
      "Practical AI for support, sales, ops and finance—phased adoption, ROI metrics, governance and avoiding demo-ware.",
    keywords:
      "AI business operations, AI automation ROI, applied AI consulting, chatbot automation, AI software development",
  },
  "building-scalable-web-applications": {
    seoTitle: "Scalable Web Application Architecture",
    description:
      "Build scalable web apps in stages—stateless APIs, caching, async jobs, data strategy and observability without premature microservices.",
    keywords:
      "scalable web application, web app architecture, horizontal scaling, Redis caching, Node.js scalability",
  },
  "ux-design-principles-conversion": {
    seoTitle: "UX Principles That Boost Conversion",
    description:
      "Conversion-focused UX—clarity, hierarchy, friction cuts, trust near CTAs and measurement loops that beat cosmetic redesigns.",
    keywords:
      "UX design conversion, conversion rate optimization, website UX audit, CTA design, CRO tips 2026",
  },
};

export function getBlogMetadata(slug: string) {
  return getSeoBlogMeta(slug) ?? legacyBlogMeta[slug] ?? null;
}

export function getAllBlogSlugs(): string[] {
  return [
    ...Object.keys(legacyBlogMeta),
    // seo slugs imported dynamically to avoid duplication — use static-params as source of truth
  ];
}
