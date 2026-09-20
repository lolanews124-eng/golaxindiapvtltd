"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Code, Smartphone, TrendingUp, Cloud, ArrowRight, CheckCircle, Layers, Database, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import FAQSection from "@/components/shared/FAQSection";
import { servicesFaqs } from "@/data/siteFaqs";

const services = [{
  icon: Globe,
  title: "Web Development",
  slug: "web-development",
  description: "Fast, search-friendly websites and web applications in React, Next.js and Node.js — marketing sites, customer portals and web products.",
  features: ["Custom Website Design & Development", "E-commerce Solutions (Shopify, WooCommerce, Custom)", "Progressive Web Apps (PWA)", "Content Management Systems (WordPress, Custom CMS)", "Web Portal Development", "API Development & Integration"],
  technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress", "Shopify"]
}, {
  icon: Code,
  title: "Software Development",
  slug: "software-development",
  description: "Custom SaaS products, ERP, CRM and internal tools with multi-tenant architecture, billing, roles and analytics.",
  features: ["Custom Enterprise Software", "ERP & CRM Solutions", "Business Process Automation", "Legacy System Modernization", "Database Design & Management", "Software Integration Services"],
  technologies: ["Java", "Python", ".NET", "Node.js", "PostgreSQL", "MongoDB"]
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  slug: "mobile-app-development",
  description: "Native and cross-platform apps for iOS and Android using Swift, Kotlin, Flutter or React Native, with store submission when in scope.",
  features: ["iOS App Development (Swift)", "Android App Development (Kotlin)", "Cross-Platform Apps (React Native, Flutter)", "Mobile UI/UX Design", "App Store Optimization", "App Maintenance & Support"],
  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
}, {
  icon: TrendingUp,
  title: "Digital Marketing & SEO",
  slug: "digital-marketing",
  description: "Technical SEO, content and paid campaigns to win customers in international markets.",
  features: ["Search Engine Optimization (SEO)", "Pay-Per-Click Advertising (PPC)", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
  technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics", "Mailchimp"]
}, {
  icon: Cloud,
  title: "IT Consulting & Cloud Services",
  slug: "it-consulting",
  description: "Architecture reviews, AWS and Azure migration, DevOps and security hardening.",
  features: ["Cloud Migration (AWS, Azure, GCP)", "IT Infrastructure Assessment", "Technology Roadmap Planning", "Cybersecurity Consulting", "DevOps Implementation", "Managed IT Services"],
  technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"]
}, {
  icon: Database,
  title: "E-commerce Development",
  slug: "ecommerce-development",
  description: "Shopify, headless commerce and custom stores with international payments, tax and shipping.",
  features: ["Shopify & Shopify Plus", "Headless Next.js commerce", "Multi-currency & tax", "App integrations", "Migration & redirects", "CRO-ready storefronts"],
  technologies: ["Shopify", "Next.js", "Stripe", "Hydrogen", "TypeScript"]
}, {
  icon: Layers,
  title: "UI/UX Design",
  slug: "ui-ux-design",
  description: "Product design, design systems and conversion-focused landing pages, with research and prototypes tested before build.",
  features: ["SaaS product UI", "Design systems", "Marketing landings", "Prototyping", "Accessibility-minded UI", "Engineering handoff"],
  technologies: ["Figma", "Design tokens", "Storybook", "WCAG"]
}, {
  icon: Shield,
  title: "CRM & ERP Solutions",
  slug: "crm-erp-solutions",
  description: "Custom business systems that replace spreadsheets and expensive SaaS combinations.",
  features: ["Custom CRM modules", "ERP / ops portals", "Integrations", "Role-based access", "Reporting", "Data migration"],
  technologies: ["React", "Node.js", "Python", "PostgreSQL"]
}, {
  icon: Code,
  title: "Dedicated Development Teams",
  slug: "dedicated-development-teams",
  description: "A vetted full-time squad of engineers working only on your roadmap under your direction.",
  features: ["Interview-first staffing", "Monthly pods", "US/UK/Gulf overlap", "NDA & IP assignment", "Pilot sprints", "Transparent rates"],
  technologies: ["React", "Node.js", "Flutter", "Python"]
}];

const process = [{
  step: "01",
  title: "Discovery",
  description: "We understand your business goals, challenges, and requirements through detailed discussions."
}, {
  step: "02",
  title: "Planning",
  description: "Our team creates a comprehensive project plan with timelines, milestones, and deliverables."
}, {
  step: "03",
  title: "Development",
  description: "We build your solution using agile methodology with regular updates and feedback loops."
}, {
  step: "04",
  title: "Delivery",
  description: "After rigorous testing, we deploy your solution and provide ongoing support."
}];

export default function Services() {
  return (
    <Layout>
      <PageHero
        badge="Our Services"
        badgeIcon={Sparkles}
        title={<>Offshore IT Services for <span className="text-accent">USA and Global Clients</span></>}
        description="Golax India provides the full range of software services an international business needs, from first design to production support. Choose a single service or combine several under one team and one contract."
        formContext="Services — USA & Global"
      />

      <section className="py-12 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-center mb-8">
            Each service below links to a dedicated landing page with scope examples, stacks and engagement models.
            Need named engineers? See our hire-by-technology pages at the bottom of this hub.
          </p>
        </div>
      </section>

      <section className="section-padding relative bg-card overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="space-y-20 sm:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg">
                    <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
                      Explore {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} premium-card p-8`}>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Hire by technology"
            title="Hire Developers by Technology"
            description="Dedicated senior engineers in React, Node.js, Flutter and Python — monthly pods with US/UK overlap and NDA before code."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Hire React developers", href: "/services/hire-react-developers" },
              { label: "Hire Node.js developers", href: "/services/hire-nodejs-developers" },
              { label: "Hire Flutter developers", href: "/services/hire-flutter-developers" },
              { label: "Hire Python developers", href: "/services/hire-python-developers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="premium-card p-5 text-center font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Not sure what you need? Tell us the outcome you want and we will recommend the smallest team and timeline
            that can deliver it. The first call is free.
          </p>
          <div className="flex justify-center mt-6">
            <Button asChild variant="hero" size="lg">
              <Link href="/contact">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="Our Development Process"
        description="A proven methodology that ensures successful project delivery every time"
        steps={process}
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Why Golax India"
                title="Why US & Global Teams Choose Golax India"
                description="Senior engineers, clear USD contracts, Slack/Teams collaboration and delivery processes built for product teams outside India."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {[{
                  icon: Layers,
                  title: "Full-Stack Expertise",
                  desc: "End-to-end development capabilities across all technologies"
                }, {
                  icon: Database,
                  title: "Scalable Solutions",
                  desc: "Built to grow with your business needs"
                }, {
                  icon: Shield,
                  title: "Security First",
                  desc: "Enterprise-grade security in every project"
                }].map((item, index) => (
                  <div key={index} className="premium-card flex gap-4 p-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card bg-gradient-hero p-8 sm:p-10 text-primary-foreground border-0"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Let's discuss your project requirements. Get a free consultation and quote from our expert team.
              </p>
              <div className="space-y-4">
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link href="/contact">Request Free Quote</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg" className="w-full">
                  <a href="tel:+919128666005">Call: +91 9128666005</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Offshore Services FAQs"
        description="What international buyers usually ask before hiring"
        faqs={servicesFaqs}
      />

      <CTABanner
        title="Ready to Hire Your Offshore Team?"
        description="Get a free USD quote for web, SaaS or mobile development — reply within one business day."
      />
    </Layout>
  );
}
