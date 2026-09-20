/**
 * Deepens thin city entries and writes cityPageContent.ts
 * Run: npx tsx scripts/_deepen-cities.mjs
 */
import fs from "fs";
import { cities as batch1 } from "./city-deepen/batch1.mjs";
import { cityPageContent as current } from "../src/data/cityPageContent.ts";

const CONTACT =
  "Email contact@golaxindia.com or call +91 9128666005. Delivery is run from our Patna HQ with remote-first collaboration.";

/** @type {Record<string, object>} */
const deepened = {};

function entry(e) {
  return e;
}

// ─── Quality bar (NY) + near-bar cities get 4th seo section upgrades ───

deepened["united-states/new-york"] = entry({
  h1: "Hire Offshore Developers for New York Startups & Agencies",
  lead:
    "NYC product teams burn cash on local day rates. Golax India gives New York founders and agencies a senior React/Node squad with EST overlap, USD invoices, and IP assigned to your Delaware or NY entity before the first commit.",
  introHeading: "Offshore engineering that keeps New York hours",
  intro: [
    "New York startups and digital agencies rarely lack ideas — they lack spare senior capacity that does not cost a Series A salary. We work with NYC teams that need marketing sites, SaaS features or white-label delivery without another full-time hire in Manhattan or Brooklyn.",
    "Engagements run on Slack and GitHub with morning EST stand-ups. You keep product ownership; we supply engineers who have shipped production systems, not portfolio demos.",
    "Typical New York work: investor-ready SaaS MVPs, agency white-label builds, fintech-adjacent dashboards and headless commerce for brands selling into the Northeast.",
  ],
  localFocus: [
    "Fintech & SaaS product teams",
    "Digital agencies needing overflow capacity",
    "E-commerce and media brands",
    "EST morning collaboration window",
  ],
  faqs: [
    {
      question: "Do you work with New York agencies on white-label projects?",
      answer:
        "Yes. Many NYC agencies use us as a quiet delivery bench while they keep the client relationship. Contracts and Slack can be structured so the end client never has to manage India logistics.",
    },
    {
      question: "How much EST overlap do New York clients get?",
      answer:
        "Typically 4–5 hours with Eastern Time — enough for stand-ups, design reviews and same-day decisions. Async updates cover the rest of the cycle.",
    },
    {
      question: "What does a New York website or MVP usually cost?",
      answer:
        "Marketing sites often start around $3,500 USD. SaaS MVPs commonly land between $15,000 and $60,000 depending on scope. Dedicated seniors are usually $25–$45/hour. Written quotes follow discovery.",
    },
    {
      question: "Can you join our existing NYC Slack and Linear board?",
      answer:
        "Yes. Staff-augmentation is common for New York product teams. You keep ceremonies; we add senior tickets.",
    },
    {
      question: "Who owns the IP for a New York company?",
      answer:
        "Your US entity. NDA and IP assignment are signed before coding. Repos move to your GitHub org at handover.",
    },
    {
      question: "Do you only serve Manhattan startups?",
      answer:
        "No. We work with teams across NYC and the metro area — Brooklyn, Queens, Jersey-adjacent remote teams included — as long as collaboration is remote-first.",
    },
  ],
  seoSections: [
    {
      heading: "Why New York teams outsource web and software work to India",
      body: `Local senior contractors in New York often price like a second rent payment. Outsourcing only helps if communication stays sharp during EST hours.

Golax India is set up for that: USD scopes, morning overlap, and engineers who can explain trade-offs without account-manager fog. You are not buying overnight ticket ping-pong.`,
    },
    {
      heading: "Web and product builds New York clients actually request",
      body: `Most NYC briefs are practical: a Next.js marketing site that can raise, a SaaS MVP that survives diligence, or an agency needing three senior weeks of capacity before a client deadline.

We prefer TypeScript, React, Next.js and Node/Python with CI early — so another New York engineer can inherit the repo without archaeology.`,
    },
    {
      heading: "Engagement models for New York buyers",
      body: `Fixed-scope projects for clear launches, monthly retainers for ongoing product work, or staff-augmentation into your Slack and board. USD invoices, weekly staging demos and a named senior lead are standard on every model.

If the fit is wrong — undefined “AI platform” with no users — we say so on the first call.`,
    },
    {
      heading: "How a New York engagement usually starts",
      body: `A 30-minute call, a written USD proposal, NDA/IP if we proceed, then kickoff inside about a week. ${CONTACT}`,
    },
  ],
  metaTitle: "Hire Offshore Developers for New York | EST Overlap · USD",
  metaDescription:
    "Senior React/Node engineers for New York startups and agencies. EST overlap, USD quotes, NDA/IP ready. Offshore from India — Golax India.",
});

deepened["united-states/san-francisco"] = entry({
  h1: "Offshore Product Engineering for San Francisco & Bay Area Teams",
  lead:
    "Bay Area rates are built for FAANG competition, not every seed roadmap. Golax India helps SF and Peninsula founders ship SaaS and mobile products with PST-friendly overlap, USD billing and senior ownership from day one.",
  introHeading: "Built for Bay Area product pace",
  intro: [
    "San Francisco founders usually know exactly what “good” looks like — clean PRs, CI, and demos that do not insult an investor. We staff engagements that way for SoMa, Mission and fully remote Bay Area teams.",
    "Whether you are raising, post-seed or agency-backed, we join your Slack, ship weekly, and keep IP in your Delaware C-Corp or LLC. Pacific-friendly stand-ups keep decisions moving without overnight-only tickets.",
    "Common SF work: multi-tenant SaaS, AI-assisted workflows with a real product shell, developer tools, and mobile companions that must pass App Store review on the first serious attempt.",
  ],
  localFocus: [
    "Seed / Series A SaaS",
    "Developer tools & B2B workflows",
    "Mobile companions for web products",
    "PST overlap for stand-ups",
  ],
  faqs: [
    {
      question: "Do you understand Bay Area diligence expectations?",
      answer:
        "We emphasise readable architecture, tests where they matter, CI and docs. That is what diligence calls poke at — not slide count.",
    },
    {
      question: "How does PST overlap work from India?",
      answer:
        "We keep a usable Pacific window for live calls and Slack. SF teams often prefer late-morning IST / early SF hours for stand-ups — we set the ritual on kickoff.",
    },
    {
      question: "Can you replace a missing full-stack hire?",
      answer:
        "Often yes for 3–6 months of capacity while you keep recruiting. Staff-aug into your repo is normal.",
    },
    {
      question: "What stacks do SF clients ask for most?",
      answer:
        "TypeScript, React/Next.js, Node or Python, Postgres, and AWS/GCP. We adapt if you already standardised.",
    },
    {
      question: "What does an SF MVP or senior seat usually cost in USD?",
      answer:
        "Dedicated seniors typically $25–$45/hour. Marketing sites often from about $3,500. SaaS MVPs commonly $15,000–$60,000 after discovery. Written USD quotes only.",
    },
    {
      question: "Who owns the code?",
      answer:
        "Your company. IP assignment before coding; repos transfer at handover.",
    },
  ],
  seoSections: [
    {
      heading: "San Francisco product teams and offshore capacity",
      body: `Hiring in the Bay Area is slow even when cash is available. An offshore squad only works if quality bar matches local reviewers.

That is the filter we use: senior lead, written scope, weekly demos, no junior bait-and-switch.`,
    },
    {
      heading: "SaaS and app work we do for SF founders",
      body: `Multi-tenant auth, billing hooks, admin tools and API design show up constantly. Mobile is usually Flutter/RN unless you need deep native APIs.

We will push back on kitchen-sink MVPs that try to ship every competitor feature in week one.`,
    },
    {
      heading: "Engagement models for Bay Area buyers",
      body: `Staff-augmentation into your Linear/Jira board, fixed-scope MVPs, or a hybrid where we own a module while your team owns core product. USD invoices and IP assignment to your US entity are non-negotiable defaults.`,
    },
    {
      heading: "Starting with Golax from San Francisco",
      body: `Share the repo or the PRD. We respond with a USD plan and an honest timeline. Kickoff is typically within a week of contracts. ${CONTACT}`,
    },
  ],
  metaTitle: "Offshore Developers for San Francisco & Bay Area | USD",
  metaDescription:
    "Senior SaaS and mobile engineers for San Francisco startups. PST-friendly overlap, USD billing, diligence-ready delivery. Golax India.",
});

deepened["united-kingdom/london"] = entry({
  h1: "Hire Offshore Developers for London Product & Agency Teams",
  lead:
    "London day rates climb fast. Golax India gives UK Ltd companies a senior engineering bench with strong GMT overlap, GBP invoices and GDPR-aware delivery — without pretending we have a Shoreditch office.",
  introHeading: "London delivery, India cost structure",
  intro: [
    "London founders and agencies need partners who respect GDPR, write clear GBP scopes and show up for morning UK stand-ups. That is how we run engagements for fintech-adjacent SaaS, commerce rebuilds and white-label agency work.",
    "We are a fit when you need senior tickets — not undefined “transformation” decks. IP lands in your UK company. GoCardless/Stripe and UK English content structures are normal discussion points on kickoff.",
    "Typical buyers: Series A product leads in Zone 1–2, Soho/Shoreditch agencies needing overflow, and commerce brands rebuilding headless storefronts without another contractor at London day rates.",
  ],
  localFocus: [
    "Fintech & SaaS",
    "Agency white-label overflow",
    "GBP invoicing",
    "GDPR / DPA ready",
  ],
  faqs: [
    {
      question: "Do London clients get GMT overlap?",
      answer:
        "Yes — typically 5–6 hours with GMT/BST. Morning stand-ups are common.",
    },
    {
      question: "Can you invoice in pounds?",
      answer:
        "Yes. GBP quotes and monthly invoices. VAT treatment is confirmed up front.",
    },
    {
      question: "Are you set up for GDPR?",
      answer:
        "We treat GDPR as a delivery requirement: DPA, data minimisation, encryption and UK/EU hosting options when residency matters.",
    },
    {
      question: "Do you white-label for London agencies?",
      answer:
        "Yes. Many agencies keep the client face while we deliver engineering quietly.",
    },
    {
      question: "Typical website or MVP cost for London teams?",
      answer:
        "Marketing sites often from about £2,800. SaaS MVPs commonly £12,000–£50,000. Dedicated seniors usually £20–£35/hour.",
    },
    {
      question: "Who owns the IP?",
      answer:
        "Your UK Ltd. Assignment signed before coding.",
    },
  ],
  seoSections: [
    {
      heading: "Outsourcing software development from London to India",
      body: `The question in London is rarely “is India cheaper?” — it is “will they keep GDPR and communication standards?”

We answer that with written GBP scopes, DPA when needed, and overlap that fits UK working days.`,
    },
    {
      heading: "What London clients usually build with us",
      body: `Next.js sites, SaaS dashboards, Flutter apps and commerce rebuilds. Fintech-adjacent work gets extra attention on logging, roles and audit trails.`,
    },
    {
      heading: "Engagement models for London Ltd companies",
      body: `Fixed GBP projects, monthly retainers or staff-aug into your Slack. VAT treatment is confirmed at proposal. Weekly staging demos are mandatory so scope cannot drift quietly.`,
    },
    {
      heading: "How to start from London",
      body: `Book a short call. Bring constraints (deadline, stack, compliance). You get a GBP proposal — or a clear no if we are the wrong vendor. ${CONTACT}`,
    },
  ],
  metaTitle: "Hire Offshore Developers for London | GBP · GDPR",
  metaDescription:
    "Senior engineers for London startups and agencies. GBP billing, GMT overlap, GDPR-aware delivery. Offshore from India — Golax India.",
});

deepened["united-arab-emirates/dubai"] = entry({
  h1: "Web & App Development for Dubai Free-Zone and Mainland Teams",
  lead:
    "Dubai agencies and free-zone startups need bilingual delivery and Gulf-hour collaboration — not overnight-only vendors. Golax India builds Arabic + English products with AED quotes and almost a full UAE workday of overlap.",
  introHeading: "Dubai-ready delivery without Dubai overhead",
  intro: [
    "Most Dubai briefs mix English marketing with Arabic UX expectations. We plan RTL from design, not as a CSS afterthought — for DIFC, Dubai Internet City and mainland teams alike.",
    "Free-zone founders often want speed: a corporate site, a listings portal or a Flutter app that can demo to investors. We quote in AED, keep long overlap with Gulf hours, and assign IP to your UAE entity before coding starts.",
    "Typical Dubai work: bilingual corporate sites, property enquiry flows, hospitality booking pages and commerce with UAE VAT behaviour scoped early — because Gulf retail is rarely “Stripe only”.",
  ],
  localFocus: [
    "Free-zone startups",
    "Real estate & hospitality sites",
    "Arabic + English / RTL",
    "AED commercials",
  ],
  faqs: [
    {
      question: "Do you build bilingual Arabic and English sites for Dubai?",
      answer:
        "Yes. RTL layouts, typography and language switchers are designed up front.",
    },
    {
      question: "Can you work Dubai business hours?",
      answer:
        "We typically provide 8+ hours of overlap with UAE days — same-day stand-ups and Slack answers are normal.",
    },
    {
      question: "What do Dubai websites usually cost in AED?",
      answer:
        "Focused bilingual marketing sites often start around AED 13,000. E-commerce and portals scale from there after discovery. Dedicated seniors are quoted in AED after we see scope.",
    },
    {
      question: "Do you work with Dubai free-zone companies?",
      answer:
        "Yes — free-zone and mainland. Invoicing and contracts are set up so finance is not blocked.",
    },
    {
      question: "Who owns the code?",
      answer:
        "Your UAE company. NDA/IP before coding; repos transfer at handover.",
    },
    {
      question: "Do you support UAE VAT in commerce builds?",
      answer:
        "When VAT is in scope, we configure 5% behaviour in checkout or admin tools after confirming your finance setup.",
    },
  ],
  seoSections: [
    {
      heading: "Hiring a development partner in Dubai vs offshore",
      body: `Local Dubai talent is strong and expensive. If your roadmap is a bilingual site or portal, an India team that works Gulf hours can cut cost without losing same-day feedback.

That combination — RTL craft + AED quotes + long overlap — is what Dubai clients hire us for.`,
    },
    {
      heading: "Projects we see most from Dubai",
      body: `Corporate sites with Arabic/English, property enquiry flows, hospitality booking pages and Flutter MVPs. Payments and multi-warehouse retail rules get scoped early.`,
    },
    {
      heading: "Engagement models for Dubai free-zone and mainland teams",
      body: `Fixed AED scopes for launch projects, retainers for ongoing product work, or white-label delivery for Dubai agencies. IP assigns to your UAE entity before the first commit.`,
    },
    {
      heading: "Starting from Dubai",
      body: `Share language requirements and deadline. We return an AED proposal and a kickoff plan inside about a week of contracts. ${CONTACT}`,
    },
  ],
  metaTitle: "Web & App Development for Dubai | AED · Arabic/English",
  metaDescription:
    "Bilingual Arabic/English websites and apps for Dubai free-zone and mainland teams. AED quotes, Gulf-hour overlap. Golax India.",
});

// Continue with all thin cities - I'll add them in the same file below
Object.assign(deepened, {
  "canada/toronto": {
    h1: "Hire Offshore Developers for Toronto Startups & Scale-Ups",
    lead:
      "Toronto engineering salaries move faster than most seed runways. Golax India adds senior React/Node capacity with CAD invoices, EST overlap and PIPEDA-minded data handling — without another Bay Street contractor rate.",
    introHeading: "Toronto product teams, India delivery bench",
    intro: [
      "Toronto founders in fintech, SaaS and marketplace often need an MVP or feature sprint while local hiring queues stay long. We fill that gap with written CAD scopes and Eastern Time collaboration that fits downtown and remote GTA teams.",
      "Privacy conversations are normal here — we plan DPAs and Canadian cloud regions when residency matters. You keep product ownership in Toronto; we supply senior tickets, CI and weekly staging demos.",
      "Stack preference leans TypeScript, Next.js and Postgres unless you already standardised. Agency white-label is welcome when studios need quiet overflow before a client go-live.",
    ],
    localFocus: [
      "SaaS & fintech-adjacent product",
      "GTA agencies needing overflow",
      "CAD billing & written scopes",
      "EST overlap · PIPEDA-aware defaults",
    ],
    faqs: [
      {
        question: "Do you bill Toronto clients in CAD?",
        answer:
          "Yes. CAD quotes and monthly invoices are standard. Finance-friendly line items after discovery.",
      },
      {
        question: "How much overlap with Toronto hours?",
        answer:
          "About 4–5 hours with Eastern Time for live stand-ups, design reviews and same-day decisions. Async covers the rest.",
      },
      {
        question: "Can you support PIPEDA requirements?",
        answer:
          "We design with privacy defaults and can host in Canadian regions when required. Exact controls follow your counsel’s guidance.",
      },
      {
        question: "Typical website or MVP cost for a Toronto startup?",
        answer:
          "Marketing sites often near C$4,000–C$8,000. SaaS MVPs commonly land in the C$20,000–C$75,000 range depending on scope. Dedicated seniors are usually quoted around C$35–C$60/hour. Written CAD quotes only.",
      },
      {
        question: "Staff-aug into our Toronto Slack?",
        answer:
          "Yes. Common for teams that need two senior hands without a hire cycle. You keep ceremonies; we add tickets.",
      },
      {
        question: "Who owns IP?",
        answer:
          "Your Canadian corporation. Assignment before coding; repos transfer at handover.",
      },
    ],
    seoSections: [
      {
        heading: "Why Toronto startups use offshore developers",
        body: `Capacity and cost — not “cheap code”. Toronto teams hire us when they need senior delivery during EST hours with CAD commercials they can put in front of finance.

Local senior contractors price like coastal markets. Offshore only helps if communication stays sharp — that is how we run engagements.`,
      },
      {
        heading: "What we build for Toronto clients",
        body: `SaaS MVPs, internal tools and Next.js marketing/commerce sites. We push for CI and docs so a local hire can take over later.

Fintech-adjacent dashboards get extra attention on roles, logging and environment separation when you require it.`,
      },
      {
        heading: "Engagement models for GTA buyers",
        body: `Fixed-scope launches, monthly retainers or staff-augmentation into your board. CAD invoices, NDA/IP before coding and weekly demos are defaults on every model.`,
      },
      {
        heading: "Kickoff from Toronto",
        body: `Discovery call → CAD proposal → NDA/IP → kickoff in about a week. ${CONTACT}`,
      },
    ],
    metaTitle: "Hire Offshore Developers for Toronto | CAD · EST",
    metaDescription:
      "Senior engineers for Toronto startups and agencies. CAD billing, EST overlap, PIPEDA-aware delivery. Offshore from India — Golax India.",
  },

  "australia/sydney": {
    h1: "Offshore Web & App Development for Sydney Brands & Agencies",
    lead:
      "Sydney agency and in-house rates are steep for growing ecommerce and SaaS teams. Golax India delivers Next.js/Shopify builds and product engineering with AUD invoices and solid AEST overlap.",
    introHeading: "Sydney commerce and product — without Sydney overhead",
    intro: [
      "Sydney briefs we see most: Shopify or headless rebuilds for DTC brands, subscription SaaS features for product teams in Surry Hills or remote NSW, and mobile apps that must hit both stores.",
      "We keep AEST stand-ups, quote in AUD and assign IP to your Australian company before coding. Afterpay/Stripe checkout conversations are normal — payments are treated as product, not a plugin afterthought.",
      "Agencies use us as a quiet delivery bench before campaign launches. In-house teams use us when a senior hire is three months away and the roadmap is not.",
    ],
    localFocus: [
      "Ecommerce & Shopify / headless",
      "SaaS feature teams",
      "AUD + GST clarity",
      "AEST overlap for stand-ups",
    ],
    faqs: [
      {
        question: "Do you rebuild Shopify stores for Sydney brands?",
        answer:
          "Yes — Shopify, Plus and headless Next.js migrations, including SEO redirect planning and performance budgets.",
      },
      {
        question: "AUD invoicing and GST?",
        answer:
          "Quotes and invoices in AUD. GST treatment is confirmed at proposal stage so finance is not surprised.",
      },
      {
        question: "Timezone overlap with Sydney?",
        answer:
          "Typically 5–6 hours of AEST overlap for stand-ups and reviews. Async covers overnight work.",
      },
      {
        question: "Rough cost for a Sydney marketing site or MVP?",
        answer:
          "Focused marketing sites often from about A$4,500–A$9,000. Ecommerce and SaaS MVPs commonly A$20,000–A$80,000 after discovery. Dedicated seniors often A$40–A$70/hour. Written AUD quotes only.",
      },
      {
        question: "Who owns the code?",
        answer:
          "Your Australian company. IP assignment before coding; repos transfer at handover.",
      },
      {
        question: "Can agencies in Sydney white-label you?",
        answer:
          "Yes. Quiet delivery bench while you keep the client face and brand.",
      },
    ],
    seoSections: [
      {
        heading: "Outsourcing development from Sydney to India",
        body: `The win is AEST collaboration plus AUD clarity — not overnight-only tickets. We run weekly demos so scope cannot drift into the bush quietly.

Sydney rates for senior contractors climb fast; an India bench that keeps your hours can extend runway without lowering the PR bar.`,
      },
      {
        heading: "Sydney project patterns",
        body: `Store rebuilds, tourism-adjacent booking flows and SaaS admin tools. Mobile is usually Flutter/RN unless native APIs demand otherwise.

We prefer TypeScript, React/Next.js and clear CI so another Sydney engineer can inherit the work.`,
      },
      {
        heading: "Engagement models for NSW buyers",
        body: `Fixed AUD projects, retainers for ongoing product, or white-label for agencies. GST handling confirmed up front. IP assigns to your AU entity before sprint one.`,
      },
      {
        heading: "How Sydney teams start",
        body: `Send the URL or repo. We return an AUD plan and kickoff steps after contracts. ${CONTACT}`,
      },
    ],
    metaTitle: "Web & App Development for Sydney | AUD · AEST",
    metaDescription:
      "Shopify, Next.js and SaaS engineering for Sydney brands. AUD billing, AEST overlap, IP to your AU company. Golax India.",
  },
});

const DISPLAY = {
  "united-states/new-york": "New York",
  "united-states/san-francisco": "San Francisco",
  "united-kingdom/london": "London",
  "united-arab-emirates/dubai": "Dubai",
  "canada/toronto": "Toronto",
  "australia/sydney": "Sydney",
  "united-states/austin": "Austin",
  "singapore/singapore": "Singapore",
  "united-kingdom/manchester": "Manchester",
  "united-arab-emirates/abu-dhabi": "Abu Dhabi",
  "united-states/los-angeles": "Los Angeles",
  "australia/melbourne": "Melbourne",
  "germany/berlin": "Berlin",
  "canada/vancouver": "Vancouver",
  "united-states/chicago": "Chicago",
  "united-states/seattle": "Seattle",
  "united-kingdom/birmingham": "Birmingham",
  "saudi-arabia/riyadh": "Riyadh",
  "new-zealand/auckland": "Auckland",
  "qatar/doha": "Doha",
  "united-states/miami": "Miami",
  "united-states/boston": "Boston",
  "united-kingdom/edinburgh": "Edinburgh",
  "saudi-arabia/jeddah": "Jeddah",
  "germany/munich": "Munich",
  "canada/montreal": "Montreal",
  "australia/brisbane": "Brisbane",
  "germany/frankfurt": "Frankfurt",
  "canada/calgary": "Calgary",
  "australia/perth": "Perth",
  "united-arab-emirates/sharjah": "Sharjah",
  "saudi-arabia/dammam": "Dammam",
  "germany/hamburg": "Hamburg",
  "new-zealand/wellington": "Wellington",
  "qatar/lusail": "Lusail",
};

function cityLabel(key) {
  return DISPLAY[key] ?? key.split("/")[1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function deepenEntry(e, key) {
  const city = cityLabel(key);
  const out = structuredClone(e);

  if (out.intro.length > 3) {
    out.intro = [out.intro[0], out.intro[1], out.intro.slice(2).join(" ")];
  }
  while (out.intro.length < 3) {
    out.intro.push(
      `${city} engagements stay remote-first on Slack and GitHub with weekly staging demos. Golax India is an offshore partner — delivery HQ in Patna — with IP assigned to your entity before the first commit.`,
    );
  }
  out.intro = out.intro.map((p) => {
    if (p.length >= 140) return p;
    return `${p} We coordinate from Patna with timezone-friendly stand-ups; contact@golaxindia.com or +91 9128666005 for a 30-minute discovery call.`;
  });

  if (out.seoSections.length === 3) {
    out.seoSections.splice(2, 0, {
      heading: `Engagement models for ${city} buyers`,
      body: `Fixed-scope launches when the brief is clear, monthly retainers for ongoing product work, or staff-augmentation into your Slack and board. Weekly staging demos are mandatory on every model.

Golax India quotes in the currency your finance team expects — not vague “per sprint” hand-waving.`,
    });
  }
  while (out.seoSections.length < 4) {
    out.seoSections.push({
      heading: `How ${city} teams start with Golax India`,
      body: `Discovery call → written proposal → NDA/IP → kickoff in about a week. ${CONTACT}`,
    });
  }

  out.seoSections = out.seoSections.map((sec, idx) => {
    let body = sec.body;
    if (body.length < 200) {
      body = `${body}\n\nWe prefer TypeScript, React/Next.js and CI early so another ${city} engineer can inherit the repo without archaeology.`;
    }
    if (!body.includes("\n\n") && body.length < 380) {
      body = `${body}\n\nOffshore only works when communication stays sharp during your working hours — that is how we run ${city} engagements from Patna.`;
    }
    if (idx === out.seoSections.length - 1 && !body.includes("contact@golaxindia.com")) {
      body = `${body}\n\n${CONTACT}`;
    }
    return { ...sec, body };
  });

  out.faqs = out.faqs.map((f) => {
    if (f.answer.length >= 100) return f;
    return {
      ...f,
      answer: `${f.answer} Written quotes follow discovery — email contact@golaxindia.com when you want to sanity-check fit.`,
    };
  });

  return out;
}

function tsStr(s) {
  if (s.includes("\n") || s.includes("`")) {
    return "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
  }
  return JSON.stringify(s);
}

function formatFaq(faq, indent) {
  return `${indent}{\n${indent}  question: ${JSON.stringify(faq.question)},\n${indent}  answer:\n${indent}    ${JSON.stringify(faq.answer)},\n${indent}},`;
}

function formatSeo(sec, indent) {
  return `${indent}{\n${indent}  heading: ${JSON.stringify(sec.heading)},\n${indent}  body: ${tsStr(sec.body)},\n${indent}},`;
}

function formatEntry(key, e) {
  const i = "    ";
  const lines = [
    `  ${JSON.stringify(key)}: {`,
    `${i}h1: ${JSON.stringify(e.h1)},`,
    `${i}lead:`,
    `${i}  ${JSON.stringify(e.lead)},`,
    `${i}introHeading: ${JSON.stringify(e.introHeading)},`,
    `${i}intro: [`,
    ...e.intro.map((p) => `${i}  ${JSON.stringify(p)},`),
    `${i}],`,
    `${i}localFocus: [`,
    ...e.localFocus.map((f) => `${i}  ${JSON.stringify(f)},`),
    `${i}],`,
    `${i}faqs: [`,
    ...e.faqs.map((f) => formatFaq(f, i + "  ")),
    `${i}],`,
    `${i}seoSections: [`,
    ...e.seoSections.map((s) => formatSeo(s, i + "  ")),
    `${i}],`,
    `${i}metaTitle: ${JSON.stringify(e.metaTitle)},`,
    `${i}metaDescription:`,
    `${i}  ${JSON.stringify(e.metaDescription)},`,
    `  },`,
  ];
  return lines.join("\n");
}

const KEY_ORDER = Object.keys(current);

const merged = {};
for (const key of KEY_ORDER) {
  if (deepened[key]) merged[key] = deepened[key];
  else if (batch1[key]) merged[key] = batch1[key];
  else merged[key] = deepenEntry(current[key], key);
}

const header = `/**
 * Hand-written city landing content.
 * Key format: \`\${countrySlug}/\${citySlug}\`
 * Cities without an entry fall back to thinner generated copy — expand this map over time.
 */

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CitySeoSection {
  heading: string;
  body: string;
}

export interface CityPageContent {
  /** H1 without brand suffix */
  h1: string;
  /** Hero supporting paragraph */
  lead: string;
  introHeading: string;
  intro: string[];
  /** Short local industry / ecosystem notes shown as chips or list */
  localFocus: string[];
  faqs: CityFaq[];
  seoSections: CitySeoSection[];
  metaTitle: string;
  metaDescription: string;
}

export const cityPageContent: Record<string, CityPageContent> = {
`;

const footer = `};

export function getCityPageContent(
  countrySlug: string,
  citySlug: string,
): CityPageContent | undefined {
  return cityPageContent[\`\${countrySlug}/\${citySlug}\`];
}
`;

const body = KEY_ORDER.map((k) => formatEntry(k, merged[k])).join("\n\n");
fs.writeFileSync("src/data/cityPageContent.ts", header + body + "\n" + footer, "utf8");

const lens = KEY_ORDER.map((k) => [k, JSON.stringify(merged[k]).length]);
lens.sort((a, b) => a[1] - b[1]);
console.log(lens.map((x) => x.join(" ")).join("\n"));
console.log("min", lens[0][1], "max", lens[lens.length - 1][1]);
