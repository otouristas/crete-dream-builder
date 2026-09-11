import { headers } from "next/headers";
import { getAllResidences } from "@/lib/residences-data";
import { originFromHostHeader } from "@/lib/site-url";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "CCBot",
] as const;

const STATIC_PATHS: readonly {
  path: string;
  priority: string;
  changeFrequency: "weekly" | "monthly";
}[] = [
  { path: "/", priority: "1.0", changeFrequency: "weekly" },
  { path: "/residences", priority: "0.9", changeFrequency: "weekly" },
  { path: "/contact", priority: "0.8", changeFrequency: "monthly" },
  { path: "/reviews", priority: "0.7", changeFrequency: "monthly" },
  { path: "/what-to-see", priority: "0.7", changeFrequency: "monthly" },
  { path: "/faq", priority: "0.6", changeFrequency: "monthly" },
  { path: "/privacy", priority: "0.3", changeFrequency: "monthly" },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function locFor(origin: string, path: string): string {
  const base = origin.replace(/\/+$/, "");
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export const SITEMAP_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=600",
  Vary: "Host",
} as const;

export const ROBOTS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=600",
  Vary: "Host",
} as const;

/**
 * Spec-compliant urlset. Google Search Console rejects Next-generated sitemaps
 * that use the `https://` schema namespace or a non-XML content type.
 */
export function buildSitemapXml(origin: string, now = new Date()): string {
  const lastmod = now.toISOString().slice(0, 10);
  const entries = [
    ...STATIC_PATHS.map((item) => ({
      loc: locFor(origin, item.path),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...getAllResidences().map((residence) => ({
      loc: locFor(origin, `/residences/${residence.id}`),
      changeFrequency: "weekly" as const,
      priority: "0.9",
    })),
  ];

  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildRobotsTxt(origin: string): string {
  const base = origin.replace(/\/+$/, "");
  const host = new URL(base).host;
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    ...AI_CRAWLERS.flatMap((userAgent) => [`User-agent: ${userAgent}`, "Allow: /", ""]),
    `Sitemap: ${base}/sitemap.xml`,
    `Host: ${host}`,
    "",
  ];
  return lines.join("\n");
}

export async function getCrawlerOrigin(): Promise<string> {
  const requestHeaders = await headers();
  return originFromHostHeader(requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host"));
}
