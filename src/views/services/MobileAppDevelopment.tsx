"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  CheckCircle,
  Layers,
  Apple,
  Store,
  Server,
  CreditCard,
  ArrowRight,
  Shield,
  Rocket,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { mobileAppDevelopmentFaqs } from "@/data/serviceFaqs";

const deliverables = [
  {
    icon: Layers,
    title: "Cross-platform apps",
    text: "Cross-platform apps in Flutter or React Native for faster delivery and a single codebase.",
  },
  {
    icon: Apple,
    title: "Native iOS & Android",
    text: "Native iOS (Swift) and Android (Kotlin) apps for performance-critical products.",
  },
  {
    icon: Server,
    title: "Backend & admin",
    text: "Backend, APIs and admin panels that support the app.",
  },
  {
    icon: CreditCard,
    title: "Payments & features",
    text: "Payments, subscriptions, push notifications, maps, chat and video features.",
  },
  {
    icon: Store,
    title: "Store submission",
    text: "App Store and Google Play submission and review support.",
  },
  {
    icon: Rocket,
    title: "Post-launch support",
    text: "Post-launch monitoring, crash fixes and OS-update support.",
  },
];

const whyChoose = [
  "Store-ready delivery: we handle submission and review feedback.",
  "One team for design, app and backend.",
  "Privacy and compliance awareness for health and children data.",
  "Weekly builds you can install and test.",
];

const process = [
  {
    step: "01",
    title: "Product discovery",
    description: "Users, key flows and success metrics.",
  },
  {
    step: "02",
    title: "UX and UI design",
    description: "UX and UI design with a tappable prototype.",
  },
  {
    step: "03",
    title: "Sprint development",
    description: "Sprint development with TestFlight and Play Console internal builds.",
  },
  {
    step: "04",
    title: "QA",
    description: "QA on real devices and OS versions.",
  },
  {
    step: "05",
    title: "Store submission",
    description: "Store submission, screenshots, metadata and release.",
  },
  {
    step: "06",
    title: "Analytics and iteration",
    description: "Analytics and iteration after launch.",
  },
];

const technologies = [
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Firebase",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Stripe",
  "Sentry",
  "Firebase Crashlytics",
];

export default function MobileAppDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Smartphone}
        badge="Mobile app development"
        title="Mobile App Development for iOS and Android"
        description="Golax India builds mobile apps that are ready for the App Store and Google Play. We work with startups and businesses abroad to design, build, launch and maintain iOS and Android apps, using native or cross-platform technology depending on what fits your product and budget."
        formContext="Mobile App Development"
        defaultService="Mobile App Development"
        formTitle="Book a free discovery call for mobile app development"
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="What we deliver"
            title="What we deliver"
            description="Cross-platform and native apps, backends, store launch and ongoing support."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {deliverables.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-gradient-subtle rounded-2xl p-6 border border-border flex gap-4"
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

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div>
              <SectionHeader
                align="left"
                badge="Who this is for"
                title="Who this is for"
                description="Startups, regulated industries and teams maintaining existing apps."
              />
              <p className="text-muted-foreground leading-relaxed">
                Startups launching a first app, healthcare, fintech and education companies extending a web product to
                mobile, and businesses that need a reliable team to maintain an existing app.
              </p>
            </div>
            <div className="premium-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-primary font-medium mb-3">
                <Shield className="h-5 w-5" />
                Why choose Golax India for mobile app development
              </div>
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

      <ProcessTimeline
        title="How the work runs"
        description="Discovery through store release and post-launch iteration."
        steps={process}
      />

      <TechPills
        title="Technology we use"
        description="Flutter, React Native, native stacks, backends and monitoring."
        items={technologies}
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <SectionHeader
            badge="Pricing"
            title="Pricing and engagement models"
            description="Fixed estimate after discovery or dedicated mobile developers by the month."
            align="left"
          />
          <p className="text-muted-foreground leading-relaxed">
            A focused MVP app typically starts in the low five figures, and complex apps with custom backends cost
            more. We provide a fixed estimate after discovery, or you can hire dedicated mobile developers by the month.
          </p>
          <Button asChild variant="hero" className="mt-8">
            <Link href="/contact">
              Get a USD quote for mobile app development <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FAQSection
        title="Frequently asked questions"
        description="Native vs cross-platform, timelines, store accounts and maintenance"
        faqs={mobileAppDevelopmentFaqs}
      />

      <CTABanner
        title="Get a USD quote for mobile app development"
        description="Book a free discovery call. We reply within one business day with a clear next step."
        primaryLabel="Get a USD quote for mobile app development"
      />
    </Layout>
  );
}
