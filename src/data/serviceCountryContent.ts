/**
 * Hand-written service × country landing content.
 * Only these combos are indexed; others 301 to the service hub.
 * Key: `${serviceSlug}/${countrySlug}`
 */

export interface ServiceCountryFaq {
  question: string;
  answer: string;
}

export interface ServiceCountrySection {
  heading: string;
  body: string;
}

export interface ServiceCountryPageContent {
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  faqs: ServiceCountryFaq[];
  sections: ServiceCountrySection[];
}

/** Indexed service×country URLs only */
export const SERVICE_COUNTRY_ALLOWLIST: Record<string, string[]> = {
  "web-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
    "canada",
    "singapore",
    "germany",
  ],
  "software-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
    "canada",
    "singapore",
  ],
  "mobile-app-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
  ],
  "digital-marketing": ["united-states", "united-kingdom", "united-arab-emirates"],
  "it-consulting": ["united-states", "united-kingdom", "singapore"],
};

export function isServiceCountryAllowed(serviceSlug: string, countrySlug: string): boolean {
  return SERVICE_COUNTRY_ALLOWLIST[serviceSlug]?.includes(countrySlug) ?? false;
}

/** Safe internal link — never points at a pruned/thin combo */
export function getServiceCountryHref(serviceSlug: string, countrySlug: string): string {
  const slug = serviceSlug === "seo-services" ? "digital-marketing" : serviceSlug;
  if (isServiceCountryAllowed(slug, countrySlug)) {
    return `/services/${slug}/global/${countrySlug}`;
  }
  // seo-services has no hub page
  if (slug === "seo-services") return "/services/digital-marketing";
  return `/services/${slug}`;
}

export function getServiceCountryContent(
  serviceSlug: string,
  countrySlug: string,
): ServiceCountryPageContent | undefined {
  return serviceCountryContent[`${serviceSlug}/${countrySlug}`];
}

export const serviceCountryContent: Record<string, ServiceCountryPageContent> = {
  "web-development/united-states": {
    h1: "Web Development for United States Startups & Brands",
    lead:
      "US founders and agencies hire Golax India for React/Next.js sites and commerce builds that pass diligence — USD scopes, EST/PST overlap, IP on your Delaware entity.",
    metaTitle: "Web Development for USA | Offshore Next.js · USD",
    metaDescription:
      "Senior React/Next.js and Shopify engineers for US startups and agencies. USD quotes, EST/PST overlap, NDA/IP ready. Golax India.",
    faqs: [
      {
        question: "What stacks do US web clients usually want?",
        answer: "TypeScript, React, Next.js, Node, Shopify/headless, and Core Web Vitals-focused builds.",
      },
      {
        question: "USD pricing?",
        answer: "Yes. Marketing sites often from about $3,500. Larger builds scoped after discovery.",
      },
      {
        question: "Who owns the code?",
        answer: "Your US entity. IP assignment before coding.",
      },
      {
        question: "Agency white-label?",
        answer: "Yes — quiet delivery while you keep the client relationship.",
      },
    ],
    sections: [
      {
        heading: "Offshore web development that US buyers can diligence",
        body: `US teams do not need another “cheap website” vendor. They need readable TypeScript, CI, and a repo another engineer can inherit.

That is the bar we ship to — with morning EST overlap and written USD proposals.`,
      },
      {
        heading: "What US web projects look like with us",
        body: `Investor marketing sites, SaaS marketing shells, Shopify rebuilds and headless commerce. We plan redirects and SEO architecture before launch so organic traffic does not fall off a cliff.`,
      },
      {
        heading: "Engagement model",
        body: `Discovery call → USD proposal → NDA/IP → kickoff in about a week. Weekly staging demos are mandatory.`,
      },
    ],
  },

  "web-development/united-kingdom": {
    h1: "Web Development for United Kingdom Companies",
    lead:
      "UK Ltd companies get Next.js and Shopify builds with GBP invoices, GMT overlap and GDPR-aware defaults — without London day rates on every ticket.",
    metaTitle: "Web Development for UK | GBP · GDPR · Next.js",
    metaDescription:
      "Senior web engineers for UK startups and agencies. GBP billing, GMT overlap, GDPR-aware delivery. Golax India.",
    faqs: [
      {
        question: "GBP invoicing?",
        answer: "Yes. Written GBP quotes and monthly invoices. VAT treatment confirmed up front.",
      },
      {
        question: "GDPR on UK sites?",
        answer: "Cookie consent, data minimisation and DPA when personal data is processed. UK/EU hosting options when needed.",
      },
      {
        question: "Typical marketing site cost?",
        answer: "Often from about £2,800 for a focused build — scoped after discovery.",
      },
      {
        question: "White-label for UK agencies?",
        answer: "Yes.",
      },
    ],
    sections: [
      {
        heading: "UK web delivery without London overhead",
        body: `We quote in GBP, keep morning UK stand-ups and design for GDPR from day one — not as a plugin afterthought.`,
      },
      {
        heading: "Common UK web briefs",
        body: `Fintech-adjacent marketing sites, agency overflow, Shopify rebuilds and GoCardless/Stripe checkout flows.`,
      },
      {
        heading: "How UK teams start",
        body: `Short discovery call, GBP proposal, contracts, then weekly demos on staging.`,
      },
    ],
  },

  "web-development/united-arab-emirates": {
    h1: "Web Development for UAE — Dubai & Abu Dhabi",
    lead:
      "Bilingual Arabic + English (RTL) websites for free-zone and mainland teams. AED quotes and almost a full UAE workday of overlap.",
    metaTitle: "Web Development for UAE | AED · Arabic/English RTL",
    metaDescription:
      "Bilingual Arabic/English websites for Dubai and Abu Dhabi. AED quotes, Gulf-hour overlap. Golax India.",
    faqs: [
      {
        question: "Do you build Arabic RTL sites?",
        answer: "Yes — RTL typography and language switchers designed up front.",
      },
      {
        question: "AED pricing?",
        answer: "Yes. Focused bilingual sites often start around AED 13,000.",
      },
      {
        question: "Free-zone companies OK?",
        answer: "Yes — free-zone and mainland.",
      },
      {
        question: "UAE VAT in commerce?",
        answer: "When in scope, we configure 5% behaviour with your finance setup.",
      },
    ],
    sections: [
      {
        heading: "Bilingual web builds for the UAE",
        body: `Most UAE briefs need English marketing with Arabic UX. We plan RTL from design, quote in AED and keep Gulf-hour collaboration.`,
      },
      {
        heading: "Typical UAE web work",
        body: `Corporate sites, property enquiry flows, hospitality pages and headless commerce for regional brands.`,
      },
      {
        heading: "Kickoff",
        body: `Share language requirements and deadline. AED proposal follows discovery.`,
      },
    ],
  },

  "web-development/australia": {
    h1: "Web Development for Australian Brands",
    lead:
      "Shopify, Next.js and marketing sites for Australian companies — AUD invoices, AEST overlap and IP on your AU entity.",
    metaTitle: "Web Development for Australia | AUD · Shopify/Next.js",
    metaDescription:
      "Web and ecommerce engineering for Australian brands. AUD billing, AEST overlap. Golax India.",
    faqs: [
      {
        question: "Shopify rebuilds?",
        answer: "Yes — Shopify, Plus and headless Next.js with SEO redirects.",
      },
      {
        question: "AUD and GST?",
        answer: "Quotes in AUD; GST treatment confirmed at proposal.",
      },
      {
        question: "AEST overlap?",
        answer: "Typically 5–6 hours for stand-ups and reviews.",
      },
      {
        question: "Rough site cost?",
        answer: "Often from about A$4,500 for a focused build.",
      },
    ],
    sections: [
      {
        heading: "Australian web delivery that respects AEST",
        body: `AUD clarity and AEST collaboration — not overnight-only tickets. Weekly demos keep scope honest.`,
      },
      {
        heading: "Common AU projects",
        body: `Store rebuilds, subscription landing systems and brand marketing sites with Afterpay/Stripe where needed.`,
      },
      {
        heading: "Start",
        body: `Send the URL or Figma. AUD plan follows discovery.`,
      },
    ],
  },

  "web-development/canada": {
    h1: "Web Development for Canadian Companies",
    lead:
      "Next.js and commerce builds for Canadian startups and SMEs — CAD invoices, EST/PST overlap and PIPEDA-minded defaults.",
    metaTitle: "Web Development for Canada | CAD · Next.js",
    metaDescription:
      "Senior web engineers for Canadian businesses. CAD billing, EST/PST overlap, PIPEDA-aware delivery. Golax India.",
    faqs: [
      {
        question: "CAD invoicing?",
        answer: "Yes. CAD quotes and monthly invoices.",
      },
      {
        question: "PIPEDA?",
        answer: "Privacy defaults and Canadian hosting options when residency matters.",
      },
      {
        question: "Typical cost?",
        answer: "Marketing sites often near C$4,000 — scoped after discovery.",
      },
      {
        question: "French stakeholders (Montreal)?",
        answer: "Meetings can include French stakeholders; engineering docs default to English unless you require otherwise.",
      },
    ],
    sections: [
      {
        heading: "Canadian web projects without coastal day rates",
        body: `CAD commercials and Eastern/Pacific collaboration windows. Readable TypeScript so a local hire can take over later.`,
      },
      {
        heading: "What we build",
        body: `Marketing sites, Shopify/headless commerce and SaaS marketing shells for Toronto, Vancouver and beyond.`,
      },
      {
        heading: "Kickoff",
        body: `Discovery → CAD proposal → NDA/IP → weekly demos.`,
      },
    ],
  },

  "web-development/singapore": {
    h1: "Web Development for Singapore Product Teams",
    lead:
      "High-quality Next.js sites and portals with full SGT overlap and SGD invoices — built for fintech-style security expectations.",
    metaTitle: "Web Development for Singapore | SGD · SGT",
    metaDescription:
      "Senior web engineers for Singapore companies. Full SGT overlap, SGD billing, security-minded delivery. Golax India.",
    faqs: [
      {
        question: "SGT overlap?",
        answer: "Effectively a full Singapore working day for live collaboration.",
      },
      {
        question: "SGD invoicing?",
        answer: "Yes. Monthly SGD invoices; GST handling confirmed at proposal.",
      },
      {
        question: "Fintech-style security?",
        answer: "We take questionnaires seriously — roles, logging and environment separation planned early.",
      },
      {
        question: "IP ownership?",
        answer: "Your Singapore entity. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "Singapore web delivery on SGT hours",
        body: `Same-day stand-ups and demos — not overnight ticket ping-pong. SGD commercials finance recognises.`,
      },
      {
        heading: "Typical SG web work",
        body: `Corporate sites, customer portals and SaaS marketing properties with careful access control.`,
      },
      {
        heading: "Start",
        body: `Share stack and compliance constraints. SGD proposal follows discovery.`,
      },
    ],
  },

  "web-development/germany": {
    h1: "Web Development for German Startups & Mittelstand",
    lead:
      "GDPR-first Next.js and B2B sites with EUR invoices and CET overlap — documentation that survives internal review.",
    metaTitle: "Web Development for Germany | EUR · GDPR",
    metaDescription:
      "Senior web engineers for German companies. EUR billing, CET overlap, GDPR-first delivery. Golax India.",
    faqs: [
      {
        question: "GDPR-first builds?",
        answer: "Yes — DPA when needed, data minimisation and EU hosting options when residency matters.",
      },
      {
        question: "EUR invoicing?",
        answer: "Yes. Written EUR quotes and monthly invoices.",
      },
      {
        question: "CET overlap?",
        answer: "Typically 5–6 hours for stand-ups and reviews.",
      },
      {
        question: "IP ownership?",
        answer: "Your GmbH (or other DE entity). Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "German web buyers care about process",
        body: `We lead with GDPR defaults, written EUR scopes and readable architecture — not vague velocity slides.`,
      },
      {
        heading: "Common DE web projects",
        body: `B2B marketing sites, customer portals and multilingual properties when required.`,
      },
      {
        heading: "Kickoff",
        body: `Discovery → EUR proposal → DPA/IP as needed → weekly demos.`,
      },
    ],
  },

  "software-development/united-states": {
    h1: "Custom Software & SaaS Development for USA",
    lead:
      "Multi-tenant SaaS, internal tools and API platforms for US product teams — USD billing, EST/PST overlap, diligence-ready architecture.",
    metaTitle: "Software & SaaS Development for USA | USD",
    metaDescription:
      "Senior SaaS and custom software engineers for US startups. USD quotes, timezone overlap, NDA/IP ready. Golax India.",
    faqs: [
      {
        question: "MVP timeline?",
        answer: "Often 6–12 weeks for a focused MVP after discovery — depends on scope.",
      },
      {
        question: "Staff-augmentation?",
        answer: "Yes. We join your Slack, Linear and GitHub as senior capacity.",
      },
      {
        question: "Typical rates?",
        answer: "Dedicated seniors usually $25–$45/hour USD.",
      },
      {
        question: "IP?",
        answer: "Assigned to your US entity before coding.",
      },
    ],
    sections: [
      {
        heading: "SaaS engineering US teams can diligence",
        body: `Auth, billing hooks, admin tools, tests where they matter and CI from week one. Architecture stays readable for your next local hire.`,
      },
      {
        heading: "Engagement shapes",
        body: `Fixed MVP, capped discovery+build, or dedicated pod. Written USD proposal after a 30-minute call.`,
      },
      {
        heading: "What we push back on",
        body: `Kitchen-sink “platform” wish lists with no users. We help cut to a shippable first release.`,
      },
    ],
  },

  "software-development/united-kingdom": {
    h1: "Software & SaaS Development for the UK",
    lead:
      "Custom software for UK Ltd companies — GBP invoices, GMT overlap, GDPR-aware data handling and IP on your company.",
    metaTitle: "Software Development for UK | GBP · GDPR",
    metaDescription:
      "SaaS and custom software for UK product teams. GBP billing, GMT overlap, GDPR-aware delivery. Golax India.",
    faqs: [
      {
        question: "GBP pricing?",
        answer: "Yes. Dedicated seniors often £20–£35/hour. MVPs fixed after discovery.",
      },
      {
        question: "GDPR in SaaS?",
        answer: "DPA when needed, roles/audit trails and UK/EU hosting options when residency matters.",
      },
      {
        question: "White-label for agencies?",
        answer: "Yes.",
      },
      {
        question: "IP?",
        answer: "Your UK Ltd. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "UK software delivery with process",
        body: `GBP scopes, morning UK stand-ups and privacy defaults that match how UK buyers evaluate vendors.`,
      },
      {
        heading: "Typical UK builds",
        body: `Multi-tenant SaaS, fintech-adjacent dashboards and internal ops tools.`,
      },
      {
        heading: "Start",
        body: `Discovery call → GBP proposal → contracts → weekly staging demos.`,
      },
    ],
  },

  "software-development/united-arab-emirates": {
    h1: "Custom Software for UAE Companies",
    lead:
      "Portals, workflows and bilingual SaaS for Dubai and Abu Dhabi teams — AED quotes and long Gulf-hour overlap.",
    metaTitle: "Software Development for UAE | AED",
    metaDescription:
      "Custom software and portals for UAE businesses. AED quotes, Gulf-hour overlap, bilingual-ready. Golax India.",
    faqs: [
      {
        question: "Bilingual admin + Arabic UX?",
        answer: "Yes when in scope — planned from information architecture, not bolted on.",
      },
      {
        question: "AED billing?",
        answer: "Yes. Written AED proposals after discovery.",
      },
      {
        question: "Overlap?",
        answer: "Typically 8+ hours with UAE business days.",
      },
      {
        question: "IP?",
        answer: "Your UAE entity. NDA/IP before coding.",
      },
    ],
    sections: [
      {
        heading: "UAE software that respects Gulf hours",
        body: `Same-day decisions matter in Dubai and Abu Dhabi. We keep long overlap and AED commercials finance can approve.`,
      },
      {
        heading: "Common UAE software work",
        body: `Enquiry portals, internal ops tools and Flutter-backed workflows for field teams.`,
      },
      {
        heading: "Kickoff",
        body: `Share constraints and deadline. AED proposal follows discovery.`,
      },
    ],
  },

  "software-development/australia": {
    h1: "Software & SaaS Development for Australia",
    lead:
      "Custom software and SaaS features for Australian product teams — AUD invoices, AEST overlap and clean handover.",
    metaTitle: "Software Development for Australia | AUD",
    metaDescription:
      "SaaS and custom software for Australian companies. AUD billing, AEST overlap. Golax India.",
    faqs: [
      {
        question: "AUD invoicing?",
        answer: "Yes. GST discussed at proposal stage.",
      },
      {
        question: "AEST overlap?",
        answer: "Typically 5–6 hours for live collaboration.",
      },
      {
        question: "Staff-aug?",
        answer: "Yes — join your Slack and board.",
      },
      {
        question: "IP?",
        answer: "Your Australian company. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "Australian SaaS without east-coast-only pricing pressure",
        body: `AUD clarity, AEST stand-ups and architecture that survives the next local hire.`,
      },
      {
        heading: "Typical AU software",
        body: `Subscription products, admin tools and integrations around Stripe/Afterpay ecosystems.`,
      },
      {
        heading: "Start",
        body: `PRD or repo → AUD proposal → weekly demos.`,
      },
    ],
  },

  "software-development/canada": {
    h1: "Software Development for Canadian Startups",
    lead:
      "SaaS MVPs and internal tools for Canadian founders — CAD billing, EST/PST overlap and PIPEDA-minded defaults.",
    metaTitle: "Software Development for Canada | CAD",
    metaDescription:
      "Custom SaaS and software for Canadian startups. CAD billing, timezone overlap, PIPEDA-aware delivery. Golax India.",
    faqs: [
      {
        question: "CAD pricing?",
        answer: "Yes. Written CAD quotes after discovery.",
      },
      {
        question: "PIPEDA?",
        answer: "Privacy defaults and Canadian regions when residency matters.",
      },
      {
        question: "MVP cost?",
        answer: "Scoped after discovery — fixed or capped CAD proposal.",
      },
      {
        question: "IP?",
        answer: "Your Canadian corporation. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "Canadian product teams, India bench",
        body: `Capacity during EST/PST hours with CAD commercials — CI and docs included so handover is painless.`,
      },
      {
        heading: "What we build",
        body: `Multi-tenant SaaS, internal ops tools and API layers.`,
      },
      {
        heading: "Kickoff",
        body: `Discovery → CAD proposal → NDA/IP → sprint one.`,
      },
    ],
  },

  "software-development/singapore": {
    h1: "Software & SaaS Development for Singapore",
    lead:
      "Senior SaaS engineering with full SGT overlap and SGD invoices — comfortable with fintech-style security questionnaires.",
    metaTitle: "Software Development for Singapore | SGD · SGT",
    metaDescription:
      "SaaS and custom software for Singapore teams. Full SGT overlap, SGD billing. Golax India.",
    faqs: [
      {
        question: "SGT overlap?",
        answer: "Full working-day collaboration with Singapore hours.",
      },
      {
        question: "SGD rates?",
        answer: "Seniors often S$32–S$55/hour. Projects can be fixed-fee.",
      },
      {
        question: "Security questionnaires?",
        answer: "Yes — we complete them seriously for fintech-style buyers.",
      },
      {
        question: "IP?",
        answer: "Your Singapore company. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "Singapore software on SGT hours",
        body: `Same-day stand-ups, demos before you leave and SGD commercials your finance team recognises.`,
      },
      {
        heading: "Typical SG builds",
        body: `Multi-tenant SaaS, internal tools and API platforms with strong access control.`,
      },
      {
        heading: "Start",
        body: `Share stack and compliance constraints. SGD proposal follows discovery.`,
      },
    ],
  },

  "mobile-app-development/united-states": {
    h1: "Mobile App Development for USA Companies",
    lead:
      "iOS, Android and Flutter/React Native apps for US product teams — USD scopes, store submission support and EST/PST collaboration.",
    metaTitle: "Mobile App Development for USA | Flutter · Native",
    metaDescription:
      "iOS, Android and cross-platform apps for US startups. USD billing, store launch support. Golax India.",
    faqs: [
      {
        question: "Flutter or native?",
        answer: "Flutter/RN for most MVPs; native when deep platform APIs demand it.",
      },
      {
        question: "App Store / Play help?",
        answer: "Yes — submission support and common rejection fixes.",
      },
      {
        question: "Payments?",
        answer: "Stripe, Apple Pay and Google Pay when in scope.",
      },
      {
        question: "IP?",
        answer: "Your US entity. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "US mobile apps that ship to both stores",
        body: `UX, API integration, push and payments planned together — not as a late surprise.`,
      },
      {
        heading: "Engagement",
        body: `USD proposal after discovery. Weekly builds on TestFlight / internal tracks.`,
      },
      {
        heading: "Fit",
        body: `Best for teams with a real user workflow — not “Uber for X” slides with no research.`,
      },
    ],
  },

  "mobile-app-development/united-kingdom": {
    h1: "Mobile App Development for UK Companies",
    lead:
      "Flutter, React Native and native apps for UK Ltd teams — GBP invoices, GMT overlap and GDPR-aware mobile data handling.",
    metaTitle: "Mobile App Development for UK | GBP · Flutter",
    metaDescription:
      "iOS and Android apps for UK businesses. GBP billing, GMT overlap, GDPR-aware delivery. Golax India.",
    faqs: [
      {
        question: "GBP pricing?",
        answer: "Yes. Written GBP quotes after discovery.",
      },
      {
        question: "GDPR on mobile?",
        answer: "Consent, data minimisation and DPA when personal data is processed.",
      },
      {
        question: "Store launch?",
        answer: "Submission support for App Store and Play Store included when in scope.",
      },
      {
        question: "IP?",
        answer: "Your UK Ltd. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "UK mobile delivery with privacy defaults",
        body: `GBP scopes and morning UK stand-ups. Privacy and analytics choices documented for your counsel.`,
      },
      {
        heading: "Common UK app work",
        body: `Consumer MVPs, field-workforce apps and fintech-adjacent companions.`,
      },
      {
        heading: "Start",
        body: `Discovery → GBP proposal → weekly TestFlight/Play builds.`,
      },
    ],
  },

  "mobile-app-development/united-arab-emirates": {
    h1: "Mobile App Development for UAE",
    lead:
      "Bilingual-capable Flutter and native apps for Dubai and Abu Dhabi — AED quotes and Gulf-hour overlap.",
    metaTitle: "Mobile App Development for UAE | AED · Flutter",
    metaDescription:
      "iOS and Android apps for UAE companies. AED quotes, Gulf-hour overlap, Arabic/English ready. Golax India.",
    faqs: [
      {
        question: "Arabic RTL in apps?",
        answer: "Yes when in scope — RTL layouts planned in design.",
      },
      {
        question: "AED pricing?",
        answer: "Yes. Written AED proposals after discovery.",
      },
      {
        question: "Overlap?",
        answer: "8+ hours with UAE business days.",
      },
      {
        question: "IP?",
        answer: "Your UAE entity. NDA/IP before coding.",
      },
    ],
    sections: [
      {
        heading: "UAE apps with same-day collaboration",
        body: `Gulf-hour stand-ups and AED commercials. Bilingual UX when your users need it.`,
      },
      {
        heading: "Typical UAE mobile work",
        body: `On-demand workflows, property/hospitality companions and internal field apps.`,
      },
      {
        heading: "Kickoff",
        body: `Share language and platform constraints. AED proposal follows discovery.`,
      },
    ],
  },

  "mobile-app-development/australia": {
    h1: "Mobile App Development for Australia",
    lead:
      "Flutter and native apps for Australian brands — AUD invoices, AEST overlap and dual-store launch support.",
    metaTitle: "Mobile App Development for Australia | AUD",
    metaDescription:
      "iOS and Android apps for Australian businesses. AUD billing, AEST overlap. Golax India.",
    faqs: [
      {
        question: "AUD invoicing?",
        answer: "Yes. GST confirmed at proposal.",
      },
      {
        question: "AEST overlap?",
        answer: "Typically 5–6 hours for live collaboration.",
      },
      {
        question: "Store submission?",
        answer: "Yes when in scope.",
      },
      {
        question: "IP?",
        answer: "Your Australian company. Assignment before coding.",
      },
    ],
    sections: [
      {
        heading: "Australian mobile delivery on AEST",
        body: `AUD clarity and weekly builds your stakeholders can tap on a phone the same day.`,
      },
      {
        heading: "Common AU apps",
        body: `Commerce companions, field workflows and consumer MVPs.`,
      },
      {
        heading: "Start",
        body: `Discovery → AUD proposal → TestFlight/Play cadence.`,
      },
    ],
  },

  "digital-marketing/united-states": {
    h1: "Digital Marketing & SEO for USA Businesses",
    lead:
      "SEO, Google Ads and content engines for US brands that want compounding organic growth — not vanity vanity metrics.",
    metaTitle: "Digital Marketing & SEO for USA | Offshore",
    metaDescription:
      "SEO and performance marketing for US businesses. Transparent reporting, USD scopes. Golax India.",
    faqs: [
      {
        question: "Local + national SEO?",
        answer: "Yes — technical SEO, content and high-intent keyword targeting.",
      },
      {
        question: "Reporting?",
        answer: "Monthly reporting with Search Console and analytics access shared with you.",
      },
      {
        question: "Ads management?",
        answer: "Google and Meta when in scope — separate media budget.",
      },
      {
        question: "Minimum term?",
        answer: "SEO retainers usually make sense at 4–6+ months; we are upfront about that.",
      },
    ],
    sections: [
      {
        heading: "US SEO that compounds",
        body: `Technical fixes first, then topical content and links that match how US buyers search — measured in traffic and leads, not rankings screenshots alone.`,
      },
      {
        heading: "Working model",
        body: `USD retainer, shared dashboards and async updates with EST-friendly calls.`,
      },
      {
        heading: "Fit",
        body: `Best for sites with a real offer and conversion path. We decline “rank #1 for everything” briefs.`,
      },
    ],
  },

  "digital-marketing/united-kingdom": {
    h1: "Digital Marketing & SEO for UK Companies",
    lead:
      "UK SEO and paid acquisition with GBP retainers, GDPR-aware tracking choices and clear monthly reporting.",
    metaTitle: "Digital Marketing & SEO for UK | GBP",
    metaDescription:
      "SEO and performance marketing for UK businesses. GBP retainers, GDPR-aware tracking. Golax India.",
    faqs: [
      {
        question: "GBP retainers?",
        answer: "Yes. Written GBP scopes for SEO and/or ads management.",
      },
      {
        question: "Cookie / GDPR tracking?",
        answer: "We align consent mode and tagging with your privacy setup.",
      },
      {
        question: "Local UK SEO?",
        answer: "Yes for multi-location and service-area businesses.",
      },
      {
        question: "Timeline?",
        answer: "Meaningful organic gains usually need 4–6 months of consistent work.",
      },
    ],
    sections: [
      {
        heading: "UK growth work with compliance in mind",
        body: `GBP commercials and tracking that respects UK privacy expectations — plus content aimed at high-intent British search phrases.`,
      },
      {
        heading: "Channels",
        body: `Technical SEO, content, Google Ads and Meta when paid is in scope.`,
      },
      {
        heading: "Start",
        body: `Audit call → GBP proposal → monthly reporting cadence.`,
      },
    ],
  },

  "digital-marketing/united-arab-emirates": {
    h1: "Digital Marketing & SEO for UAE Brands",
    lead:
      "SEO and paid growth for Dubai and Abu Dhabi brands — including bilingual keyword strategy when Arabic search matters.",
    metaTitle: "Digital Marketing & SEO for UAE | AED",
    metaDescription:
      "SEO and performance marketing for UAE businesses. AED scopes, bilingual keyword strategy when needed. Golax India.",
    faqs: [
      {
        question: "Arabic + English SEO?",
        answer: "Yes when in scope — keyword research and content plans for both.",
      },
      {
        question: "AED retainers?",
        answer: "Yes. Written AED proposals.",
      },
      {
        question: "Google Ads for UAE?",
        answer: "Yes — media budget separate from management fee.",
      },
      {
        question: "Reporting?",
        answer: "Monthly reports with shared analytics access.",
      },
    ],
    sections: [
      {
        heading: "UAE growth beyond vanity metrics",
        body: `We prioritise enquiry and revenue signals for Gulf markets — including bilingual search when your customers use Arabic.`,
      },
      {
        heading: "Working model",
        body: `AED retainer, Gulf-hour calls when needed and transparent dashboards.`,
      },
      {
        heading: "Start",
        body: `Share URLs and goals. AED proposal follows a short audit call.`,
      },
    ],
  },

  "it-consulting/united-states": {
    h1: "IT Consulting & Dedicated Teams for USA",
    lead:
      "Architecture reviews, cloud guidance and dedicated offshore pods for US companies — USD billing, EST/PST overlap and senior ownership from day one.",
    metaTitle: "IT Consulting & Dedicated Teams for USA | USD",
    metaDescription:
      "IT consulting and dedicated engineering pods for US companies. USD billing, EST/PST overlap. Golax India.",
    faqs: [
      {
        question: "Dedicated team vs project?",
        answer: "Both. Pods for ongoing capacity; fixed scopes for bounded outcomes.",
      },
      {
        question: "Cloud — AWS/GCP/Azure?",
        answer: "We work across common clouds and follow your existing account structure.",
      },
      {
        question: "Rates?",
        answer: "Dedicated seniors typically $25–$45/hour USD.",
      },
      {
        question: "IP / NDA?",
        answer: "Signed before access to production systems or sensitive repos.",
      },
      {
        question: "How fast can a pod start?",
        answer: "Usually within 5–7 days of signed contracts.",
      },
      {
        question: "Who do we email?",
        answer: "contact@golaxindia.com — or book a discovery call from the site.",
      },
    ],
    sections: [
      {
        heading: "Consulting that ends in shipped work",
        body: `US buyers have seen enough endless slide decks. Our architecture advice ties to a build plan your team can execute — with us or without. Discovery produces a written USD proposal, not a vague roadmap PDF.`,
      },
      {
        heading: "Dedicated offshore pods for US product teams",
        body: `Senior lead + engineers in your Slack, Linear and GitHub. EST/PST-friendly stand-ups, weekly demos and senior review on pull requests. You keep product ownership; we supply capacity.`,
      },
      {
        heading: "Cloud and modernisation work we take on",
        body: `AWS/GCP/Azure guidance inside your existing accounts, legacy system replacement plans and DevOps basics (CI, environments, monitoring) that stop “works on my machine” delivery.`,
      },
      {
        heading: "How US teams start",
        body: `Share constraints and access expectations. USD proposal within 48 hours of discovery. NDA before production access. Delivery HQ: Patna, India — collaboration on your hours.`,
      },
    ],
  },

  "it-consulting/united-kingdom": {
    h1: "IT Consulting & Dedicated Teams for the UK",
    lead:
      "GDPR-aware IT consulting and dedicated engineering capacity for UK Ltd companies — GBP invoices, GMT overlap and paperwork procurement expects.",
    metaTitle: "IT Consulting for UK | GBP · GDPR",
    metaDescription:
      "IT consulting and dedicated offshore teams for UK companies. GBP billing, GMT overlap. Golax India.",
    faqs: [
      {
        question: "GBP invoicing?",
        answer: "Yes. Written GBP proposals.",
      },
      {
        question: "DPA / GDPR?",
        answer: "Available before personal data or production access.",
      },
      {
        question: "Dedicated pod?",
        answer: "Yes — senior capacity inside your tools.",
      },
      {
        question: "IP?",
        answer: "Your UK Ltd. Assignment agreements before coding.",
      },
      {
        question: "White-label for agencies?",
        answer: "Yes — quiet engineering while you keep the client face.",
      },
      {
        question: "Contact?",
        answer: "Email contact@golaxindia.com or book a discovery call.",
      },
    ],
    sections: [
      {
        heading: "UK consulting with commercial and privacy clarity",
        body: `GBP scopes, morning UK stand-ups and DPAs when personal data is in play. We design for how UK procurement and IT security actually evaluate offshore vendors.`,
      },
      {
        heading: "Where we help UK teams most",
        body: `Legacy modernisation plans, dedicated React/Node pods, cloud cost/architecture reviews and agency overflow before a client deadline.`,
      },
      {
        heading: "Dedicated capacity without a London day-rate bench",
        body: `Staff-aug into your Slack and Jira. You keep ceremonies; we add senior tickets with CI and docs so handover stays clean.`,
      },
      {
        heading: "How UK teams start",
        body: `Discovery call → GBP proposal → DPA/IP as needed → kickoff plan. Delivery from Patna with GMT-friendly collaboration.`,
      },
    ],
  },

  "it-consulting/singapore": {
    h1: "IT Consulting & Dedicated Teams for Singapore",
    lead:
      "Security-minded IT consulting and dedicated pods with full SGT overlap and SGD invoices — comfortable with fintech-style questionnaires.",
    metaTitle: "IT Consulting for Singapore | SGD · SGT",
    metaDescription:
      "IT consulting and dedicated engineering teams for Singapore. Full SGT overlap, SGD billing. Golax India.",
    faqs: [
      {
        question: "SGT overlap?",
        answer: "Full working-day collaboration with Singapore hours.",
      },
      {
        question: "SGD billing?",
        answer: "Yes. Monthly SGD invoices.",
      },
      {
        question: "Security questionnaires?",
        answer: "Yes — common for SG fintech-style buyers. We complete them seriously.",
      },
      {
        question: "Dedicated team?",
        answer: "Yes — senior pod in your Slack and repos.",
      },
      {
        question: "IP ownership?",
        answer: "Your Singapore company. Assignment before coding.",
      },
      {
        question: "How to reach you?",
        answer: "contact@golaxindia.com or a discovery call from the website.",
      },
    ],
    sections: [
      {
        heading: "Singapore consulting on your clock",
        body: `SGT stand-ups, SGD commercials and documentation that passes internal security review. Same-day answers matter more than overnight ticket dumps.`,
      },
      {
        heading: "Typical work for Singapore product and fintech-style teams",
        body: `Architecture reviews, dedicated product pods, AWS/GCP guidance and access-control-heavy internal tools. Licence obligations stay with your compliance lead — we implement agreed controls.`,
      },
      {
        heading: "Dedicated pods that feel local in SGT",
        body: `Senior engineers in your Slack and board for a full Singapore working day of overlap. Weekly demos and readable architecture for the next local hire.`,
      },
      {
        heading: "How Singapore teams start",
        body: `Share stack and security constraints. SGD proposal follows discovery; kickoff about a week after contracts. Delivery HQ in Patna — collaboration on SGT.`,
      },
    ],
  },
};
