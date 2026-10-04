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
      "We build online stores that sell in more than one country. Our team creates Shopify stores, headless Next.js storefronts and custom platforms with fast checkout, international payments, tax and shipping so you can sell to the US, UK, Canada, Australia and the Gulf. You get a single partner for theme or headless front end, integrations and launch support—with code and merchant accounts in your name.",
    seoTitle: "Shopify and Headless E-commerce Development",
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
          "We document feed, analytics and pixel setup so your marketing team can measure add-to-cart and purchase events consistently across regions.",
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
      {
        heading: "Security, payments and checkout trust",
        body: [
          "International buyers expect PCI-aware checkout flows, HTTPS everywhere and clear privacy policies. We configure Stripe, PayPal and other gateways in your merchant accounts so funds and customer data stay under your control, not ours.",
          "We follow least-privilege access for Shopify, hosting and headless backends, rotate API keys after launch and document who can change prices or refunds. For B2B portals we add role-based permissions and audit-friendly order history so your finance team can reconcile without spreadsheet exports.",
        ],
      },
      {
        heading: "How we collaborate with your marketing team",
        body: [
          "E-commerce launches rarely succeed when developers work in isolation. We join your Slack or Teams channel, review merchandising and campaign calendars before build, and leave room in the theme or headless front end for landing pages your marketers can publish.",
          "Weekly demos show real checkout paths on staging, including mobile and multi-currency tests. After go-live we hand over runbooks for common tasks—adding a collection, updating shipping zones, or rolling back a theme—so you are not locked into us for every small change.",
          "If you already run paid social or email, we coordinate UTM conventions and landing-page templates so campaign traffic lands on fast, tracked product pages rather than generic homepages.",
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
          "Shopify suits most brands and launches faster with a mature app ecosystem. Custom or headless suits complex catalogues, unique checkout rules, heavy personalisation or integrations that Shopify cannot support cleanly. We recommend after a short discovery call rather than defaulting to one stack.",
      },
      {
        question: "Can you migrate my store without losing SEO?",
        answer:
          "Yes. We export products and content, map every old URL to a new one, preserve titles and meta descriptions where they still fit, and implement 301 redirects. After launch we monitor Search Console and fix crawl errors before they affect rankings.",
      },
      {
        question: "Do you handle tax and VAT?",
        answer:
          "We configure Shopify Tax, Avalara or similar tools and set rules for the regions you sell into. Your accountant or tax adviser still confirms rates, registrations and filing obligations—we do not provide legal tax advice.",
      },
      {
        question: "Who owns the theme, custom code and product data?",
        answer:
          "You do. Themes, custom apps and headless repositories live in accounts you control. We assign IP in the contract before development starts. We can transfer Shopify partner access or repo ownership at any time with documentation.",
      },
      {
        question: "How quickly can you start an e-commerce project?",
        answer:
          "Discovery and a written proposal usually happen within one business day of your enquiry. Build kickoff is often within five to seven days after contract sign, depending on access to your current store, payment accounts and any migration windows your team prefers.",
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
      "Good design reduces development cost and raises conversion. Our designers work with product teams abroad to turn ideas into clear flows, clean interfaces and tested prototypes that developers can build without guesswork. Engagements can cover research through handoff only, or continue into build with the same team when you want one accountable partner.",
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
          "Responsive layouts and content priorities are defined for international audiences, including RTL considerations when your product requires them.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Founders shaping an MVP, product managers redesigning a confusing interface, and marketers who need landing pages that convert.",
          "Teams preparing for a fundraise or enterprise pilot also use us to tighten UX before due diligence or security review cycles.",
        ],
      },
      {
        heading: "Why choose Golax India for UI/UX design",
        body: [
          "Design and development under one roof, so designs are buildable. Accessibility and performance considered from the start. Designs made for international audiences and languages. Clear documentation and handoff.",
        ],
      },
      {
        heading: "Design IP, files and developer handoff",
        body: [
          "Figma files, component libraries and exported assets are delivered in workspaces you own. Our contracts assign design IP to your company before paid work begins, so you can switch developers or agencies later without licensing disputes.",
          "Handoff includes named layers, responsive breakpoints, spacing tokens and interaction notes—not just pretty screens. When we also build the product, the same team closes the gap between design and code; when you only need design, we review the implemented UI once against the spec at no extra theatre.",
          "Design critiques with your stakeholders happen in shared Figma links with comment threads so decisions stay traceable after the workshop ends.",
        ],
      },
      {
        heading: "When a full design engagement is not the right fit",
        body: [
          "If you only need a logo refresh with no product flows, a freelance brand designer may be enough. If your engineering team already has a rigid component library and just needs one landing page, a short fixed-scope sprint works better than a multi-month design retainer.",
          "We are honest when research or testing would add little value—for example, a simple internal admin with five users. In those cases we suggest lightweight wireframes and move budget toward development or security review instead.",
          "For SaaS dashboards we prioritise density, keyboard paths and empty states—not just marketing polish—because those details determine whether daily users trust the product.",
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
          "Yes. Combining design and development under one team avoids handoff gaps, speeds up iteration and keeps accessibility and performance decisions consistent from the first wireframe through production.",
      },
      {
        question: "Do you test designs with users?",
        answer:
          "Yes. We run moderated or unmoderated tests on Figma prototypes before development, summarise findings in plain language and prioritise fixes so you spend build budget on flows that tested well.",
      },
      {
        question: "Will you follow my brand?",
        answer:
          "Yes. We work within your brand guidelines, design tokens and existing UI kits, or help define a new visual identity when you are early-stage. We document colours, type and components so future pages stay on-brand.",
      },
      {
        question: "Who owns the Figma files and design assets?",
        answer:
          "You do. We invite your team to the project workspace, transfer ownership on request and assign IP in the contract. Exported icons, illustrations and spec documents are yours to reuse without ongoing license fees to us.",
      },
      {
        question: "Can designers overlap with US or UK working hours?",
        answer:
          "Yes. We agree a daily overlap window for workshops, reviews and stakeholder calls—typically four to five hours with US Eastern or UK time. Async comments in Figma keep progress moving between sessions.",
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
      "Many growing businesses run on spreadsheets and a patchwork of subscriptions that do not talk to each other. We design and build custom CRM, ERP and internal tools that match how you actually work, reduce manual effort and give you one source of truth. Projects roll out in phases so finance and operations see value before the full platform is finished.",
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
          "Mobile-friendly views for field sales and warehouse staff when your team needs access away from a desktop browser.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Manufacturers, distributors, service firms and agencies that have outgrown off-the-shelf tools or pay for many overlapping subscriptions.",
          "Operations leaders who need one dashboard for inventory, orders and billing—not three exports merged in Excel every Monday—are typical buyers.",
        ],
      },
      {
        heading: "Why choose Golax India for CRM and ERP development",
        body: [
          "We compare build versus buy honestly and tell you if an existing tool is better. Modular design so you pay only for what you need. Data ownership and export at all times. Training and documentation for your team.",
        ],
      },
      {
        heading: "Data ownership, backups and access control",
        body: [
          "Your operational data stays in databases and cloud accounts you control. We implement role-based permissions, audit logs for sensitive actions and encrypted backups with tested restore procedures—not promises on a slide.",
          "Exports to CSV, API access and documentation are part of delivery so you are never locked in. NDAs and IP assignment cover custom workflows and reports. We can host in your AWS or Azure tenant if your security team requires it.",
          "Retention policies and deletion workflows can be built to match how long your contracts require you to keep customer or employee records.",
        ],
      },
      {
        heading: "Who should stay on SaaS instead of custom CRM or ERP",
        body: [
          "If a standard CRM like HubSpot or Salesforce already matches your sales process with minor configuration, rebuilding rarely pays off. The same applies when a mid-market ERP covers inventory and finance with modest customisation.",
          "Custom builds make sense when subscription costs stack up, teams work around tool limits with spreadsheets, or you need industry-specific workflows regulators expect to see in one system. We tell you which side of that line you are on before quoting.",
          "When you stay on SaaS, we can still integrate or automate between tools—you do not have to choose custom software to get practical help from our engineers.",
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
          "Custom is better when your process is unique, integrations are fragile, or SaaS fees and manual workarounds cost more than ownership over a few years. If HubSpot, Zoho or a vertical ERP already fits with light config, we recommend staying there and spending budget elsewhere.",
      },
      {
        question: "Can you connect it to QuickBooks or Xero?",
        answer:
          "Yes, through their official APIs for invoices, payments, customers and chart-of-accounts sync. We map fields carefully, handle OAuth securely and log failures so finance can reconcile without silent mismatches.",
      },
      {
        question: "How do you handle our existing data?",
        answer:
          "We map fields from spreadsheets and legacy systems, clean duplicates, run trial imports on staging and validate totals with your team before production cutover. Rollback plans stay ready until you sign off.",
      },
      {
        question: "Who owns the source code and database?",
        answer:
          "You do. Repositories and database instances are in accounts you control. IP is assigned in the contract. We deliver architecture diagrams and admin runbooks so your team or another vendor can maintain the system.",
      },
      {
        question: "How long does a first CRM or ERP module take?",
        answer:
          "A focused first module—often pipeline plus quotes or inventory plus orders—typically takes eight to fourteen weeks after discovery, depending on integrations and data quality. Later phases add modules without rewriting the core.",
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
      "A dedicated team gives you full-time engineers who work only on your product, take direction from you and join your stand-ups, tools and roadmap. You get the control of an in-house team with lower cost, faster hiring and no local employment overhead. Typical senior rates fall in the $25–$45 per hour equivalent range on monthly billing, with roles and notice terms spelled out up front.",
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
      {
        heading: "IP, NDAs and confidentiality",
        body: [
          "Every dedicated engagement starts with an NDA and master services agreement that assigns work product and code to your company. Engineers use your GitHub or GitLab, your issue tracker and your secrets manager—never personal repos for production code.",
          "Access is revoked promptly when someone rolls off the team. We support customer security questionnaires with evidence of background checks, device policies and secure development practices where your procurement team requires it.",
        ],
      },
      {
        heading: "When a dedicated team is not the right model",
        body: [
          "A one-off landing page or two-week bug fix does not need a full-time squad—a fixed-scope project is cheaper and clearer. If you have no product owner or technical lead to prioritise work, adding headcount alone will not speed delivery.",
          "We also caution against dedicated teams when the roadmap is undefined for months; a short discovery and prototype phase first often saves budget. We will say so upfront rather than sell seats you cannot use effectively.",
          "When a dedicated team is the right fit, the same engineers stay with you across quarters so context compounds instead of resetting every project.",
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
        question: "How do you vet engineers for dedicated teams?",
        answer:
          "Candidates pass a technical screen, a practical task relevant to your stack and an English communication check. You interview finalists live before anyone joins your Slack or repository. We share employment history and sample code with your approval.",
      },
      {
        question: "Who owns the code and IP?",
        answer:
          "Your company owns all work product created for you. IP assignment is in the MSA before the first sprint. Repositories and cloud resources remain in accounts you control; we never withhold code for payment disputes outside what the contract states.",
      },
      {
        question: "What timezone overlap do you offer?",
        answer:
          "We align four to five hours of overlap with US Eastern, UK, Gulf or Singapore hours depending on your preference. Core meetings—stand-ups, planning, demos—sit inside that window; async updates cover the rest.",
      },
      {
        question: "Which tools will the team use?",
        answer:
          "Yours. We work in your GitHub, Jira, Linear, Azure DevOps, Figma and CI pipelines. If you have no preference, we suggest a standard stack but still host code in your org, not ours.",
      },
      {
        question: "What is the notice period to scale or end the engagement?",
        answer:
          "Notice terms are written clearly in the contract—typically thirty days to add or remove roles, with shorter notice for replacing an individual who is not a fit. There are no hidden exit fees beyond agreed notice and final invoicing.",
      },
      {
        question: "What is the minimum team size?",
        answer:
          "One senior engineer is possible for a narrow roadmap. Most product companies start with two or three engineers plus optional QA or DevOps for sustainable velocity and code review.",
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
      "Hire experienced React and Next.js developers who build fast, accessible and maintainable interfaces. Our engineers work full time on your product or on a fixed-scope project, with code you can hand to any future team. Monthly billing typically reflects $25–$45 per hour equivalent for senior talent, with an optional paid trial sprint before you commit long term.",
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
          "Internationalisation hooks and locale-aware routing when you ship the same product to multiple English-speaking markets or translated locales.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams that need front-end capacity, agencies that need reliable React talent, and startups building SaaS dashboards.",
          "CTOs replatforming from jQuery or Angular to React often start with one senior hire before expanding to a small squad.",
        ],
      },
      {
        heading: "Why choose Golax India for React developers",
        body: [
          "Vetted through code tests and interviews. Comfortable with pull requests, CI and agile ceremonies. Attention to accessibility and speed. Clean, typed, documented code.",
        ],
      },
      {
        heading: "Security and front-end quality standards",
        body: [
          "Our React engineers treat XSS, CSRF and secrets in the browser seriously: no API keys in client bundles, sanitised rich text, secure cookie settings when you use session auth and dependency updates tracked in your repo.",
          "Pull requests include accessibility checks, Lighthouse or Core Web Vitals notes where relevant and unit tests for critical UI logic. That reduces regressions when your back-end team ships parallel API changes.",
        ],
      },
      {
        heading: "Working in your repository and design system",
        body: [
          "Developers clone your GitHub org, branch from your conventions and open PRs for your review. They implement your Figma specs or extend your Storybook components instead of inventing one-off CSS.",
          "Daily stand-ups and async updates happen in your Slack or Teams. We agree overlap hours with US, UK or EU leads so design reviews and unblock sessions happen live, not only overnight.",
          "We reply to new hire enquiries within one business day with shortlisted profiles or clarifying questions—no generic rate cards without understanding your stack.",
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
          "Each candidate completes a live technical interview, a React or Next.js coding exercise close to real product work and a review of prior repositories or redacted samples. You meet finalists before onboarding. Communication in English is assessed for stand-ups and PR descriptions.",
      },
      {
        question: "Who owns the React code and components?",
        answer:
          "You do. All commits land in your repository under your IP assignment clause. We do not reuse your proprietary components for other clients. Work-for-hire terms are signed before the trial sprint or monthly engagement begins.",
      },
      {
        question: "Can they work in my time zone?",
        answer:
          "Yes. We document a daily overlap window—often four to five hours with US or UK time—for pairing, reviews and planning. Outside that window, developers continue async via PRs and tickets with clear handoff notes.",
      },
      {
        question: "Which tools do your React developers use?",
        answer:
          "Your stack: GitHub or GitLab, your CI, Jest or Vitest, Playwright or Cypress, Figma and whatever monorepo or package manager you standardise on. We adapt to Next.js App Router, Pages Router or Vite SPAs as needed.",
      },
      {
        question: "What notice period applies for part-time or full-time hires?",
        answer:
          "Monthly engagements include a written notice period—commonly two to four weeks—to pause or end without surprise billing. Replacing a developer who is not a fit is handled faster under the replacement clause in your agreement.",
      },
      {
        question: "Do you offer part-time React developers?",
        answer:
          "Yes, from roughly half-time upward when capacity allows. Part-time works well for maintenance, design-system work or supporting an in-house lead who owns architecture.",
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
      "Our Node.js and TypeScript engineers build secure, scalable back ends: REST and GraphQL APIs, real-time features, background jobs and integrations. Hire one engineer or a full back-end team to work alongside your product and front-end developers. Engagements include NDA and IP assignment; senior monthly rates usually sit in the $25–$45 per hour equivalent band.",
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
          "Versioned APIs and migration paths so mobile and web clients can adopt changes without coordinated big-bang releases.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "SaaS startups, marketplaces and enterprises needing dependable back-end engineers.",
          "Teams blocked on API delivery while front-end waits on endpoints, or carrying ops debt on a growing Express codebase, bring us in to stabilise and extend.",
        ],
      },
      {
        heading: "Why choose Golax India for Node.js developers",
        body: [
          "Strong TypeScript and testing habits. Security practice: input validation, rate limiting and secrets management. Experience with scale and observability. Straightforward communication.",
        ],
      },
      {
        heading: "API security, secrets and compliance-aware backends",
        body: [
          "Node services we build use environment-based secrets, hashed credentials, rate limits and structured logging without leaking PII. We align with your security team on OWASP basics, dependency scanning in CI and least-privilege IAM on AWS or Azure.",
          "When you process payments or health data, we follow your data-classification rules—encryption at rest, audit trails and no production data on developer laptops without approval.",
        ],
      },
      {
        heading: "Collaboration with your front-end and DevOps teams",
        body: [
          "Back-end engineers document OpenAPI or GraphQL schemas, publish migration steps and join API contract reviews so React or mobile teams are not blocked. They work inside your Docker and Terraform workflows when you already have platform standards.",
          "Incident response playbooks and on-call handoffs can be shared for production systems we maintain. Overlap hours match your lead engineer timezone for architecture decisions that should not wait overnight.",
          "Whether you extend a legacy Express monolith or greenfield a NestJS service, we match your conventions instead of forcing a rewrite on day one.",
          "Webhook and idempotency patterns are documented so finance and ops integrations do not double-charge or duplicate orders under retries.",
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
          "We assess TypeScript fluency, async patterns, testing discipline and security awareness in a live interview plus a take-home or pair-programming task involving APIs and data modelling. You interview shortlisted engineers before they receive repository access.",
      },
      {
        question: "Who owns the API code and database migrations?",
        answer:
          "Your company owns all back-end code, migration files and infrastructure definitions we write for you. IP assignment is in place before work starts. Repos and databases stay in accounts you administer.",
      },
      {
        question: "Can Node.js developers match my timezone?",
        answer:
          "Yes. We schedule overlap for stand-ups, incident calls and design reviews—typically with US, UK, Singapore or Gulf hours. Async PR reviews continue outside the window with documented decisions.",
      },
      {
        question: "Do you work with NestJS, Express or our existing stack?",
        answer:
          "We work in NestJS, Express, Fastify and serverless Node on AWS Lambda as your architecture requires. We follow your lint rules, folder structure and CI gates rather than imposing a new framework mid-project.",
      },
      {
        question: "What notice period applies when hiring Node engineers?",
        answer:
          "Monthly contracts state notice for pause or termination—often two to four weeks—and replacement terms if a engineer is not meeting expectations. There are no lock-in clauses beyond that written notice.",
      },
      {
        question: "Can you help with database performance?",
        answer:
          "Yes. Indexing, query tuning, connection pooling, Redis caching and slow-query monitoring are part of back-end delivery. We document changes so your team can maintain performance after handoff.",
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
      "Flutter lets you ship iOS and Android from a single codebase, cutting cost and time. Our Flutter developers build polished apps with native-feeling performance, and integrate them with your back end, payments and analytics. Hire full time or start with a trial sprint; senior monthly rates are typically in the $25–$45 per hour equivalent range with clear notice terms.",
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
          "Deep linking and app analytics wired to your marketing stack so installs can be tied to campaigns where platforms allow it.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Startups that want to launch on both stores quickly, and companies extending a web product to mobile.",
          "Products that need parity on iOS and Android without maintaining two native teams are the sweet spot for dedicated Flutter engineers.",
        ],
      },
      {
        heading: "Why choose Golax India for Flutter developers",
        body: [
          "Store release experience. Clean architecture and tests. Design-friendly developers. Overlap with your team hours.",
        ],
      },
      {
        heading: "App security, keys and store compliance",
        body: [
          "Flutter builds use secure storage for tokens, certificate pinning when you require it and obfuscation guidance for release builds. API keys belong on your back end, not hard-coded in the client.",
          "We help you meet Apple and Google privacy questionnaire requirements—data collection disclosures, account deletion flows and kids-data rules when applicable—without claiming legal advice.",
        ],
      },
      {
        heading: "When Flutter staff augmentation is not ideal",
        body: [
          "Games or apps that need deep native GPU features may still need Kotlin or Swift specialists. If you only need a wrapper around a website with no offline value, a PWA might cost less.",
          "We flag those cases early. When Flutter is the right call, our developers integrate with your back-end squad and designers so TestFlight and Play internal tracks update every sprint.",
          "Enquiries receive a response within one business day so you can plan release dates against real availability, not a black-box bench.",
          "Platform channel updates for iOS and Android are tracked so we schedule SDK bumps before store deadlines affect your submission.",
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
          "Candidates show production Flutter apps or contributions, complete a Dart exercise covering state management and API integration and discuss widget performance in a live interview. You approve anyone before they access your repo or signing certificates workflow.",
      },
      {
        question: "Who owns the Flutter source and store listings?",
        answer:
          "You own the codebase and App Store or Google Play listings under your developer accounts. IP is assigned in the contract. We do not publish apps under Golax accounts for client products.",
      },
      {
        question: "Can Flutter developers overlap with my timezone?",
        answer:
          "Yes. We set overlap for sprint planning, design reviews and release go/no-go calls with US, UK, Australia or Gulf teams. Builds and PR comments continue asynchronously with clear release notes.",
      },
      {
        question: "Which tools do Flutter developers use day to day?",
        answer:
          "Your Git repo, CI for iOS and Android builds—Codemagic, GitHub Actions or Bitrise—Figma, Firebase or your API docs and Fastlane where you already use it. Crash reporting ties into Sentry or Firebase Crashlytics in your projects.",
      },
      {
        question: "What notice period applies for Flutter hires?",
        answer:
          "Engagements document notice to scale down or end—commonly two to four weeks on monthly contracts. Trial sprints can end after the agreed sprint if either side is not satisfied, per the statement of work.",
      },
      {
        question: "Do you handle store submission?",
        answer:
          "Yes. We prepare builds, screenshots, metadata and privacy labels, then submit under your Apple and Google accounts and respond to review feedback until approval.",
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
      "Our Python developers build web back ends, data pipelines, automation and AI features. Whether you need Django or FastAPI services, integrations, or machine-learning-powered functions, you can add proven engineers to your team within weeks. Contracts include confidentiality and IP assignment; senior hires are usually billed monthly in the $25–$45 per hour equivalent range.",
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
          "Scheduled jobs and observability around batch workloads so data pipelines fail loudly instead of silently drifting.",
        ],
      },
      {
        heading: "Who this is for",
        body: [
          "Product teams adding data or AI features, and companies needing solid back-end capacity.",
          "Analytics-heavy SaaS and logistics platforms that outgrow notebooks and ad hoc scripts often hire Python engineers for pipelines first, features second.",
        ],
      },
      {
        heading: "Why choose Golax India for Python developers",
        body: [
          "Clean, tested, typed Python. Understanding of data privacy in AI projects. Experience across web and data work. Honest advice on what AI can and cannot do.",
        ],
      },
      {
        heading: "Data privacy and AI feature boundaries",
        body: [
          "Python work on customer data runs under your NDA and data-processing terms. We avoid sending sensitive records to third-party LLMs without your approval, prefer private endpoints or self-hosted models when required and log prompts minimally.",
          "For Django and FastAPI apps we apply standard auth, encryption and backup practices. We will tell you when a requested AI feature needs legal review rather than rushing a demo that creates compliance risk.",
        ],
      },
      {
        heading: "Embedding Python engineers in your data and product teams",
        body: [
          "Developers join your Jupyter, dbt or Airflow workflows when you have them, or help introduce lightweight ETL with clear ownership docs. They pair with analysts on Pandas pipelines and with product on API contracts.",
          "Overlap hours align with your tech lead for architecture decisions on model deployment, GPU spend and batch windows. Handoffs include runbooks so on-call is not a black box.",
          "We scope AI features realistically—retrieval, classification and workflow automation often ship before custom model training is worth the cost.",
          "Unit and integration tests around data transforms help prevent silent schema drift when upstream sources change columns or formats.",
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
          "We test Python fundamentals, framework experience (Django, FastAPI or Flask), SQL and testing habits in a technical interview plus a practical task. Data and ML candidates discuss privacy and deployment trade-offs. You meet finalists before access to production systems.",
      },
      {
        question: "Who owns Python code, models and training scripts?",
        answer:
          "Your company owns application code, notebooks, model weights you paid to train and deployment configs we deliver under IP assignment. Third-party library licenses remain governed by their terms; we document them in your repo.",
      },
      {
        question: "Can Python developers work in my timezone?",
        answer:
          "Yes. Overlap is scheduled with your product or data lead—commonly US, UK or Canada hours—for stand-ups and architecture reviews. Long-running jobs and PRs proceed async with status in your tracker.",
      },
      {
        question: "Which tools do your Python developers use?",
        answer:
          "Your Git hosting, CI, Docker, cloud provider (AWS, GCP or Azure), Postgres or warehouse, and observability stack. We adopt Poetry, pip-tools or your existing packaging approach without forcing a new toolchain.",
      },
      {
        question: "What notice period applies for Python hires?",
        answer:
          "Monthly engagements specify written notice to change hours or end—typically two to four weeks. Fixed-scope data or AI milestones use the exit terms in the statement of work instead of open-ended lock-in.",
      },
      {
        question: "Django or FastAPI for a new project?",
        answer:
          "Django suits full applications with admin, auth and ORM out of the box. FastAPI suits high-throughput APIs and microservices. We recommend after reviewing your team skills, latency needs and existing infrastructure.",
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
