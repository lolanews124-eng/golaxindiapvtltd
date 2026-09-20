/**
 * Generates deepened cityPageContent.ts from per-city profiles.
 * Unique facts + unique prose blocks per city — no shared body templates.
 */
import fs from "fs";

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

const footer = `
};

export function getCityPageContent(
  countrySlug: string,
  citySlug: string,
): CityPageContent | undefined {
  return cityPageContent[\`\${countrySlug}/\${citySlug}\`];
}
`;

// Preserve NYC from current file
const current = fs.readFileSync("src/data/cityPageContent.ts", "utf8");
const nycStart = current.indexOf('  "united-states/new-york":');
const nycEnd = current.indexOf('  "united-states/san-francisco":');
const nyc = current.slice(nycStart, nycEnd).trimEnd();

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function emitCity(key, c) {
  const intro = c.intro.map((p) => `      ${JSON.stringify(p)},`).join("\n");
  const focus = c.localFocus.map((p) => `      ${JSON.stringify(p)},`).join("\n");
  const faqs = c.faqs
    .map(
      (f) => `      {
        question: ${JSON.stringify(f.question)},
        answer:
          ${JSON.stringify(f.answer)},
      },`,
    )
    .join("\n");
  const secs = c.seoSections
    .map(
      (s) => `      {
        heading: ${JSON.stringify(s.heading)},
        body: \`${esc(s.body)}\`,
      },`,
    )
    .join("\n");
  return `  "${key}": {
    h1: ${JSON.stringify(c.h1)},
    lead:
      ${JSON.stringify(c.lead)},
    introHeading: ${JSON.stringify(c.introHeading)},
    intro: [
${intro}
    ],
    localFocus: [
${focus}
    ],
    faqs: [
${faqs}
    ],
    seoSections: [
${secs}
    ],
    metaTitle: ${JSON.stringify(c.metaTitle)},
    metaDescription:
      ${JSON.stringify(c.metaDescription)},
  }`;
}

/** Load all non-NYC city objects from JSON */
const data = JSON.parse(fs.readFileSync("scripts/city-deepen-data.json", "utf8"));
const keys = Object.keys(data);
const body = [nyc, ...keys.map((k) => emitCity(k, data[k]))].join(",\n\n");

fs.writeFileSync("src/data/cityPageContent.ts", header + body + "\n" + footer);
console.log("Wrote cities:", keys.length + 1, "(incl NYC)");
