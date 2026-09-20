"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Heart,
  TrendingUp,
  Users,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: TrendingUp,
    title: "International products",
    description: "Work on real US, UK and global products — not maintenance-only tickets.",
  },
  {
    icon: Users,
    title: "Senior mentors",
    description: "Learn through code review and pairing with engineers who ship production systems.",
  },
  {
    icon: Heart,
    title: "Clear growth path",
    description: "A defined path from developer to tech lead with regular feedback.",
  },
  {
    icon: Coffee,
    title: "Client exposure",
    description: "Direct collaboration with overseas clients and modern tooling (Slack, GitHub, CI/CD).",
  },
];

/** Roles we regularly hire for — not a live job board; apply anytime via email. */
const rolesWeHireFor = [
  {
    id: 1,
    title: "Senior React / Next.js Developer",
    department: "Development",
    type: "Full-time",
    location: "Patna HQ · Remote-friendly",
    experience: "3+ years",
    description:
      "Build React and Next.js products for US and UK clients with TypeScript, testing and performance in mind.",
    requirements: [
      "Strong React.js and Next.js experience",
      "TypeScript and modern CSS (Tailwind or similar)",
      "REST or GraphQL APIs in production",
      "Comfortable joining client stand-ups in US/UK overlap hours",
    ],
  },
  {
    id: 2,
    title: "Node.js / TypeScript Backend Developer",
    department: "Development",
    type: "Full-time",
    location: "Patna HQ · Remote-friendly",
    experience: "3+ years",
    description:
      "Design APIs, data models and integrations for SaaS and web platforms serving international buyers.",
    requirements: [
      "Node.js and TypeScript in production",
      "PostgreSQL or MongoDB experience",
      "Authentication, billing or multi-tenant patterns",
      "Clear written communication for overseas stakeholders",
    ],
  },
  {
    id: 3,
    title: "Flutter Developer",
    department: "Development",
    type: "Full-time",
    location: "Patna HQ · Remote-friendly",
    experience: "2+ years",
    description:
      "Ship cross-platform iOS and Android apps for global product teams, including store submission when in scope.",
    requirements: [
      "Published Flutter apps",
      "Firebase or similar backend integration",
      "Mobile UI/UX fundamentals",
      "Experience with push notifications and offline flows",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Patna HQ · Hybrid",
    experience: "2+ years",
    description:
      "Product UI, design systems and conversion-focused marketing pages with developer-ready Figma handoff.",
    requirements: [
      "Figma proficiency and a strong portfolio",
      "Design systems and component thinking",
      "User research and usability testing basics",
      "Bonus: familiarity with React or Tailwind",
    ],
  },
  {
    id: 5,
    title: "Technical Project Manager",
    department: "Delivery",
    type: "Full-time",
    location: "Patna HQ · US/UK overlap required",
    experience: "4+ years",
    description:
      "Run agile delivery for offshore squads with daily overlap for US East/West or UK hours.",
    requirements: [
      "Agile/scrum with distributed teams",
      "Technical enough to review scope and risks",
      "Excellent written English for client updates",
      "Experience with Jira, Slack and GitHub workflows",
    ],
  },
  {
    id: 6,
    title: "SEO and Content Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Patna HQ · Remote-friendly",
    experience: "2+ years",
    description:
      "Technical SEO, content strategy and measurement for international B2B brands and Golax India growth.",
    requirements: [
      "Technical SEO and on-page best practices",
      "Content planning for English-speaking markets",
      "Google Analytics / Search Console",
      "B2B or SaaS experience preferred",
    ],
  },
];

export default function Careers() {
  const { toast } = useToast();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Career application — ${formData.position || "Open role"}`,
    );
    const body = encodeURIComponent(
      `New career application\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Position: ${formData.position}\n` +
        `Experience: ${formData.experience}\n\n` +
        `Message:\n${formData.message}`,
    );
    window.location.href = `mailto:contact@golaxindia.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app…",
      description: "Send the pre-filled application to contact@golaxindia.com.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      
      {/* Hero Section */}
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
                Join Our Team
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Build Your Career with{" "}
                <span className="text-accent">Golax India</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Golax India builds software for customers across the United States, United Kingdom, Canada,
                Australia and the Gulf. If you want to work on international products with a small, senior team,
                we would like to hear from you.
              </p>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context="Careers — Golax India" variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Why work with us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Roles we hire for
              </h2>
              <p className="text-lg text-muted-foreground">
                We keep this list updated with the skills we staff most often. If you do not see an exact title,
                send an open application — we reply to every message.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {rolesWeHireFor.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-md border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  {expandedJob === job.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                      Apply Now
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">How we hire</h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-6">
            One application, a short technical conversation, a practical task related to real work, and a final
            interview with a director. We reply to every application within one business day.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Apply by email:{" "}
            <a href="mailto:contact@golaxindia.com?subject=Career%20application" className="text-primary hover:underline">
              contact@golaxindia.com
            </a>{" "}
            with your CV and links to your work.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Apply Now
              </h2>
              <p className="text-muted-foreground">
                Don't see a perfect fit? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9128666005"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3 years"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position Applying For *</Label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a position</option>
                  {rolesWeHireFor.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter / Additional Info</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and why you'd be a great fit..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-border bg-card">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/about" className="text-primary hover:underline">
            About Golax India
          </Link>
          <Link href="/services" className="text-primary hover:underline">
            Our Services
          </Link>
          <Link href="/certificates" className="text-primary hover:underline">
            Certificates
          </Link>
          <Link href="/contact" className="text-primary hover:underline">
            Contact
          </Link>
        </div>
      </section>
    </Layout>
  );
}
