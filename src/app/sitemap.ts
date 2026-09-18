import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo/metadata";
import {
  getServiceInternationalParams,
  getInternationalCountryParams,
  getInternationalCityParams,
  blogSlugs,
  serviceHubSlugs,
} from "@/lib/static-params";

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable stamp — bump when content meaningfully changes (avoids fake daily freshness)
  const contentUpdated = new Date("2026-09-17");
  const entry = (
    path: string,
    priority = 0.7,
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"
  ) => ({
    url: `${BASE_URL}${path}`,
    lastModified: contentUpdated,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "daily"),
    entry("/about", 0.9, "weekly"),
    entry("/certificates", 0.85, "monthly"),
    entry("/services", 0.9, "weekly"),
    entry("/industries", 0.8),
    entry("/portfolio", 0.8),
    entry("/careers", 0.8, "weekly"),
    entry("/blog", 0.9, "weekly"),
    entry("/contact", 0.9, "weekly"),
    entry("/locations", 0.9, "weekly"),
    entry("/sitemap", 0.5),
    ...serviceHubSlugs.map((s) => entry(`/services/${s}`, 0.9, "weekly")),
    ...getInternationalCountryParams().map((p) =>
      entry(`/locations/global/${p.country}`, 0.85, "weekly")
    ),
    ...getServiceInternationalParams().map((p) =>
      entry(`/services/${p.service}/global/${p.country}`, 0.8)
    ),
    ...getInternationalCityParams().map((p) =>
      entry(`/locations/global/${p.country}/${p.city}`, 0.8)
    ),
    ...blogSlugs.map((slug) => entry(`/blog/${slug}`, 0.8, "weekly")),
    ...["privacy-policy", "terms-of-service", "cookie-policy", "disclaimer", "refund-policy"].map(
      (slug) => entry(`/legal/${slug}`, 0.3)
    ),
  ];
}
