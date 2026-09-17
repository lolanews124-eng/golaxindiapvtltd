"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Search, MousePointerClick, FileText, CheckCircle, ArrowRight, Ban } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { digitalMarketingFaqs } from "@/data/serviceFaqs";

const workstreams = [
  {
    icon: Search,
    title: "Technical SEO that unlocks content",
    text: "Crawl issues, index bloat, Core Web Vitals, broken canonicals — fixed before we promise rankings. US/UK English intent research, not India-local keyword dumps.",
  },
  {
    icon: FileText,
    title: "Content that matches search jobs",
    text: "Pages and briefs written for the question the buyer actually typed. We prefer fewer strong pages over fifty thin posts.",
  },
  {
    icon: MousePointerClick,
    title: "Paid search & paid social with ROAS rules",
    text: "Google Ads and Meta/LinkedIn when paid makes sense. Budgets gated by target CPA/ROAS — we do not “spend to learn” forever.",
  },
];

const markets = [
  {
    market: "United States",
    focus: "Competitive head terms need technical + content depth. We plan for longer cycles and clear conversion tracking.",
  },
  {
    market: "United Kingdom",
    focus: "UK spelling and buyer language. Local modifiers where they matter; national intent where they do not.",
  },
  {
    market: "UAE / Gulf",
    focus: "English campaigns first for many brands; Arabic expansion when content and site RTL are ready.",
  },
  {
    market: "Canada / Australia",
    focus: "English markets with local modifiers and currency/landing alignment so ads do not bounce.",
  },
];

const notThis = [
  "Guaranteed #1 rankings",
  "Fake “500% ROI” vanity stats",
  "Link schemes and PBNs",
  "Reporting that hides spend and CPA",
];

const retainers = [
  {
    name: "SEO foundation",
    blurb: "Audit, fixes, keyword map, and a realistic 90-day plan. Best when the site is broken technically.",
  },
  {
    name: "SEO + content",
    blurb: "Ongoing technical care plus a steady publish cadence aimed at commercial pages — not random blogs.",
  },
  {
    name: "SEO + paid",
    blurb: "Organic and paid under one view of pipeline. Useful when you need leads while SEO compounds.",
  },
];

export default function DigitalMarketing() {
  return (
    <Layout>
      <ServiceHero
        icon={TrendingUp}
        badge="SEO & acquisition · USD retainers"
        title={
          <>
            Digital Marketing for{" "}
            <span className="text-accent">US & International Search Buyers</span>
          </>
        }
        description="Technical SEO, content and paid acquisition aimed at English-language markets — US, UK, Canada, Australia and the Gulf. Clear retainers. No fake ranking guarantees."
        formContext="Digital Marketing — USA & Global"
        defaultService="Digital Marketing"
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="How we work"
            title="Three Workstreams — Not a Buffet of Buzzwords"
            description="Most brands need fewer channels done properly. We start with what is broken, then add what can scale."
          />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {workstreams.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border p-6 bg-gradient-subtle"
              >
                <w.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Market-Specific Search — Not One Global Keyword Sheet"
            description="Intent and spelling differ by country. Campaigns and content should too."
          />
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {markets.map((m, i) => (
              <motion.div
                key={m.market}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-semibold text-foreground mb-2">{m.market}</h3>
                <p className="text-sm text-muted-foreground">{m.focus}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/locations">
                View country pages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <div>
              <div className="flex items-center gap-2 text-destructive mb-3">
                <Ban className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">What we refuse</span>
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">No Theatre Marketing</h2>
              <p className="text-muted-foreground mb-6">
                If a vendor promises overnight page-one rankings or shows inflated ROI graphics with no methodology,
                walk away. We would rather lose a deal than sell that.
              </p>
              <ul className="space-y-3">
                {notThis.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">Retainer shapes (USD)</h3>
              <div className="space-y-4">
                {retainers.map((r) => (
                  <div key={r.name} className="premium-card p-5">
                    <h4 className="font-semibold text-foreground mb-1">{r.name}</h4>
                    <p className="text-sm text-muted-foreground">{r.blurb}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Exact USD fees depend on competition, site size and whether paid media is included. We quote after a
                short audit call — not from a one-size price card.
              </p>
              <Button asChild variant="hero" className="mt-6">
                <Link href="/contact">Request a growth audit call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="SEO & Marketing FAQs"
        description="Timelines, markets, measurement and what “done” looks like"
        faqs={digitalMarketingFaqs}
      />

      <CTABanner
        title="Need Traffic That Turns Into Conversations?"
        description="Send your URL and target market. We will say what is broken first — SEO, content or tracking."
        primaryLabel="Book Marketing Call"
      />
    </Layout>
  );
}
