import type { FaqItem } from "@/lib/seo/schema";

export const webDevelopmentFaqs: FaqItem[] = [
  {
    question: "How long does a website take?",
    answer:
      "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks depending on features.",
  },
  {
    question: "Will my site be optimised for SEO?",
    answer:
      "Yes. We build with technical SEO in mind: metadata, structured data, sitemaps, fast loading and clean architecture. Ongoing SEO can be added separately.",
  },
  {
    question: "Can you redesign my existing site without losing rankings?",
    answer:
      "Yes. We map every old URL to a new one with 301 redirects and check indexing after launch.",
  },
  {
    question: "Do I need to pay hosting to you?",
    answer:
      "No. Hosting is set up in your own account on Vercel, AWS, Azure or your preferred provider. We can manage it for a monthly fee if you prefer hands-off operations.",
  },
  {
    question: "How do you handle NDAs and IP for web projects?",
    answer:
      "We sign an NDA before sensitive discovery and assign IP to your company in the development agreement before coding starts. Repositories and hosting remain in accounts you control.",
  },
];

export const softwareDevelopmentFaqs: FaqItem[] = [
  {
    question: "How much does an MVP cost?",
    answer:
      "Most SaaS MVPs fall between $15,000 and $60,000. The main drivers are the number of user roles, integrations and how custom the interface is. We give a written estimate after discovery.",
  },
  {
    question: "Who owns the source code?",
    answer:
      "You do. It is assigned to you in the contract and lives in your repository.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Yes. We start with a code and architecture review, then propose a fix, refactor or rebuild plan.",
  },
  {
    question: "Can my team continue after the MVP?",
    answer:
      "Yes. We document architecture, APIs and deployment steps and can hand over cleanly or continue as a dedicated team on monthly terms.",
  },
  {
    question: "Do you work in US or UK time zones?",
    answer:
      "Yes. We agree four to five hours of daily overlap for stand-ups, demos and planning with US, UK, Canada or Gulf teams, with async progress between sessions.",
  },
];

export const mobileAppDevelopmentFaqs: FaqItem[] = [
  {
    question: "Should I build native or cross-platform?",
    answer:
      "Cross-platform (Flutter or React Native) is usually faster and cheaper and fits most business apps. Native is better for heavy graphics, advanced device features or maximum performance. We recommend based on your product.",
  },
  {
    question: "How long does an app take?",
    answer:
      "An MVP typically takes 10 to 16 weeks including design, build, testing and store approval.",
  },
  {
    question: "Do you publish the app on my developer accounts?",
    answer:
      "Yes. We use your Apple and Google developer accounts so you own the listing.",
  },
  {
    question: "Do you maintain apps after launch?",
    answer:
      "Yes. Monthly support covers bug fixes, dependency updates, store policy changes and new iOS or Android OS versions that affect your build.",
  },
  {
    question: "Who owns the app source code?",
    answer:
      "You do. Code lives in your repository with IP assigned in the contract. Store listings remain under your Apple and Google developer accounts.",
  },
];

export const digitalMarketingFaqs: FaqItem[] = [
  {
    question: "How long does SEO take to work?",
    answer:
      "Expect early technical gains within one to three months and meaningful ranking growth in six to twelve months, depending on competition and your domain's history.",
  },
  {
    question: "Can you guarantee first-page rankings?",
    answer:
      "No honest agency can. We commit to a clear plan, consistent work and transparent reporting.",
  },
  {
    question: "Do you do Google Ads too?",
    answer:
      "Yes. Paid campaigns can bring leads while SEO builds momentum.",
  },
  {
    question: "Can you target only the US and UK?",
    answer:
      "Yes. We build country-specific pages and content so search engines and buyers see that you serve those markets.",
  },
  {
    question: "Will you fix technical SEO on our Next.js or WordPress site?",
    answer:
      "Yes. Crawl errors, Core Web Vitals, schema, internal links and indexation issues are in scope. We coordinate with your developers or implement fixes directly when you grant access.",
  },
  {
    question: "How do you report progress?",
    answer:
      "Monthly reports cover keyword movement, traffic, leads and ad performance where applicable. We explain what changed, what we did and what is planned next—no vanity metrics without context.",
  },
];

export const itConsultingFaqs: FaqItem[] = [
  {
    question: "Can you migrate us from on-premise to the cloud?",
    answer:
      "Yes. We plan in waves, test each stage and keep rollback options.",
  },
  {
    question: "Can you help us pass a customer security review?",
    answer:
      "We can help prepare policies, access controls and evidence. Formal audits such as SOC 2 are done by independent auditors.",
  },
  {
    question: "Will you reduce our AWS bill?",
    answer:
      "Most teams find savings through right-sizing, reserved capacity and removing unused resources. We quantify the potential in the assessment.",
  },
  {
    question: "Do you sign NDAs before accessing our infrastructure?",
    answer:
      "Yes. We execute an NDA before read-only access to cloud consoles, repos or runbooks. Access is least-privilege and revoked when the engagement ends.",
  },
  {
    question: "Can consulting overlap with US or UK hours?",
    answer:
      "Yes. Workshops, incident reviews and steering calls are scheduled in overlap windows with US Eastern, UK or Singapore time as you prefer.",
  },
];

export const serviceFaqsBySlug: Record<string, FaqItem[]> = {
  "web-development": webDevelopmentFaqs,
  "software-development": softwareDevelopmentFaqs,
  "mobile-app-development": mobileAppDevelopmentFaqs,
  "digital-marketing": digitalMarketingFaqs,
  "it-consulting": itConsultingFaqs,
};

export const serviceMetaForSchema: Record<
  string,
  { name: string; description: string; serviceType: string }
> = {
  "web-development": {
    name: "Offshore Web Development",
    description:
      "Custom website and web application development for US and global clients — React, Next.js, Shopify, headless commerce.",
    serviceType: "Web Development",
  },
  "software-development": {
    name: "Offshore Software & SaaS Development",
    description:
      "Custom SaaS, ERP, CRM and enterprise software for US startups and international product teams.",
    serviceType: "Software Development",
  },
  "mobile-app-development": {
    name: "Offshore Mobile App Development",
    description:
      "iOS, Android and Flutter/React Native app development for US and global App Store launches.",
    serviceType: "Mobile Application Development",
  },
  "digital-marketing": {
    name: "Digital Marketing & SEO",
    description:
      "SEO, Google Ads and social campaigns for US and international brands seeking organic and paid growth.",
    serviceType: "Digital Marketing",
  },
  "it-consulting": {
    name: "IT Consulting & Cloud Services",
    description:
      "AWS/Azure migration, DevOps and IT strategy consulting for US and global product teams.",
    serviceType: "IT Consulting",
  },
  "ecommerce-development": {
    name: "E-commerce Development",
    description:
      "Shopify, headless commerce and custom online stores with international payments and tax-ready checkout.",
    serviceType: "E-commerce Development",
  },
  "ui-ux-design": {
    name: "UI/UX Design Services",
    description:
      "Product design, design systems and conversion-focused interfaces for web and mobile.",
    serviceType: "UI/UX Design",
  },
  "crm-erp-solutions": {
    name: "Custom CRM & ERP Solutions",
    description:
      "Custom CRM, ERP and internal tools that replace spreadsheets and overlapping SaaS subscriptions.",
    serviceType: "CRM and ERP Development",
  },
  "dedicated-development-teams": {
    name: "Dedicated Development Teams",
    description:
      "Full-time offshore engineers dedicated to your product with NDA, IP assignment and timezone overlap.",
    serviceType: "Dedicated Software Team",
  },
  "hire-react-developers": {
    name: "Hire React Developers",
    description:
      "Senior React and Next.js developers for dashboards, marketing sites and SaaS front ends.",
    serviceType: "React Development",
  },
  "hire-nodejs-developers": {
    name: "Hire Node.js Developers",
    description:
      "Node.js and TypeScript backend engineers for APIs, SaaS and real-time applications.",
    serviceType: "Node.js Development",
  },
  "hire-flutter-developers": {
    name: "Hire Flutter Developers",
    description:
      "Flutter developers for cross-platform iOS and Android apps with store-ready delivery.",
    serviceType: "Flutter Development",
  },
  "hire-python-developers": {
    name: "Hire Python Developers",
    description:
      "Python developers for Django, FastAPI, data pipelines and AI-enabled product features.",
    serviceType: "Python Development",
  },
};
