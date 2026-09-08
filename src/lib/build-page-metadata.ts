import type { Metadata } from "next";
import { getAbsoluteUrl } from "@/lib/site-url";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_NAME,
} from "@/lib/seo-config";

interface OgImageInput {
  readonly url: string;
  readonly width?: number;
  readonly height?: number;
  readonly alt?: string;
  readonly type?: string;
}

interface BuildPageMetadataInput {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly keywords?: readonly string[];
  readonly ogImage?: OgImageInput;
}

/**
 * Consistent SEO metadata (Open Graph, Twitter, canonical) for marketing pages.
 * Pass a short `title` — the root template appends `| ${SITE_NAME}`.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: BuildPageMetadataInput): Metadata {
  const canonical = getAbsoluteUrl(path);
  const pageTitle = `${title} | ${SITE_NAME}`;
  const image = ogImage
    ? {
        url: ogImage.url,
        width: ogImage.width ?? 1200,
        height: ogImage.height ?? 800,
        alt: ogImage.alt ?? DEFAULT_OG_IMAGE.alt,
        type: ogImage.type,
      }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: [...(keywords ?? DEFAULT_KEYWORDS)],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url: canonical,
      title: pageTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildHomeMetadata(): Metadata {
  const canonical = getAbsoluteUrl("/");
  return {
    title: {
      default: HOME_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: HOME_DESCRIPTION,
    keywords: [...DEFAULT_KEYWORDS],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url: canonical,
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
