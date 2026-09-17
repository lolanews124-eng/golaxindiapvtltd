import About from "@/views/About";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildOffshoreKickoffHowToSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "About Golax India – Offshore Partner for USA & Global Clients",
  description:
    "Since 2014, Golax India has delivered offshore web, SaaS and mobile engineering for US, UK, UAE, Canada and Australia — senior talent, USD billing, NDA/IP ready. HQ Patna, India. Contact contact@golaxindia.com.",
  keywords:
    "offshore IT company for USA, hire software developers from India, dedicated development team India, Golax India about, outsource product engineering to India",
  canonicalUrl: "/about",
});

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={buildOffshoreKickoffHowToSchema()} />
      <About />
    </>
  );
}
