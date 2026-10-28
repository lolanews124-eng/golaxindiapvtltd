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
      "We build online stores that sell in more than one country. That means Shopify stores, headless Next.js storefronts and custom platforms, with checkout, payments, tax and shipping set up for the US, UK, Canada, Australia and the Gulf. Code and merchant accounts stay in your name.",
    seoTitle: "Shopify and Headless E-commerce Development",
    metaDescription:
      "Shopify, headless commerce and custom online stores with Stripe, PayPal and tax-ready checkout for US, UK and global retailers.",
    keywords:
      "e-commerce development company India, Shopify development, headless commerce, international online store development",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Shopify and Shopify Plus stores, themes and apps. Headless builds with Next.js on Shopify, BigCommerce or Medusa. Custom marketplaces and B2B ordering portals. Checkout work and abandoned-cart flows.",
          "Payments through Stripe, PayPal, Apple Pay, Google Pay and local methods. Tax, VAT and multi-currency setup. Inventory, ERP and shipping integrations.",
          "We also document analytics and pixel setup, so your marketers see the same add-to-cart and purchase events in every region.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Direct-to-consumer brands, retailers leaving an old platform, and B2B sellers who need a portal for repeat orders.",
        ],
      },
      {
        heading: "Why teams pick us for e-commerce",
        body: [
          "We care about store speed, because it affects both conversion and search. We have done multi-currency and multi-region setups, and we migrate stores without losing existing SEO. We stay on after launch to tune the store.",
        ],
      },
      {
        heading: "Security, payments and checkout trust",
        body: [
          "Buyers expect HTTPS everywhere, a PCI-aware checkout and a clear privacy policy. We set up Stripe, PayPal and other gateways in your own merchant accounts, so funds and customer data stay with you.",
          "Access is least-privilege across Shopify, hosting and any headless back end. We rotate API keys after launch and write down who can change prices or issue refunds. B2B portals get role-based permissions and an order history your finance team can reconcile.",
        ],
      },
      {
        heading: "Working with your marketing team",
        body: [
          "We join your Slack or Teams, and we look at your campaign calendar before we build. The theme or storefront leaves room for landing pages your marketers can publish themselves.",
          "Weekly demos show real checkout paths on staging, including mobile and multi-currency. After go-live we hand over short runbooks for jobs like adding a collection, changing shipping zones or rolling back a theme.",
          "If you run paid social or email, we agree UTM conventions and landing-page templates up front, so campaign traffic lands on tracked product pages and not the homepage.",
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
      "Standard Shopify stores start in the low thousands of dollars. Headless and custom platforms are quoted after discovery. Monthly support covers updates and campaigns.",
    faqs: [
      {
        question: "Shopify or custom store?",
        answer:
          "Shopify suits most brands and launches faster. Custom or headless makes sense for complex catalogues, unusual checkout rules, heavy personalisation, or integrations Shopify cannot handle cleanly. We recommend one after a short discovery call.",
      },
      {
        question: "Can you migrate my store without losing SEO?",
        answer:
          "Yes. We export products and content, map every old URL to a new one, keep titles and meta descriptions that still fit, and set up 301 redirects. After launch we watch Search Console and fix crawl errors early.",
      },
      {
        question: "Do you handle tax and VAT?",
        answer:
          "We configure Shopify Tax, Avalara or similar tools for the regions you sell into. Your accountant still confirms rates, registrations and filing. We do not give tax advice.",
      },
      {
        question: "Who owns the theme, custom code and product data?",
        answer:
          "You do. Themes, custom apps and headless repositories live in accounts you control, and IP is assigned in the contract before development starts.",
      },
      {
        question: "How quickly can you start?",
        answer:
          "We usually send a proposal within a business day of your enquiry. Build kickoff is often five to seven days after contract, depending on access to your store, payment accounts and any migration window you prefer.",
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
      "Clear design saves build time. Our designers work with product teams abroad to turn ideas into flows, interfaces and tested prototypes that developers can build without guessing. You can hire us for research through handoff only, or keep us on through the build.",
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
          "Landing pages for paid and organic traffic. Usability testing and a WCAG accessibility review. Developer handoff with specs and assets.",
          "We plan responsive layouts and content priorities for international audiences, including right-to-left layouts when your product needs them.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Founders shaping an MVP, product managers fixing a confusing interface, and marketers who need landing pages that convert.",
          "Teams preparing for a fundraise or an enterprise pilot also use us to tighten the UX before due diligence.",
        ],
      },
      {
        heading: "Why teams pick us for design",
        body: [
          "Design and development sit together, so designs are buildable. We think about accessibility and performance from the first wireframe, and we document handoff clearly.",
        ],
      },
      {
        heading: "Design IP, files and handoff",
        body: [
          "Figma files, component libraries and exported assets live in workspaces you own. The contract assigns design IP to your company before paid work begins, so you can change developers or agencies later.",
          "Handoff includes named layers, responsive breakpoints, spacing tokens and interaction notes, not only finished screens. If we also build the product, the same team closes the gap between design and code. If you only need design, we review the built UI against the spec once.",
          "Design reviews happen in shared Figma links with comment threads, so decisions are still traceable after the workshop.",
        ],
      },
      {
        heading: "When a full design engagement is not the right fit",
        body: [
          "If you only need a logo refresh, a freelance brand designer may be enough. If your engineers already have a strict component library and need one landing page, a short fixed-scope sprint beats a long retainer.",
          "We will also say when research would add little. A simple internal admin tool with five users is one example. We would suggest light wireframes and put the budget into development.",
          "For SaaS dashboards we focus on density, keyboard paths and empty states, because those details decide whether daily users trust the product.",
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
      "Design sprints and landing pages are fixed-price. Full product design is scoped by screens and complexity, or offered as a monthly retainer.",
    faqs: [
      {
        question: "Can you design and build?",
        answer:
          "Yes. One team for both avoids handoff gaps and keeps accessibility and performance choices consistent from wireframe to production.",
      },
      {
        question: "Do you test designs with users?",
        answer:
          "Yes. We run moderated or unmoderated tests on Figma prototypes before development and summarise the findings in plain language. You then spend build budget on flows that tested well.",
      },
      {
        question: "Will you follow my brand?",
        answer:
          "Yes. We work inside your brand guidelines, tokens and UI kits. If you are early-stage, we can help define a visual identity and document colours, type and components.",
      },
      {
        question: "Who owns the Figma files and design assets?",
        answer:
          "You do. We invite your team to the workspace, transfer ownership on request and assign IP in the contract. Icons, illustrations and specs are yours to reuse with no licence fees to us.",
      },
      {
        question: "Can designers overlap with US or UK working hours?",
        answer:
          "Yes. We agree a daily window for workshops and reviews, usually four to five hours with US Eastern or UK time. Comments in Figma cover the gaps between calls.",
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
      "Many growing businesses run on spreadsheets and subscriptions that do not talk to each other. We build custom CRM, ERP and internal tools that follow how you actually work. We roll them out in phases, so finance and operations see value before the whole platform is finished.",
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
          "Mobile-friendly views for field sales and warehouse staff who work away from a desk.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Manufacturers, distributors, service firms and agencies that have outgrown off-the-shelf tools or pay for several overlapping subscriptions.",
          "Operations leaders who want one dashboard for inventory, orders and billing, not three exports merged in Excel every Monday.",
        ],
      },
      {
        heading: "How we approach CRM and ERP projects",
        body: [
          "We compare build against buy and tell you if an existing tool is the better choice. The design is modular, so you pay only for what you need. You can export your data at any time, and we train your team and document the system.",
        ],
      },
      {
        heading: "Data ownership, backups and access control",
        body: [
          "Your operational data stays in databases and cloud accounts you control. We add role-based permissions, audit logs for sensitive actions and encrypted backups, and we test the restore.",
          "CSV exports, API access and documentation come with delivery, so you are not locked in. An NDA and IP assignment cover custom workflows and reports. If your security team requires it, we can host in your AWS or Azure tenant.",
          "We can build retention and deletion workflows to match how long your contracts require you to keep customer or employee records.",
        ],
      },
      {
        heading: "When you should stay on SaaS",
        body: [
          "If HubSpot or Salesforce already fits your sales process with light configuration, rebuilding rarely pays off. The same goes for a mid-market ERP that covers inventory and finance with modest changes.",
          "Custom builds make sense when subscription costs stack up, teams work around tool limits with spreadsheets, or you need an industry-specific workflow in one system. We tell you which side of that line you are on before we quote.",
          "If you stay on SaaS, we can still integrate or automate between your tools.",
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
          "It is when your process is unusual, your integrations are fragile, or SaaS fees and workarounds cost more than owning the system over a few years. If HubSpot, Zoho or a vertical ERP fits with light configuration, we will tell you to stay and spend the budget elsewhere.",
      },
      {
        question: "Can you connect it to QuickBooks or Xero?",
        answer:
          "Yes, through their official APIs, for invoices, payments, customers and chart-of-accounts sync. We map fields carefully, handle OAuth securely and log failures so finance can reconcile without silent mismatches.",
      },
      {
        question: "How do you handle our existing data?",
        answer:
          "We map fields from your spreadsheets and old systems, clean duplicates, run trial imports on staging and check totals with your team before cutover. A rollback plan stays ready until you sign off.",
      },
      {
        question: "Who owns the source code and database?",
        answer:
          "You do. Repositories and databases sit in accounts you control, and IP is assigned in the contract. We hand over architecture diagrams and admin runbooks so your team or another vendor can maintain the system.",
      },
      {
        question: "How long does a first module take?",
        answer:
          "A focused first module, such as pipeline plus quotes or inventory plus orders, usually takes eight to fourteen weeks after discovery. Integrations and data quality can move that. Later phases add modules without rewriting the core.",
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
      "A dedicated team is a set of full-time engineers who work only on your product. They take direction from you and join your stand-ups, tools and roadmap. You get something close to an in-house team without the local hiring and employment overhead. Senior rates are usually around $25–$45 per hour equivalent, billed monthly, with roles and notice terms written into the contract.",
    seoTitle: "Hire Dedicated Development Team from India | Golax",
    metaDescription:
      "Hire a vetted dedicated team of engineers from India at $25-45/hr with US/UK overlap. Month-to-month, NDA and IP assignment included.",
    keywords:
      "hire dedicated development team India, dedicated developers, offshore development team, $25-45 per hour developers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Full-time developers, QA engineers, designers, DevOps and a project manager, as you need them. Most teams are set up one to two weeks after contract. Overlap with US, UK, Gulf or Singapore hours.",
          "Weekly reports, sprint demos and open timesheets. You can add or remove people with notice. We handle knowledge transfer and documentation.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product companies with a long roadmap, agencies that need extra capacity, and startups that want engineers without hiring locally.",
        ],
      },
      {
        heading: "How a dedicated team works with us",
        body: [
          "You interview and approve every team member. They work on your project only and are not shared across clients. If someone is not the right fit, we work with you on a replacement under the terms in your contract. Access controls and legal protections are in place from day one.",
        ],
      },
      {
        heading: "IP, NDAs and confidentiality",
        body: [
          "Every dedicated engagement starts with an NDA and a master services agreement that assigns work product and code to your company. Engineers use your GitHub or GitLab, your issue tracker and your secrets manager. Production code never goes in personal repositories.",
          "Access is removed promptly when someone leaves the team. If your procurement team needs it, we can support security questionnaires with details on background checks, device policies and secure development practices.",
        ],
      },
      {
        heading: "When a dedicated team is not the right model",
        body: [
          "A one-off landing page or a two-week bug fix does not need a full-time squad. A fixed-scope project is cheaper and clearer. If nobody on your side can prioritise the work, extra headcount will not speed delivery.",
          "We also advise against it when the roadmap is undefined for months. A short discovery and prototype phase usually saves money first. We would rather say so than sell seats you cannot use well.",
          "When a dedicated team does fit, the same engineers stay with you across quarters, so context builds up instead of resetting with each project.",
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
      "Senior engineers are billed at roughly $25-$45 per hour equivalent on a monthly basis, depending on skill and seniority. Notice periods are stated in the contract.",
    faqs: [
      {
        question: "How do you vet engineers for dedicated teams?",
        answer:
          "Candidates go through a technical screen, a practical task close to your stack and an English communication check. You interview finalists live before anyone joins your Slack or repository.",
      },
      {
        question: "Who owns the code and IP?",
        answer:
          "Your company owns all work product created for you. IP assignment is in the MSA before the first sprint. Repositories and cloud resources stay in accounts you control.",
      },
      {
        question: "What timezone overlap do you offer?",
        answer:
          "We usually align four to five hours with US Eastern, UK, Gulf or Singapore hours, depending on your preference. Stand-ups, planning and demos sit in that window, and async updates cover the rest.",
      },
      {
        question: "Which tools will the team use?",
        answer:
          "Yours. We work in your GitHub, Jira, Linear, Azure DevOps, Figma and CI pipelines. If you have no preference, we suggest a standard stack, but code still lives in your organisation.",
      },
      {
        question: "What is the notice period to scale or end the engagement?",
        answer:
          "The contract states it. It is typically thirty days to add or remove roles, and shorter to replace one person. There are no exit fees beyond the agreed notice and final invoicing.",
      },
      {
        question: "What is the minimum team size?",
        answer:
          "One senior engineer is possible for a narrow roadmap. Most product companies start with two or three engineers, plus QA or DevOps if they need it.",
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
      "Hire React and Next.js developers who build fast, accessible and maintainable interfaces. They can work full time on your product or on a fixed-scope project, and the code is yours to hand to any future team. Senior monthly billing is usually around $25–$45 per hour equivalent, and you can start with a paid trial sprint.",
    seoTitle: "Hire React Developers from India | Golax India",
    metaDescription:
      "Hire senior React and Next.js developers from India at $25-45/hr with US/UK overlap. Trial period, NDA and full IP assignment.",
    keywords:
      "hire React developers India, hire Next.js developers, React development company, senior React engineers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "React and Next.js web apps and dashboards. Server-side rendering and static generation for SEO. Component libraries and design-system work. State management with Redux, Zustand or React Query.",
          "TypeScript migration and refactoring. Performance profiling and Core Web Vitals work. Tests with Jest, React Testing Library and Playwright.",
          "Locale-aware routing and internationalisation, when you ship one product to several markets.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams that need front-end capacity, agencies that need reliable React people, and startups building SaaS dashboards.",
          "CTOs moving from jQuery or Angular to React often start with one senior hire and add a small squad later.",
        ],
      },
      {
        heading: "How we vet and work",
        body: [
          "Developers are screened with code tests and interviews. They are comfortable with pull requests, CI and agile ceremonies, and they write typed, documented code with an eye on accessibility and speed.",
        ],
      },
      {
        heading: "Security and front-end quality",
        body: [
          "Our React engineers take XSS, CSRF and browser-side secrets seriously. That means no API keys in client bundles, sanitised rich text, secure cookie settings for session auth, and dependency updates tracked in your repo.",
          "Pull requests include accessibility checks, Lighthouse or Core Web Vitals notes where they matter, and unit tests for critical UI logic. That cuts regressions when your back-end team ships API changes in parallel.",
        ],
      },
      {
        heading: "Working in your repository and design system",
        body: [
          "Developers work in your GitHub organisation, follow your branching conventions and open PRs for your review. They build to your Figma specs or extend your Storybook, rather than adding one-off CSS.",
          "Stand-ups and async updates happen in your Slack or Teams. We agree overlap hours with your US, UK or EU leads, so design reviews and unblocking happen live.",
          "For new hire enquiries, we aim to reply within one business day with shortlisted profiles or questions about your stack.",
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
          "Each candidate does a live technical interview, a React or Next.js coding exercise close to real product work, and a review of past repositories or redacted samples. You meet finalists before onboarding, and we check English for stand-ups and PR descriptions.",
      },
      {
        question: "Who owns the React code and components?",
        answer:
          "You do. All commits go into your repository under your IP assignment clause. We do not reuse your proprietary components for other clients.",
      },
      {
        question: "Can they work in my time zone?",
        answer:
          "Yes. We set a daily overlap window, often four to five hours with US or UK time, for pairing, reviews and planning. Outside it, developers continue through PRs and tickets with clear handoff notes.",
      },
      {
        question: "Which tools do your React developers use?",
        answer:
          "Yours: GitHub or GitLab, your CI, Jest or Vitest, Playwright or Cypress, Figma and your package manager or monorepo setup. We work with the Next.js App Router, the Pages Router or a Vite SPA.",
      },
      {
        question: "What notice period applies?",
        answer:
          "Monthly engagements carry a written notice period, commonly two to four weeks, so you can pause or end without surprise billing. Replacing a developer who is not a fit is faster under the replacement clause.",
      },
      {
        question: "Do you offer part-time React developers?",
        answer:
          "Yes, from roughly half-time upward when capacity allows. Part-time suits maintenance, design-system work, or support for an in-house lead who owns the architecture.",
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
      "Our Node.js and TypeScript engineers build back ends: REST and GraphQL APIs, real-time features, background jobs and integrations. Hire one engineer or a small back-end team to work with your product and front-end developers. An NDA and IP assignment are part of every engagement, and senior monthly rates usually sit around $25–$45 per hour equivalent.",
    seoTitle: "Hire Node.js Developers from India | Golax India",
    metaDescription:
      "Hire senior Node.js and TypeScript backend developers from India for APIs, SaaS and real-time apps. NDA, IP assignment, US/UK overlap.",
    keywords:
      "hire Node.js developers India, TypeScript backend developers, API development, NestJS Express developers",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "REST and GraphQL APIs. Microservices and event-driven systems. Real-time features over WebSockets. Authentication, authorisation and payments.",
          "Database design in PostgreSQL, MongoDB and Redis. Queues and background jobs. Third-party integrations and webhooks. Testing, logging and monitoring.",
          "Versioned APIs with migration paths, so mobile and web clients can adopt changes without a big-bang release.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "SaaS startups, marketplaces and enterprises that need dependable back-end engineers.",
          "Teams whose front end is waiting on endpoints, or who carry ops debt in a growing Express codebase, bring us in to stabilise and extend it.",
        ],
      },
      {
        heading: "How we work on back ends",
        body: [
          "We write typed, tested code. For security that means input validation, rate limiting and proper secrets management. We have worked on systems that needed to scale, and we add observability early. Communication is straightforward.",
        ],
      },
      {
        heading: "API security, secrets and compliance",
        body: [
          "The services we build use environment-based secrets, hashed credentials, rate limits and structured logging that does not leak personal data. We align with your security team on OWASP basics, dependency scanning in CI and least-privilege IAM on AWS or Azure.",
          "If you process payments or health data, we follow your data-classification rules: encryption at rest, audit trails, and no production data on developer laptops without approval.",
        ],
      },
      {
        heading: "Working with your front-end and DevOps teams",
        body: [
          "Back-end engineers document OpenAPI or GraphQL schemas, write up migration steps and join API contract reviews, so React and mobile teams are not blocked. They work in your Docker and Terraform setup if you already have platform standards.",
          "For production systems we maintain, we can share incident playbooks and on-call handoffs. Overlap hours match your lead engineer's time zone, so architecture decisions do not wait overnight.",
          "Whether we extend a legacy Express monolith or start a new NestJS service, we follow your conventions and do not push a rewrite on day one.",
          "We document webhook and idempotency patterns, so finance and ops integrations do not double-charge or duplicate orders when requests retry.",
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
        question: "How do you vet Node.js developers?",
        answer:
          "We check TypeScript fluency, async patterns, testing habits and security awareness in a live interview, plus a take-home or pair-programming task on APIs and data modelling. You interview shortlisted engineers before they get repository access.",
      },
      {
        question: "Who owns the API code and database migrations?",
        answer:
          "Your company owns all back-end code, migration files and infrastructure definitions we write for you. IP assignment is in place before work starts, and repos and databases stay in accounts you administer.",
      },
      {
        question: "Can Node.js developers match my time zone?",
        answer:
          "Yes. We schedule overlap for stand-ups, incident calls and design reviews, usually with US, UK, Singapore or Gulf hours. Outside that window, PR reviews continue with decisions written down.",
      },
      {
        question: "Do you work with NestJS, Express or our existing stack?",
        answer:
          "Yes: NestJS, Express, Fastify, or serverless Node on AWS Lambda, depending on your architecture. We follow your lint rules, folder structure and CI gates instead of introducing a new framework mid-project.",
      },
      {
        question: "What notice period applies?",
        answer:
          "Monthly contracts state the notice to pause or end, often two to four weeks, plus replacement terms if an engineer is not meeting expectations. There is no lock-in beyond that notice.",
      },
      {
        question: "Can you help with database performance?",
        answer:
          "Yes. Indexing, query tuning, connection pooling, Redis caching and slow-query monitoring are part of back-end work. We document the changes so your team can keep performance up after handoff.",
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
      "Flutter lets you ship iOS and Android from one codebase, which cuts cost and time. Our Flutter developers build polished apps and connect them to your back end, payments and analytics. You can hire full time or start with a trial sprint. Senior monthly rates are typically around $25–$45 per hour equivalent, with notice terms in the contract.",
    seoTitle: "Hire Flutter Developers from India | Golax India",
    metaDescription:
      "Hire experienced Flutter developers from India to build iOS and Android apps from one codebase. Trial sprint, NDA and IP assignment.",
    keywords:
      "hire Flutter developers India, Flutter app development, cross-platform mobile developers, iOS Android one codebase",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Cross-platform Flutter apps for iOS and Android. Custom UI and animation. State management with Riverpod, Bloc or Provider. REST, GraphQL and Firebase integrations.",
          "Payments, maps, push notifications and offline mode. Play Store and App Store releases. Migration from native or React Native.",
          "Deep linking and app analytics connected to your marketing stack, so installs can be tied to campaigns where the platforms allow it.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Startups that want to launch on both stores quickly, and companies extending a web product to mobile.",
          "Products that need the same experience on iOS and Android, without two native teams, are the best fit.",
        ],
      },
      {
        heading: "How we work on Flutter projects",
        body: [
          "Our developers have shipped to the stores. They write structured, tested code, work well with designers, and overlap with your team's hours.",
        ],
      },
      {
        heading: "App security, keys and store compliance",
        body: [
          "Flutter builds use secure storage for tokens, certificate pinning if you want it, and obfuscation for release builds. API keys belong on your back end, not hard-coded in the app.",
          "We help you fill in Apple and Google privacy questionnaires: data collection disclosures, account deletion flows, and rules for children's data when they apply. We do not give legal advice.",
        ],
      },
      {
        heading: "When Flutter is not the right choice",
        body: [
          "Games, or apps that need deep native GPU features, may still need Kotlin or Swift specialists. If you only need a wrapper around a website with no offline value, a PWA may cost less.",
          "We flag those cases early. When Flutter fits, our developers work with your back-end team and designers, so TestFlight and Play internal tracks get a new build every sprint.",
          "We reply to enquiries within one business day, so you can plan release dates against real availability.",
          "We also track iOS and Android platform updates, and schedule SDK upgrades before store deadlines hit your submission.",
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
        question: "How do you vet Flutter developers?",
        answer:
          "Candidates show production Flutter apps or contributions, complete a Dart exercise on state management and API integration, and talk through widget performance in a live interview. You approve anyone before they get access to your repo or signing certificates.",
      },
      {
        question: "Who owns the Flutter source and store listings?",
        answer:
          "You own the codebase and the App Store and Google Play listings, under your own developer accounts. IP is assigned in the contract. We never publish client apps under Golax accounts.",
      },
      {
        question: "Can Flutter developers overlap with my time zone?",
        answer:
          "Yes. We set overlap for sprint planning, design reviews and release calls with US, UK, Australia or Gulf teams. Builds and PR comments continue outside that window, with clear release notes.",
      },
      {
        question: "Which tools do Flutter developers use day to day?",
        answer:
          "Your Git repo, CI for iOS and Android builds (Codemagic, GitHub Actions or Bitrise), Figma, Firebase or your API docs, and Fastlane if you already use it. Crash reporting goes through Sentry or Firebase Crashlytics in your projects.",
      },
      {
        question: "What notice period applies?",
        answer:
          "The engagement documents it, commonly two to four weeks on monthly contracts. A trial sprint can end after the agreed sprint if either side is not satisfied, as set out in the statement of work.",
      },
      {
        question: "Do you handle store submission?",
        answer:
          "Yes. We prepare builds, screenshots, metadata and privacy labels, submit under your Apple and Google accounts, and respond to review feedback until the app is approved.",
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
      "Our Python developers build web back ends, data pipelines, automation and AI features. Whether you need Django or FastAPI services, integrations or machine-learning functions, you can add engineers to your team within a few weeks. Contracts include confidentiality and IP assignment, and senior hires are usually billed monthly at around $25–$45 per hour equivalent.",
    seoTitle: "Hire Python Developers from India | Golax India",
    metaDescription:
      "Hire senior Python developers from India for Django, FastAPI, data and AI projects. US/UK time overlap, NDA and IP assignment included.",
    keywords:
      "hire Python developers India, Django developers, FastAPI developers, Python AI development",
    sections: [
      {
        heading: "What we deliver",
        body: [
          "Django and FastAPI web apps and APIs. Data pipelines and ETL. Automation, scraping and integrations, within legal limits. AI and machine-learning features using LLM APIs and standard libraries.",
          "Dashboards and analytics back ends. Testing and CI/CD. Upgrades for legacy Python code.",
          "Scheduled jobs with monitoring around batch workloads, so pipelines fail loudly and do not drift silently.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams adding data or AI features, and companies that need solid back-end capacity.",
          "Analytics-heavy SaaS and logistics platforms that have outgrown notebooks and one-off scripts often hire Python engineers for pipelines first and features second.",
        ],
      },
      {
        heading: "How we work on Python projects",
        body: [
          "We write clean, tested, typed Python. We understand data privacy in AI projects, we have worked on both web and data systems, and we give honest advice on what AI can and cannot do.",
        ],
      },
      {
        heading: "Data privacy and AI boundaries",
        body: [
          "Python work on customer data runs under your NDA and data-processing terms. We avoid sending sensitive records to third-party LLMs without your approval, prefer private endpoints or self-hosted models when needed, and keep prompt logging to a minimum.",
          "For Django and FastAPI apps we use standard auth, encryption and backup practice. If an AI feature needs legal review, we will say so, not rush a demo that creates compliance risk.",
        ],
      },
      {
        heading: "Joining your data and product teams",
        body: [
          "Developers can work in your Jupyter, dbt or Airflow setup, or help introduce lightweight ETL with clear ownership docs. They pair with analysts on Pandas pipelines and with product on API contracts.",
          "Overlap hours line up with your tech lead for decisions on model deployment, GPU spend and batch windows. Handoffs include runbooks, so on-call is not a black box.",
          "We scope AI features realistically. Retrieval, classification and workflow automation often ship well before custom model training is worth the cost.",
          "Unit and integration tests around data transforms help catch schema drift when an upstream source changes a column or format.",
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
        question: "How do you vet Python developers?",
        answer:
          "We test Python fundamentals, framework experience (Django, FastAPI or Flask), SQL and testing habits in an interview plus a practical task. Data and ML candidates also discuss privacy and deployment trade-offs. You meet finalists before anyone touches production systems.",
      },
      {
        question: "Who owns Python code, models and training scripts?",
        answer:
          "Your company owns the application code, notebooks, model weights you paid to train, and deployment configs we deliver, under IP assignment. Third-party library licences stay under their own terms, and we document them in your repo.",
      },
      {
        question: "Can Python developers work in my time zone?",
        answer:
          "Yes. We schedule overlap with your product or data lead, commonly US, UK or Canada hours, for stand-ups and architecture reviews. Long-running jobs and PRs carry on outside that window, with status in your tracker.",
      },
      {
        question: "Which tools do your Python developers use?",
        answer:
          "Your Git hosting, CI, Docker, cloud provider (AWS, GCP or Azure), Postgres or warehouse, and observability stack. We use Poetry, pip-tools or whatever packaging you already have.",
      },
      {
        question: "What notice period applies?",
        answer:
          "Monthly engagements set out written notice to change hours or end, typically two to four weeks. Fixed-scope data or AI milestones use the exit terms in the statement of work.",
      },
      {
        question: "Django or FastAPI for a new project?",
        answer:
          "Django suits full applications that need admin, auth and an ORM out of the box. FastAPI suits high-throughput APIs and microservices. We recommend one after looking at your team's skills, latency needs and existing infrastructure.",
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
