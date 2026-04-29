/**
 * Canonical site origin for metadata, sitemap, and Open Graph absolute URLs.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.example.com).
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const normalized = explicit.endsWith("/") ? explicit.slice(0, -1) : explicit;
    return new URL(normalized);
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.startsWith("http") ? vercel : `https://${vercel}`;
    return new URL(host.endsWith("/") ? host.slice(0, -1) : host);
  }
  return new URL("http://localhost:3000");
}

export function getAbsoluteUrl(pathname: string): string {
  const base = getSiteUrl().origin;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
