"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  MapPin,
  Globe2,
  Shield,
  Clock,
  Banknote,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { internationalLocations } from "@/data/internationalLocations";

const values = [
  {
    icon: Target,
    title: "Product Outcomes",
    description:
      "We optimize for shipped software, clean architecture and measurable business results — not billable hours.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "Founders and CTOs get a senior lead, clear communication and long-term ownership of the relationship.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description:
      "Code review, CI/CD, documentation and security baselines are standard on every engagement.",
  },
  {
    icon: Users,
    title: "Timezone Collaboration",
    description:
      "English-fluent PMs and daily overlap with US, UK, GCC and APAC business hours.",
  },
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
    name: "Vikash Kumar",
    role: "Founder & CEO",
    bio: "15+ years in IT — builds offshore delivery models for US and global product teams",
  },
  {
    name: "Anita Sharma",
    role: "CTO",
    bio: "Full-stack & SaaS architecture lead with 12 years shipping enterprise and startup products",
  },
  {
    name: "Rajesh Singh",
    role: "Head of Development",
    bio: "Owns engineering quality, sprint cadence and handovers for international clients",
  },
  {
    name: "Meera Patel",
    role: "Growth & Digital Lead",
    bio: "SEO and paid acquisition for US/UK markets — organic growth and conversion focus",
  },
];

const milestones = [
  {
    year: "2014",
    event: "Golax India founded — mission to deliver world-class engineering at offshore rates for clients abroad",
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
    event: "150+ projects delivered across USA, UK, UAE, Canada, Australia and Europe",
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
            <span className="text-accent">USA & Global Clients</span>
          </>
        }
        description="Since 2014, Golax India has helped US startups, UK scale-ups and international enterprises ship web products, SaaS platforms and mobile apps — with senior talent, clear contracts and USD-friendly pricing."
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
                Built for Clients Outside India
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Golax India was founded in 2014 to give founders and CTOs abroad access to senior engineering talent
                  without Bay Area, London or Dubai agency rates.
                </p>
                <p>
                  From our delivery HQ in India, we partner with startups and enterprises across the United States,
                  United Kingdom, Canada, UAE, Australia, Singapore and beyond. Every engagement is led by a senior
                  engineer and an English-fluent project manager.
                </p>
                <p>
                  Today we specialize in SaaS MVPs, dedicated product squads, e-commerce rebuilds and App Store launches
                  — with NDA/IP assignment, multi-currency billing and timezone-aware collaboration as the default.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 p-5 premium-card">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Delivery HQ in India</div>
                  <div className="text-sm text-muted-foreground">
                    Serving clients in {internationalLocations.length}+ countries · Patna engineering base
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

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Golax"
            title="How We Work With International Clients"
            description="The operating model US, UK and GCC product teams expect from a serious offshore partner."
          />
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
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <Link href="/locations">Explore Markets We Serve</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 sm:p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To help US and international companies ship high-quality software faster and at a sustainable cost —
                with senior offshore talent, clear contracts and accountability that feels like an in-house team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="premium-card p-8 sm:p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted offshore engineering partner for founders and CTOs outside India — recognized for
                technical excellence, ethical delivery and long-term product partnerships across the USA, UK, GCC and APAC.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="Our Values"
            title="Our Core Values"
            description="The principles that guide every international engagement at Golax India"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
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
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="bg-gradient-subtle rounded-lg p-6 premium-card flex-1 mt-2">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Experienced leaders who run offshore delivery for international product teams
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <CTABanner
        title="Ready to Hire Your Offshore Team?"
        description="Book a free discovery call — USD quote within 24 hours. NDA available on request."
        primaryLabel="Get a USD Quote"
      />
    </Layout>
  );
}
