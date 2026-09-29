"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import FAQSection from "@/components/shared/FAQSection";
import { portfolioFaqs } from "@/data/siteFaqs";

const projects = [
  {
    title: "US SaaS Analytics MVP",
    category: "Software Development",
    serviceHref: "/services/software-development",
    market: "United States",
    icon: Code,
    description:
      "Example shape: a Series-A-stage US analytics startup needed a first product in one quarter on a tight budget. We delivered a multi-tenant web app with dashboards, user roles, billing hooks and CI/CD, following SOC 2-ready logging practices.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    outcomes: [
      "MVP scope delivered in a single quarter (client timeline)",
      "Multi-tenant roles and billing foundation",
      "Automated deploy pipeline from sprint one",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Telemedicine Patient App",
    category: "Mobile Development",
    serviceHref: "/services/mobile-app-development",
    market: "International",
    icon: Smartphone,
    description:
      "Example shape: a telemedicine provider wanted patients to book appointments and consult on iOS and Android. We built scheduling, video consultation flows and Stripe billing with privacy-first defaults suitable for regulated healthcare markets.",
    technologies: ["Flutter", "Firebase", "Node.js", "Stripe"],
    outcomes: [
      "Dual-store release under client brand (NDA)",
      "Appointment and video consult flows",
      "Stripe billing integrated for subscriptions",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UK E-commerce Rebuild",
    category: "Web Development",
    serviceHref: "/services/ecommerce-development",
    market: "United Kingdom",
    icon: Globe,
    description:
      "Example shape: a UK online retailer had a slow legacy storefront and rising hosting spend. We rebuilt on headless Next.js with a streamlined checkout, improved Core Web Vitals and lower infrastructure footprint.",
    technologies: ["Next.js", "Headless CMS", "Stripe", "Vercel"],
    outcomes: [
      "Faster checkout and product pages (measured in client staging)",
      "Hosting cost reduced versus prior stack (client-reported)",
      "SEO-safe migration with redirect map",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHero
        badge="Our Portfolio"
        badgeIcon={Sparkles}
        title={
          <>
            Offshore Projects for <span className="text-accent">USA and Global Clients</span>
          </>
        }
        description="Examples of web, SaaS and mobile work we deliver for clients outside India. Each summary describes the problem, what we built, the stack and the outcome — anonymised where NDAs apply."
        formContext="Portfolio"
      />

      <section className="py-12 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">
            How we scope work and document results
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These case studies are representative of our offshore delivery model. Numbers and client names are shared only
            with permission; where a client is under NDA we describe industry, scope and architecture instead of
            publishing unverified metrics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every engagement starts with a written scope, milestones and acceptance criteria in your repository. We run
            weekly demos, keep a shared board, and record outcomes as shipped features, performance checks in staging, or
            client-approved release notes — not vanity KPIs. When you evaluate Golax India, you can review our{" "}
            <Link href="/certificates" className="text-primary hover:underline">
              MCA registration and ISO certificates
            </Link>
            , compare delivery models on{" "}
            <Link href="/services" className="text-primary hover:underline">
              services
            </Link>
            , and read how we collaborate across{" "}
            <Link href="/locations" className="text-primary hover:underline">
              international markets
            </Link>
            . Ask on a discovery call for anonymised references when NDAs allow.
          </p>
        </div>
      </section>

      <section
        className="section-padding relative bg-card overflow-hidden"
        aria-labelledby="portfolio-projects-heading"
      >
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <h2 id="portfolio-projects-heading" className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Selected case study shapes
          </h2>

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
                    <h4 className="font-semibold text-foreground text-sm mb-2">Outcomes</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((result) => (
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
              <Link href="/contact">Request a Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection
        title="Portfolio — FAQs"
        description="NDAs, documentation and starting a similar project"
        faqs={portfolioFaqs}
      />

      <CTABanner
        title="Want Results Like These?"
        description="Tell us your goals — we reply within one business day with discovery next steps and a USD proposal outline."
        primaryLabel="Get a USD Quote"
      />
    </Layout>
  );
}
