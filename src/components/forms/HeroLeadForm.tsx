"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, CheckCircle2, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getBookingUrl, trackFormSubmit } from "@/lib/analytics";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  email: z.string().trim().email("Valid email required").max(255),
  service: z.string().min(1, "Select a service"),
  requirement: z.string().trim().min(5, "Brief required").max(2000),
});

const DEFAULT_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Software / SaaS Development",
  "E-commerce Development",
  "UI/UX Design",
  "CRM & ERP Solutions",
  "Dedicated Development Team",
  "Hire React / Node / Flutter / Python",
  "Digital Marketing & SEO",
  "IT Consulting & Cloud",
  "Other",
];

interface Props {
  context?: string;
  defaultService?: string;
  services?: string[];
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light";
}

export default function HeroLeadForm({
  context = "Website",
  defaultService = "",
  services = DEFAULT_SERVICES,
  title = "Get a Free Quote",
  subtitle = "Submit your brief — we email contact@golaxindia.com and reply on business days.",
  variant = "dark",
}: Props) {
  const { toast } = useToast();
  const pathname = usePathname();
  const router = useRouter();
  const bookingUrl = getBookingUrl();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    requirement: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please complete the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          context,
          page: pathname || "/",
          companyWebsite: honeypot,
        }),
      });
      const payload = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !payload.ok) {
        throw new Error(payload.error || "Submission failed");
      }
      trackFormSubmit(form.service);
      setSubmitted(true);
      toast({
        title: "Enquiry sent",
        description: "Thanks — we will reply to your email shortly.",
      });
      router.push("/thank-you");
    } catch (err) {
      toast({
        title: "Could not send enquiry",
        description:
          err instanceof Error
            ? err.message
            : "Please email contact@golaxindia.com or try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const wrapperClass =
    variant === "dark"
      ? "glass-card ring-1 ring-white/40"
      : "bg-gradient-card border border-border/80 shadow-premium";

  const formInner = "relative overflow-hidden rounded-2xl";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${wrapperClass} ${formInner} p-5 text-center text-card-foreground`}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-2 mt-0.5" />
        <h3 className="text-lg font-bold text-foreground mb-1">Thanks!</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Redirecting you to the confirmation page…
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`${wrapperClass} ${formInner} p-3.5 sm:p-4 space-y-2 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none text-card-foreground`}
      aria-label="Project enquiry form"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="text-center pt-0.5 pb-0.5">
        <h3 className="font-heading text-base sm:text-lg font-bold text-foreground leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-2">
          {subtitle}
        </p>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden>
        <Label htmlFor="hlf-company-website">Company website</Label>
        <Input
          id="hlf-company-website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="hlf-name" className="sr-only">
          Full Name
        </Label>
        <Input
          id="hlf-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full name *"
          maxLength={100}
          required
          autoComplete="name"
          className="h-10 text-foreground"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="hlf-phone" className="sr-only">
            Phone (international)
          </Label>
          <Input
            id="hlf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1 / +44 phone *"
            maxLength={30}
            required
            autoComplete="tel"
            className="h-10 text-foreground"
          />
        </div>
        <div>
          <Label htmlFor="hlf-email" className="sr-only">
            Email
          </Label>
          <Input
            id="hlf-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Work email *"
            maxLength={255}
            required
            autoComplete="email"
            className="h-10 text-foreground"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="hlf-service" id="hlf-service-label" className="sr-only">
          Service Needed
        </Label>
        <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
          <SelectTrigger
            id="hlf-service"
            aria-labelledby="hlf-service-label"
            className="h-10 text-foreground"
          >
            <SelectValue placeholder="Service needed *" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="hlf-req" className="sr-only">
          Your Requirement
        </Label>
        <Textarea
          id="hlf-req"
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          placeholder="Brief project requirement *"
          rows={2}
          maxLength={2000}
          required
          className="min-h-[2.75rem] max-h-24 resize-none py-2 text-foreground"
        />
      </div>

      <Button
        type="submit"
        size="default"
        className="w-full min-h-10 h-10 text-sm font-semibold"
        disabled={submitting}
      >
        <Send className="w-3.5 h-3.5 mr-1.5" />
        {submitting ? "Sending…" : "Submit enquiry"}
      </Button>

      {bookingUrl ? (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[11px] text-primary font-medium hover:underline"
        >
          <Calendar className="w-3 h-3" /> Or book a call
        </a>
      ) : null}

      <p className="text-[10px] text-muted-foreground text-center flex items-center justify-center gap-1 leading-none pb-0.5">
        <Shield className="w-3 h-3 shrink-0" />
        Goes to contact@golaxindia.com · we never sell your data
      </p>
    </motion.form>
  );
}
