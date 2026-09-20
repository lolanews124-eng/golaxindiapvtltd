/**
 * Dedicated service / hire landing pages (international buyer focus).
 * Content aligned with SEO Part 2 (tmp-seo-plan / tmp-services-copy).
 */

export interface ServiceLandingFaq {
  question: string;
  answer: string;
}

export interface ServiceLandingSection {
  heading: string;
  body: string[];
}

export interface ServiceLandingRelated {
  href: string;
  label: string;
}

export interface ServiceLanding {
  slug: string;
  /** Primary keyword in H1 */
  h1: string;
  heroLead: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  sections: ServiceLandingSection[];
  process: { title: string; description: string }[];
  stack: string[];
  pricingNote: string;
  faqs: ServiceLandingFaq[];
  relatedServices: ServiceLandingRelated[];
  relatedLocations: ServiceLandingRelated[];
}

export const serviceLandingSlugs = [
  "ecommerce-development",
  "ui-ux-design",
  "crm-erp-solutions",
  "dedicated-development-teams",
  "hire-react-developers",
  "hire-nodejs-developers",
  "hire-flutter-developers",
  "hire-python-developers",
] as const;

export type ServiceLandingSlug = (typeof serviceLandingSlugs)[number];

export const serviceLandings: Record<ServiceLandingSlug, ServiceLanding> = {
  "ecommerce-development": {
    slug: "ecommerce-development",
    h1: "E-commerce Development for International Online Stores",
    heroLead:
      "We build online stores that sell in more than one country. Our team creates Shopify stores, headless Next.js storefronts and custom platforms with fast checkout, international payments, tax and shipping so you can sell to the US, UK, Canada, Australia and the Gulf.",
    seoTitle: "E-commerce Development Company India | Shopify & Headless",
    metaDescription:
      "Shopify, headless commerce and custom online stores with Stripe, PayPal and tax-ready checkout for US, UK and global retailers.",
    keywords:
      "e-commerce development company India, Shopify development, headless commerce, international online store development",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Shopify and Shopify Plus stores, themes and apps. Headless commerce with Next.js and Shopify, BigCommerce or Medusa. Custom marketplace and B2B ordering portals. Checkout optimisation and abandoned-cart flows.",
          "Payments: Stripe, PayPal, Apple Pay, Google Pay and local methods. Tax, VAT and multi-currency setup. Inventory, ERP and shipping integrations. Speed and conversion optimisation.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Direct-to-consumer brands, retailers moving from an old platform, and B2B sellers who need portals for repeat orders.",
        ],
      },
      {
        heading: "Why choose Golax India for e-commerce development",
        body: [
          "Store speed as a priority because it affects conversion and SEO. Experience with multi-currency and multi-region setups. Clean migrations that preserve SEO. Ongoing optimisation, not just launch.",
        ],
      },
    ],
    process: [
      {
        title: "Store strategy",
        description: "Catalogue, markets, payments and integrations.",
      },
      {
        title: "Design",
        description: "Product page and checkout focused on conversion.",
      },
      {
        title: "Build and migrate",
        description: "Products, customers and orders.",
      },
      {
        title: "Test",
        description: "Payments, tax, shipping and mobile flows.",
      },
      {
        title: "Launch",
        description: "Monitor performance.",
      },
      {
        title: "Grow",
        description: "A/B tests and merchandising tools.",
      },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "Next.js",
      "Node.js",
      "Stripe",
      "PayPal",
      "Klaviyo",
      "Algolia",
      "Cloud hosting (headless)",
    ],
    pricingNote:
      "Standard Shopify stores start in the low thousands of dollars. Headless and custom platforms are scoped after discovery. Monthly support covers updates and campaigns.",
    faqs: [
      {
        question: "Shopify or custom store?",
        answer:
          "Shopify suits most brands and launches faster. Custom or headless suits complex catalogues, unique experiences or high-volume needs.",
      },
      {
        question: "Can you migrate my store without losing SEO?",
        answer: "Yes. We map URLs, keep metadata and set 301 redirects.",
      },
      {
        question: "Do you handle tax and VAT?",
        answer:
          "We configure the tools and rules. Your accountant confirms your tax obligations.",
      },
    ],
    relatedServices: [
      { href: "/services/web-development", label: "Offshore web development" },
      { href: "/services/ui-ux-design", label: "UI/UX design for conversion" },
      { href: "/services/digital-marketing", label: "SEO & digital marketing" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA offshore partner" },
      { href: "/locations/global/united-kingdom", label: "UK software partner" },
      { href: "/locations/global/united-arab-emirates", label: "UAE development partner" },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    h1: "UI/UX Design Services for Web and Mobile Products",
    heroLead:
      "Good design reduces development cost and raises conversion. Our designers work with product teams abroad to turn ideas into clear flows, clean interfaces and tested prototypes that developers can build without guesswork.",
    seoTitle: "UI/UX Design Services for SaaS & Apps | Golax India",
    metaDescription:
      "Product design, design systems and conversion-focused landing pages by an India-based team, tested with users before development.",
    keywords:
      "UI UX design services, SaaS product design, Figma design company India, conversion-focused landing pages",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "User research, personas and journey maps. Wireframes and interactive prototypes in Figma. High-fidelity UI for web, SaaS dashboards and mobile apps. Design systems and component libraries.",
          "Conversion-focused landing pages for paid and organic traffic. Usability testing and accessibility (WCAG) review. Developer handoff with specs and assets.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Founders shaping an MVP, product managers redesigning a confusing interface, and marketers who need landing pages that convert.",
        ],
      },
      {
        heading: "Why choose Golax India for UI/UX design",
        body: [
          "Design and development under one roof, so designs are buildable. Accessibility and performance considered from the start. Designs made for international audiences and languages. Clear documentation and handoff.",
        ],
      },
    ],
    process: [
      {
        title: "Understand",
        description: "Goals, users, competitors and constraints.",
      },
      {
        title: "Structure",
        description: "User flows and wireframes.",
      },
      {
        title: "Design",
        description: "Visual language and screens.",
      },
      {
        title: "Test",
        description: "Prototype testing with real users.",
      },
      {
        title: "Handoff",
        description: "Design system and specs.",
      },
      {
        title: "Support",
        description: "Review of the built product against the design.",
      },
    ],
    stack: [
      "Figma",
      "FigJam",
      "Maze / UserTesting",
      "Storybook",
      "Hotjar / Microsoft Clarity",
    ],
    pricingNote:
      "Design sprints and landing pages are fixed-price. Full product design is scoped by screens and complexity, or provided as a monthly design retainer.",
    faqs: [
      {
        question: "Can you design and build?",
        answer:
          "Yes. Combining both avoids handoff problems and shortens delivery.",
      },
      {
        question: "Do you test designs with users?",
        answer:
          "Yes. We run moderated or unmoderated tests using prototypes before development.",
      },
      {
        question: "Will you follow my brand?",
        answer:
          "Yes. We can work within an existing brand or build a new visual identity.",
      },
    ],
    relatedServices: [
      { href: "/services/web-development", label: "Web development" },
      { href: "/services/ecommerce-development", label: "E-commerce development" },
      { href: "/services/hire-react-developers", label: "Hire React developers" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/united-kingdom", label: "United Kingdom" },
      { href: "/locations/global/australia", label: "Australia" },
    ],
  },

  "crm-erp-solutions": {
    slug: "crm-erp-solutions",
    h1: "Custom CRM and ERP Solutions",
    heroLead:
      "Many growing businesses run on spreadsheets and a patchwork of subscriptions that do not talk to each other. We design and build custom CRM, ERP and internal tools that match how you actually work, reduce manual effort and give you one source of truth.",
    seoTitle: "Custom CRM & ERP Development Company India | Golax",
    metaDescription:
      "Build custom CRM, ERP and internal tools that replace spreadsheets and costly SaaS stacks. Senior engineers, NDA and full IP ownership.",
    keywords:
      "custom CRM development, ERP development company India, internal tools development, replace spreadsheets",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Custom CRM: leads, pipeline, contacts, quotes and follow-ups. ERP modules: inventory, purchasing, invoicing, HR and production. Workflow automation and approvals. Customer and supplier portals.",
          "Reporting dashboards and data exports. Integrations with accounting, e-commerce, email and payment tools. Migration from spreadsheets and legacy systems.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Manufacturers, distributors, service firms and agencies that have outgrown off-the-shelf tools or pay for many overlapping subscriptions.",
        ],
      },
      {
        heading: "Why choose Golax India for CRM and ERP development",
        body: [
          "We compare build versus buy honestly and tell you if an existing tool is better. Modular design so you pay only for what you need. Data ownership and export at all times. Training and documentation for your team.",
        ],
      },
    ],
    process: [
      {
        title: "Process mapping",
        description: "How work flows today.",
      },
      {
        title: "Blueprint",
        description: "Modules, users, permissions and reports.",
      },
      {
        title: "Phased build",
        description: "Start with the module that saves most time.",
      },
      {
        title: "Data migration and training",
        description: "Clean imports and team readiness.",
      },
      {
        title: "Go-live with support",
        description: "Launch with hands-on help.",
      },
      {
        title: "Continuous improvements",
        description: "Iterate as your operations evolve.",
      },
    ],
    stack: [
      "React",
      "Node.js",
      "Laravel",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "REST / GraphQL APIs",
      "AWS / Azure",
    ],
    pricingNote:
      "Delivered in phases so you see value early. Phase one is often fixed-price, followed by monthly development or support.",
    faqs: [
      {
        question: "Is custom software better than a SaaS tool?",
        answer:
          "It is better when your process is unique or when subscription costs and workarounds are high. If a standard tool fits, we will say so.",
      },
      {
        question: "Can you connect it to QuickBooks or Xero?",
        answer: "Yes, through their APIs.",
      },
      {
        question: "How do you handle our existing data?",
        answer:
          "We map, clean and import your data, and test it with your team before go-live.",
      },
    ],
    relatedServices: [
      { href: "/services/software-development", label: "SaaS & custom software" },
      { href: "/services/dedicated-development-teams", label: "Dedicated development teams" },
      { href: "/services/hire-nodejs-developers", label: "Hire Node.js developers" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/germany", label: "Germany" },
      { href: "/locations/global/singapore", label: "Singapore" },
    ],
  },

  "dedicated-development-teams": {
    slug: "dedicated-development-teams",
    h1: "Hire a Dedicated Development Team from India",
    heroLead:
      "A dedicated team gives you full-time engineers who work only on your product, take direction from you and join your stand-ups, tools and roadmap. You get the control of an in-house team with lower cost, faster hiring and no local employment overhead.",
    seoTitle: "Hire Dedicated Development Team from India | Golax",
    metaDescription:
      "Hire a vetted dedicated team of engineers from India at $25-45/hr with US/UK overlap. Month-to-month, NDA and IP assignment included.",
    keywords:
      "hire dedicated development team India, dedicated developers, offshore development team, $25-45 per hour developers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Full-time developers, QA engineers, designers, DevOps and a project manager as needed. Team set-up in one to two weeks after contract. Working overlap with US, UK, Gulf or Singapore hours.",
          "Weekly reports, sprint demos and transparent timesheets. Flexible scaling: add or reduce members with notice. Knowledge transfer and documentation.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product companies with a long roadmap, agencies that need capacity, and startups that want engineers without hiring locally.",
        ],
      },
      {
        heading: "Why choose Golax India for dedicated development teams",
        body: [
          "You interview and approve every team member. Team members stay on your project, not shared across clients. If a team member is not the right fit, we work with you on a replacement within the terms in your contract. Legal protection and secure access controls.",
        ],
      },
    ],
    process: [
      {
        title: "Define roles",
        description: "Roles and skills you need.",
      },
      {
        title: "Shortlist and interview",
        description: "We shortlist candidates; you interview them.",
      },
      {
        title: "Contract",
        description: "NDA, MSA and IP assignment; monthly billing.",
      },
      {
        title: "Onboarding",
        description: "Tools, repositories, access and rituals.",
      },
      {
        title: "Delivery",
        description: "Sprints, code review and reporting.",
      },
      {
        title: "Review",
        description: "Monthly review and adjust team size.",
      },
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Laravel",
      "Flutter",
      "React Native",
      "AWS / Azure",
      "PostgreSQL",
      "MongoDB",
    ],
    pricingNote:
      "Senior engineers are billed at roughly $25-$45 per hour equivalent on a monthly basis, depending on skill and seniority. There are no hidden fees, and notice periods are stated in the contract.",
    faqs: [
      {
        question: "What is the minimum team size?",
        answer:
          "One engineer is possible, though two or three with a lead work best.",
      },
      {
        question: "Can I scale the team up or down?",
        answer: "Yes, with notice as stated in the contract.",
      },
      {
        question: "Who manages the team?",
        answer:
          "You direct the product and priorities. Our project manager handles day-to-day coordination if you want.",
      },
      {
        question: "How quickly can the team start?",
        answer: "Usually within one to two weeks after signing.",
      },
    ],
    relatedServices: [
      { href: "/services/hire-react-developers", label: "Hire React developers" },
      { href: "/services/hire-nodejs-developers", label: "Hire Node.js developers" },
      { href: "/services/software-development", label: "SaaS development" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/united-kingdom", label: "UK" },
      { href: "/locations/global/canada", label: "Canada" },
    ],
  },

  "hire-react-developers": {
    slug: "hire-react-developers",
    h1: "Hire React Developers from India",
    heroLead:
      "Hire experienced React and Next.js developers who build fast, accessible and maintainable interfaces. Our engineers work full time on your product or on a fixed-scope project, with code you can hand to any future team.",
    seoTitle: "Hire React Developers from India | Golax India",
    metaDescription:
      "Hire senior React and Next.js developers from India at $25-45/hr with US/UK overlap. Trial period, NDA and full IP assignment.",
    keywords:
      "hire React developers India, hire Next.js developers, React development company, senior React engineers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "React and Next.js web apps and dashboards. Server-side rendering and static generation for SEO. Component libraries and design system implementation. State management with Redux, Zustand or React Query.",
          "TypeScript migration and code refactoring. Performance profiling and Core Web Vitals work. Testing with Jest, React Testing Library and Playwright.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams that need front-end capacity, agencies that need reliable React talent, and startups building SaaS dashboards.",
        ],
      },
      {
        heading: "Why choose Golax India for React developers",
        body: [
          "Vetted through code tests and interviews. Comfortable with pull requests, CI and agile ceremonies. Attention to accessibility and speed. Clean, typed, documented code.",
        ],
      },
    ],
    process: [
      {
        title: "Share requirements",
        description: "Your requirements and stack.",
      },
      {
        title: "Interview",
        description: "Interview shortlisted developers.",
      },
      {
        title: "Trial sprint",
        description: "Optional paid trial sprint to validate fit before a longer engagement.",
      },
      {
        title: "Work in your tools",
        description: "Your repository, tools and time zone.",
      },
      {
        title: "Continue monthly",
        description: "Monthly engagement with notice terms.",
      },
    ],
    stack: [
      "React 18+",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "GraphQL",
      "Storybook",
      "Vite",
      "Jest",
      "Cypress / Playwright",
    ],
    pricingNote:
      "Roughly $25-$45 per hour equivalent, billed monthly for full-time engineers. Part-time and project-based options are available.",
    faqs: [
      {
        question: "How do you vet React developers?",
        answer:
          "Through a technical interview, a practical coding task and a review of previous work.",
      },
      {
        question: "Can they work in my time zone?",
        answer: "Yes. We agree an overlap window that fits your team.",
      },
      {
        question: "Do you offer part-time developers?",
        answer: "Yes, from half-time upwards.",
      },
    ],
    relatedServices: [
      { href: "/services/web-development", label: "Web development" },
      { href: "/services/hire-nodejs-developers", label: "Hire Node.js developers" },
      { href: "/services/dedicated-development-teams", label: "Dedicated teams" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/united-kingdom", label: "UK" },
      { href: "/locations/global/germany", label: "Germany" },
    ],
  },

  "hire-nodejs-developers": {
    slug: "hire-nodejs-developers",
    h1: "Hire Node.js Developers from India",
    heroLead:
      "Our Node.js and TypeScript engineers build secure, scalable back ends: REST and GraphQL APIs, real-time features, background jobs and integrations. Hire one engineer or a full back-end team to work alongside your product and front-end developers.",
    seoTitle: "Hire Node.js Developers from India | Golax India",
    metaDescription:
      "Hire senior Node.js and TypeScript backend developers from India for APIs, SaaS and real-time apps. NDA, IP assignment, US/UK overlap.",
    keywords:
      "hire Node.js developers India, TypeScript backend developers, API development, NestJS Express developers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "REST and GraphQL API development. Microservices and event-driven systems. Real-time features with WebSockets. Authentication, authorisation and payments.",
          "Database design in PostgreSQL, MongoDB and Redis. Queues and background processing. Third-party integrations and webhooks. Testing, logging and monitoring.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "SaaS startups, marketplaces and enterprises needing dependable back-end engineers.",
        ],
      },
      {
        heading: "Why choose Golax India for Node.js developers",
        body: [
          "Strong TypeScript and testing habits. Security practice: input validation, rate limiting and secrets management. Experience with scale and observability. Straightforward communication.",
        ],
      },
    ],
    process: [
      {
        title: "Define scope",
        description: "Back-end scope and stack.",
      },
      {
        title: "Interview",
        description: "Interview shortlisted engineers.",
      },
      {
        title: "Onboard",
        description: "Onboard into your repository and CI.",
      },
      {
        title: "Sprints",
        description: "Work in sprints with code review.",
      },
      {
        title: "Scale",
        description: "Scale the team as needed.",
      },
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ / SQS",
      "Docker",
      "AWS / Azure",
    ],
    pricingNote:
      "Roughly $25-$45 per hour equivalent on monthly billing, depending on seniority.",
    faqs: [
      {
        question: "Do you work with NestJS or Express?",
        answer:
          "Both, and Fastify. We follow your existing standards or recommend one.",
      },
      {
        question: "Can you build our API from scratch?",
        answer: "Yes. We can design and build it or extend your current one.",
      },
      {
        question: "Can you help with database performance?",
        answer: "Yes. Indexing, query tuning and caching are part of the service.",
      },
    ],
    relatedServices: [
      { href: "/services/software-development", label: "Custom software & SaaS" },
      { href: "/services/hire-react-developers", label: "Hire React developers" },
      { href: "/services/hire-python-developers", label: "Hire Python developers" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/singapore", label: "Singapore" },
      { href: "/locations/global/united-arab-emirates", label: "UAE" },
    ],
  },

  "hire-flutter-developers": {
    slug: "hire-flutter-developers",
    h1: "Hire Flutter Developers from India",
    heroLead:
      "Flutter lets you ship iOS and Android from a single codebase, cutting cost and time. Our Flutter developers build polished apps with native-feeling performance, and integrate them with your back end, payments and analytics.",
    seoTitle: "Hire Flutter Developers from India | Golax India",
    metaDescription:
      "Hire experienced Flutter developers from India to build iOS and Android apps from one codebase. Trial sprint, NDA and IP assignment.",
    keywords:
      "hire Flutter developers India, Flutter app development, cross-platform mobile developers, iOS Android one codebase",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Cross-platform Flutter apps for iOS and Android. Custom UI and animations. State management with Riverpod, Bloc or Provider. REST, GraphQL and Firebase integrations.",
          "Payments, maps, push notifications and offline mode. Play Store and App Store release. Migration from native or React Native.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Startups that want to launch on both stores quickly, and companies extending a web product to mobile.",
        ],
      },
      {
        heading: "Why choose Golax India for Flutter developers",
        body: [
          "Store release experience. Clean architecture and tests. Design-friendly developers. Overlap with your team hours.",
        ],
      },
    ],
    process: [
      {
        title: "Share your brief",
        description: "App idea or designs.",
      },
      {
        title: "Interview",
        description: "Interview developers.",
      },
      {
        title: "Trial sprint",
        description: "Trial sprint with a working build.",
      },
      {
        title: "Ongoing sprints",
        description: "Test builds each week.",
      },
      {
        title: "Release and maintain",
        description: "Store release and ongoing support.",
      },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Bloc",
      "Firebase",
      "Supabase",
      "REST APIs",
      "GraphQL",
      "Fastlane",
      "Codemagic",
    ],
    pricingNote:
      "Roughly $25-$45 per hour equivalent on monthly billing, with fixed-price options for defined apps.",
    faqs: [
      {
        question: "Is Flutter good for production apps?",
        answer:
          "Yes. It is widely used for consumer and business apps with strong performance.",
      },
      {
        question: "Can you add Flutter to an existing app?",
        answer: "Yes, module-by-module if needed.",
      },
      {
        question: "Do you handle store submission?",
        answer: "Yes.",
      },
    ],
    relatedServices: [
      { href: "/services/mobile-app-development", label: "Mobile app development" },
      { href: "/services/hire-react-developers", label: "Hire React developers" },
      { href: "/services/dedicated-development-teams", label: "Dedicated teams" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/australia", label: "Australia" },
      { href: "/locations/global/united-arab-emirates", label: "UAE" },
    ],
  },

  "hire-python-developers": {
    slug: "hire-python-developers",
    h1: "Hire Python Developers from India",
    heroLead:
      "Our Python developers build web back ends, data pipelines, automation and AI features. Whether you need Django or FastAPI services, integrations, or machine-learning-powered functions, you can add proven engineers to your team within weeks.",
    seoTitle: "Hire Python Developers from India | Golax India",
    metaDescription:
      "Hire senior Python developers from India for Django, FastAPI, data and AI projects. US/UK time overlap, NDA and IP assignment included.",
    keywords:
      "hire Python developers India, Django developers, FastAPI developers, Python AI development",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Django and FastAPI web applications and APIs. Data pipelines and ETL. Automation, scraping and integrations (within legal limits). AI and machine learning features using LLM APIs and standard libraries.",
          "Dashboards and analytics back ends. Testing and CI/CD. Legacy Python upgrades.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams adding data or AI features, and companies needing solid back-end capacity.",
        ],
      },
      {
        heading: "Why choose Golax India for Python developers",
        body: [
          "Clean, tested, typed Python. Understanding of data privacy in AI projects. Experience across web and data work. Honest advice on what AI can and cannot do.",
        ],
      },
    ],
    process: [
      {
        title: "Define needs",
        description: "Needs and data sources.",
      },
      {
        title: "Interview",
        description: "Interview developers.",
      },
      {
        title: "Onboard",
        description: "Onboard into your codebase.",
      },
      {
        title: "Sprints",
        description: "Sprints with code review.",
      },
      {
        title: "Monitor and improve",
        description: "Monitor and improve in production.",
      },
    ],
    stack: [
      "Python 3",
      "Django",
      "FastAPI",
      "Flask",
      "Celery",
      "PostgreSQL",
      "Pandas",
      "scikit-learn",
      "PyTorch",
      "LangChain",
      "Docker",
      "AWS",
    ],
    pricingNote:
      "Roughly $25-$45 per hour equivalent on monthly billing, depending on seniority and specialisation.",
    faqs: [
      {
        question: "Django or FastAPI?",
        answer:
          "Django suits full applications with admin and ORM. FastAPI suits lightweight, high-performance APIs. We recommend based on your case.",
      },
      {
        question: "Can you build AI features?",
        answer:
          "Yes, including LLM integrations, retrieval and classification. We use your data under strict confidentiality.",
      },
      {
        question: "Can you work on our data pipeline?",
        answer: "Yes.",
      },
    ],
    relatedServices: [
      { href: "/services/software-development", label: "SaaS & software development" },
      { href: "/services/hire-nodejs-developers", label: "Hire Node.js developers" },
      { href: "/services/it-consulting", label: "IT consulting" },
    ],
    relatedLocations: [
      { href: "/locations/global/united-states", label: "USA" },
      { href: "/locations/global/united-kingdom", label: "UK" },
      { href: "/locations/global/canada", label: "Canada" },
    ],
  },
};

export function getServiceLanding(slug: string): ServiceLanding | undefined {
  return serviceLandings[slug as ServiceLandingSlug];
}
