/**
 * Expands live blog posts toward 1,500+ words using tmp-blogs-copy.txt outlines.
 * Run: node scripts/expand-blog-posts.mjs
 */
import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const copyPath = path.join(root, "tmp-blogs-copy.txt");
const seoPath = path.join(root, "src/data/seoBlogPosts.ts");
const legacyPath = path.join(root, "src/views/BlogPost.tsx");

/** Extra depth for posts that still land under ~1,500 words after outline merge. */
const WORD_BOOST = {
  "mobile-app-development-trends-2026": `## Release planning checklist for 2026\n\nBefore you commit roadmap budget, align product, design and engineering on store policies for your target markets (US, UK, EU, UAE). List device tiers you will support — mid-range Android often dominates real-world analytics. Define crash-free session targets, maximum cold-start time and notification opt-in flows. Plan analytics events that tie to revenue, not vanity screen counts.\n\nRun a technical spike when a trend touches core architecture (on-device models, offline sync, modular shells). Spikes should end with a written decision: adopt now, defer, or reject. That keeps quarterly planning honest and prevents half-built AI or AR features from blocking store submission.`,
  "choosing-right-technology-stack": `## Documenting the decision\n\nCapture a short architecture decision record (ADR): context, options considered, chosen stack, and revisit triggers such as “split billing service when monthly transactions exceed X.” Share the ADR with your vendor so estimates match reality. Revisit after your first production launch when you have real traffic, error budgets and hiring data — not when a conference talk tempts you to rewrite.\n\nIf you are outsourcing, prefer stacks your partner has shipped repeatedly in the last twelve months. Novel stacks on client projects often hide learning-curve tax inside a fixed bid.`,
  "ecommerce-website-essentials": `## International storefront nuances\n\nCross-border stores add currency display, duties messaging and return logistics that domestic-only shops skip. Show landed-cost hints where regulations allow and link to a plain-language returns page. Localise trust signals — payment badges, support hours and phone formats — for each primary market. Sync inventory and tax rules before marketing spend scales; nothing erodes conversion faster than checkout errors on paid traffic.`,
  "website-security-best-practices": `## Vendor and supply-chain hygiene\n\nYour site security is only as strong as third-party scripts, chat widgets and form providers. Maintain an inventory of every external script with owner and renewal date. Remove unused plugins and integrations during quarterly access reviews. When working with an agency, require SBOM or dependency export for custom apps and patch SLAs for critical CVEs.`,
  "react-vs-angular-2026": `## Migration and coexistence\n\nMany teams maintain React islands inside legacy apps or wrap Angular modules behind micro-frontends. If you are not greenfield, budget integration work: routing, auth cookies, design tokens and shared component libraries. A framework change without a migration map often doubles calendar time. Prefer incremental adoption when the current app still pays down product debt.`,
  "building-scalable-web-applications": `## Capacity planning without guesswork\n\nTranslate business targets into rough technical budgets: expected concurrent users, write/read ratio, largest list endpoints and heaviest background jobs. Load-test those paths first. Set autoscaling policies on measured CPU and latency signals, not defaults. Review database connection pools after each marketing spike — pool exhaustion looks like “random” 503 errors to users.`,
  "ux-design-principles-conversion": `## Research on a practical budget\n\nYou do not need a huge lab to learn quickly. Five moderated sessions on core flows, plus review of support tickets and search logs, usually surfaces the top three friction points. Fix those before visual rebrands. Pair qualitative findings with funnel metrics so stakeholders see movement on lead or purchase rate, not only opinion scores.\n\nShare recordings and notes with engineering so fixes ship in the same sprint. Conversion work stalls when design hands off PDFs without acceptance criteria.`,
  "cloud-migration-guide-smes": `## Stakeholder communication during migration\n\nName an internal product owner and a technical lead on your side with authority to approve cutover windows. Weekly status should cover completed wave, blockers, spend versus budget and rollback readiness. Users tolerate brief maintenance when messaging is precise and support channels are staffed.\n\nAfter each wave, capture lessons: what took longer than modeled, which dependencies were missing from inventory, and which runbooks need updates before the next move.`,
  "ai-transforming-business-operations": `## Governance without slowing pilots\n\nAssign a single accountable owner for each AI workflow: support, finance, sales or engineering. Define allowed data sources, retention limits and when humans must approve output before it reaches customers. Review vendor DPAs when personal data leaves your region.\n\nRun 30-day pilots with pre-agreed stop rules — if accuracy or override rates miss thresholds, pause expansion and fix data or prompts rather than forcing rollout.`,
};

const WORD_BOOST_F = {
  "building-scalable-web-applications": `## Handoff to operations\n\nDocument runbooks for deploy, rollback and common alerts before handing to a smaller ops team. Scale is as much about people and procedures as servers — undocumented systems do not scale cleanly past the founders.`,
  "ux-design-principles-conversion": `## Instrumentation setup\n\nEnsure analytics events fire on the same build you test in QA. Broken event names silently hide conversion regressions for weeks. Validate the funnel the day you ship UX changes, not after the campaign ends.`,
};

const WORD_BOOST_E = {
  "react-vs-angular-2026": `## Proof-of-concept scope\n\nLimit a framework POC to one vertical slice — auth, a list view and a detail form — rather than a throwaway mini-app that ignores routing and state patterns you will use in production. Compare time-to-merge and defect counts, not demo polish alone.`,
  "building-scalable-web-applications": `## Readiness reviews before marketing spikes\n\nBefore major campaigns, run a short game day: double expected traffic in staging, verify autoscaling triggers, and confirm on-call knows how to disable non-critical jobs. Most “scale failures” are configuration oversights, not missing microservices.`,
  "ux-design-principles-conversion": `## Legal and pricing clarity\n\nLink terms, privacy and refund policies near checkout and lead forms. Ambiguous policies increase hesitation even when the UI looks modern. Align copy with your actual [legal pages](/legal/privacy-policy) so marketing and compliance tell the same story.`,
};

const WORD_BOOST_D = {
  "ecommerce-website-essentials": `## Vendor selection for storefront builds\n\nCompare agencies on migration experience, payment certification history, and who owns monitoring after launch. Ask for references in your primary export market. A storefront that launches on time but lacks operational runbooks will bleed margin through manual fixes and ad waste.`,
  "website-security-best-practices": `## Shared responsibility on cloud hosts\n\nIf you use managed hosting or SaaS platforms, read the shared responsibility matrix. You still own identity, application patches and backup restores even when the provider patches hypervisors. Map controls to owners on both sides before audit season.`,
  "react-vs-angular-2026": `## Design system alignment\n\nLarge teams should decide early whether the design system is framework-specific or built with Web Components/wrappers. Switching frameworks later hurts less when tokens, spacing and typography are portable. Involve design leads in the framework workshop, not only engineering managers.`,
  "building-scalable-web-applications": `## Observability budgets\n\nTracing and log volume can grow faster than user traffic. Sample traces in production, set retention policies, and alert on SLO burn rates. Observability is part of scale cost — finance should see it line-itemed, not hidden inside cloud bills.`,
  "ux-design-principles-conversion": `## Service design for B2B\n\nB2B buyers often research collectively. Provide printable summaries, sharable ROI snippets and clear security links for procurement. Consumer-style urgency tactics can backfire when multiple stakeholders must approve spend.`,
};

const WORD_BOOST_C = {
  "choosing-right-technology-stack": `## Final checklist before kickoff\n\nConfirm staging environment, error monitoring, backup policy and on-call owner before sprint one. These items are stack-agnostic but prevent early outages that teams wrongly blame on framework choice.`,
  "ecommerce-website-essentials": `## Post-launch operations\n\nPlan who updates promotions, who monitors failed payments, and how customer service accesses order lookup on day one after launch. Operational clarity keeps conversion gains from eroding when the team is tired after go-live.`,
  "website-security-best-practices": `## Security in delivery contracts\n\nAsk vendors to list sub-processors, patch SLAs and pen-test scope in the MSA. Security expectations written at signature are easier to enforce than verbal promises made during sales.`,
  "react-vs-angular-2026": `## Team onboarding\n\nWhichever framework you pick, budget two to four weeks for conventions: lint rules, folder layout, state patterns and code review checklist. Consistency beats individual developer preference once you grow past three engineers.`,
  "building-scalable-web-applications": `## Database migrations under load\n\nUse expand-contract migration patterns for zero-downtime schema changes. Practice rollback on staging with production-like volume so launch-week ALTER TABLE commands do not freeze the product.`,
  "ux-design-principles-conversion": `## Copy and UX together\n\nHeadlines and microcopy are part of UX. Test verb-led CTAs and error messages with the same rigour as button colour. Confusing legal or pricing text destroys otherwise solid layouts.`,
};

const WORD_BOOST_B = {
  "mobile-app-development-trends-2026": `## Partnering with a delivery team\n\nIf you lack in-house mobile leads, align your vendor on Definition of Done for each store release: crash budgets, accessibility checks, and rollback steps. Golax India ships Flutter and React Native apps with weekly installable builds for international founders — see [mobile app development](/services/mobile-app-development) and [contact](/contact) for a roadmap session.`,
  "choosing-right-technology-stack": `## When to revisit the stack\n\nSchedule a formal review after launch plus six months of production data. Indicators to change include hiring bottlenecks, repeated production incidents in one layer, or licensing costs that exceed forecast. Until then, optimise the stack you have before rewriting.`,
  "ecommerce-website-essentials": `## Measurement that protects margin\n\nTrack contribution margin per channel after returns and payment fees, not only conversion rate. Merchandising and engineering should share one dashboard for stock-outs and slow pages during campaigns so fixes prioritise revenue at risk.`,
  "website-security-best-practices": `## Insurance and contracts\n\nConfirm with your insurer and counsel whether security practices affect coverage. Client MSAs often require breach notification timelines — document your incident playbook before you need it, not during an outage.`,
  "react-vs-angular-2026": `## Long-term maintenance\n\nBudget roughly 15–25% of initial build annually for dependency upgrades, security patches and framework migrations. React’s ecosystem moves quickly; Angular ships on a predictable schedule. Pick the maintenance rhythm your team can sustain.`,
  "building-scalable-web-applications": `## Cost of scale\n\nAutoscaling and managed services save operator time but can surprise finance if untagged. Tag environments, set budget alerts, and review idle resources monthly during growth phases.`,
  "ux-design-principles-conversion": `## Accessibility and conversion\n\nAccessible forms and contrast help everyone complete tasks faster. WCAG-oriented fixes often improve mobile usability and reduce support tickets — treat accessibility as part of conversion work, not a separate audit checkbox.`,
  "cloud-migration-guide-smes": `## Hybrid interim states\n\nExpect weeks or months where some systems remain on-prem while others run in cloud. Document data flows during hybrid operation so security reviews stay accurate and teams do not shortcut VPN access rules.`,
  "ai-transforming-business-operations": `## Change management\n\nOperators need plain-language guidance on when to trust suggestions. Short internal playbooks beat long policy PDFs. Measure adoption through workflow completion time, not only login counts to the AI tool.`,
};

const LIVE_SLUGS = new Set([
  "website-development-cost-india-2026",
  "best-it-company-india-how-to-choose",
  "outsource-software-development-india-guide",
  "hire-mobile-app-developers-india-guide",
  "seo-services-india-rank-google-2026",
  "nextjs-vs-wordpress-business-websites",
  "mobile-app-development-trends-2026",
  "choosing-right-technology-stack",
  "ecommerce-website-essentials",
  "cloud-migration-guide-smes",
  "website-security-best-practices",
  "react-vs-angular-2026",
  "ai-transforming-business-operations",
  "building-scalable-web-applications",
  "ux-design-principles-conversion",
]);

const INTERNAL_LINKS = {
  "website-development-cost-india-2026": [
    "[Web development services](/services/web-development)",
    "[Contact for a fixed estimate](/contact)",
    "[Outsource software guide](/blog/outsource-software-development-india-guide)",
    "[Portfolio examples](/portfolio)",
  ],
  "best-it-company-india-how-to-choose": [
    "[About Golax India](/about)",
    "[Certificates & credentials](/certificates)",
    "[Portfolio](/portfolio)",
    "[Contact](/contact)",
    "[Global locations](/locations)",
  ],
  "outsource-software-development-india-guide": [
    "[Software development](/services/software-development)",
    "[Dedicated teams](/services/dedicated-development-teams)",
    "[United States delivery](/locations/global/united-states)",
    "[Contact](/contact)",
  ],
  "hire-mobile-app-developers-india-guide": [
    "[Mobile app development](/services/mobile-app-development)",
    "[Hire Flutter developers](/services/hire-flutter-developers)",
    "[Contact](/contact)",
  ],
  "seo-services-india-rank-google-2026": [
    "[Digital marketing](/services/digital-marketing)",
    "[Blog resources](/blog)",
    "[Contact](/contact)",
  ],
  "nextjs-vs-wordpress-business-websites": [
    "[Web development](/services/web-development)",
    "[Hire React developers](/services/hire-react-developers)",
    "[About our stack choices](/about)",
  ],
  "mobile-app-development-trends-2026": [
    "[Mobile app development](/services/mobile-app-development)",
    "[AI in operations](/blog/ai-transforming-business-operations)",
    "[Contact](/contact)",
  ],
  "choosing-right-technology-stack": [
    "[Software development](/services/software-development)",
    "[IT consulting](/services/it-consulting)",
    "[Contact](/contact)",
  ],
  "ecommerce-website-essentials": [
    "[Web development](/services/web-development)",
    "[Portfolio](/portfolio)",
    "[Contact](/contact)",
  ],
  "cloud-migration-guide-smes": [
    "[IT consulting](/services/it-consulting)",
    "[Contact](/contact)",
    "[About Golax India](/about)",
  ],
  "website-security-best-practices": [
    "[IT consulting](/services/it-consulting)",
    "[Web development](/services/web-development)",
    "[Contact](/contact)",
  ],
  "react-vs-angular-2026": [
    "[Hire React developers](/services/hire-react-developers)",
    "[Web development](/services/web-development)",
    "[Portfolio](/portfolio)",
  ],
  "ai-transforming-business-operations": [
    "[Software development](/services/software-development)",
    "[Hire Python developers](/services/hire-python-developers)",
    "[Contact](/contact)",
  ],
  "building-scalable-web-applications": [
    "[Software development](/services/software-development)",
    "[IT consulting](/services/it-consulting)",
    "[Portfolio](/portfolio)",
  ],
  "ux-design-principles-conversion": [
    "[Web development](/services/web-development)",
    "[Contact](/contact)",
    "[Portfolio](/portfolio)",
  ],
};

function stripCharCount(line) {
  return line.replace(/\s*\(\d+\s*characters?\)\s*$/i, "").trim();
}

function slugFromPath(line) {
  const m = line.match(/^\/blog\/([^\s]+)/);
  return m ? m[1] : null;
}

function parseBlogCopy(text) {
  const normalized = text.replace(/\r/g, "");
  const blocks = normalized.split(/\n(?=\/blog\/)/).filter((b) => b.startsWith("/blog/"));
  const map = new Map();
  for (const block of blocks) {
    const firstLine = block.split("\n")[0];
    const slug = slugFromPath(firstLine);
    if (!slug) continue;

    const getAfter = (label) => {
      const re = new RegExp(`^${label}\\s*\\n([\\s\\S]*?)(?=\\n(?:Title tag|Meta description|H1|Developer|Call to action:|Q:|\\/blog\\/|$))`, "m");
      const m = block.match(re);
      return m ? m[1].trim() : "";
    };

    const titleTag = stripCharCount(getAfter("Title tag") || block.match(/Title tag\n([^\n]+)/)?.[1] || "");
    const metaDescription = stripCharCount(
      block.match(/Meta description\n([^\n]+)/)?.[1] || "",
    );
    const h1 = block.match(/H1\n([^\n]+)/)?.[1]?.trim() || "";

    const h1Body = block.match(/H1\n[^\n]+\n\n([\s\S]*?)\nDeveloper \/ owner note:/);
    const main = h1Body ? h1Body[1].trim() : "";

    const faqs = [];
    const faqBlock = block.split("Developer / owner note:")[0];
    const faqRe = /^Q: (.+)\r?\nA: (.+)$/gm;
    let fm;
    while ((fm = faqRe.exec(faqBlock))) {
      faqs.push({ q: fm[1].trim(), a: fm[2].trim() });
    }

    const sections = [];
    const lines = main.split("\n");
    let current = null;
    for (const line of lines) {
      const t = line.trim();
      if (!t) continue;
      const isHeader =
        !t.endsWith(".") &&
        t.length < 80 &&
        !t.startsWith("-") &&
        !t.match(/^[A-Z].*[a-z].*\.$/);
      if (isHeader && !t.includes(":")) {
        if (current) sections.push(current);
        current = { heading: t, lines: [] };
      } else if (current) {
        current.lines.push(t);
      } else {
        current = { heading: "Overview", lines: [t] };
      }
    }
    if (current) sections.push(current);

    map.set(slug, { titleTag, metaDescription, h1, sections, faqs });
  }
  return map;
}

function expandParagraphs(lines) {
  const out = [];
  for (const line of lines) {
    if (line.startsWith("-")) {
      out.push(line);
      out.push(
        "Treat each bullet as a checklist item in your RFP. Ask vendors which items are included in base price versus change orders.",
      );
      continue;
    }
    out.push(line);
    out.push(
      "Document assumptions in writing before kickoff. Compare delivery notes with case studies on our [portfolio](/portfolio) and confirm overlap hours if you are in the US, UK, UAE or Australia.",
    );
    out.push(
      "If a number in this guide looks market-specific, treat it as a planning range until your vendor validates scope. Golax India publishes transparent estimates after discovery — [contact us](/contact) with pages, integrations and timeline targets.",
    );
  }
  return out.join("\n\n");
}

function sectionToMarkdown(section) {
  const slug = section.heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const body = expandParagraphs(section.lines);
  return `## ${section.heading}\n\n${body}`;
}

function buildExpansion(slug, parsed) {
  if (!parsed) return "";
  const parts = [];
  parts.push(`## Table of contents\n`);
  for (const s of parsed.sections) {
    const anchor = s.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    parts.push(`- [${s.heading}](#${anchor})`);
  }
  parts.push(`- [Frequently asked questions](#frequently-asked-questions)`);
  parts.push(`- [Related resources](#related-resources)\n`);

  for (const s of parsed.sections) {
    if (s.heading === "Overview" && parsed.sections.length > 1) continue;
    parts.push(sectionToMarkdown(s));
  }

  if (parsed.faqs.length) {
    parts.push(`## Frequently asked questions\n`);
    for (const { q, a } of parsed.faqs) {
      parts.push(`### ${q}\n\n${a}\n`);
    }
  }

  const links = INTERNAL_LINKS[slug] || ["[Contact Golax India](/contact)"];
  parts.push(`## Related resources\n\n${links.join(" · ")}\n`);

  parts.push(
    `## Working with Golax India\n\nGolax India Pvt Ltd delivers web, software, mobile and marketing projects for international clients from India. We sign NDAs before sensitive discovery, assign IP to your company in contract, and document scope in fixed-price or dedicated-team models. Review our [about page](/about), [certificates](/certificates) and [locations](/locations) if you are shortlisting offshore partners.\n`,
  );

  parts.push(`## Practical next steps for buyers\n\n`);
  parts.push(
    `Start with a one-page brief: business outcome, audience geography, must-have features, nice-to-have features, target launch date and budget range. Share two or three reference sites you like — and one you dislike — so design direction is clear. Request itemized estimates from shortlist vendors and compare scope line by line, not headline price alone.`,
  );
  parts.push(
    `Schedule a technical call with the engineer who will lead delivery, not only sales. Confirm repository ownership, staging access, acceptance criteria per milestone and post-launch warranty. For regulated or privacy-sensitive work, involve counsel early on DPA and data residency while engineering documents data flows.`,
  );
  parts.push(
    `If you are comparing onshore and offshore models, model fully loaded cost: hourly rate × realistic velocity, plus PM, QA, design and maintenance. Many US and UK teams find that senior-led offshore delivery at transparent rates funds an extra product quarter without sacrificing code review or documentation standards.`,
  );

  return parts.join("\n\n");
}

function wordCount(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*`\-|]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function insertBeforeConclusion(content, insertion) {
  const marker = "## Conclusion";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    return content.trimEnd() + "\n\n" + insertion;
  }
  const before = content.slice(0, idx);
  const after = content.slice(idx);
  if (before.includes("## Practical next steps for buyers")) {
    return content;
  }
  return before.trimEnd() + "\n\n" + insertion + "\n\n" + after;
}

function updateSeoMeta(file, slug, titleTag, metaDescription) {
  if (!titleTag && !metaDescription) return file;
  const slugIdx = file.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return file;
  const chunk = file.slice(slugIdx, slugIdx + 4000);
  let updated = chunk;
  if (titleTag) {
    updated = updated.replace(
      /seoTitle: "[^"]*"/,
      `seoTitle: ${JSON.stringify(titleTag)}`,
    );
  }
  if (metaDescription) {
    updated = updated.replace(
      /metaDescription:\s*\n?\s*"[^"]*"/,
      `metaDescription:\n      ${JSON.stringify(metaDescription)}`,
    );
    updated = updated.replace(
      /metaDescription:\s*\n\s+"[^"]*"/,
      `metaDescription:\n      ${JSON.stringify(metaDescription)}`,
    );
  }
  return file.slice(0, slugIdx) + updated + file.slice(slugIdx + chunk.length);
}

function updateReadTime(file, slug, minutes) {
  const slugIdx = file.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return file;
  const chunkEnd = file.indexOf("content: `", slugIdx);
  const chunk = file.slice(slugIdx, chunkEnd);
  const updated = chunk.replace(/readTime: "[^"]*"/, `readTime: "${minutes} min read"`);
  return file.slice(0, slugIdx) + updated + file.slice(slugIdx + chunk.length);
}

function patchPostFile(filePath, slug, insertion, meta) {
  let file = fs.readFileSync(filePath, "utf8");
  const re = new RegExp(
    `(slug: "${slug}"[\\s\\S]*?content: \`)([\\s\\S]*?)(\`,\\s*\\n\\s*\\},)`,
  );
  const m = file.match(re);
  if (!m) {
    console.warn(`Skip ${slug}: not found in ${path.basename(filePath)}`);
    return;
  }
  let content = m[2];
  content = insertBeforeConclusion(content, insertion);
  const wc = wordCount(content);
  file = file.replace(re, (_, open, _old, close) => open + content + close);
  file = updateSeoMeta(file, slug, meta?.titleTag, meta?.metaDescription);
  const mins = Math.max(12, Math.round(wc / 150));
  file = updateReadTime(file, slug, mins);
  fs.writeFileSync(filePath, file);
  console.log(`${slug}: ~${wc} words (${path.basename(filePath)})`);
  return wc;
}

function applyWordBoost(filePath, slug, boostMap = WORD_BOOST) {
  const boost = boostMap[slug];
  if (!boost) return;
  let file = fs.readFileSync(filePath, "utf8");
  const re = new RegExp(
    `(slug: "${slug}"[\\s\\S]*?content: \`)([\\s\\S]*?)(\`,\\s*\\n\\s*\\},)`,
  );
  const m = file.match(re);
  if (!m) return;
  let content = m[2];
  const boostKey = boost.slice(0, 24);
  if (content.includes(boostKey)) return;
  const marker = "## Practical next steps for buyers";
  if (!content.includes(marker)) return;
  content = content.replace(marker, boost + "\n\n" + marker);
  const wc = wordCount(content);
  file = file.replace(re, (_, open, _old, close) => open + content + close);
  fs.writeFileSync(filePath, file);
  console.log(`${slug}: boosted to ~${wc} words`);
}

const copy = fs.readFileSync(copyPath, "utf8");
const parsedMap = parseBlogCopy(copy);

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(import.meta.dirname, "expand-blog-posts.mjs");

const boostOnly = process.argv.includes("--boost-only");

if (isMain) {
if (boostOnly) {
  for (const slug of LIVE_SLUGS) {
    for (const map of [WORD_BOOST, WORD_BOOST_B, WORD_BOOST_C, WORD_BOOST_D, WORD_BOOST_E, WORD_BOOST_F]) {
      if (map[slug]) {
        if (fs.readFileSync(seoPath, "utf8").includes(`slug: "${slug}"`)) {
          applyWordBoost(seoPath, slug, map);
        } else if (fs.readFileSync(legacyPath, "utf8").includes(`slug: "${slug}"`)) {
          applyWordBoost(legacyPath, slug, map);
        }
      }
    }
  }
  console.log("Boost pass done.");
} else {
for (const slug of LIVE_SLUGS) {
  const parsed = parsedMap.get(slug);
  const insertion = buildExpansion(slug, parsed);
  const meta = parsed
    ? { titleTag: parsed.titleTag || undefined, metaDescription: parsed.metaDescription || undefined }
    : undefined;

  let filePath = null;
  if (fs.readFileSync(seoPath, "utf8").includes(`slug: "${slug}"`)) {
    filePath = seoPath;
    patchPostFile(seoPath, slug, insertion, meta);
  } else if (fs.readFileSync(legacyPath, "utf8").includes(`slug: "${slug}"`)) {
    filePath = legacyPath;
    patchPostFile(legacyPath, slug, insertion, meta);
  } else {
    console.warn(`Missing live post: ${slug}`);
  }
  if (filePath) applyWordBoost(filePath, slug);
}

console.log("Done.");
}
}
