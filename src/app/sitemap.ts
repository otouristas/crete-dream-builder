import type { MetadataRoute } from "next";
import { getAllResidences } from "@/lib/residences-data";
import { getSiteUrl } from "@/lib/site-url";

const STATIC_PATHS: readonly {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/residences", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-to-see", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  const staticEntries = STATIC_PATHS.map((item) => ({
    url: item.path === "/" ? `${base}/` : `${base}${item.path}`,
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const residenceEntries = getAllResidences().map((residence) => ({
    url: `${base}/residences/${residence.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...residenceEntries];
}
