import { headers } from "next/headers";
import { getAllResidences, type ResidenceDetails } from "@/lib/residences-data";
import { originFromHostHeader } from "@/lib/site-url";
import { buildRobotsTxt as buildParityRobotsTxt } from "@/lib/seo-parity/robots-parity";

/**
 * Content dates (git history of each page's source), not the build clock.
 * 2026-10-21 is this snippet/schema/linking pass. Privacy was last edited 2026-09-08.
 */
const PAGE_LASTMOD = {
  "/": "2026-10-21",
  "/residences": "2026-10-21",
  "/residences/concept-1": "2026-10-21",
  "/residences/concept-2": "2026-10-21",
  "/contact": "2026-10-21",
  "/reviews": "2026-10-21",
  "/what-to-see": "2026-10-21",
  "/faq": "2026-10-21",
  "/privacy": "2026-09-08",
  "/avdou-village": "2026-10-21",
  "/lasithi-plateau": "2026-10-21",
  "/day-trips": "2026-10-21",
  "/getting-here": "2026-10-21",
  "/groups": "2026-10-21",
} as const;

interface SitemapImage {
  readonly src: string;
  readonly title: string;
}

interface SitemapAlternate {
  readonly hreflang: string;
  readonly href: string;
}

interface SitemapPage {
  readonly path: keyof typeof PAGE_LASTMOD;
  readonly priority: string;
  readonly changeFrequency: "weekly" | "monthly";
  readonly images: readonly SitemapImage[];
  /** Filled when a translation exists. The xhtml namespace is declared either way. */
  readonly alternates: readonly SitemapAlternate[];
}

const HOME_IMAGES: readonly SitemapImage[] = [
  {
    src: "/property/exterior-courtyard.jpg",
    title: "Stone courtyard at Kagiampakis Concept Residences in Avdou, Crete",
  },
  {
    src: "/property/entrance-evening.jpg",
    title: "Stone entrance at Kagiampakis Concept Residences at dusk",
  },
  {
    src: "/property/stone-living.jpg",
    title: "Authentic stone interior architecture",
  },
];

function residenceImages(residence: ResidenceDetails): SitemapImage[] {
  const fromPhotos = residence.photos.map((photo) => ({ src: photo.src, title: photo.alt }));
  const known = getAllResidences()
    .flatMap((item) => item.photos)
    .find((photo) => photo.src === residence.heroImage);
  const images: SitemapImage[] = [
    { src: residence.heroImage, title: known?.alt ?? residence.title },
    ...fromPhotos,
  ];
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.src)) {
      return false;
    }
    seen.add(image.src);
    return true;
  });
}

function pages(): readonly SitemapPage[] {
  const residences = getAllResidences();
  const residenceById = Object.fromEntries(
    residences.map((residence) => [residence.id, residence]),
  );
  const concept1 = residenceById["concept-1"];
  const concept2 = residenceById["concept-2"];
  if (!concept1 || !concept2) {
    return [];
  }

  return [
    {
      path: "/",
      priority: "1.0",
      changeFrequency: "weekly",
      images: HOME_IMAGES,
      alternates: [],
    },
    {
      path: "/residences",
      priority: "0.9",
      changeFrequency: "weekly",
      images: residences.map((residence) => ({
        src: residence.heroImage,
        title:
          getAllResidences()
            .flatMap((item) => item.photos)
            .find((photo) => photo.src === residence.heroImage)?.alt ?? residence.title,
      })),
      alternates: [],
    },
    {
      path: "/residences/concept-1",
      priority: "0.9",
      changeFrequency: "weekly",
      images: residenceImages(concept1),
      alternates: [],
    },
    {
      path: "/residences/concept-2",
      priority: "0.9",
      changeFrequency: "weekly",
      images: residenceImages(concept2),
      alternates: [],
    },
    {
      path: "/contact",
      priority: "0.8",
      changeFrequency: "monthly",
      images: [],
      alternates: [],
    },
    {
      path: "/reviews",
      priority: "0.7",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/bedroom-view.jpg",
          title: "Bedroom with mountain views at Kagiampakis Concept Residences",
        },
      ],
      alternates: [],
    },
    {
      path: "/what-to-see",
      priority: "0.7",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/entrance-evening.jpg",
          title: "Stone entrance and flowers in Avdou at dusk",
        },
        {
          src: "/property/exterior-courtyard.jpg",
          title: "Courtyard at Kagiampakis Residences",
        },
      ],
      alternates: [],
    },
    {
      path: "/faq",
      priority: "0.6",
      changeFrequency: "monthly",
      images: [],
      alternates: [],
    },
    {
      path: "/privacy",
      priority: "0.3",
      changeFrequency: "monthly",
      images: [],
      alternates: [],
    },
    {
      path: "/avdou-village",
      priority: "0.8",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/entrance-evening.jpg",
          title: "Stone entrance and flowers in Avdou at dusk",
        },
      ],
      alternates: [],
    },
    {
      path: "/lasithi-plateau",
      priority: "0.8",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/bedroom-view.jpg",
          title: "Bedroom with mountain views at Kagiampakis Concept Residences",
        },
      ],
      alternates: [],
    },
    {
      path: "/day-trips",
      priority: "0.7",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/exterior-courtyard.jpg",
          title: "Courtyard at Kagiampakis Residences",
        },
      ],
      alternates: [],
    },
    {
      path: "/getting-here",
      priority: "0.7",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/exterior-courtyard.jpg",
          title: "Stone courtyard at Kagiampakis Concept Residences in Avdou, Crete",
        },
      ],
      alternates: [],
    },
    {
      path: "/groups",
      priority: "0.8",
      changeFrequency: "monthly",
      images: [
        {
          src: "/property/stone-living.jpg",
          title: "Authentic stone interior architecture",
        },
      ],
      alternates: [],
    },
  ];
}

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

function imageLoc(origin: string, src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const base = origin.replace(/\/+$/, "");
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
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
 * `xhtml` is declared so hreflang alternates can be added without a format change.
 */
export function buildSitemapXml(origin: string): string {
  const urls = pages()
    .map((entry) => {
      const images = entry.images
        .map(
          (image) =>
            `    <image:image>\n      <image:loc>${escapeXml(imageLoc(origin, image.src))}</image:loc>\n      <image:title>${escapeXml(image.title)}</image:title>\n    </image:image>`,
        )
        .join("\n");
      const alternates = entry.alternates
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
        )
        .join("\n");
      const extras = [images, alternates].filter((block) => block.length > 0).join("\n");
      return `  <url>\n    <loc>${escapeXml(locFor(origin, entry.path))}</loc>\n    <lastmod>${PAGE_LASTMOD[entry.path]}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>${extras ? `\n${extras}` : ""}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
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
