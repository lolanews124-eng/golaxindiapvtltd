"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  LayoutTemplate,
  ShoppingCart,
  Users,
  Smartphone,
  Server,
  Braces,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import type { ServiceLanding } from "@/data/serviceLandings";

const icons: Record<string, LucideIcon> = {
  "ecommerce-development": ShoppingCart,
  "ui-ux-design": LayoutTemplate,
  "crm-erp-solutions": Database,
  "dedicated-development-teams": Users,
  "hire-react-developers": Code,
  "hire-nodejs-developers": Server,
  "hire-flutter-developers": Smartphone,
  "hire-python-developers": Braces,
};

export default function ServiceLandingView({ data }: { data: ServiceLanding }) {
  const Icon = icons[data.slug] ?? Code;

  return (
    <Layout>
      <ServiceHero
        icon={Icon}
        badge="Golax India Services"
        title={data.h1}
        description={data.heroLead}
        formContext={data.h1}
        defaultService={data.h1}
      />

      {data.sections.map((section) => (
        <section key={section.heading} className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <SectionHeader title={section.heading} align="left" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {section.body.map((p) => (
                <p key={p.slice(0, 64)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ProcessTimeline
        title="How we deliver"
        description="A clear path from brief to production — without theatre."
        steps={data.process.map((step, i) => ({
          step: String(i + 1).padStart(2, "0"),
          title: step.title,
          description: step.description,
        }))}
      />

      <TechPills title="Technologies we use" items={data.stack} />

      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeader
            title="Pricing model"
            description="Transparent commercials — ranges depend on scope, not invented averages."
            align="left"
          />
          <p className="text-muted-foreground leading-relaxed">{data.pricingNote}</p>
          <ul className="mt-6 space-y-2">
            {[
              "Written proposal after discovery",
              "NDA available before sensitive access",
              "IP assigned to your company before coding",
              "Timezone overlap agreed for your market",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link href="/contact">
              Request a quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FAQSection
        title="Frequently asked questions"
        description="Practical answers for international buyers evaluating Golax India."
        faqs={data.faqs}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Related services" description="Keep exploring delivery options." />
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.relatedServices.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl border border-border bg-card p-5 hover:border-accent transition-colors"
              >
                <span className="font-heading font-semibold text-foreground">{r.label}</span>
                <span className="mt-2 flex items-center text-sm text-accent">
                  View {r.label} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-16">
            <SectionHeader
              title="Related markets"
              description="Outsource software development to India from your country."
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.relatedLocations.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl border border-border bg-card p-5 hover:border-accent transition-colors"
              >
                <span className="font-heading font-semibold text-foreground">
                  Software partner for {r.label}
                </span>
                <span className="mt-2 flex items-center text-sm text-accent">
                  Open {r.label} location page <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to scope this with Golax India?"
        description="Tell us about your product, timeline and timezone. We reply with a clear next step — usually a discovery call and written proposal."
        primaryHref="/contact"
        primaryLabel="Contact us for a quote"
      />
    </Layout>
  );
}
