import { buildRobotsTxt, getCrawlerOrigin, ROBOTS_HEADERS } from "@/lib/crawler-documents";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const origin = await getCrawlerOrigin();
  return new Response(buildRobotsTxt(origin), {
    status: 200,
    headers: ROBOTS_HEADERS,
  });
}
