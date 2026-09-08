import { SITE_URL } from "@/lib/site-constants";

/**
 * Canonical site origin for metadata, sitemap, and Open Graph URLs.
 * Production always resolves to the public domain unless an explicit
 * `NEXT_PUBLIC_SITE_URL` is set. Vercel preview deployments keep their unique host.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const normalized = explicit.endsWith("/") ? explicit.slice(0, -1) : explicit;
    return new URL(normalized);
  }

  const vercelEnv = process.env.VERCEL_ENV?.trim();
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercelEnv === "preview" && vercel) {
    const host = vercel.startsWith("http") ? vercel : `https://${vercel}`;
    return new URL(host.endsWith("/") ? host.slice(0, -1) : host);
  }

  return new URL(SITE_URL);
}

export function getAbsoluteUrl(pathname: string): string {
  const base = getSiteUrl().origin;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return path === "/" ? `${base}/` : `${base}${path}`;
}
