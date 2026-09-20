import JsonLd from "./JsonLd";
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
  buildServiceSchema,
} from "@/lib/seo/schema";
import {
  serviceFaqsBySlug,
  serviceMetaForSchema,
} from "@/data/serviceFaqs";
import { getServiceLanding } from "@/data/serviceLandings";

interface Props {
  slug: string;
}

export default function ServiceHubSchemas({ slug }: Props) {
  const landing = getServiceLanding(slug);
  const meta = serviceMetaForSchema[slug] ??
    (landing
      ? {
          name: landing.h1,
          description: landing.metaDescription,
          serviceType: landing.h1,
        }
      : null);
  const faqs = serviceFaqsBySlug[slug] ?? landing?.faqs;
  if (!meta) return null;

  return (
    <>
      <JsonLd data={buildServiceSchema({ ...meta, slug })} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: meta.name, path: `/services/${slug}` },
        ])}
      />
      {faqs?.length ? <JsonLd data={buildFAQPageSchema(faqs)} /> : null}
    </>
  );
}
