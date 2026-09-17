import Locations from "@/views/Locations";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "International Locations – Offshore Markets We Serve",
  description:
    "Golax India delivers offshore web, software and app development for clients in the USA, UK, Canada, UAE, Australia, Singapore, Germany and more.",
  canonicalUrl: "/locations",
});

export default function Page() {
  return <Locations />;
}
