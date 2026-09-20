/**
 * Dedicated service / hire landing pages (international buyer focus).
 * Word count targets ~800–1200 useful words per page via sections + FAQs.
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
    h1: "Shopify & Headless E-commerce Development Company",
    heroLead:
      "Launch or rebuild stores that convert internationally — Shopify, headless Next.js commerce, and custom checkout flows with clear USD (or local-currency) scopes, NDA/IP assignment, and timezone overlap for USA, UK, UAE, Canada and Australia buyers.",
    seoTitle: "Shopify & Headless E-commerce Development",
    metaDescription:
      "Shopify and headless e-commerce development from India for global brands. Multi-currency checkout, SEO-safe migrations and clear scopes. Get a free store quote.",
    keywords:
      "Shopify development company India, headless commerce development, e-commerce development company, outsource Shopify development",
    sections: [
      {
        heading: "What we build for international stores",
        body: [
          "Golax India designs and engineers commerce experiences for brands selling across borders. Typical work includes Shopify Plus and standard Shopify themes, custom Shopify apps, and headless storefronts on Next.js with Shopify, Commerce Layer or custom backends. We plan tax, multi-currency and shipping rules with your ops team — not as an afterthought the week before launch.",
          "Migrations are a common brief: move from Magento, WooCommerce or a brittle theme without losing organic rankings. That means redirect maps, URL preservation, structured data for products, and Core Web Vitals budgets before paid traffic is switched on. We also wire analytics and consent so marketing can measure funnels without dark-pattern tracking.",
          "If you need B2B wholesale, subscription boxes, or marketplace-style multi-vendor flows, we scope those as product features with clear acceptance criteria. Kitchen-sink “AI shopping assistants” without a catalog or fulfilment plan get an honest pushback on the discovery call.",
        ],
      },
      {
        heading: "Process from discovery to go-live",
        body: [
          "Discovery covers catalog size, markets, payment rails, ERP/OMS integrations and who owns content. You receive a written proposal with inclusions, assumptions and a launch window. Design and information architecture come next — mobile-first checkout, trust signals near the buy button, and accessibility basics.",
          "Engineering runs in weekly staging demos. Theme or headless work stays in your Shopify partner / GitHub accounts whenever possible so you are never locked into a black-box agency login. QA covers checkout paths, inventory edge cases and locale/currency switches before production cutover.",
          "After launch we can retain for CRO experiments, app upgrades and peak-season hardening. IP and theme code are assigned to your company; we do not keep production secrets after handover unless you engage ongoing support.",
        ],
      },
      {
        heading: "Timezone overlap, NDA and IP",
        body: [
          "Collaboration is remote-first with usable overlap for EST, GMT, Gulf and AEST buyers. Slack, shared boards and weekly demos keep decisions from waiting overnight. Mutual NDA is available before deep catalog or customer-data access. Work-for-hire / IP assignment is signed before production coding.",
          "Hosting and store ownership stay with you. We recommend Shopify’s infrastructure for most catalogues; headless builds typically sit on Vercel or your cloud with your DNS and CDN. That keeps vendor diligence simple for US and EU counsel.",
        ],
      },
    ],
    process: [
      { title: "Commerce discovery", description: "Catalog, markets, payments, integrations and SEO constraints documented." },
      { title: "UX & IA", description: "Mobile checkout, trust, navigation and content model signed off." },
      { title: "Build & migrate", description: "Theme or headless implementation with redirects and staging demos." },
      { title: "Launch & optimise", description: "Cutover checklist, monitoring and optional CRO retainers." },
    ],
    stack: ["Shopify", "Shopify Plus", "Next.js", "Hydrogen / headless", "Stripe", "Stripe Tax", "Algolia", "Klaviyo", "TypeScript"],
    pricingNote:
      "Focused Shopify theme builds and marketing storefronts are typically fixed-scope after discovery. Headless and complex migrations are capped or phased. Dedicated commerce engineers are available on monthly retainers. Ranges depend on catalog complexity, apps and languages — we quote in USD, GBP, AED, AUD or CAD as preferred. No fabricated “average project cost” claims; you get a written estimate for your brief.",
    faqs: [
      {
        question: "Do you rebuild existing Shopify stores or only greenfield?",
        answer:
          "Both. Rebuilds and migrations include redirect planning and checkout QA so SEO and conversion do not collapse at launch.",
      },
      {
        question: "Can you support Arabic/English or multi-currency Gulf stores?",
        answer:
          "Yes when in scope — RTL layouts, language switchers and currency rules are designed up front for UAE and regional buyers.",
      },
      {
        question: "Who owns the Shopify store and code?",
        answer:
          "You do. Partner access is temporary; theme/app repos and IP assignment transfer to your entity at handover.",
      },
      {
        question: "How do you handle peak-season readiness?",
        answer:
          "We load-test critical paths, review apps that slow checkout, and document rollback steps before major campaigns.",
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
    h1: "UI/UX Design for SaaS & Marketing Products",
    heroLead:
      "Conversion-focused product UI, design systems and landing pages for international SaaS and commerce teams — Figma-first delivery, engineering handoff that developers can ship, and clear scopes from Golax India.",
    seoTitle: "UI/UX Design for SaaS & Web Products",
    metaDescription:
      "UI/UX design for SaaS, marketing sites and apps. Design systems, CRO-minded landings and developer-ready Figma. Book a design discovery with Golax India.",
    keywords:
      "UI UX design company, SaaS product design, conversion rate design, design system Figma, hire UI designers India",
    sections: [
      {
        heading: "Design that ships with engineering",
        body: [
          "Pretty mockups that ignore edge states waste sprints. Golax India designs for the product you will actually build: empty states, errors, loading, responsive breakpoints and accessibility. Deliverables live in Figma with components, variants and redlines your React or Flutter engineers can implement without guesswork.",
          "For marketing sites we prioritise hierarchy, trust near CTAs and mobile thumb reach — the same principles behind our conversion UX writing. For SaaS we map user journeys with your PM, then prototype critical flows before visual polish so you do not pay twice for wrong information architecture.",
          "Design systems are scoped honestly. A startup may need a lightweight token set and 20 components; an enterprise portal may need denser patterns and documentation. We match the system to team size, not a fashionable library screenshot.",
        ],
      },
      {
        heading: "Research, iteration and handoff",
        body: [
          "Where budgets allow, we run lightweight interviews or heuristic reviews of your current product. Where they do not, we still document assumptions and success metrics (signup completion, checkout step drop-off, time-to-task). Wireframes and mid-fi flows come before high-fi so stakeholders debate structure, not button gradients.",
          "Handoff includes specs, asset export rules and a walkthrough with engineering. Optional pairing during the first implementation sprint catches interpretation gaps early. If you already have brand guidelines, we extend them; we do not silently invent a second brand.",
        ],
      },
      {
        heading: "Engagement, IP and collaboration",
        body: [
          "Fixed design sprints suit launches; retainers suit ongoing product teams. Files and source components are yours under IP assignment. Collaboration overlaps US, UK and Gulf hours for reviews. NDA is available before you share unreleased product screens.",
        ],
      },
    ],
    process: [
      { title: "Brief & metrics", description: "Goals, audiences, constraints and success metrics written down." },
      { title: "Flows & wireframes", description: "IA and critical paths agreed before visual polish." },
      { title: "UI system", description: "Components, states and responsive layouts in Figma." },
      { title: "Handoff", description: "Specs, assets and engineer walkthrough — optional build pairing." },
    ],
    stack: ["Figma", "FigJam", "Design tokens", "Storybook (with eng)", "WCAG-minded components", "Hotjar / analytics review"],
    pricingNote:
      "Landing-page and marketing UI packs are usually fixed after a short brief. Product UI and design systems are phased by flow count. We quote in your preferred currency after discovery — without invented “industry average” design fees.",
    faqs: [
      {
        question: "Do you only design, or also build frontends?",
        answer:
          "Both. Many clients keep design and React/Next implementation with the same Golax squad for fewer handoff losses.",
      },
      {
        question: "Can you work inside our existing Figma library?",
        answer:
          "Yes. We extend tokens and components rather than creating a parallel kit unless the current system blocks shipping.",
      },
      {
        question: "Do you run formal user testing?",
        answer:
          "When budgeted. Otherwise we use heuristics, analytics and stakeholder task walkthroughs — and we say which method we used.",
      },
      {
        question: "Who owns the Figma files?",
        answer:
          "Your company. Source files transfer at milestone acceptance under the IP terms in the SOW.",
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
    h1: "Custom CRM & ERP Software Development",
    heroLead:
      "Replace spreadsheet sprawl and rigid off-the-shelf suites with CRM, ERP and internal tools tailored to your workflows — senior engineers, clear modules, and IP assigned to your company before coding.",
    seoTitle: "Custom CRM & ERP Software Development",
    metaDescription:
      "Custom CRM and ERP development from India for international operators. Modular builds, integrations and NDA/IP-ready delivery. Scope your system with Golax India.",
    keywords:
      "custom CRM development, ERP software development India, custom software development India, internal tools development",
    sections: [
      {
        heading: "When custom CRM/ERP is the right call",
        body: [
          "Off-the-shelf CRMs work until your sales process, inventory rules or compliance needs stop fitting checkboxes. Golax India builds modular business systems: lead pipelines, quoting, inventory, procurement, field ops and finance handoffs — with roles, audit logs and APIs your other tools can use.",
          "We do not pretend every company needs a greenfield ERP. Often the winning move is a focused ops portal plus integrations to Salesforce, HubSpot, QuickBooks, Xero or your warehouse system. Discovery maps build-vs-buy so you do not fund a multi-year rewrite you will abandon.",
          "Security defaults matter for international buyers: least-privilege roles, encrypted secrets, environment separation and documentation that survives vendor questionnaires. Licence and regulatory obligations for your industry stay with your compliance lead; we implement the controls you specify.",
        ],
      },
      {
        heading: "Delivery model",
        body: [
          "Work is split into modules with acceptance criteria. You see weekly demos on staging data (anonymised where required). Integrations are contract-tested so a third-party API change does not silently break fulfilment. Reporting starts from the decisions managers actually make — not vanity dashboards.",
          "Tech defaults are TypeScript, React/Next.js admin UIs, Node or Python services, and PostgreSQL unless your estate already standardises elsewhere. Mobile companions for field teams use Flutter or React Native when the workflow leaves the desk.",
        ],
      },
      {
        heading: "Commercials and ownership",
        body: [
          "Fixed phases suit well-defined modules; dedicated pods suit evolving ops products. Quotes use your preferred currency. NDA before production data access; IP assignment before coding. Repos and infrastructure live in your cloud accounts whenever diligence requires it.",
        ],
      },
    ],
    process: [
      { title: "Process mapping", description: "As-is workflows, pain points and must-have modules." },
      { title: "Architecture", description: "Build-vs-buy, data model, integrations and security baseline." },
      { title: "Module sprints", description: "Weekly demos, UAT per module, migration scripts as needed." },
      { title: "Handover", description: "Docs, training sessions and optional hypercare." },
    ],
    stack: ["TypeScript", "React / Next.js", "Node.js", "Python", "PostgreSQL", "REST / GraphQL", "Queue workers", "AWS / GCP / Azure"],
    pricingNote:
      "Module-based fixed scopes and dedicated pods are both available. Complexity of integrations and data migration drives effort more than UI screens — discovery produces a written estimate without fabricated industry averages.",
    faqs: [
      {
        question: "Can you integrate with Salesforce or HubSpot instead of replacing them?",
        answer:
          "Yes. Many projects keep the CRM of record and build ops tooling around it via APIs.",
      },
      {
        question: "Do you migrate legacy Excel or Access data?",
        answer:
          "Yes with staged import, validation reports and rollback plans. Dirty data is called out early — not after go-live.",
      },
      {
        question: "How do you handle permissions and audit trails?",
        answer:
          "Role-based access and audit logging are planned in the architecture phase for admin-heavy systems.",
      },
      {
        question: "Who hosts the system?",
        answer:
          "Preferably your cloud account. We can operate under a support retainer after handover if you want ongoing changes.",
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
    h1: "Hire Dedicated Developers from India",
    heroLead:
      "Embed a vetted offshore squad into your Slack, GitHub and ceremonies — senior React, Node, Flutter and Python engineers with business-hour overlap, monthly transparency, and IP assigned to your company.",
    seoTitle: "Hire Dedicated Developers from India",
    metaDescription:
      "Hire dedicated developers from India with timezone overlap, senior staffing and clear monthly pods. NDA/IP ready. Talk to Golax India about your team shape.",
    keywords:
      "hire dedicated developers from India, dedicated development team India, outsource software development to India, offshore dedicated team",
    sections: [
      {
        heading: "What “dedicated” means here",
        body: [
          "A dedicated team is not a random ticket bazaar. You get named engineers (and optionally a tech lead / PM) reserved for your backlog, working in your tools, measured on your outcomes. Golax India staffs pods for product companies that need capacity without a nine-month local hiring cycle or coastal salary bands.",
          "Overlap windows are agreed up front for USA, UK, UAE, Canada, Australia, Singapore and Germany buyers. Stand-ups, pairing and design reviews happen in shared hours; async covers the rest. You keep product ownership and prioritisation — we supply execution muscle.",
          "Staffing is senior-leaning. Juniors appear only when you explicitly want mentorship capacity and we disclose experience levels in the proposal. No bait-and-switch resumes after kickoff.",
        ],
      },
      {
        heading: "How pods are assembled and managed",
        body: [
          "Discovery clarifies stack, seniority mix, hours and security constraints. You interview proposed engineers. Kickoff covers access, coding standards and Definition of Done. Weekly demos and written progress notes keep stakeholders aligned without theatre status decks.",
          "Scaling up or down happens on agreed notice periods so finance can plan. Knowledge is kept in your repos and docs — not in a private Golax silo — so offboarding does not strand the product.",
        ],
      },
      {
        heading: "Legal posture",
        body: [
          "NDA before sensitive access. IP assignment to your entity. Optional DPA when personal data is processed for UK/EU work. Invoices match the SOW in USD or your preferred currency. Delivery HQ is in India; commercials and ceremonies stay buyer-friendly.",
        ],
      },
    ],
    process: [
      { title: "Role & stack brief", description: "Skills, seniority, hours and tools defined." },
      { title: "Candidate interviews", description: "You meet proposed engineers before commitment." },
      { title: "Pilot sprint", description: "2–4 weeks to validate collaboration and quality." },
      { title: "Steady pod", description: "Monthly retainer, demos and transparent staffing." },
    ],
    stack: ["React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "AWS / GCP", "Your CI and backlog tools"],
    pricingNote:
      "Dedicated seniors are typically scoped as monthly pods after a pilot. Published site ranges for hourly work are indicative only; your proposal lists named roles and rates. No invented utilisation statistics — you see who works on your account.",
    faqs: [
      {
        question: "Can the team join our existing Jira and Slack?",
        answer:
          "Yes. Staff-augmentation into your ceremonies is the default for dedicated pods.",
      },
      {
        question: "What if someone leaves the pod?",
        answer:
          "We propose a replacement for your interview, with overlap handover documented in your repo.",
      },
      {
        question: "Is part-time dedication available?",
        answer:
          "Yes for some roles, with clear hour caps. Full-time dedication is clearer for product velocity.",
      },
      {
        question: "Do you sign MSAs for US or UK companies?",
        answer:
          "Yes. Mutual NDA, MSA/SOW and IP schedules are standard before production access.",
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
      "Senior React and Next.js engineers for SaaS dashboards, marketing sites and design-system frontends — TypeScript-first, timezone overlap, and dedicated or project-based hiring through Golax India.",
    seoTitle: "Hire React Developers from India",
    metaDescription:
      "Hire React and Next.js developers from India for SaaS and web products. TypeScript, design-system fluency and clear pods. Interview candidates with Golax India.",
    keywords:
      "hire React developers, hire Next.js developers India, React development company, offshore React team",
    sections: [
      {
        heading: "React talent that product teams keep",
        body: [
          "Hiring React developers is easy on paper and hard in production: hooks discipline, performance, accessibility and clean data fetching separate senior work from tutorial portfolios. Golax India proposes engineers who have shipped Next.js apps, design systems and authenticated SaaS UIs — then you interview them before you buy a pod.",
          "Common placements include marketing sites on the App Router, customer dashboards, admin tools and headless commerce storefronts. We align on React Query/SWR or server components patterns your codebase already uses rather than rewriting for fashion.",
          "Pairing with our UI/UX or Node teams is optional when you want vertical feature delivery instead of a frontend-only slice.",
        ],
      },
      {
        heading: "Quality bar and tooling",
        body: [
          "TypeScript is the default. ESLint, testing where valuable, Storybook for shared components, and CI checks are expected. We document folder conventions so your next local hire is not decoding folklore. Code reviews happen inside your GitHub/GitLab — not in a shadow process.",
        ],
      },
      {
        heading: "Engagement options",
        body: [
          "Dedicated React developers on monthly retainers, or fixed UI buildouts with acceptance criteria. NDA/IP standard. Overlap scheduled for your primary market.",
        ],
      },
    ],
    process: [
      { title: "Stack interview", description: "Your repo patterns, design system and Definition of Done." },
      { title: "Candidate match", description: "CVs and live technical conversation with you." },
      { title: "Trial tickets", description: "Real PRs in your backlog during a short pilot." },
      { title: "Scale", description: "Add specialists (Next.js, React Native bridge) as needed." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind / CSS Modules", "React Query", "Playwright / Jest", "Storybook"],
    pricingNote:
      "Dedicated React seniors are proposed with monthly rates after interview. Fixed UI scopes are quoted from wireframes or Figma. Indicative public hourly bands on our site are guidance only — your SOW wins.",
    faqs: [
      {
        question: "Do you work with React Server Components / App Router?",
        answer:
          "Yes when the project uses Next.js App Router. We match the rendering model already in your repo.",
      },
      {
        question: "Can developers follow our Storybook and tokens?",
        answer:
          "Yes. Extending an existing system is preferred over inventing a parallel UI kit.",
      },
      {
        question: "Do you offer React Native as well?",
        answer:
          "React Native is available via our mobile practice; Flutter is offered when cross-platform fit is better.",
      },
      {
        question: "How fast can someone start?",
        answer:
          "After interviews and contracts, kickoff is often within about a week — depending on access provisioning on your side.",
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
      "API, SaaS backend and integration engineers who write maintainable TypeScript Node services — queues, Postgres, auth and observability included, with dedicated pods or scoped builds from Golax India.",
    seoTitle: "Hire Node.js Developers from India",
    metaDescription:
      "Hire Node.js developers from India for APIs, SaaS backends and integrations. TypeScript, Postgres and clear pods. Start candidate interviews with Golax India.",
    keywords:
      "hire Node.js developers, Node.js development company India, offshore Node.js team, hire backend developers India",
    sections: [
      {
        heading: "Backend work international products need",
        body: [
          "Golax India places Node.js developers for REST/GraphQL APIs, webhook processors, billing integrations, multi-tenant SaaS backends and internal automation. We favour boring, observable systems: structured logging, metrics, migrations and idempotent jobs over clever one-liners.",
          "Security basics — secrets management, input validation, rate limits, least-privilege cloud roles — are part of delivery for buyers who face SOC2 questionnaires or enterprise procurement. We implement agreed controls; we do not invent compliance certifications you do not hold.",
        ],
      },
      {
        heading: "Collaboration with frontend and DevOps",
        body: [
          "Node engineers pair with React/Flutter clients on contract shapes and error models. CI pipelines, preview environments and infrastructure-as-code stay in your accounts when required. Dedicated pods join your on-call expectations only when explicitly contracted.",
        ],
      },
      {
        heading: "Hiring model",
        body: [
          "Interview-first staffing, pilot tickets, then monthly dedication or fixed backend milestones. IP and NDA as standard.",
        ],
      },
    ],
    process: [
      { title: "API & data brief", description: "Domains, SLAs, tenancy and integration map." },
      { title: "Engineer interviews", description: "You validate backend depth before commitment." },
      { title: "Pilot delivery", description: "Real services merged via your CI." },
      { title: "Steady ownership", description: "Module ownership with docs and runbooks." },
    ],
    stack: ["Node.js", "TypeScript", "Nest / Express / Fastify", "PostgreSQL", "Redis", "Queues", "Prisma / Drizzle", "AWS / GCP"],
    pricingNote:
      "Backend pods and fixed API milestones are quoted after discovery. Complexity of integrations and data migrations dominates cost more than endpoint count.",
    faqs: [
      {
        question: "Do you only write JavaScript, or TypeScript?",
        answer:
          "TypeScript is the default for maintainable services unless your estate standardises on something else.",
      },
      {
        question: "Can you take over an existing Node monolith?",
        answer:
          "Yes — with an audit of tests, deployments and hotspots before committing to velocity targets.",
      },
      {
        question: "Do you handle DevOps as well?",
        answer:
          "Lightweight CI/CD and container deploys are common; deeper platform engineering can be staffed via IT consulting.",
      },
      {
        question: "How is IP handled?",
        answer:
          "Assigned to your company before coding. Repos live under your org.",
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
      "Cross-platform Flutter engineers for iOS and Android MVPs and production apps — store pipelines, offline-friendly UX, and dedicated or project hiring through Golax India.",
    seoTitle: "Hire Flutter Developers from India",
    metaDescription:
      "Hire Flutter developers from India for iOS and Android apps. Store-ready builds, timezone overlap and clear pods. Interview engineers with Golax India.",
    keywords:
      "hire Flutter developers, Flutter development company India, mobile app development company India, cross-platform app developers",
    sections: [
      {
        heading: "Flutter when dual-store speed matters",
        body: [
          "Flutter remains a strong default when you need iOS and Android from one codebase without sacrificing custom UI. Golax India staffs Flutter developers for consumer apps, field-workforce tools and SaaS companions — with attention to performance on mid-range Android devices, not only flagship demos.",
          "We plan navigation, state management, offline sync and push notifications with your backend contracts. Store compliance (privacy labels, account deletion, permission copy) is scheduled into the release plan so submission is not a last-night scramble.",
        ],
      },
      {
        heading: "Quality and release discipline",
        body: [
          "CI builds, crash reporting and staged rollouts are normal expectations. You keep Apple and Google developer accounts; we operate inside your access policy. Native modules are used when platform APIs demand them — with documentation so you are not trapped.",
        ],
      },
      {
        heading: "Engagement",
        body: [
          "Dedicated Flutter developers or fixed MVP scopes after discovery. NDA/IP standard. Overlap for your primary market.",
        ],
      },
    ],
    process: [
      { title: "Product & platform brief", description: "Stores, offline needs, devices and API contracts." },
      { title: "Engineer match", description: "You interview Flutter candidates." },
      { title: "Build / pilot", description: "Weekly TestFlight and Play builds." },
      { title: "Launch support", description: "Store submission help and hypercare options." },
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST / GraphQL", "CI for iOS/Android", "Sentry / Crashlytics"],
    pricingNote:
      "MVP scopes are fixed or capped after discovery. Dedicated Flutter seniors are monthly. Store fees and third-party SDKs are yours; engineering time is ours.",
    faqs: [
      {
        question: "Flutter or React Native — which do you recommend?",
        answer:
          "We recommend based on your team skills, UI needs and existing code. Both are available; we do not force a single hammer.",
      },
      {
        question: "Do you submit to the App Store and Play Console?",
        answer:
          "We prepare builds and listings; you retain account ownership. Submission support is included when scoped.",
      },
      {
        question: "Can you maintain an app after launch?",
        answer:
          "Yes via retainer — OS updates, dependency bumps and feature iterations.",
      },
      {
        question: "How do you handle offline use?",
        answer:
          "Local persistence and sync rules are designed with your domain conflicts — not bolted on after demos.",
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
      "Python engineers for APIs, data workflows, automation and AI-assisted features — Django/FastAPI services, reliable jobs, and dedicated pods with Golax India’s interview-first hiring.",
    seoTitle: "Hire Python Developers from India",
    metaDescription:
      "Hire Python developers from India for APIs, automation and data-heavy services. Django/FastAPI, clear pods and NDA/IP terms. Interview candidates with Golax India.",
    keywords:
      "hire Python developers, Python development company India, Django developers India, FastAPI offshore team",
    sections: [
      {
        heading: "Where Python fits your product",
        body: [
          "Python shines for APIs, ETL/automation, internal tools and ML-adjacent services that must stay maintainable. Golax India places Python developers who write typed, tested services — not notebook sprawl copied into production. Frameworks commonly include FastAPI and Django, with Celery/RQ or cloud queues for background work.",
          "For AI features we treat models as components with evaluation sets, logging and human override — not magic demos. Data privacy constraints from your counsel are implemented as requirements.",
        ],
      },
      {
        heading: "Engineering standards",
        body: [
          "Packaging, dependency pinning, migrations and observability are part of Definition of Done. We integrate with your React or mobile clients on clear contracts. Dedicated Python developers join your backlog tools and review culture.",
        ],
      },
      {
        heading: "Commercials",
        body: [
          "Pods or fixed service milestones after discovery. NDA before data access; IP to your entity.",
        ],
      },
    ],
    process: [
      { title: "Use-case brief", description: "APIs, data stores, SLAs and compliance notes." },
      { title: "Interviews", description: "You validate Python depth and communication." },
      { title: "Pilot service", description: "Shipped endpoint or job with tests in your CI." },
      { title: "Expand", description: "Add data/ML-adjacent help only when justified." },
    ],
    stack: ["Python", "FastAPI", "Django", "PostgreSQL", "Redis", "Celery / queues", "pytest", "AWS / GCP"],
    pricingNote:
      "Monthly Python pods and fixed automation/API scopes are quoted after discovery. Third-party model API costs are passed through transparently when used.",
    faqs: [
      {
        question: "Django or FastAPI?",
        answer:
          "Depends on admin needs, team familiarity and service shape. We recommend explicitly in discovery.",
      },
      {
        question: "Do you build ML models from scratch?",
        answer:
          "We implement applied ML features and pipelines when scoped; research-grade model training is a different engagement and we say so up front.",
      },
      {
        question: "Can Python developers work with our React frontend team?",
        answer:
          "Yes — shared OpenAPI contracts and staging environments are standard.",
      },
      {
        question: "How is code ownership handled?",
        answer:
          "Your repositories and IP assignment before coding begins.",
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
