import Contact from "@/views/Contact";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import { contactFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Golax India – Free Quote for USA & Global Clients",
  description:
    "Book a free discovery call for offshore web, SaaS or mobile development. USD quotes within 24 hours. Email contact@golaxindia.com or WhatsApp +91 94700 24607.",
  keywords:
    "hire offshore developers contact, outsource software development quote, Golax India contact USA, free USD development quote",
  canonicalUrl: "/contact",
});

export default function Page() {
  return (
    <>
      <FAQPageSchema faqs={contactFaqs} />
      <Contact />
    </>
  );
}
