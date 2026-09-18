"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Globe2, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import TrustBar from "@/components/shared/TrustBar";
import CTABanner from "@/components/shared/CTABanner";
import { internationalLocations, slugifyCity } from "@/data/internationalLocations";

export default function Locations() {
  return (
    <Layout>
      <PageHero
        badge="Global Markets"
        badgeIcon={Globe2}
        title={
          <>
            Offshore IT Partner for <span className="text-accent">International Businesses</span>
          </>
        }
        description="Hire a senior engineering team from India for web, software, mobile apps and digital marketing — serving startups and enterprises across the USA, UK, Canada, UAE, Australia and more."
        formContext="Locations"
        actions={
          <>
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="tel:+919128666005">Call: +91 9128666005</a>
            </Button>
          </>
        }
      />

      <TrustBar
        stats={[
          { icon: Globe2, value: "10", label: "Countries Served" },
          { icon: Building2, value: "150+", label: "Projects Delivered" },
          { icon: Users, value: "50+", label: "Global Clients" },
          { icon: MapPin, value: "USD", label: "Transparent Billing" },
        ]}
      />

      <section id="global" className="section-padding relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="International"
            title="Markets We Serve Outside India"
            description="Dedicated offshore delivery for founders and CTOs abroad — timezone overlap, NDA/IP-ready contracts, and clear USD / local-currency quotes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="premium-card p-6 h-full group">
                  <Link
                    href={`/locations/global/${loc.slug}`}
                    className="flex items-start justify-between mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl leading-none">{loc.flag}</span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {loc.country}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {loc.region} · {loc.currency} · {loc.timezoneOverlap} overlap
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{loc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {loc.majorCities.map((city) => (
                      <Link
                        key={city}
                        href={`/locations/global/${loc.slug}/${slugifyCity(city)}`}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {loc.industries.slice(0, 3).map((industry, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border border-border text-muted-foreground rounded text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Country?"
        description="We work with clients worldwide. Tell us where you're based and we'll share timezone overlap, engagement models, and a free estimate."
      />
    </Layout>
  );
}
