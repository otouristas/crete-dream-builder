import { SITE_URL } from "@/lib/site-constants";

function parseAbsoluteUrl(value: string | undefined): URL | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  const withoutTrailingSlash = trimmed.replace(/\/+$/, "");
  const candidates = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(withoutTrailingSlash)
    ? [withoutTrailingSlash]
    : [`https://${withoutTrailingSlash}`];

  for (const candidate of candidates) {
    try {
      return new URL(candidate);
    } catch {
      // Try the next candidate (or fall through to SITE_URL).
    }
  }

  return null;
}

/**
 * Canonical site origin for metadata, sitemap, and Open Graph URLs.
 * Production always resolves to the public domain unless an explicit
 * `NEXT_PUBLIC_SITE_URL` is set. Vercel preview deployments keep their unique host.
 */
export function getSiteUrl(): URL {
  const explicit = parseAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicit) {
    return explicit;
  }

  const vercelEnv = process.env.VERCEL_ENV?.trim();
  if (vercelEnv === "preview") {
    const preview = parseAbsoluteUrl(process.env.VERCEL_URL);
    if (preview) {
      return preview;
    }
  }

  return new URL(SITE_URL);
}

export function getAbsoluteUrl(pathname: string): string {
  const base = getSiteUrl().origin;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return path === "/" ? `${base}/` : `${base}${path}`;
}
