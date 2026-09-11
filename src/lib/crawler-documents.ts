import { SITE_DOMAIN, SITE_URL } from "@/lib/site-constants";
import { getAllResidences } from "@/lib/residences-data";

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

function locFor(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export const SITEMAP_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;

export const ROBOTS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;

/**
 * Spec-compliant urlset. Google Search Console rejects Next-generated sitemaps
 * that use the `https://` schema namespace or a non-XML content type.
 */
export function buildSitemapXml(now = new Date()): string {
  const lastmod = now.toISOString().slice(0, 10);
  const entries = [
    ...STATIC_PATHS.map((item) => ({
      loc: locFor(item.path),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...getAllResidences().map((residence) => ({
      loc: locFor(`/residences/${residence.id}`),
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

export function buildRobotsTxt(): string {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    ...AI_CRAWLERS.flatMap((userAgent) => [
      `User-agent: ${userAgent}`,
      "Allow: /",
      "",
    ]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Host: ${SITE_DOMAIN}`,
    "",
  ];
  return lines.join("\n");
}
