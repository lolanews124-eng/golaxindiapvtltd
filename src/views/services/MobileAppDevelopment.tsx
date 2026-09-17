"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  CheckCircle,
  Layers,
  Apple,
  Store,
  Bell,
  WifiOff,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { mobileAppDevelopmentFaqs } from "@/data/serviceFaqs";

const stackChoices = [
  {
    title: "Flutter / React Native",
    when: "You need iOS + Android from one codebase and a tighter budget.",
    note: "Best for most MVPs and consumer apps where UI is custom but not extreme.",
  },
  {
    title: "Native Swift / Kotlin",
    when: "You need deep platform APIs, heavy performance, or OS-specific UX.",
    note: "Higher cost, cleaner fit for fintech hardware features or complex media apps.",
  },
  {
    title: "Hybrid path",
    when: "Ship cross-platform first, native modules later for the hard parts.",
    note: "Common when fundraising timelines force a dual-store launch.",
  },
];

const buildBlocks = [
  {
    icon: Layers,
    title: "Product UI that survives store review",
    text: "Screens, empty states and permission flows designed for App Store and Play policies — not just pretty Figma frames.",
  },
  {
    icon: CreditCard,
    title: "Payments that match your market",
    text: "Stripe, Apple Pay, Google Pay and region-specific options scoped early so checkout does not stall launch week.",
  },
  {
    icon: Bell,
    title: "Push, auth and session hygiene",
    text: "Reliable notifications, token refresh and logout behaviour — the boring parts users notice when they break.",
  },
  {
    icon: WifiOff,
    title: "Offline and edge cases",
    text: "Field and travel apps need retry logic and cached reads. We plan that when your use case demands it.",
  },
];

const launchChecklist = [
  "Store listing copy and screenshots",
  "Privacy nutrition labels / data safety forms",
  "TestFlight / internal testing tracks",
  "Crash reporting and basic analytics",
  "60-day post-launch bug warranty on scoped builds",
];

const priceBands = [
  {
    label: "Focused MVP (one platform)",
    range: "From ~$15,000 USD",
    detail: "Clear feature list, one store first, shared backend if needed.",
  },
  {
    label: "Dual-store cross-platform MVP",
    range: "Usually higher",
    detail: "Flutter/RN with both stores, shared API, push and payments.",
  },
  {
    label: "Ongoing product team",
    range: "$25–$45/hr",
    detail: "Mobile engineers inside your Slack for continuous releases.",
  },
];

export default function MobileAppDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Smartphone}
        badge="Mobile apps · App Store & Play"
        title={
          <>
            Offshore Mobile App Development for{" "}
            <span className="text-accent">US & Global Launches</span>
          </>
        }
        description="Flutter, React Native, Swift and Kotlin builds that get through store review — with USD quotes, timezone overlap and IP assigned to your company before coding."
        formContext="Mobile App Development — USA & Global"
        defaultService="Mobile App Development"
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="First decision"
            title="Native or Cross-Platform — We Decide With You, Not Against You"
            description="Wrong stack choice wastes a quarter. We pick based on roadmap, budget and store pressure — then stick to it."
          />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stackChoices.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border p-6 bg-gradient-subtle"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-foreground mb-3">{c.when}</p>
                <p className="text-xs text-muted-foreground">{c.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="What We Actually Build Into an App"
            description="Not a generic feature grid — the parts that decide whether users keep the install"
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {buildBlocks.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-6 border border-border flex gap-4"
              >
                <b.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Apple className="h-5 w-5" />
                <Store className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Store launch</span>
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">
                We Do Not Disappear After “Build Complete”
              </h2>
              <p className="text-muted-foreground mb-6">
                Rejection emails from Apple or Play are normal. We budget time for listing assets, privacy forms,
                test tracks and the first round of review fixes — so launch is a plan, not a surprise.
              </p>
              <ul className="space-y-3">
                {launchChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {priceBands.map((p) => (
                <div key={p.label} className="premium-card p-5">
                  <div className="text-sm text-muted-foreground">{p.label}</div>
                  <div className="text-xl font-bold text-primary my-1">{p.range}</div>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </div>
              ))}
              <Button asChild variant="hero" className="w-full sm:w-auto">
                <Link href="/contact">
                  Scope an app build <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-subtle border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <p className="text-muted-foreground text-sm mb-4">
            Apps for founders and brands in the US, UK, UAE, Canada and Australia — see market pages for currency and
            timezone detail.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              ["/locations/global/united-states", "USA"],
              ["/locations/global/united-kingdom", "UK"],
              ["/locations/global/united-arab-emirates", "UAE"],
              ["/services/software-development", "Backend / SaaS"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-full border border-border text-sm hover:border-primary hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Mobile App FAQs"
        description="Stack choice, USD cost bands, store submission and timelines"
        faqs={mobileAppDevelopmentFaqs}
      />

      <CTABanner
        title="Have an App Brief — or Just a Problem?"
        description="Send the user story. We will tell you native vs cross-platform and a honest USD range."
        primaryLabel="Book App Discovery Call"
      />
    </Layout>
  );
}
