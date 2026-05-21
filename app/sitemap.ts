import type { MetadataRoute } from "next";
import { getLocationPages } from "@/lib/location-pages";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const locationEntries = getLocationPages().map((page) => ({
    url: `${BASE_URL}/locations/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/bulk-pallet-jacks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...locationEntries,
  ];
}
