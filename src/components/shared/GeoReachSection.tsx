"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { internationalLocations } from "@/data/internationalLocations";

export default function GeoReachSection() {
  return (
    <section className="section-padding bg-card border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 space-y-10 relative z-10">
        <SectionHeader
          badge="Global Reach"
          title="Built for USA & International Clients"
          description="Offshore web, software and app development for startups and enterprises in the United States, UK, Canada, UAE, Australia and beyond — delivered by a senior engineering team in India."
        />

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe2 className="h-6 w-6 text-primary" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              USA & International Markets
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {internationalLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={`/locations/global/${loc.slug}`}
                  className="flex items-center gap-2 p-3 sm:p-4 bg-background rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all text-sm font-medium h-full"
                >
                  <span className="text-xl" aria-hidden="true">
                    {loc.flag}
                  </span>
                  <span className="text-foreground">{loc.country}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/locations"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              Explore all markets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <Button asChild variant="hero" size="lg">
            <Link href="/locations">View International Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
