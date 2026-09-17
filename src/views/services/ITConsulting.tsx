"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  GitBranch,
  KeyRound,
  ClipboardList,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { itConsultingFaqs } from "@/data/serviceFaqs";

const engagements = [
  {
    icon: ClipboardList,
    title: "Architecture & risk review",
    text: "A time-boxed look at your cloud, access, backups and deploy path. You get a written list of fixes ranked by blast radius — not a 90-page PDF.",
  },
  {
    icon: Cloud,
    title: "Migration with a cutover plan",
    text: "Lift to AWS/Azure/GCP in slices. We care about rollback, DNS timing and who holds production keys during the move.",
  },
  {
    icon: GitBranch,
    title: "DevOps that developers will use",
    text: "CI/CD, environments and IaC where they reduce fear of shipping — not tooling for tooling’s sake.",
  },
  {
    icon: Users,
    title: "India extended team setup",
    text: "If you want a lasting offshore bench, we help with access model, repos, ceremonies and vendor boundaries before heads join.",
  },
];

const deliverables = [
  "Current-state diagram (honest, not decorative)",
  "Priority fix list with effort guesses",
  "IAM / secrets recommendations",
  "Backup & restore check notes",
  "Optional migration runbook",
];

const redFlags = [
  {
    title: "Single shared root account",
    why: "One leak becomes everyone’s problem. We separate duties early.",
  },
  {
    title: "Prod deploys from a laptop",
    why: "No audit trail, no repeatability. Pipelines fix more than “speed”.",
  },
  {
    title: "Backups never restored",
    why: "A backup you have not tested is a story, not a plan.",
  },
];

export default function ITConsulting() {
  return (
    <Layout>
      <ServiceHero
        icon={Cloud}
        badge="Cloud · DevOps · extended teams"
        title={
          <>
            IT Consulting for{" "}
            <span className="text-accent">Teams That Need Clarity, Not Slides</span>
          </>
        }
        description="Cloud migration, security baselines and DevOps for US and international product companies. Senior consultants from India — USD billing, written recommendations you can action."
        formContext="IT Consulting — USA & Global"
        defaultService="IT Consulting & Cloud"
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Engagement types"
            title="Four Ways Clients Use Our Consulting"
            description="Different problem, different shape. We do not force every company into a “digital transformation package”."
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {engagements.map((e, i) => (
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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <KeyRound className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Assessment output</span>
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">
                What You Walk Away With
              </h2>
              <p className="text-muted-foreground mb-6">
                A 2–3 week assessment should leave you able to brief another engineer — or us — without re-explaining
                everything. That is the bar.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" className="mt-8">
                <Link href="/contact">
                  Start with an assessment call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Common findings</span>
              </div>
              <div className="space-y-4">
                {redFlags.map((r) => (
                  <div key={r.title} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.why}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Security Is Access Control + Habits — Not a Logo Wall
          </h2>
          <p className="text-muted-foreground mb-6">
            We implement least-privilege IAM, secrets hygiene, logging and backup drills that match your stage. SOC2 or
            ISO theatre without basics is wasted spend; we say so if that is what you are buying.
          </p>
          <p className="text-sm text-muted-foreground">
            Building product too? Pair consulting with{" "}
            <Link href="/services/software-development" className="text-primary hover:underline">
              software development
            </Link>{" "}
            or a{" "}
            <Link href="/locations/global/united-states" className="text-primary hover:underline">
              dedicated USA offshore squad
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQSection
        title="IT Consulting FAQs"
        description="Assessments, migrations, security and managed support"
        faqs={itConsultingFaqs}
      />

      <CTABanner
        title="Need a Straight Answer on Cloud or Access?"
        description="Book a call. Bring your stack list. We will tell you what to fix first."
        primaryLabel="Book Consulting Call"
      />
    </Layout>
  );
}
