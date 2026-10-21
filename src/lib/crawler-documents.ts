import { headers } from "next/headers";
import { greekPath, LOCALE_PATHS } from "@/lib/i18n/locale";
import { getAllResidences } from "@/lib/residences-data";
import { originFromHostHeader } from "@/lib/site-url";
import { buildRobotsTxt as buildParityRobotsTxt } from "@/lib/seo-parity/robots-parity";

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
  { path: "/avdou-village", priority: "0.8", changeFrequency: "monthly" },
  { path: "/lasithi-plateau", priority: "0.8", changeFrequency: "monthly" },
  { path: "/day-trips", priority: "0.7", changeFrequency: "monthly" },
  { path: "/getting-here", priority: "0.7", changeFrequency: "monthly" },
  { path: "/groups", priority: "0.8", changeFrequency: "monthly" },
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
function alternatesXml(origin: string, englishPath: string): string {
  const en = locFor(origin, englishPath);
  const el = locFor(origin, greekPath(englishPath));
  return [
    `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="el" href="${escapeXml(el)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(en)}" />`,
  ].join("\n");
}

export function buildSitemapXml(origin: string, now = new Date()): string {
  const lastmod = now.toISOString().slice(0, 10);
  const englishEntries = [
    ...STATIC_PATHS.map((item) => ({
      path: item.path,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...getAllResidences().map((residence) => ({
      path: `/residences/${residence.id}`,
      changeFrequency: "weekly" as const,
      priority: "0.9",
    })),
  ];

  const urls = englishEntries
    .flatMap((entry) => {
      const elPath = greekPath(entry.path);
      const known = LOCALE_PATHS.some((pair) => pair.en === entry.path);
      const paths = known ? [entry.path, elPath] : [entry.path];
      return paths.map(
        (path) =>
          `  <url>\n    <loc>${escapeXml(locFor(origin, path))}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n${alternatesXml(origin, entry.path)}\n  </url>`,
      );
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function buildRobotsTxt(origin: string): string {
  const base = origin.replace(/\/+$/, "");
  // Same group structure as discovercyclades.gr/robots.txt (see robots-parity.ts).
  return buildParityRobotsTxt({
    name: "Kagiampakis Residences",
    origin: base,
    disallow: ["/api/"],
    sitemaps: [`${base}/sitemap.xml`],
  });
}

export async function getCrawlerOrigin(): Promise<string> {
  const requestHeaders = await headers();
  return originFromHostHeader(requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host"));
}
