import { buildRobotsTxt, ROBOTS_HEADERS } from "@/lib/crawler-documents";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(buildRobotsTxt(), {
    status: 200,
    headers: ROBOTS_HEADERS,
  });
}
