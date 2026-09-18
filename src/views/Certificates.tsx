"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileCheck2,
  ShieldCheck,
  BadgeCheck,
  ExternalLink,
  Copy,
  Check,
  X,
  ZoomIn,
  MapPin,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import {
  certificates,
  companyRegistration,
  type CertificateItem,
} from "@/data/certificates";

const regCards = [
  {
    label: "CIN",
    value: companyRegistration.cin,
    hint: "Corporate Identity Number (MCA)",
    icon: Building2,
  },
  {
    label: "GSTIN",
    value: companyRegistration.gstin,
    hint: "Goods & Services Tax",
    icon: FileCheck2,
  },
  {
    label: "TAN",
    value: companyRegistration.tan,
    hint: "Tax Deduction Account Number",
    icon: BadgeCheck,
  },
  {
    label: "PAN",
    value: companyRegistration.pan,
    hint: "Permanent Account Number",
    icon: ShieldCheck,
  },
];

function CopyValue({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center justify-center gap-1.5 min-h-11 min-w-11 px-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
      aria-label={`Copy ${value}`}
    >
      {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
      <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function CertificateCard({
  cert,
  onOpen,
}: {
  cert: CertificateItem;
  onOpen: (c: CertificateItem) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card overflow-hidden flex flex-col h-full"
    >
      <button
        type="button"
        onClick={() => onOpen(cert)}
        className="relative group bg-muted/40 border-b border-border aspect-[4/3] overflow-hidden text-left"
      >
        <Image
          src={cert.imageSrc}
          alt={`${cert.title} — ${companyRegistration.legalName}`}
          fill
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 border border-border px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
          <ZoomIn className="h-3.5 w-3.5" /> View
        </span>
      </button>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="text-xs font-medium text-accent mb-1">{cert.standard}</div>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{cert.scope}</p>
        <dl className="space-y-1.5 text-sm mb-4 min-w-0">
          <div className="flex justify-between gap-3 min-w-0">
            <dt className="text-muted-foreground shrink-0">Issuer</dt>
            <dd className="text-foreground text-right font-medium min-w-0 break-words">{cert.issuer}</dd>
          </div>
          <div className="flex justify-between gap-3 min-w-0">
            <dt className="text-muted-foreground shrink-0">No.</dt>
            <dd className="text-foreground text-right font-mono text-xs sm:text-sm min-w-0 break-all">{cert.certificateNumber}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-muted-foreground">Issued</dt>
            <dd className="text-foreground text-right">{cert.issuedOn}</dd>
          </div>
          {cert.validThrough && (
            <div className="flex justify-between gap-3">
              <dt className="text-muted-foreground">Valid through</dt>
              <dd className="text-foreground text-right">{cert.validThrough}</dd>
            </div>
          )}
        </dl>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => onOpen(cert)}>
            View certificate
          </Button>
          {cert.verifyUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Certificates() {
  const [active, setActive] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <Layout>
      <PageHero
        badge="Trust & Compliance"
        badgeIcon={ShieldCheck}
        title={
          <>
            Company Registration & <span className="text-accent">Certificates</span>
          </>
        }
        description="Golax India Private Limited is registered with the Ministry of Corporate Affairs. View our CIN, GST, TAN and quality / information-security certificates."
        formContext="Certificates"
        showForm={false}
        actions={
          <>
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href={companyRegistration.mcaVerifyUrl} target="_blank" rel="noopener noreferrer">
                Verify on MCA.gov.in
              </a>
            </Button>
          </>
        }
      />

      {/* Registration identifiers */}
      <section className="section-padding relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="MCA Registered"
            title="Official Company Identifiers"
            description={`${companyRegistration.legalName} — incorporated ${companyRegistration.incorporationDate} as a ${companyRegistration.companyType.toLowerCase()}.`}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {regCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="premium-card p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CopyValue value={card.value} />
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{card.label}</div>
                <div className="font-mono text-sm sm:text-base font-semibold text-foreground break-all">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-2">{card.hint}</p>
              </motion.div>
            ))}
          </div>

          <div className="premium-card p-6 sm:p-8 max-w-3xl">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Registered office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {companyRegistration.registeredAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Status can be verified on{" "}
                  <a
                    href={companyRegistration.mcaVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mca.gov.in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Certificates"
            title="Incorporation & ISO Certifications"
            description="Click any certificate to view it full-size. Startup India recognition is from DPIIT; ISO certificates are issued by MQA Certification Services."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Work with a registered, certified offshore partner"
        description="NDA/IP-ready delivery for US, UK, UAE and global clients — backed by MCA registration and ISO quality & security frameworks."
        primaryLabel="Get a Quote"
      />

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-4xl max-h-[min(90vh,100dvh)] bg-background rounded-xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border shrink-0">
                <div className="min-w-0">
                  <div className="font-heading font-semibold text-foreground truncate">{active.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{active.certificateNumber}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="min-h-11 min-w-11 flex items-center justify-center rounded-lg hover:bg-muted transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative w-full flex-1 min-h-0 overflow-auto bg-muted/30">
                <div className="relative w-full min-h-[50vh] h-[min(70vh,calc(100dvh-5rem))]">
                  <Image
                    src={active.imageSrc}
                    alt={active.title}
                    fill
                    className="object-contain p-4"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
