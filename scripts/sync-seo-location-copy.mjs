/**
 * One-off generator: tmp-cities-copy.txt + tmp-svc-country-copy.txt → data TS files.
 * Run: node scripts/sync-seo-location-copy.mjs
 */
import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

function normalize(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function stripCharCount(line) {
  return line.replace(/\s*\(\d+\s*characters?\)\s*$/i, "").trim();
}

function escapeTs(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function parseBlocks(text, pathPrefix) {
  const blocks = [];
  const re = new RegExp(`^${pathPrefix.replace(/\//g, "\\/")}([^\\n]+)$`, "gm");
  const matches = [...text.matchAll(re)];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    blocks.push({ slug: matches[i][1].trim(), body: text.slice(start, end) });
  }
  return blocks;
}

function sectionText(body, headingLine) {
  const re = new RegExp(
    `^${headingLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=\\n(?:Why |What we |Working hours|Compliance and|Engagement options|Frequently asked|Developer / owner|Call to action:|Title tag|Pricing|/))`,
    "m",
  );
  const m = body.match(re);
  return m ? m[1].trim() : "";
}

function parseCityBlock(body) {
  const getLine = (key) => {
    const m = body.match(new RegExp(`^${key}\\s*\\n([^\\n]+)`, "m"));
    return m ? m[1].trim() : "";
  };

  const metaTitle = stripCharCount(getLine("Title tag"));
  const metaDescription = stripCharCount(getLine("Meta description"));
  const h1 = getLine("H1");

  const afterH1 = body.split(/^H1\s*\n/m)[1] || "";
  const leadMatch = afterH1.match(/^[^\n]+\n\n([\s\S]*?)\nWhy /);
  const lead = leadMatch ? leadMatch[1].trim() : "";

  const whyHeadingMatch = body.match(/^Why [^\n]+ choose an offshore team/m);
  const introHeading = whyHeadingMatch ? whyHeadingMatch[0].trim() : "Why companies choose an offshore team";

  const why = sectionText(body, introHeading);
  const whatHeadingMatch = body.match(/^What we build for [^\n]+/m);
  const whatHeading = whatHeadingMatch ? whatHeadingMatch[0].trim() : "";
  const what = whatHeading ? sectionText(body, whatHeading) : "";
  const working = sectionText(body, "Working hours and communication");
  const compliance = sectionText(body, "Compliance and security");
  const engagementRaw = sectionText(body, "Engagement options");
  const engagementLines = engagementRaw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const intro = [why, what, working, compliance].filter(Boolean);
  if (engagementLines.length) {
    intro.push(
      `Engagement options: ${engagementLines.join(" ")} NDA, MSA and IP assignment are signed before work starts.`,
    );
  }

  let localFocus = [];
  const indMatch = what.match(/commonly work in ([^.]+)\./i);
  if (indMatch) {
    localFocus = indMatch[1]
      .split(/,\s*|\s+and\s+/i)
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 5);
  }
  if (working) localFocus.push("Timezone overlap for live collaboration");
  if (compliance) localFocus.push("NDA · MSA · IP assignment");

  const faqs = [];
  const faqSection = body.split("Frequently asked questions")[1]?.split("Developer / owner")[0] || "";
  const faqRe = /Q:\s*([^\n]+)\s*\nA:\s*([^\n]+(?:\n(?!Q:)[^\n]+)*)/g;
  let fm;
  while ((fm = faqRe.exec(faqSection)) !== null) {
    faqs.push({
      question: fm[1].trim(),
      answer: fm[2].replace(/\n/g, " ").trim(),
    });
  }

  faqs.push({
    question: "How quickly does Golax India reply to project enquiries?",
    answer:
      "We reply within 24 hours on business days — email contact@golaxindia.com or use the contact form on golaxindia.com.",
  });

  const cityMatch = body.match(/for a ([A-Za-z .]+) company\?/);
  const cityName = cityMatch ? cityMatch[1].trim() : "your city";

  const seoSections = [
    why && { heading: introHeading, body: why },
    what && whatHeading && { heading: whatHeading, body: what },
    working && { heading: "Working hours and communication", body: working },
    compliance && { heading: "Compliance and security", body: compliance },
    engagementLines.length && {
      heading: "Engagement options",
      body: `${engagementLines.join(" ")} Email contact@golaxindia.com for a written quote — we aim to reply within 24 hours on business days.`,
    },
    {
      heading: `Talk to us about your ${cityName} project`,
      body: `Senior engineers work remotely from India with overlap for ${cityName} business hours. Book a discovery call or email contact@golaxindia.com — we reply within 24 hours on business days.`,
    },
  ].filter(Boolean);

  return { metaTitle, metaDescription, h1, lead, introHeading, intro, localFocus, faqs, seoSections };
}

const COUNTRY_DISPLAY = {
  "united-states": "United States",
  "united-kingdom": "United Kingdom",
  "united-arab-emirates": "United Arab Emirates",
  australia: "Australia",
  canada: "Canada",
  singapore: "Singapore",
  germany: "Germany",
};

function titleCaseServicePhrase(slug) {
  const map = {
    "web-development": "web development",
    "software-development": "software and SaaS development",
    "mobile-app-development": "mobile app development",
    "digital-marketing": "digital marketing and SEO",
    "it-consulting": "IT consulting and cloud",
  };
  return map[slug] || slug.replace(/-/g, " ");
}

function polishLead(lead, serviceSlug) {
  const phrase = titleCaseServicePhrase(serviceSlug);
  return lead
    .replace(/provides software and saas development/i, `provides ${phrase}`)
    .replace(/provides web development/i, `provides ${phrase}`)
    .replace(/provides mobile app development/i, `provides ${phrase}`)
    .replace(/provides digital marketing and seo/i, `provides ${phrase}`)
    .replace(/provides it consulting and cloud/i, `provides ${phrase}`);
}

function parseServiceBlock(body, serviceSlug, countrySlug) {
  const getLine = (key) => {
    const m = body.match(new RegExp(`^${key}\\s*\\n([^\\n]+)`, "m"));
    return m ? m[1].trim() : "";
  };

  const metaTitle = stripCharCount(getLine("Title tag"));
  const metaDescription = stripCharCount(getLine("Meta description"));
  let h1 = getLine("H1");
  h1 = h1.replace(/\bSaas\b/g, "SaaS").replace(/\bseo\b/g, "SEO");

  const afterH1 = body.split(/^H1\s*\n/m)[1] || "";
  const leadMatch = afterH1.match(/^[^\n]+\n\n([\s\S]*?)\nCall to action:/);
  let lead = leadMatch ? leadMatch[1].trim() : "";
  lead = polishLead(lead, serviceSlug);

  const whyMatch = body.match(/^Why [^\n]+/m);
  const whyHeading = whyMatch ? whyMatch[0].trim() : "";
  const why = whyHeading ? sectionText(body, whyHeading) : "";

  const deliver = sectionText(body, "What we deliver")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ");

  const complianceMatch = body.match(/^Compliance and data protection in [^\n]+/m);
  const complianceHeading = complianceMatch ? complianceMatch[0].trim() : "";
  const compliance = complianceHeading ? sectionText(body, complianceHeading) : "";
  const working = sectionText(body, "Working hours");
  const pricing = sectionText(body, "Pricing");

  const faqs = [];
  const faqSection = body.split("Frequently asked questions")[1]?.split("Developer / owner")[0] || "";
  const faqRe = /Q:\s*([^\n]+)\s*\nA:\s*([^\n]+(?:\n(?!Q:)[^\n]+)*)/g;
  let fm;
  while ((fm = faqRe.exec(faqSection)) !== null) {
    faqs.push({
      question: fm[1].trim(),
      answer: fm[2].replace(/\n/g, " ").trim(),
    });
  }

  const serviceLabel = titleCaseServicePhrase(serviceSlug);
  const countryLabel = COUNTRY_DISPLAY[countrySlug] || countrySlug.replace(/-/g, " ");

  const sections = [
    why && whyHeading && { heading: whyHeading, body: why },
    deliver && { heading: "What we deliver", body: deliver },
    compliance && complianceHeading && { heading: complianceHeading, body: compliance },
    working && { heading: "Working hours", body: working },
    pricing && { heading: "Pricing", body: pricing },
    {
      heading: `Book a discovery call for ${serviceLabel} in ${countryLabel}`,
      body: `Email contact@golaxindia.com for a quote in your billing currency — we reply within 24 hours on business days. NDA, MSA and IP assignment are signed before work starts.`,
    },
  ].filter(Boolean);

  return { metaTitle, metaDescription, h1, lead, faqs, sections };
}

const CITY_KEYS = [
  "h1",
  "lead",
  "introHeading",
  "intro",
  "localFocus",
  "faqs",
  "seoSections",
  "metaTitle",
  "metaDescription",
];
const SVC_KEYS = ["h1", "lead", "metaTitle", "metaDescription", "faqs", "sections"];

function emitObject(obj, indent = 2, keyOrder = null) {
  const sp = " ".repeat(indent);
  const lines = [];
  const keys = keyOrder || Object.keys(obj);
  for (const k of keys) {
    const v = obj[k];
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      if (v.length && typeof v[0] === "string") {
        lines.push(`${sp}${k}: [`);
        for (const s of v) lines.push(`${sp}  \`${escapeTs(s)}\`,`);
        lines.push(`${sp}],`);
      } else if (v.length && v[0].question) {
        lines.push(`${sp}${k}: [`);
        for (const f of v) {
          lines.push(`${sp}  {`);
          lines.push(`${sp}    question: ${JSON.stringify(f.question)},`);
          lines.push(`${sp}    answer: ${JSON.stringify(f.answer)},`);
          lines.push(`${sp}  },`);
        }
        lines.push(`${sp}],`);
      } else {
        lines.push(`${sp}${k}: [`);
        for (const s of v) {
          lines.push(`${sp}  {`);
          lines.push(`${sp}    heading: ${JSON.stringify(s.heading)},`);
          lines.push(`${sp}    body: ${JSON.stringify(s.body)},`);
          lines.push(`${sp}  },`);
        }
        lines.push(`${sp}],`);
      }
    } else if (typeof v === "string") {
      if (v.length > 72 || v.includes("\n")) {
        lines.push(`${sp}${k}: ${JSON.stringify(v)},`);
      } else {
        lines.push(`${sp}${k}: ${JSON.stringify(v)},`);
      }
    }
  }
  return lines.join("\n");
}

// --- Cities ---
const citiesText = normalize(fs.readFileSync(path.join(root, "tmp-cities-copy.txt"), "utf8"));
const cityBlocks = parseBlocks(citiesText, "/locations/global/");
const existingCityKeys = new Set(
  [...fs.readFileSync(path.join(root, "src/data/cityPageContent.ts"), "utf8").matchAll(/"([^"]+\/[^"]+)":\s*\{/g)].map(
    (m) => m[1],
  ),
);

const mergeCandidates = [];
const cityEntries = [];
let cityUpdated = 0;

for (const { slug, body } of cityBlocks) {
  const key = slug.replace(/^\/locations\/global\//, "").replace(/^\//, "");
  if (!existingCityKeys.has(key)) continue;
  mergeCandidates.push(key);
  const parsed = parseCityBlock(body);
  cityUpdated++;
  cityEntries.push(`  "${key}": {\n${emitObject(parsed, 4, CITY_KEYS)}\n  },`);
}

const cityHeader = `/**
 * Hand-written city landing content.
 * Key format: \`\${countrySlug}/\${citySlug}\`
 * Cities without an entry fall back to thinner generated copy — expand this map over time.
 *
 * SEO note — merge/noindex candidates if no real local proof (client, event, regulation) is added:
 * ${mergeCandidates.join(", ")}
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
${cityEntries.join("\n\n")}
};

export function getCityPageContent(
  countrySlug: string,
  citySlug: string,
): CityPageContent | undefined {
  return cityPageContent[\`\${countrySlug}/\${citySlug}\`];
}
`;

fs.writeFileSync(path.join(root, "src/data/cityPageContent.ts"), cityHeader);

// --- Service country ---
const svcText = normalize(fs.readFileSync(path.join(root, "tmp-svc-country-copy.txt"), "utf8"));
const svcBlocks = parseBlocks(svcText, "/services/");

const SERVICE_PREAMBLE = `export const SERVICE_COUNTRY_ALLOWLIST: Record<string, string[]> = {
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
    return \`/services/\${slug}/global/\${countrySlug}\`;
  }
  // seo-services has no hub page
  if (slug === "seo-services") return "/services/digital-marketing";
  return \`/services/\${slug}\`;
}

export function getServiceCountryContent(
  serviceSlug: string,
  countrySlug: string,
): ServiceCountryPageContent | undefined {
  return serviceCountryContent[\`\${serviceSlug}/\${countrySlug}\`];
}
`;

const svcEntries = [];
let svcUpdated = 0;

for (const { slug, body } of svcBlocks) {
  const parts = slug.split("/").filter(Boolean);
  // web-development/global/united-states
  const serviceSlug = parts[0];
  const countrySlug = parts[2];
  const key = `${serviceSlug}/${countrySlug}`;
  svcUpdated++;
  const parsed = parseServiceBlock(body, serviceSlug, countrySlug);
  svcEntries.push(`  "${key}": {\n${emitObject(parsed, 4, SVC_KEYS)}\n  },`);
}

const svcHeader = `/**
 * Hand-written service × country landing content.
 * Only these combos are indexed; others 301 to the service hub.
 * Key: \`\${serviceSlug}/\${countrySlug}\`
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

${SERVICE_PREAMBLE}

export const serviceCountryContent: Record<string, ServiceCountryPageContent> = {
${svcEntries.join("\n\n")}
};
`;

fs.writeFileSync(path.join(root, "src/data/serviceCountryContent.ts"), svcHeader);

console.log(JSON.stringify({ cityUpdated, svcUpdated, mergeCandidates: mergeCandidates.length }));
