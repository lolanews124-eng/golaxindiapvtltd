"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Store,
  Building,
  Landmark,
  Factory,
  Plane,
  Truck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/shared/CTABanner";
import FAQSection from "@/components/shared/FAQSection";
import { industriesFaqs } from "@/data/siteFaqs";

const industries = [
  {
    icon: Store,
    title: "E-commerce and retail",
    description:
      "Storefronts, headless commerce, marketplace platforms and inventory and order systems. We integrate Stripe, PayPal, Apple Pay, tax engines and shipping carriers, and optimise for Core Web Vitals and conversion.",
    solutions: [
      "Shopify and headless Next.js stores",
      "Marketplace and multi-vendor platforms",
      "Inventory, OMS and fulfilment integrations",
      "International payments and tax",
      "Performance and CRO-focused UX",
    ],
    serviceHref: "/services/ecommerce-development",
  },
  {
    icon: GraduationCap,
    title: "Education and EdTech",
    description:
      "Learning platforms, course marketplaces, live class tools and student portals. We plan for video delivery, progress tracking, accessibility and child-privacy rules such as COPPA where relevant.",
    solutions: [
      "LMS and course delivery",
      "Live classes and virtual classrooms",
      "Student portals and progress tracking",
      "Assessment and certification flows",
      "Accessibility-minded UI",
    ],
    serviceHref: "/services/web-development",
  },
  {
    icon: Heart,
    title: "Healthcare and pharma",
    description:
      "Telemedicine, appointment booking, patient portals and practice management. We design for HIPAA in the US and GDPR in the UK and EU: encryption, audit logs, role-based access and data-processing agreements.",
    solutions: [
      "Telemedicine and video consult",
      "Patient portals and scheduling",
      "Practice management workflows",
      "Audit logs and RBAC",
      "Healthcare mobile apps",
    ],
    serviceHref: "/services/mobile-app-development",
  },
  {
    icon: Building,
    title: "Real estate",
    description:
      "Listing portals, CRM, property management and virtual tour tools with map search and lead routing.",
    solutions: [
      "Property listing portals",
      "Broker CRM and lead routing",
      "Property management dashboards",
      "Virtual tour integrations",
      "Agent mobile apps",
    ],
    serviceHref: "/services/software-development",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "ERP modules, inventory, production planning, supplier portals and IoT dashboards.",
    solutions: [
      "Production planning and MRP modules",
      "Inventory and warehouse tools",
      "Supplier and vendor portals",
      "IoT and shop-floor dashboards",
      "Quality and traceability reporting",
    ],
    serviceHref: "/services/crm-erp-solutions",
  },
  {
    icon: Plane,
    title: "Travel and hospitality",
    description:
      "Booking engines, channel-manager integrations, itinerary apps and loyalty systems.",
    solutions: [
      "Booking engines and packages",
      "Channel manager integrations",
      "Guest itinerary mobile apps",
      "Loyalty and rewards",
      "Multi-currency checkout",
    ],
    serviceHref: "/services/web-development",
  },
  {
    icon: Landmark,
    title: "Finance and banking",
    description:
      "Dashboards, lending and payments workflows, KYC flows and reporting tools, built with strong audit and security practice. We do not provide regulated financial advice or licences; we build the software your licensed business operates.",
    solutions: [
      "Client and investor portals",
      "Lending and payments workflows",
      "KYC and onboarding flows",
      "Reporting and audit trails",
      "Secure API integrations",
    ],
    serviceHref: "/services/software-development",
  },
  {
    icon: Truck,
    title: "Logistics and supply chain",
    description:
      "Fleet and shipment tracking, warehouse tools, route planning and customer tracking portals.",
    solutions: [
      "Fleet and shipment tracking",
      "Warehouse management tools",
      "Route planning and dispatch",
      "Customer tracking portals",
      "Field mobile apps with offline sync",
    ],
    serviceHref: "/services/mobile-app-development",
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
                  <span className="text-accent">USA and Global Buyers</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Software is easier to build when the team understands your market. Below is what we build for each
                  industry and the compliance topics we plan for from the first sprint.
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
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{industry.title}</h2>
                </div>

                <p className="text-muted-foreground mb-6">{industry.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">What we build</h3>
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

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Compliance for regulated industries
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            Healthcare, finance, education and cross-border SaaS often need more than clean code. We plan encryption,
            role-based access, audit logging and data-processing agreements with your legal or compliance lead — aligned
            to HIPAA, GDPR, COPPA or sector audit expectations where your product requires it. Golax India holds ISO
            9001 and ISO 27001 certifications; registration details and certificate scans are on{" "}
            <Link href="/certificates" className="text-primary hover:underline">
              Company Registration &amp; Certificates
            </Link>
            . Delivery runs from India with documented overlap for US, UK, Gulf and APAC buyers — see{" "}
            <Link href="/locations" className="text-primary hover:underline">
              international locations
            </Link>{" "}
            for market-specific notes. We do not provide legal advice or regulated licences; we build software your
            licensed business operates.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Do you have experience in my industry?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tell us your industry on the discovery call and we will share relevant work and the compliance items we
            would plan for — HIPAA, GDPR, COPPA or sector-specific audit needs.
          </p>
        </div>
      </section>

      <FAQSection
        title="Industries — FAQs"
        description="Sectors we serve, custom SaaS and how to start"
        faqs={industriesFaqs}
      />

      <CTABanner
        title="Discuss Your Industry Requirements"
        description="Book a free discovery call — we reply within one business day with next steps."
        primaryLabel="Contact Golax India"
      />
    </Layout>
  );
}
