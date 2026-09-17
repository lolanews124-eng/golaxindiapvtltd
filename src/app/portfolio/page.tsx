import Portfolio from "@/views/Portfolio";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Portfolio – IT Projects Across India",
  description: "Golax India portfolio — web, SaaS, mobile apps and digital marketing projects for US, UK, UAE and global clients.",
  canonicalUrl: "/portfolio",
});

export default function Page() {
  return <Portfolio />;
}
