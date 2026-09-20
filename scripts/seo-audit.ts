/**
 * Quick SEO length audit for hubs + sample dynamic pages.
 * Run: npx tsx scripts/seo-audit.ts
 */
import { formatSeoTitle, formatSeoDescription } from "../src/lib/seo/metadata";
import { serviceLandings } from "../src/data/serviceLandings";
import { getBlogMetadata } from "../src/data/blogMeta";
import { blogSlugs } from "../src/lib/static-params";
import { trustConfig } from "../src/data/trustConfig";

const hubs = [
  ["Home", "Offshore Software Development Company", "Hire dedicated developers from India for web, SaaS and mobile. Outsource to Golax India with clear USD scopes, timezone overlap and NDA/IP terms. Request a free quote."],
  ["About", "About Our Offshore Engineering Team", "Meet Golax India — an offshore software partner for USA, UK, UAE, Canada and Australia. Senior engineers, USD billing, NDA/IP assignment. Learn how we work."],
];

console.log("=== Title / description lengths ===");
for (const [label, t, d] of hubs) {
  const title = formatSeoTitle(t);
  const desc = formatSeoDescription(d);
  console.log(`${label}: title=${title.length} desc=${desc.length}`);
}

console.log("\n=== Service landings ===");
for (const s of Object.values(serviceLandings)) {
  const title = formatSeoTitle(s.seoTitle);
  const desc = formatSeoDescription(s.metaDescription);
  console.log(`${s.slug}: title=${title.length} desc=${desc.length}`);
}

console.log("\n=== Live blogs ===");
for (const slug of blogSlugs.slice(0, 8)) {
  const m = getBlogMetadata(slug);
  if (!m) continue;
  const title = formatSeoTitle(m.seoTitle);
  const desc = formatSeoDescription(m.description);
  console.log(`${slug}: title=${title.length} desc=${desc.length}`);
}

console.log("\n=== Unverified claims to review ===");
for (const c of trustConfig.unverifiedClaimsToReview) console.log("-", c);
