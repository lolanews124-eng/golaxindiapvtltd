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
  Zap,
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
    title: "SaaS Product Engineering",
    description:
      "Multi-tenant apps, billing hooks, roles and admin tools built so a US or UK founder can demo without excuses.",
  },
  {
    icon: Cog,
    title: "Custom ERP & CRM",
    description:
      "Ops software shaped around your workflow — not a bloated package you only use at 20%.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
      "Connect Stripe, HubSpot, ERPs and internal APIs so teams stop copy-pasting between tools.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernisation",
    description:
      "Replace brittle systems in slices. Keep the business running while architecture improves.",
  },
  {
    icon: Database,
    title: "Data & API Design",
    description:
      "Schemas and APIs that stay readable when the next engineer joins six months later.",
  },
  {
    icon: Zap,
    title: "Dedicated Product Squads",
    description:
      "A small senior team inside your Slack/GitHub — faster than hiring, clearer than a mega-agency.",
  },
];

const softwareTypes = [
  {
    title: "SaaS MVPs",
    description: "For founders who need a diligence-ready first version, not a prototype that dies in staging.",
    features: ["Auth & roles", "Billing hooks", "Admin panel", "CI/CD from week one"],
  },
  {
    title: "Internal Tools",
    description: "Ops dashboards and workflows that cut manual work for finance, support or field teams.",
    features: ["Permissions", "Exports", "Audit logs", "API links"],
  },
  {
    title: "Customer Portals",
    description: "Login areas for clients, partners or brokers — especially common for US, UK and Gulf buyers.",
    features: ["Self-serve flows", "Notifications", "Document upload", "Usage metrics"],
  },
  {
    title: "Platform Rebuilds",
    description: "When the old stack cannot hire or scale. We migrate in stages with a written cutover plan.",
    features: ["Strangler approach", "Data migration", "Parity checks", "Rollback path"],
  },
];

const pricing = [
  {
    title: "Discovery & Spec",
    price: "Often free / fixed",
    detail: "Short call + written scope so you are not buying fog.",
  },
  {
    title: "SaaS MVP",
    price: "$15k–$60k USD",
    detail: "Typical range for focused MVPs — integrations and compliance move the number.",
  },
  {
    title: "Dedicated Engineer",
    price: "$25–$45/hr",
    detail: "Senior capacity billed monthly in USD (or GBP/CAD/AED as needed).",
  },
  {
    title: "Squad Retainer",
    price: "Scoped monthly",
    detail: "Lead + builders + optional QA for continuous roadmap delivery.",
  },
];

const whyOffshore = [
  "Senior engineers — not a revolving door of juniors",
  "USD / multi-currency quotes with milestone clarity",
  "4–5+ hours overlap with US, UK and Gulf working days",
  "NDA and IP assignment before any repository exists",
  "CI, reviews and docs treated as delivery — not upsells",
  "Kickoff commonly within a week of signed contracts",
];

const process = [
  {
    step: "01",
    title: "Problem & Constraints",
    description: "What must ship, what can wait, and which systems you already trust.",
  },
  {
    step: "02",
    title: "Architecture & Quote",
    description: "Stack choice, risks, and a written USD/multi-currency commercial plan.",
  },
  {
    step: "03",
    title: "Contracts",
    description: "NDA, MSA and IP assignment — templates yours or ours.",
  },
  {
    step: "04",
    title: "Build in Slices",
    description: "Weekly demos on staging. You see working software, not status theatre.",
  },
  {
    step: "05",
    title: "Launch & Handover",
    description: "Production cutover, runbooks and optional ongoing product engineering.",
  },
];

const technologies = [
  "TypeScript",
  "Node.js",
  "Python",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "GitHub Actions",
  ".NET",
];

export default function SoftwareDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Code}
        badge="Offshore Software Development"
        title={
          <>
            Custom Software & SaaS Development for{" "}
            <span className="text-accent">USA & Global Teams</span>
          </>
        }
        description="Hire a senior software squad from India — SaaS MVPs, portals, ERP/CRM and APIs with clear USD pricing, timezone overlap and IP assigned to your company."
        formContext="Software Development — USA & Global"
        defaultService="Software / SaaS Development"
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
        badge="What We Build"
        title="Software Solutions International Clients Actually Need"
        description="Less brochureware. More product that survives real users and diligence questions."
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
                title="Why Founders Outsource Software Development to Us"
                description="You keep product ownership. We supply senior execution that does not need babysitting every hour."
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
                Best fit: a US or UK founder with a clear MVP, a Gulf company needing a bilingual portal, or a product
                team that needs two senior engineers next month — not next hiring cycle.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Poor fit: undefined “AI transformation” decks with no users and no decision-maker. We will say that on
                the first call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Pricing"
            title="How Software Engagements Are Priced"
            description="Indicative USD ranges for international clients — final numbers after discovery"
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

      <TechPills title="Technologies We Use" items={technologies} />
      <ProcessTimeline
        title="How Offshore Software Projects Run"
        description="Short cycles, visible software, written decisions"
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
        title="Software Development FAQs"
        description="MVP timelines, IP ownership, integrations and offshore quality"
        faqs={softwareDevelopmentFaqs}
      />

      <CTABanner
        title="Ready to Scope Your Software Build?"
        description="Book a free discovery call — honest fit check and a written USD quote."
        primaryLabel="Get a USD Quote"
      />
    </Layout>
  );
}
