import About from "@/views/About";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import FAQPageSchema from "@/components/seo/FAQPageSchema";
import JsonLd from "@/components/seo/JsonLd";
import { aboutFaqs } from "@/data/siteFaqs";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Golax India — Offshore Engineering Partner",
  description:
    "Learn how Golax India helps US, UK and global companies build software with senior Indian engineers, clear contracts and reliable delivery.",
  keywords:
    "offshore software development company, hire dedicated developers from India, outsource software development to India, Golax India about",
  canonicalUrl: "/about",
});

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <FAQPageSchema faqs={aboutFaqs} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <About />
    </>
  );
}
