import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

const OPEN_CRAWLER_RULES: MetadataRoute.Robots["rules"] = [
  {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
  },
  { userAgent: "Googlebot", allow: "/" },
  { userAgent: "Bingbot", allow: "/" },
  { userAgent: "GPTBot", allow: "/" },
  { userAgent: "ChatGPT-User", allow: "/" },
  { userAgent: "PerplexityBot", allow: "/" },
  { userAgent: "anthropic-ai", allow: "/" },
  { userAgent: "ClaudeBot", allow: "/" },
  { userAgent: "Google-Extended", allow: "/" },
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: OPEN_CRAWLER_RULES,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
