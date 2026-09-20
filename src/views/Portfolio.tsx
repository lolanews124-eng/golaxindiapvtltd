"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Briefcase,
  Star,
  Users,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import CTABanner from "@/components/shared/CTABanner";

const projects = [
  {
    title: "US SaaS Analytics Dashboard",
    category: "Software Development",
    serviceHref: "/services/software-development",
    market: "United States",
    icon: Code,
    description:
      "Multi-tenant analytics SaaS for a US B2B startup — React/Next.js front end, Node APIs, Stripe billing and role-based access for enterprise seats.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    results: ["MVP in 11 weeks", "40% faster report loads", "SOC2-ready logging"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UK Healthcare Patient App",
    category: "Mobile Development",
    serviceHref: "/services/mobile-app-development",
    market: "United Kingdom",
    icon: Smartphone,
    description:
      "iOS/Android patient app for a UK clinic group — appointments, prescriptions and secure messaging with GDPR-first defaults.",
    technologies: ["Flutter", "Firebase", "Node.js", "Stripe"],
    results: ["35% fewer no-shows", "4.6★ store rating", "NHS-friendly UX patterns"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UAE Multi-Store Retail ERP",
    category: "Software Development",
    serviceHref: "/services/software-development",
    market: "United Arab Emirates",
    icon: Code,
    description:
      "Inventory, POS and multi-branch ops platform for a Dubai retail group — AED invoicing, Arabic/English UI and warehouse sync.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    results: ["60% faster stock ops", "8 branches live", "Same-day reconciliation"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Australia Travel Booking Site",
    category: "Web Development",
    serviceHref: "/services/web-development",
    market: "Australia",
    icon: Globe,
    description:
      "High-conversion booking website for an Australian travel brand — Next.js, AUD payments, tour packages and SEO-ready content.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    results: ["2× online bookings", "Core Web Vitals green", "AUD checkout live"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Canada Field Ops Mobile App",
    category: "Mobile Development",
    serviceHref: "/services/mobile-app-development",
    market: "Canada",
    icon: Smartphone,
    description:
      "Flutter field app for a Canadian logistics SME — job dispatch, offline sync, photo proof and CAD reporting for crews.",
    technologies: ["Flutter", "Firebase", "Maps", "Node.js"],
    results: ["30% faster close-outs", "Offline-first crews", "CAD export"],
    color: "from-green-600 to-lime-500",
  },
  {
    title: "US Fintech SEO & Content Engine",
    category: "Digital Marketing",
    serviceHref: "/services/digital-marketing",
    market: "United States",
    icon: TrendingUp,
    description:
      "Technical SEO + content system for a US fintech — topic clusters, landing pages and measurement tied to demo requests.",
    technologies: ["SEO", "Google Ads", "Content", "Analytics"],
    results: ["3× organic traffic", "Top-3 for 18 intents", "Pipeline-linked reporting"],
    color: "from-indigo-500 to-blue-500",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Software Development",
  "Digital Marketing",
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHero
        badge="Our Portfolio"
        badgeIcon={Sparkles}
        title={
          <>
            Offshore Projects for <span className="text-accent">USA & Global Clients</span>
          </>
        }
        description="Selected web, SaaS, mobile and growth engagements delivered by Golax India — senior engineers, USD/multi-currency billing and NDA/IP-ready delivery."
        formContext="Portfolio"
      />

      <section
        className="section-padding relative bg-card overflow-hidden"
        aria-labelledby="portfolio-projects-heading"
      >
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <h2 id="portfolio-projects-heading" className="sr-only">
            Our Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className={`filter-pill ${category === "All" ? "filter-pill-active" : "filter-pill-inactive"}`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group premium-card overflow-hidden p-0 flex flex-col"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm">
                        {project.category} · {project.market}
                      </div>
                      <h3 className="text-white font-heading font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground mb-4 text-sm flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill text-xs px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mb-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-success" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={project.serviceHref}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Related service <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">All Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Golax India</Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustBar
        stats={[
          { icon: Briefcase, value: "150+", label: "Projects Completed" },
          { icon: Users, value: "50+", label: "Happy Clients" },
          { icon: Star, value: "98%", label: "Client Satisfaction" },
          { icon: Award, value: "10+", label: "Markets Served" },
        ]}
      />

      <CTABanner
        title="Ready to Be Our Next Success Story?"
        description="Book a free discovery call — USD quote for web, SaaS or mobile within 24 hours."
        primaryLabel="Get a USD Quote"
      />
    </Layout>
  );
}
