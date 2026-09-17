"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Palette,
  ShoppingCart,
  Laptop,
  Gauge,
  Lock,
  Search,
  DollarSign,
  Clock,
  Shield,
  Code,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { webDevelopmentFaqs } from "@/data/serviceFaqs";

const features = [
  {
    icon: Palette,
    title: "Conversion-Focused Design",
    description:
      "Brand-led UI built for US and global buyers — clear CTAs, trust signals and CRO-ready layouts.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Headless",
    description:
      "Shopify, WooCommerce and Next.js headless stores with Stripe, Apple Pay and tax-ready checkout.",
  },
  {
    icon: Laptop,
    title: "React & Next.js Apps",
    description:
      "Marketing sites, dashboards and SaaS frontends on modern React/Next.js stacks your team can extend.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals Performance",
    description:
      "Fast LCP, optimized images and edge-friendly hosting so paid traffic and SEO actually convert.",
  },
  {
    icon: Lock,
    title: "Security & Compliance Basics",
    description:
      "HTTPS, hardened headers, backups and access controls that pass common US vendor questionnaires.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    description:
      "Clean URLs, metadata, schema hooks and content structure built for US English search intent.",
  },
];

const webTypes = [
  {
    title: "Marketing & Corporate Sites",
    description: "High-trust websites for US startups and international brands that need credibility fast.",
    features: ["Service & pricing pages", "Case study layouts", "Lead forms + CRM", "Blog / resources hub"],
  },
  {
    title: "E-Commerce Stores",
    description: "Stores built for US checkout habits — speed, payments and ops that scale.",
    features: ["Product catalog", "Stripe / PayPal", "Inventory sync", "Order workflows"],
  },
  {
    title: "Web Applications & Portals",
    description: "Authenticated apps for customers, partners or internal US teams.",
    features: ["Auth & roles", "Dashboards", "API integrations", "Admin tools"],
  },
  {
    title: "Landing Pages & CRO",
    description: "Pages tuned for Google Ads and Meta campaigns with measurable conversion goals.",
    features: ["A/B-ready structure", "Tracking (GA4/GTM)", "Fast load", "Lead capture"],
  },
];

const pricing = [
  {
    title: "Marketing Website",
    price: "From $3,500",
    detail: "5–10 pages, responsive, SEO baseline, forms, analytics — typical 2–4 weeks.",
  },
  {
    title: "E-Commerce / Headless",
    price: "From $8,000",
    detail: "Catalog, checkout, payments and ops integrations — scoped after discovery.",
  },
  {
    title: "Custom Web App",
    price: "Scoped in USD",
    detail: "Dashboards, portals and product UIs — fixed or capped quote after discovery call.",
  },
  {
    title: "Dedicated Web Engineer",
    price: "$25–$45/hr",
    detail: "Full-time senior capacity inside your Slack/GitHub — monthly USD invoice.",
  },
];

const whyOffshore = [
  "40–60% lower cost vs typical US agency or loaded in-house rates",
  "4–5 hours daily EST/PST overlap for live collaboration",
  "NDA, MSA and IP assignment to your US entity before coding",
  "Senior React/Next.js engineers — not junior body-shop staffing",
  "Written USD quotes with clear milestones",
  "Kickoff in 5–7 business days for most projects",
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "30-minute call to align goals, audience, stack, budget and timezone overlap.",
  },
  {
    step: "02",
    title: "Proposal & Contracts",
    description: "USD quote, SOW, NDA/MSA and IP assignment — ready for your counsel.",
  },
  {
    step: "03",
    title: "Design & Prototype",
    description: "Wireframes and UI reviewed in your working hours before build.",
  },
  {
    step: "04",
    title: "Agile Build",
    description: "Weekly demos, GitHub PRs, staging previews and measurable milestones.",
  },
  {
    step: "05",
    title: "Launch & Care",
    description: "Production deploy, docs handover and optional monthly care plan.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Shopify",
  "WordPress",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "AWS",
  "Cloudflare",
];

export default function WebDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Globe}
        badge="Offshore Web Development"
        title={
          <>
            Outsource Web Development to India —{" "}
            <span className="text-accent">Built for USA & Global Clients</span>
          </>
        }
        description="Senior React and Next.js engineers for marketing sites, headless commerce and web apps. USD pricing, EST/PST overlap, NDA & IP ready."
        formContext="Web Development — USA & Global"
        defaultService="Web Development"
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Billed in", value: "USD" },
              { icon: Clock, label: "US overlap", value: "4–5 hrs/day" },
              { icon: Shield, label: "Contracts", value: "NDA + IP" },
              { icon: Users, label: "Kickoff", value: "5–7 days" },
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

      <FeatureGrid
        badge="What We Build"
        title="End-to-End Offshore Web Development"
        description="From first landing page to production web apps — delivered the way US product and marketing teams work."
        features={features}
      />

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Types of Websites & Web Apps We Ship"
            description="Scoped for startups and enterprises outsourcing from the USA, UK, UAE and beyond"
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {webTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-2xl p-5 sm:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{type.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {type.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionHeader
                align="left"
                badge="Why Golax"
                title="Why US & Global Teams Outsource Web Development to Us"
                description="An offshore partner that feels like an extended in-house squad — without US agency burn rates."
              />
              <ul className="space-y-3 mt-6">
                {whyOffshore.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <Link href="/locations/global/united-states">
                    USA Offshore Page <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get a USD Quote</Link>
                </Button>
              </div>
            </div>
            <div className="premium-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Code className="h-5 w-5" />
                Ideal for
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                US founders launching an MVP site, UK brands rebuilding ecommerce, UAE companies needing a bilingual
                marketing site, or any international team that wants senior Next.js/React capacity without a local
                full-time hire.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You keep product ownership. We supply design, engineering, QA and optional ongoing care — with
                documentation so your team can take over anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="USD Pricing"
            title="Transparent Web Development Pricing"
            description="Indicative ranges for international clients — final quote after a free discovery call"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="premium-card p-6 h-full"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{tier.title}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{tier.price}</div>
                <p className="text-sm text-muted-foreground">{tier.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechPills
        title="Technologies We Use"
        description="Modern stacks US and global product teams already trust"
        items={technologies}
      />

      <ProcessTimeline
        title="How Offshore Web Projects Run"
        description="Clear steps from discovery to launch — optimized for remote collaboration"
        steps={process}
      />

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Serving clients across the United States, UK, Canada, UAE, Australia and more
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "United States", href: "/locations/global/united-states" },
              { name: "United Kingdom", href: "/locations/global/united-kingdom" },
              { name: "United Arab Emirates", href: "/locations/global/united-arab-emirates" },
              { name: "Canada", href: "/locations/global/canada" },
              { name: "Australia", href: "/locations/global/australia" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Web Development FAQs for International Clients"
        description="Pricing, timelines, SEO migrations and how offshore delivery works"
        faqs={webDevelopmentFaqs}
      />

      <CTABanner
        title="Ready to Outsource Your Website?"
        description="Book a free discovery call — USD quote within 24 hours. NDA available on request."
        primaryLabel="Get a USD Quote"
      />
    </Layout>
  );
}
