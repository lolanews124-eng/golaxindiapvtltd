import Careers from "@/views/Careers";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata, BASE_URL } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";
import { ENTITY } from "@/lib/seo/entity";

export const metadata = buildMetadata({
  title: "Careers – Join Golax India’s Offshore Engineering Team",
  description:
    "Open roles in web, mobile, software and digital marketing at Golax India. Work from Patna on products for USA, UK, UAE and global clients.",
  keywords:
    "Golax India careers, software developer jobs Patna, Flutter jobs India, offshore engineering careers, React developer jobs Bihar",
  canonicalUrl: "/careers",
});

export default function Page() {
  const jobs = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/careers#jobs`,
    name: "Open roles at Golax India",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "JobPosting",
          title: "Full Stack Developer",
          hiringOrganization: { "@id": `${ENTITY.url}/#organization` },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
          },
          employmentType: "FULL_TIME",
          description:
            "Build web and SaaS products for international clients using React, Next.js and Node.js.",
        },
      },
    ],
  };

  return (
    <>
      <OrganizationSchema />
      <JsonLd data={jobs} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <Careers />
    </>
  );
}
