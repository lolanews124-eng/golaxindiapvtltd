"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  CheckCircle,
  Building2,
  Cog,
  Workflow,
  RefreshCw,
  Database,
  ArrowRight,
  DollarSign,
  Clock,
  Shield,
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
import { softwareDevelopmentFaqs } from "@/data/serviceFaqs";

const features = [
  {
    icon: Building2,
    title: "SaaS MVPs and full products",
    description:
      "SaaS MVPs and full products with subscriptions, billing and admin panels.",
  },
  {
    icon: Shield,
    title: "Multi-tenant architecture",
    description: "Multi-tenant architecture, role-based access and audit logs.",
  },
  {
    icon: Cog,
    title: "ERP, CRM & workflow",
    description: "ERP, CRM, inventory and workflow systems tailored to how you operate.",
  },
  {
    icon: Workflow,
    title: "Integrations",
    description:
      "Integrations with Stripe, QuickBooks, HubSpot, Salesforce, Slack and custom APIs.",
  },
  {
    icon: Database,
    title: "Analytics & reporting",
    description: "Analytics dashboards and reporting engines.",
  },
  {
    icon: RefreshCw,
    title: "Legacy modernisation",
    description: "Legacy system modernisation and rewrites.",
  },
];

const softwareTypes = [
  {
    title: "SaaS MVPs",
    description: "Subscriptions, billing and admin panels for your first product release.",
    features: ["Billing", "Admin panel", "User roles", "Multi-tenant ready"],
  },
  {
    title: "Business systems",
    description: "ERP, CRM, inventory and workflows matched to how you operate.",
    features: ["Custom modules", "Approvals", "Reporting", "Integrations"],
  },
  {
    title: "Integrations & data",
    description: "Stripe, QuickBooks, HubSpot, Salesforce, Slack and custom APIs.",
    features: ["Payments", "Accounting", "CRM sync", "Webhooks"],
  },
  {
    title: "Modernisation",
    description: "Legacy system modernisation and rewrites when off-the-shelf no longer fits.",
    features: ["Architecture review", "Phased migration", "Data import", "Handover docs"],
  },
];

const pricing = [
  {
    title: "SaaS MVP",
    price: "$15,000–$60,000",
    detail:
      "SaaS MVPs typically range from $15,000 to $60,000 depending on scope and integrations.",
  },
  {
    title: "Larger platforms",
    price: "Phased",
    detail: "Larger platforms are staged in phases after discovery.",
  },
  {
    title: "Fixed-scope MVP",
    price: "Fixed price",
    detail: "Fixed-scope pricing suits MVPs with a clear feature list.",
  },
  {
    title: "Dedicated team",
    price: "Monthly",
    detail: "A dedicated team suits ongoing product development.",
  },
];

const whyOffshore = [
  "Production experience in multi-tenant SaaS and business systems.",
  "Clean, documented code that your future in-house team can take over.",
  "SOC 2-ready practices: access control, logging, backups and reviews.",
  "Legal protection: NDA, MSA and IP assignment before work begins.",
];

const process = [
  {
    step: "01",
    title: "Discovery workshop",
    description: "Users, core workflow, must-have and later features.",
  },
  {
    step: "02",
    title: "Architecture and estimate",
    description: "Stack, data model, security and cost plan.",
  },
  {
    step: "03",
    title: "MVP sprints",
    description: "Working software every two weeks with demos.",
  },
  {
    step: "04",
    title: "Hardening",
    description: "Automated tests, load checks, security review and CI/CD.",
  },
  {
    step: "05",
    title: "Launch and monitoring",
    description: "Production deployment, alerts and backups.",
  },
  {
    step: "06",
    title: "Roadmap",
    description: "Continue with the same team under a retainer or dedicated squad.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
];

export default function SoftwareDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Code}
        badge="SaaS & custom software"
        title="SaaS and Custom Software Development from India"
        description="We build custom software and SaaS products for startups and established companies in the US, UK and other international markets. From a first MVP to a scalable multi-tenant platform, our senior engineers handle architecture, development, testing and deployment while you focus on customers."
        formContext="SaaS and Software Development"
        defaultService="Software Development"
        formTitle="Book a free discovery call for SaaS and software development"
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Commercials", value: "USD + multi-currency" },
              { icon: Clock, label: "Overlap", value: "US / UK / Gulf hours" },
              { icon: Shield, label: "Ownership", value: "NDA + IP first" },
              { icon: Users, label: "Shape", value: "Senior-led squads" },
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
        description="SaaS products, business systems, integrations and modernisation for international clients."
        features={features}
      />

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Common Engagement Types"
            description="Pick the shape that matches your stage — MVP, ops tool, portal or rebuild"
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {softwareTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 sm:p-8 border border-border"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {type.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      <span className="text-sm">{f}</span>
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
                title="Why choose Golax India for SaaS and software development"
                description="Multi-tenant experience, documented code and contract-ready legal protection."
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
                    USA offshore page <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get a USD quote</Link>
                </Button>
              </div>
            </div>
            <div className="premium-card p-6 sm:p-8 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Founders who need to validate an idea quickly, product teams that need extra engineering capacity, and
                businesses that have outgrown spreadsheets or off-the-shelf tools.
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
            description="SaaS MVPs from $15,000 to $60,000 — fixed scope or dedicated team after discovery."
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
        description="We select the stack for your product, not our habit."
        items={technologies}
      />
      <ProcessTimeline
        title="How the work runs"
        description="Discovery workshop through launch and roadmap."
        steps={process}
      />

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">Also see market pages for local currency and timezone detail</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "United States", href: "/locations/global/united-states" },
              { name: "United Kingdom", href: "/locations/global/united-kingdom" },
              { name: "UAE", href: "/locations/global/united-arab-emirates" },
              { name: "Canada", href: "/locations/global/canada" },
              { name: "Germany", href: "/locations/global/germany" },
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
        description="MVP cost, IP ownership, takeovers and handover"
        faqs={softwareDevelopmentFaqs}
      />

      <CTABanner
        title="Get a USD quote for SaaS and software development"
        description="Book a free discovery call. We reply within one business day with a clear next step."
        primaryLabel="Get a USD quote for SaaS and software development"
      />
    </Layout>
  );
}
