import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Thank You for Your Enquiry",
  description:
    "Your enquiry was received by Golax India. We will reply to your email on business days. Meanwhile explore services or book a call if configured.",
  canonicalUrl: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  const booking = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <CheckCircle2 className="h-14 w-14 text-accent mx-auto mb-4" />
          <h1 className="heading-display text-3xl md:text-4xl text-foreground mb-3">
            Thank you — enquiry received
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team will review your brief and reply to the email you provided. For urgent
            matters, WhatsApp or call{" "}
            <a className="text-primary underline" href="tel:+919128666005">
              +91 9128666005
            </a>{" "}
            or email{" "}
            <a className="text-primary underline" href="mailto:contact@golaxindia.com">
              contact@golaxindia.com
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/services">Browse services</Link>
            </Button>
            {booking ? (
              <Button asChild variant="outline">
                <a href={booking} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link href="/contact">Contact page</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
