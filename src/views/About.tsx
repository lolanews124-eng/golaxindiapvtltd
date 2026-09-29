"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  MapPin,
  Globe2,
  Shield,
  Clock,
  Banknote,
  MessageSquare,
  FileText,
  Layers,
  Lock,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import FAQSection from "@/components/shared/FAQSection";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { internationalLocations } from "@/data/internationalLocations";
import { aboutFaqs } from "@/data/siteFaqs";

const beliefs = [
  {
    icon: Users,
    title: "Senior people do the thinking",
    description:
      "Every project has a senior lead who reviews architecture and code.",
  },
  {
    icon: Shield,
    title: "Your IP is yours",
    description:
      "Contracts assign all work product to you before development begins.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication beats long reports",
    description: "Short daily updates, weekly demos and a shared board.",
  },
  {
    icon: Banknote,
    title: "Fair prices, no hidden costs",
    description: "Scope, rate and change process are written down.",
  },
];

const deliveryModels = [
  {
    icon: FileText,
    title: "Fixed-scope projects",
    description:
      "Well-defined builds such as marketing sites and MVPs — clear quote, milestones and delivery date.",
  },
  {
    icon: Clock,
    title: "Time and materials",
    description:
      "Evolving products where requirements change — transparent hours, demos and sprint planning.",
  },
  {
    icon: Layers,
    title: "Dedicated teams",
    description:
      "Engineers working full time on your roadmap under your direction, with a stable squad lead.",
  },
];

const securityPractices = [
  "Mutual NDA signed before we review your ideas or systems.",
  "Project access granted per engagement and removed when work ends.",
  "Developers use secured devices and least-privilege access to repos and environments.",
  "For regulated work we design for GDPR, HIPAA or SOC 2 readiness with your compliance lead.",
];

const differentiators = [
  {
    icon: Banknote,
    title: "USD & multi-currency billing",
    description: "Transparent quotes in USD, GBP, CAD, AED or AUD — Wise, wire or card.",
  },
  {
    icon: Clock,
    title: "Timezone-aware delivery",
    description: "4–5 hours daily overlap for US East Coast; strong windows for UK, UAE and Australia.",
  },
  {
    icon: Shield,
    title: "NDA & IP by default",
    description: "Mutual NDA, MSA and IP assignment to your entity before any code is written.",
  },
  {
    icon: Globe2,
    title: "Senior offshore squads",
    description: "Dedicated React/Node/Python/Flutter engineers — not junior body shops.",
  },
];

const team = [
  {
    name: "Vinay Bhaskar",
    role: "Founder",
    bio: "Founded Golax India to deliver senior offshore engineering for US and global product teams",
  },
  {
    name: "Deepak Bharti",
    role: "CEO",
    bio: "Leads company growth, client relationships and delivery accountability for international buyers",
  },
  {
    name: "Shekhar Sahani",
    role: "CTO",
    bio: "Owns product architecture, engineering standards and technical handovers for SaaS and web builds",
  },
  {
    name: "Priya Verma",
    role: "Head of Delivery",
    bio: "Keeps US and UK projects on sprint cadence — demos, handovers and client communication",
  },
  {
    name: "Amit Ranjan",
    role: "Engineering Manager",
    bio: "Leads React/Node squads and code quality for offshore product and agency engagements",
  },
  {
    name: "Neha Gupta",
    role: "Growth & Partnerships",
    bio: "SEO, partnerships and market outreach for USA, UK and UAE buyer pipelines",
  },
];

const milestones = [
  {
    year: "2025",
    event: "Incorporated as Golax India Private Limited (CIN U42102BR2025PTC079250) — MCA registered, ISO 9001 & ISO 27001 certified",
  },
  {
    year: "2018",
    event: "Expanded multi-timezone delivery capacity for US and UK product teams",
  },
  {
    year: "2020",
    event: "Launched dedicated offshore squads for USA, UK and Middle East clients",
  },
  {
    year: "2022",
    event: "Achieved ISO 9001:2015 certification for delivery processes",
  },
  {
    year: "2024",
    event:
      "Deepened dedicated offshore squads for USA, UK, UAE, Canada, Australia and European product teams",
  },
  {
    year: "2026",
    event: "Fully focused on international clients — dedicated squads, SaaS MVPs and product engineering",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        badge="About Golax India"
        badgeIcon={Award}
        title={
          <>
            Offshore Engineering Partner for{" "}
            <span className="text-accent">USA and Global Clients</span>
          </>
        }
        description="Golax India Pvt Ltd is headquartered in Patna, India. We work with startups, agencies and established businesses in the United States, United Kingdom, Canada, Australia, the Gulf and Singapore who want to build software without the cost and delay of local hiring."
        formContext="About — USA & Global"
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We are engineers, designers and project managers who have built web platforms, SaaS products and mobile
                  apps for international customers.
                </p>
                <p>
                  Our aim is simple: behave like an extension of your in-house team, not like a distant vendor. That means
                  overlapping working hours, direct access to engineers, weekly demos and honest estimates.
                </p>
                <p>
                  Golax India Private Limited was incorporated in 2025 (CIN U42102BR2025PTC079250); our delivery practice
                  has supported overseas product teams since 2014. Leadership includes Founder Vinay Bhaskar, CEO Deepak
                  Bharti and CTO Shekhar Sahani.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 p-5 premium-card">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Delivery HQ in India</div>
                  <div className="text-sm text-muted-foreground">
                    Patna, Bihar · remote delivery across {internationalLocations.length} international markets
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={aboutTeam}
                alt="Golax India offshore engineering team for international clients"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="Principles"
            title="What We Believe"
            description="How we behave on every international engagement"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {beliefs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Remote delivery"
            title="How We Work With International Clients"
            description="Most of our clients are in different time zones and have never visited India."
          />
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 -mt-4">
            We set up the working model in the first week: a shared Slack or Teams channel, a project board, a Git
            repository under your account, a defined overlap window and a weekly demo call. You always know who is working
            on what and what will ship next.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Trust"
            title="Security and Confidentiality"
            description="ISO 27001-aligned practices and contractual protection before work begins"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-8 sm:p-10 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Certificate numbers and scans are on{" "}
                <Link href="/certificates" className="text-primary hover:underline">
                  Company Registration &amp; Certificates
                </Link>
                .
              </p>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {securityPractices.map((line) => (
                <li key={line} className="flex gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Engagements"
            title="Our Delivery Model"
            description="Choose the commercial model that fits your roadmap"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliveryModels.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Global reach"
            title="Where We Work"
            description="Based in Patna, India — serving buyers across ten international markets"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {internationalLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/global/${loc.slug}`}
                className="premium-card px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {loc.flag} {loc.country}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-8 text-sm leading-relaxed">
            Golax India Private Limited is MCA-registered with ISO 9001 and ISO 27001 certifications — see{" "}
            <Link href="/certificates" className="text-primary hover:underline">
              company registration and certificates
            </Link>{" "}
            before your first discovery call.
          </p>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <Link href="/locations">Explore all markets</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                From founding to a fully international offshore delivery focus
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 last:mb-0"
              >
                <div className="flex sm:flex-col items-center gap-3 sm:gap-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm sm:text-base shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden sm:block w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="bg-gradient-subtle rounded-lg p-4 sm:p-6 premium-card flex-1 sm:mt-2 min-w-0">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Experienced leaders who run offshore delivery for international product teams
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <div className="text-accent font-medium text-sm mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="About Golax India — FAQs"
        description="Location, remote delivery, IP ownership and incorporation"
        faqs={aboutFaqs}
      />

      <section className="py-16 border-t border-border/60">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Company Registration & Certificates
          </h2>
          <p className="text-muted-foreground mb-6">
            MCA-registered private limited company — view CIN, GST, TAN and our ISO 9001 & ISO 27001 certificates.
          </p>
          <Link
            href="/certificates"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Certificates
          </Link>
        </div>
      </section>

      <CTABanner
        title="Talk to our team about your project"
        description="Email or message us from the contact page — we reply within 24 hours with next steps and an NDA if you need one."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </Layout>
  );
}
