import { buildSitemapXml, SITEMAP_HEADERS } from "@/lib/crawler-documents";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(buildSitemapXml(), {
    status: 200,
    headers: SITEMAP_HEADERS,
  });
}
