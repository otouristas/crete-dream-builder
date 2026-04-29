import type { Metadata } from "next";
import { getAbsoluteUrl } from "@/lib/site-url";
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE } from "@/lib/seo-config";

interface BuildPageMetadataInput {
  readonly title: string;
  readonly description: string;
  readonly path: string;
}

/**
 * Consistent SEO metadata (Open Graph, Twitter, canonical) for marketing pages.
 */
export function buildPageMetadata({ title, description, path }: BuildPageMetadataInput): Metadata {
  const canonical = getAbsoluteUrl(path);
  const pageTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url: canonical,
      title: pageTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export function buildHomeMetadata(): Metadata {
  const canonical = getAbsoluteUrl("/");
  return {
    title: {
      default: `${SITE_NAME} — ${SITE_TAGLINE}`,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "Book direct: WhatsApp or email. Renovated three-level stone house in Avdou, Crete — courtyard, wood stove, mountain views, sleeps 6. EOT 00000846700.",
    keywords: [...DEFAULT_KEYWORDS],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url: canonical,
      title: `${SITE_NAME} — Avdou, Crete`,
      description:
        "Traditional stone villa near Heraklion. Cretan hospitality, full kitchen, private courtyard. Reserve via WhatsApp or email.",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — Avdou, Crete`,
      description:
        "Traditional stone villa near Heraklion. Book direct — WhatsApp or email — for the best rates and personal service.",
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}
