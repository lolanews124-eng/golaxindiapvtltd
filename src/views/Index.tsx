"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Code, Smartphone, TrendingUp, Cloud, CheckCircle, ArrowRight, Users, Award, Briefcase, Star, ShoppingCart, Palette, Database, Shield, Server, MessageSquare, Building2, GraduationCap, Heart, Factory, Plane, Lightbulb, Rocket, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import TrustBar from "@/components/shared/TrustBar";
import PortfolioPreview from "@/components/shared/PortfolioPreview";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import GeoReachSection from "@/components/shared/GeoReachSection";
import { homeFaqs } from "@/data/siteFaqs";
import heroBanner from "@/assets/hero-banner.jpg";
import techPattern from "@/assets/tech-pattern.jpg";
const services = [{
  icon: Globe,
  title: "Web Development",
  description: "Conversion-focused sites & web apps in React and Next.js for US, UK and global brands.",
  href: "/services/web-development"
}, {
  icon: Code,
  title: "Software & SaaS Development",
  description: "Custom SaaS, ERP and CRM products for startups and enterprises — built by senior engineers.",
  href: "/services/software-development"
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  description: "iOS, Android and Flutter / React Native apps ready for App Store and Google Play.",
  href: "/services/mobile-app-development"
}, {
  icon: TrendingUp,
  title: "Digital Marketing & SEO",
  description: "SEO, Google Ads and Meta campaigns that win traffic in US and international markets.",
  href: "/services/digital-marketing"
}, {
  icon: Cloud,
  title: "IT Consulting & Cloud",
  description: "AWS / Azure migration, DevOps and infrastructure for product teams shipping globally.",
  href: "/services/it-consulting"
}, {
  icon: ShoppingCart,
  title: "E-commerce Development",
  description: "Shopify, headless commerce and custom stores with Stripe, Apple Pay and tax-ready checkout.",
  href: "/services/web-development"
}, {
  icon: Users,
  title: "Dedicated Dev Teams",
  description: "Hire a vetted remote squad from India — full-time engineers with US/UK business-hour overlap.",
  href: "/locations/global/united-states"
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Product UI, design systems and CRO-focused landing pages that convert paid traffic.",
  href: "/services/web-development"
}, {
  icon: Database,
  title: "CRM & ERP Solutions",
  description: "Bespoke CRM, ERP and internal tools that replace expensive SaaS sprawl.",
  href: "/services/software-development"
}];
const portfolioPreview = [
  { title: "US SaaS Analytics MVP", category: "Software", icon: Code, description: "Series-A analytics product for a US founder — shipped in 12 weeks with CI/CD and SOC2-ready practices.", highlight: "12-week MVP", color: "from-blue-500 to-cyan-500" },
  { title: "HealthFirst Patient App", category: "Mobile App", icon: Smartphone, description: "Telemedicine and appointments app with Stripe billing — live on App Store & Play Store.", highlight: "15,000+ downloads", color: "from-green-500 to-emerald-500" },
  { title: "UK E-commerce Rebuild", category: "Web Development", icon: Globe, description: "Headless Next.js store for a UK retailer — faster checkout and 40% lower hosting cost.", highlight: "40% cost cut", color: "from-purple-500 to-pink-500" },
];

const trustStats = [
  { icon: Briefcase, value: "150+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "12+", label: "Countries Served" },
  { icon: MapPin, value: "$25–45", label: "Hourly (USD)" },
];
const testimonials = [{
  name: "Michael Torres",
  role: "Founder, SaaS Startup — Austin, TX",
  content: "We needed a senior squad without SF Bay Area rates. Golax shipped our MVP in 12 weeks, joined our Slack daily, and the code quality passed investor diligence.",
  rating: 5
}, {
  name: "Sarah Mitchell",
  role: "CTO, E-commerce Brand — London",
  content: "Clear GBP invoicing, GDPR-aware engineering, and a PM who works our hours. Feels like an extended in-house team — at a fraction of local cost.",
  rating: 5
}, {
  name: "James Chen",
  role: "Product Lead, Fintech — Toronto",
  content: "Dedicated React and Node engineers, transparent CAD billing, and strong communication. Our release cadence doubled in the first quarter.",
  rating: 5
}];
const industries = [
  { icon: ShoppingCart, name: "E-commerce & Retail" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: Heart, name: "Healthcare & Pharma" },
  { icon: Building2, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: Briefcase, name: "Finance & Banking" },
  { icon: Server, name: "Logistics & Supply Chain" }
];
const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Python", "Flutter", "React Native", "AWS", "Azure", "MongoDB", "PostgreSQL", "Tailwind", "Laravel", "WordPress", "Shopify", "Firebase"];
const process = [
  { icon: MessageSquare, step: "01", title: "Discovery Call", desc: "Free 30-minute call to align on goals, stack, budget and timezone overlap for your US or global team." },
  { icon: Lightbulb, step: "02", title: "Proposal & Contract", desc: "Written scope, USD/multi-currency quote, MSA, NDA and IP assignment before any engineering starts." },
  { icon: Palette, step: "03", title: "Design & Prototype", desc: "Wireframes, UI and interactive prototypes reviewed in your working hours before build begins." },
  { icon: Code, step: "04", title: "Agile Delivery", desc: "Senior squad, Slack/Teams standups, GitHub + CI/CD, and demos on your calendar." },
  { icon: Rocket, step: "05", title: "Launch & Handover", desc: "Production deploy, docs, runbooks and knowledge transfer so your team owns the product." },
  { icon: Shield, step: "06", title: "Support & Scale", desc: "Optional care plans, dedicated retainers or expanded squads as you grow across markets." },
];
const faqs = homeFaqs.map((f) => ({ q: f.question, a: f.answer }));
export default function Index() {
  return <Layout>
      
      {/* Hero Section — mobile-first: form on top, compact height */}
      <section className="relative min-h-0 py-8 sm:py-12 md:min-h-[90vh] md:flex md:items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroBanner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-primary/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_hsl(199_89%_48%_/_0.25),transparent_50%)]" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-accent/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 min-w-0">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center min-w-0">
            {/* Lead form first on mobile for conversions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full min-w-0 order-2 lg:order-2"
            >
              <HeroLeadForm
                context="Home — USA & Global Offshore"
                title="Book a Free Discovery Call"
                subtitle="USD quotes · reply in 2 hours · NDA available."
              />
            </motion.div>

            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1 min-w-0"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-dark text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Offshore Partner · USA · UK · 12+ Countries
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-display text-[1.65rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] text-primary-foreground mb-4 sm:mb-6"
              >
                Hire Senior Engineers from India —{" "}
                <span className="text-accent">For Your US & Global Product</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Outsource web, SaaS and mobile development to a trusted India team. USD billing, 4–5 hours US timezone overlap, NDA & IP assignment — save 40–60% vs local hiring.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10"
              >
                <Button asChild variant="hero" size="xl" className="group shadow-lg shadow-accent/25 w-full sm:w-auto">
                  <Link href="/contact">
                    Get a USD Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="group w-full sm:w-auto">
                  <Link href="/locations/global/united-states">
                    <Globe className="mr-2 h-5 w-5" />
                    USA Offshore Services
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-primary-foreground/20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent/80 border-2 border-primary flex items-center justify-center text-xs font-bold text-white">
                        {i === 1 ? 'A' : i === 2 ? 'R' : i === 3 ? 'S' : 'P'}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    <span className="font-semibold text-primary-foreground">50+</span> Happy Clients
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-primary-foreground/80 ml-1">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <TrustBar stats={trustStats} variant="light" />

      {/* Services Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge="Our Services"
            title="Offshore IT Services for USA & Global Clients"
            description="Web, SaaS, mobile and growth marketing — delivered by senior India engineers with USD pricing and timezone-friendly collaboration."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Link href={service.href}>
                  <div className="premium-card p-5 sm:p-8 group h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-sm">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-primary font-medium" aria-label={`Learn more about ${service.title}`}>
                      Explore {service.title} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      <PortfolioPreview projects={portfolioPreview} />

      {/* Why Choose Us */}
      <section className="section-padding bg-card overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why US & Global Companies Choose Golax India
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                An offshore engineering partner built for founders and CTOs in the USA, UK, Canada, UAE and Australia — senior talent, clear contracts, predictable USD pricing.
              </p>
              <ul className="space-y-4">
                {["Senior engineers at $25–$45/hr — 40–60% below US rates", "4–5 hours daily overlap with US EST/PST business hours", "NDA, MSA & IP assignment before any code is written", "Dedicated squads or fixed-scope projects — your choice", "Slack/Teams collaboration with English-fluent PMs", "ISO-aligned processes, CI/CD and documented handovers"].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>)}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative overflow-hidden">
              <Image src={techPattern} alt="Technology innovation at Golax India" className="rounded-2xl shadow-2xl w-full h-auto" loading="lazy" />
              <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:left-4 sm:right-auto sm:max-w-[220px] glass-card rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                    <Award className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-gradient">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Client Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4">Industries We Serve</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Trusted by Businesses Across Industries
              </h2>
              <p className="text-lg text-muted-foreground">
                From startups to enterprises, we deliver custom IT solutions for diverse industries across the USA, UK, UAE and beyond.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="premium-card p-4 sm:p-6 text-center group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-sm">
                  <industry.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base leading-snug">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries">Explore All Industries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4 bg-accent/10 text-accent border-accent/20">Our Process</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                How Offshore Engagements Run
              </h2>
              <p className="text-lg text-muted-foreground">
                A clear 6-step delivery model used by US startups and international brands outsourcing to Golax India.
              </p>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {process.map((p, index) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative premium-card p-5 sm:p-8 bg-gradient-subtle hover:border-primary/30 overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-7xl font-heading font-bold text-primary/10 select-none">{p.step}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4">Technologies We Use</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Modern Tech Stack & Tools
              </h2>
              <p className="text-lg text-muted-foreground">
                We build with industry-leading technologies to ensure scalable, secure and future-proof products.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-2.5 bg-card border border-border/80 rounded-full text-foreground font-medium shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(199_89%_48%_/_0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/10 text-primary-foreground border border-white/20 mb-4">Client Reviews</span>
              <div className="accent-line mx-auto mb-5 bg-gradient-to-r from-accent to-primary-foreground/50" />
              <h2 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Here&apos;s what founders and product leaders in the US, UK and Canada say about working with Golax India.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass-card rounded-2xl p-7 sm:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-[15px]">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      <GeoReachSection />

      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions from US and international clients about outsourcing to Golax India"
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <CTABanner
        title="Ready to Hire Your Offshore Team?"
        description="Book a free discovery call — USD quote within 24 hours. NDA available on request."
        primaryLabel="Get a USD Quote"
      />
    </Layout>;
}