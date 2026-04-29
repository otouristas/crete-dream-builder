import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const PATHS = ["/", "/villa", "/contact", "/reviews", "/what-to-see"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();
  return PATHS.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? ("monthly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));
}
