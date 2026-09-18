import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { ENTITY } from "@/lib/seo/entity";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Mobile Apps", href: "/services/mobile-app-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "IT Consulting", href: "/services/it-consulting" },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Certificates", href: "/certificates" },
  { name: "Locations", href: "/locations" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const topLocations = [
  { name: "USA", href: "/locations/global/united-states" },
  { name: "UK", href: "/locations/global/united-kingdom" },
  { name: "UAE", href: "/locations/global/united-arab-emirates" },
  { name: "Canada", href: "/locations/global/canada" },
  { name: "Australia", href: "/locations/global/australia" },
  { name: "Singapore", href: "/locations/global/singapore" },
];

const legalLinks = [
  { name: "Privacy", href: "/legal/privacy-policy" },
  { name: "Terms", href: "/legal/terms-of-service" },
  { name: "Cookies", href: "/legal/cookie-policy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Refunds", href: "/legal/refund-policy" },
  { name: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: ENTITY.sameAs[0] },
  { icon: Linkedin, label: "LinkedIn", href: ENTITY.sameAs[1] },
  { icon: Twitter, label: "Twitter", href: ENTITY.sameAs[2] },
  { icon: Instagram, label: "Instagram", href: ENTITY.sameAs[3] },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading font-semibold text-sm text-primary-foreground mb-3 tracking-tight">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Footer({ ctaVisible = true }: { ctaVisible?: boolean }) {
  return (
    <footer
      className={`relative overflow-hidden text-primary-foreground xl:pb-0 transition-[padding] duration-300 ${
        ctaVisible
          ? "pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]"
          : "pb-4"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,91%,14%)] via-primary to-[hsl(217,91%,20%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-3">
              <Link href="/" aria-label="Golax India Pvt Ltd – Home" className="inline-block bg-white rounded-md px-2.5 py-1.5">
                <Image
                  src={logo}
                  alt="Golax India Pvt Ltd logo"
                  width={180}
                  height={48}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-primary-foreground/65 text-xs leading-relaxed max-w-xs">
                Offshore web, SaaS & mobile partner for USA, UK, UAE & global clients. HQ: Patna, India.
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Golax India on ${label}`}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-white/5 transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.name}>
                    <FooterLink href={s.href}>{s.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <FooterLink href={l.href}>{l.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Markets</FooterHeading>
              <ul className="space-y-2">
                {topLocations.map((loc) => (
                  <li key={loc.name}>
                    <FooterLink href={loc.href}>{loc.name}</FooterLink>
                  </li>
                ))}
                <li>
                  <FooterLink href="/locations">All locations →</FooterLink>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FooterHeading>Contact</FooterHeading>
              <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <address className="not-italic text-xs leading-relaxed">
                    {ENTITY.address.streetAddress}, {ENTITY.address.addressLocality},{" "}
                    {ENTITY.address.addressRegion} {ENTITY.address.postalCode}
                  </address>
                </li>
                <li>
                  <a
                    href={`tel:${ENTITY.phoneE164}`}
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    {ENTITY.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${ENTITY.email}`}
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    {ENTITY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
              © {new Date().getFullYear()} Golax India Pvt Ltd
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-x-3 gap-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
