import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo/metadata";

const disallowAdmin = ["/admin", "/admin/", "/api/admin"];

/** Explicit allow for major AI / answer-engine crawlers (AIO). */
const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowAdmin,
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
        disallow: disallowAdmin,
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
