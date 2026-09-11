import { buildSitemapXml, getCrawlerOrigin, SITEMAP_HEADERS } from "@/lib/crawler-documents";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const origin = await getCrawlerOrigin();
  return new Response(buildSitemapXml(origin), {
    status: 200,
    headers: SITEMAP_HEADERS,
  });
}
