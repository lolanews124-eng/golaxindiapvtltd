"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  MousePointerClick,
  FileText,
  CheckCircle,
  ArrowRight,
  Globe,
  BarChart3,
  Link2,
  DollarSign,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { digitalMarketingFaqs } from "@/data/serviceFaqs";

const deliverables = [
  {
    icon: Search,
    title: "Technical SEO",
    text: "Technical SEO audit and fixes: crawlability, speed, schema, internal links and indexation.",
  },
  {
    icon: Globe,
    title: "Keyword & content strategy",
    text: "Keyword research and content strategy for each target country.",
  },
  {
    icon: FileText,
    title: "Page optimisation",
    text: "Service and location page optimisation.",
  },
  {
    icon: BarChart3,
    title: "Buyer-focused content",
    text: "Blog and thought-leadership content written for buyers.",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    text: "Google Ads and Meta Ads for lead generation.",
  },
  {
    icon: Link2,
    title: "Link building",
    text: "Link building through directories, partnerships and digital PR.",
  },
  {
    icon: BarChart3,
    title: "Monthly reporting",
    text: "Monthly reporting on rankings, traffic and leads.",
  },
];

const whyChoose = [
  "Developers and marketers on one team, so technical fixes ship quickly.",
  "International focus: country-specific keywords, currencies and search behaviour.",
  "No guaranteed rankings, only honest plans and transparent reports.",
  "Ethical link building, with no spam networks.",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "Technical, content and competitor analysis.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Priority keywords, page map and 90-day roadmap.",
  },
  {
    step: "03",
    title: "Fix",
    description: "Implement technical and on-page improvements.",
  },
  {
    step: "04",
    title: "Publish",
    description: "Content and link acquisition on a steady calendar.",
  },
  {
    step: "05",
    title: "Measure",
    description: "Rankings, traffic, leads and cost per lead.",
  },
  {
    step: "06",
    title: "Refine",
    description: "Double down on what converts.",
  },
];

const technologies = [
  "Google Search Console",
  "GA4",
  "Looker Studio",
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "PageSpeed Insights",
  "Google Ads",
  "Meta Ads Manager",
];

export default function DigitalMarketing() {
  return (
    <Layout>
      <ServiceHero
        icon={TrendingUp}
        badge="Digital marketing & SEO"
        title="Digital Marketing and SEO for International Markets"
        description="Golax India helps businesses win customers in the US, UK and other international markets through technical SEO, content, Google Ads and social campaigns. We combine engineering skills with marketing so your site is fast and crawlable and your content targets the searches that bring buyers."
        formContext="Digital Marketing and SEO"
        defaultService="Digital Marketing"
        formTitle="Book a free discovery call for digital marketing and SEO"
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Retainers billed in", value: "USD" },
              { icon: Clock, label: "Reporting calls", value: "Your timezone" },
              { icon: Shield, label: "SEO ethics", value: "No spam links" },
              { icon: Users, label: "Audit turnaround", value: "About 1 week" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-gradient-subtle"
              >
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="What we deliver"
            title="What we deliver"
            description="Technical SEO, content, paid media and ethical link building with clear reporting."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {deliverables.map((w, i) => (
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
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeader
                align="left"
                badge="Who this is for"
                title="Who this is for"
                description="B2B, SaaS and e-commerce brands selling outside India."
              />
              <p className="text-muted-foreground leading-relaxed">
                B2B service companies, SaaS startups and e-commerce brands that want more qualified leads from outside
                India and need a partner who understands both search and code.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/locations">
                  View country pages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Why choose Golax India for digital marketing and SEO
              </h3>
              <ul className="space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <SectionHeader
            badge="Technical SEO"
            title="Engineering-backed SEO for international markets"
            description="Fixes ship in code—not only in spreadsheets—when your site is slow or hard to crawl."
          />
          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            <p className="text-muted-foreground leading-relaxed">
              Because Golax India also builds web and SaaS products, we implement schema, sitemap, redirect and Core
              Web Vitals changes in Next.js, WordPress or headless stacks instead of handing developers a vague ticket.
              Service and location pages for{" "}
              <Link href="/locations/global/united-states" className="text-primary hover:underline">
                US buyers
              </Link>{" "}
              and the{" "}
              <Link href="/locations/global/united-kingdom" className="text-primary hover:underline">
                United Kingdom
              </Link>{" "}
              are part of how we structure content—not bolt-on keyword stuffing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee rankings. We do commit to transparent reporting and ethical link acquisition. See{" "}
              <Link href="/certificates" className="text-primary hover:underline">
                certificates and company credentials
              </Link>{" "}
              if your procurement team needs documentation alongside marketing scope. New enquiries receive a reply
              within one business day with audit or retainer options.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="How the work runs"
        description="Audit through measurement and refinement."
        steps={process}
      />

      <TechPills title="Technology we use" description="Search, analytics, ads and your CMS." items={technologies} />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeader
            badge="Pricing"
            title="Pricing and engagement models"
            description="Monthly retainers, one-off audits and direct platform ad spend."
            align="left"
          />
          <p className="text-muted-foreground leading-relaxed">
            Monthly retainers start at a level that fits small businesses and scale with the number of pages, articles
            and campaigns. One-off SEO audits are available. Ad spend is paid directly by you to the platforms.
          </p>
          <Button asChild variant="hero" className="mt-8">
            <Link href="/contact">Get a USD quote for digital marketing and SEO</Link>
          </Button>
        </div>
      </section>

      <FAQSection
        title="Frequently asked questions"
        description="SEO timelines, guarantees, paid search and market targeting"
        faqs={digitalMarketingFaqs}
      />

      <CTABanner
        title="Get a USD quote for digital marketing and SEO"
        description="Book a free discovery call. We reply within one business day with a clear next step."
        primaryLabel="Get a USD quote for digital marketing and SEO"
      />
    </Layout>
  );
}
