import type { MetadataRoute } from "next";

const SITE_URL = "https://prestige-chauffeur.example.com";
const FLEET_IDS = ["rolls-royce-phantom", "mercedes-s-class", "bentley-flying-spur", "cadillac-escalade", "mercedes-v-class", "bmw-7-series"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
  const fleetRoutes = FLEET_IDS.map((id) => ({
    url: `${SITE_URL}/fleet/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...base, ...fleetRoutes];
}
