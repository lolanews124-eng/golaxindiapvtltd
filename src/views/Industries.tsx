"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Rocket,
  Store,
  Building,
  Landmark,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";

const industries = [
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "LMS portals, student apps and assessment platforms for schools, universities and EdTech startups serving learners in the USA, UK, UAE and beyond.",
    solutions: [
      "Learning Management Systems (LMS)",
      "Student portals & SIS",
      "Online examination platforms",
      "Virtual classroom tools",
      "EdTech mobile apps",
    ],
    clients: ["Schools", "Universities", "EdTech Startups", "Training Orgs"],
    serviceHref: "/services/web-development",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Patient apps, clinic portals and telemedicine workflows for healthcare providers who need GDPR/HIPAA-aware delivery and reliable offshore capacity.",
    solutions: [
      "Hospital & clinic management",
      "Patient portals",
      "Telemedicine platforms",
      "Appointment booking",
      "Healthcare mobile apps",
    ],
    clients: ["Clinics", "Hospitals", "Diagnostics", "Healthtech"],
    serviceHref: "/services/mobile-app-development",
  },
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description:
      "MVP to growth-stage product engineering for founders abroad — React/Next.js, Flutter and SaaS backends with USD billing and NDA/IP assignment.",
    solutions: [
      "MVP & product discovery",
      "SaaS platform builds",
      "Dedicated engineering pods",
      "Tech consulting",
      "Full-stack delivery",
    ],
    clients: ["SaaS", "D2C", "FinTech", "Marketplaces"],
    serviceHref: "/services/software-development",
  },
  {
    icon: Store,
    title: "Retail & E-commerce",
    description:
      "Storefronts, inventory systems and omnichannel experiences for retailers and brands selling across US, UK, UAE and APAC markets.",
    solutions: [
      "E-commerce websites",
      "Headless / Shopify builds",
      "Inventory & POS",
      "Customer apps",
      "Performance SEO",
    ],
    clients: ["Retail chains", "D2C brands", "Marketplaces"],
    serviceHref: "/services/web-development",
  },
  {
    icon: Building,
    title: "Real Estate & PropTech",
    description:
      "Listing portals, CRM and agent apps for brokers and PropTech teams that need fast iteration without local hire overhead.",
    solutions: [
      "Property listing portals",
      "Real-estate CRM",
      "Virtual tour flows",
      "Lead management",
      "Agent mobile apps",
    ],
    clients: ["Brokerages", "Builders", "PropTech"],
    serviceHref: "/services/software-development",
  },
  {
    icon: Landmark,
    title: "Finance & Professional Services",
    description:
      "Secure portals, dashboards and marketing sites for fintech and professional services firms that care about audit trails and clear SLAs.",
    solutions: [
      "Client portals",
      "Analytics dashboards",
      "Document workflows",
      "Compliance-friendly UX",
      "SEO & paid acquisition",
    ],
    clients: ["FinTech", "Advisory", "Insurance"],
    serviceHref: "/services/digital-marketing",
  },
];

export default function Industries() {
  return (
    <Layout>
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                  Industries We Serve
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                  Industry IT Solutions for{" "}
                  <span className="text-accent">USA & Global Buyers</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Tailored offshore web, SaaS and mobile delivery for education, healthcare,
                  startups, retail, real estate and finance — senior India engineers, multi-currency
                  billing and NDA/IP-ready contracts.
                </p>
              </motion.div>
            </div>
            <div className="w-full">
              <HeroLeadForm context="Industries We Serve" variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {industry.title}
                  </h2>
                </div>

                <p className="text-muted-foreground mb-6">{industry.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Solutions we offer</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {industry.clients.map((client) => (
                    <span
                      key={client}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {client}
                    </span>
                  ))}
                </div>

                <Link
                  href={industry.serviceHref}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Related services <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                We work across sectors for international product teams. Tell us your use case —
                we&apos;ll map the right stack and delivery model.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="accent" size="xl">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link href="/services">Browse Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
