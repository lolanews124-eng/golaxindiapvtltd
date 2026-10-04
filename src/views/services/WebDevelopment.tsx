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
  Search,
  RefreshCw,
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
    title: "Marketing & corporate websites",
    description:
      "Marketing and corporate websites built for speed, accessibility and SEO.",
  },
  {
    icon: Laptop,
    title: "Web apps & customer portals",
    description:
      "Custom web applications and customer portals with login, roles and dashboards.",
  },
  {
    icon: ShoppingCart,
    title: "Headless CMS",
    description:
      "Headless CMS setups with Sanity, Strapi, Contentful or WordPress so your team can edit content without developers.",
  },
  {
    icon: Code,
    title: "APIs & integrations",
    description:
      "API design and third-party integrations: payments, CRM, email, analytics and booking tools.",
  },
  {
    icon: RefreshCw,
    title: "Redesign & migration",
    description:
      "Website redesign and migration with redirect mapping so search rankings are protected.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description:
      "Performance tuning for Core Web Vitals: LCP, CLS and INP.",
  },
];

const webTypes = [
  {
    title: "Marketing & corporate sites",
    description: "Fast, accessible sites that rank and convert for international buyers.",
    features: ["Speed & SEO baseline", "Accessibility", "Lead capture", "Content you can edit"],
  },
  {
    title: "Custom web applications",
    description: "Portals and products with auth, roles and dashboards.",
    features: ["Login & roles", "Dashboards", "API integrations", "Admin tools"],
  },
  {
    title: "Headless CMS & content",
    description: "Sanity, Strapi, Contentful or WordPress — your team updates without developers.",
    features: ["Headless CMS", "Editor workflows", "Preview & publish", "Multi-language ready"],
  },
  {
    title: "Migration & performance",
    description: "Redesigns and migrations with redirects; Core Web Vitals tuning.",
    features: ["301 redirect maps", "Search Console checks", "LCP / CLS / INP", "Staging before launch"],
  },
];

const pricing = [
  {
    title: "Marketing websites",
    price: "From ~$3,500",
    detail:
      "Marketing websites for international clients start at around $3,500 — scoped after discovery for page count and integrations.",
  },
  {
    title: "Custom web applications",
    price: "Low five figures",
    detail:
      "Custom web applications are scoped after discovery and usually start in the low five figures.",
  },
  {
    title: "Fixed price",
    price: "Clear scope",
    detail: "Fixed price for a clear scope when requirements are well defined.",
  },
  {
    title: "Time & material / dedicated",
    price: "Flexible",
    detail:
      "Time-and-material for evolving products, or a dedicated developer billed monthly.",
  },
];

const whyOffshore = [
  "Search-friendly by default: server-side rendering, clean URLs, schema and fast pages.",
  "Senior engineers lead every build.",
  "You own the code and hosting accounts from day one.",
  "US, UK, Gulf and Singapore working-hour overlap.",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Goals, audience, competitors, keywords and content plan.",
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes and a clickable prototype reviewed in your working hours.",
  },
  {
    step: "03",
    title: "Build",
    description: "Two-week sprints with a live staging site you can test at any time.",
  },
  {
    step: "04",
    title: "Quality",
    description: "Cross-browser, mobile, accessibility and speed testing before launch.",
  },
  {
    step: "05",
    title: "Launch",
    description: "DNS, redirects, analytics, Search Console and monitoring set up.",
  },
  {
    step: "06",
    title: "Support",
    description: "Optional monthly plan for updates, security patches and improvements.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Vercel",
  "AWS",
  "Azure",
  "WordPress",
  "Laravel",
];

export default function WebDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Globe}
        badge="Web development"
        title="Web Development Services for US, UK and Global Businesses"
        description="Golax India designs and builds fast, secure and search-friendly websites and web applications for companies outside India. We use React, Next.js and Node.js to deliver marketing sites, customer portals and full web products that load quickly, rank well and convert visitors into leads or customers."
        formContext="Web Development"
        defaultService="Web Development"
        formTitle="Book a free discovery call for web development"
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Billed in", value: "USD" },
              { icon: Clock, label: "US overlap", value: "4–5 hrs/day" },
              { icon: Shield, label: "Contracts", value: "NDA + IP" },
              { icon: Users, label: "Kickoff", value: "1–2 weeks" },
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
        badge="What we deliver"
        title="What we deliver"
        description="Marketing sites, web apps, CMS, integrations and migrations — built for international clients."
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
                title="Why choose Golax India for web development"
                description="Search-friendly builds, senior engineers and full ownership from day one."
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
                Who this is for
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Startups that need a credible site fast, agencies that need a reliable white-label build partner, and
                established businesses replacing a slow or outdated site. If your current site loads slowly, does not
                appear in Google or cannot be updated without a developer, this service is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Pricing"
            title="Pricing and engagement models"
            description="Marketing websites from around $3,500; custom apps scoped after discovery — fixed price, T&M or dedicated developer."
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
        title="Technology we use"
        description="Next.js and React for front ends, Node.js and TypeScript for back ends — hosting on Vercel, AWS or Azure."
        items={technologies}
      />

      <ProcessTimeline
        title="How the work runs"
        description="Discovery through launch, with optional ongoing support."
        steps={process}
      />

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Serving clients across the United States, UK, Canada, UAE, Australia and more — verify our MCA, GST and ISO credentials on{" "}
            <Link href="/certificates" className="text-primary hover:underline">
              /certificates
            </Link>
            .
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
        title="Frequently asked questions"
        description="Timelines, SEO, migrations and hosting"
        faqs={webDevelopmentFaqs}
      />

      <CTABanner
        title="Get a USD quote for web development"
        description="Book a free discovery call. We reply within one business day with a clear next step."
        primaryLabel="Get a USD quote for web development"
      />
    </Layout>
  );
}
