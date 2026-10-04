"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  GitBranch,
  ClipboardList,
  ArrowRight,
  CheckCircle,
  Gauge,
  DollarSign,
  Clock,
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
import { itConsultingFaqs } from "@/data/serviceFaqs";

const deliverables = [
  {
    icon: ClipboardList,
    title: "Architecture review",
    text: "Architecture review and technical due diligence.",
  },
  {
    icon: Cloud,
    title: "Cloud migration",
    text: "AWS and Azure migration planning and execution.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    text: "DevOps: CI/CD pipelines, infrastructure as code, containers and Kubernetes.",
  },
  {
    icon: DollarSign,
    title: "Cost optimisation",
    text: "Cloud cost optimisation and monitoring.",
  },
  {
    icon: Shield,
    title: "Security & DR",
    text: "Security hardening, backups and disaster recovery.",
  },
  {
    icon: Gauge,
    title: "Performance & roadmap",
    text: "Performance and scalability testing. Roadmap and vendor selection support.",
  },
];

const whyChoose = [
  "Hands-on engineers rather than slideware.",
  "Security and cost checked from day one.",
  "Documentation your team can maintain.",
  "Overlap with US, UK and Singapore hours.",
];

const process = [
  {
    step: "01",
    title: "Assessment",
    description: "Current systems, risks, cost and team skills.",
  },
  {
    step: "02",
    title: "Recommendations",
    description: "Prioritised, costed action plan.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We do the work with your team.",
  },
  {
    step: "04",
    title: "Handover",
    description: "Runbooks, diagrams and training.",
  },
  {
    step: "05",
    title: "Ongoing",
    description: "Optional managed DevOps retainer.",
  },
];

const technologies = [
  "AWS",
  "Azure",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "GitLab CI",
  "Datadog",
  "Grafana",
  "Prometheus",
  "Sentry",
];

export default function ITConsulting() {
  return (
    <Layout>
      <ServiceHero
        icon={Cloud}
        badge="IT consulting & cloud"
        title="IT Consulting and Cloud Services for Global Product Teams"
        description="Our consultants help product teams choose the right architecture, move to the cloud safely, automate delivery and cut infrastructure waste. We work with CTOs and engineering leads in the US, UK and Singapore who need senior advice and hands-on execution without hiring a full in-house platform team."
        formContext="IT Consulting and Cloud"
        defaultService="IT Consulting"
        formTitle="Book a free discovery call for IT consulting and cloud"
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: DollarSign, label: "Billed in", value: "USD" },
              { icon: Clock, label: "US / UK overlap", value: "4–5 hrs/day" },
              { icon: Shield, label: "Contracts", value: "NDA + IP" },
              { icon: Users, label: "Assessment kickoff", value: "1–2 weeks" },
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
            description="Architecture, migration, DevOps, security and performance for global product teams."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {deliverables.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border p-6 bg-gradient-subtle"
              >
                <e.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.text}</p>
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
                description="Fragile infra, cloud moves and security questionnaires."
              />
              <p className="text-muted-foreground leading-relaxed">
                Startups whose infrastructure has become fragile or expensive, companies planning a cloud migration,
                and teams that need to pass customer security questionnaires.
              </p>
            </div>
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Why choose Golax India for IT consulting and cloud
              </h3>
              <ul className="space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6">
                Building product too? Pair consulting with{" "}
                <Link href="/services/software-development" className="text-primary hover:underline">
                  software development
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <SectionHeader
            badge="Delivery"
            title="Security reviews, runbooks and cloud outcomes"
            description="Hands-on consulting for teams that need evidence—not slideware—for customers and auditors."
          />
          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            <p className="text-muted-foreground leading-relaxed">
              We help you respond to customer security questionnaires with concrete controls: IAM policies, backup
              tests, CI/CD gates and logging. Migration work is staged with rollback paths so production traffic is not
              a single risky cutover. When you need proof of how we operate, review our{" "}
              <Link href="/certificates" className="text-primary hover:underline">
                company certificates and registrations
              </Link>{" "}
              before granting console access.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Product companies in the{" "}
              <Link href="/locations/global/united-states" className="text-primary hover:underline">
                United States
              </Link>{" "}
              and{" "}
              <Link href="/locations/global/singapore" className="text-primary hover:underline">
                Singapore
              </Link>{" "}
              often engage us for cost optimisation and DevOps retainers after a fixed-fee assessment. We reply within
              one business day on new enquiries with a suggested next step—usually a discovery call and scoped proposal.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="How the work runs"
        description="Assessment through handover and optional managed DevOps."
        steps={process}
      />

      <TechPills title="Technology we use" items={technologies} />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeader
            badge="Pricing"
            title="Pricing and engagement models"
            description="Fixed-fee assessments, milestone implementation and managed DevOps retainers."
            align="left"
          />
          <p className="text-muted-foreground leading-relaxed">
            Assessments are fixed-fee. Implementation is time-and-material or fixed by milestone. Managed DevOps is a
            monthly retainer.
          </p>
          <Button asChild variant="hero" className="mt-8">
            <Link href="/contact">
              Get a USD quote for IT consulting and cloud <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FAQSection
        title="Frequently asked questions"
        description="Cloud migration, security reviews and cost savings"
        faqs={itConsultingFaqs}
      />

      <CTABanner
        title="Get a USD quote for IT consulting and cloud"
        description="Book a free discovery call. We reply within one business day with a clear next step."
        primaryLabel="Get a USD quote for IT consulting and cloud"
      />
    </Layout>
  );
}
