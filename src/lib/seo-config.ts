import { getAbsoluteUrl } from "@/lib/site-url";

export const SITE_NAME = "Kagiampakis Concept Residences";
export const SITE_TAGLINE = "Traditional stone villa in Avdou, Crete — book direct";
export const DEFAULT_OG_IMAGE_PATH = "/property/exterior-courtyard.jpg";
export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1920,
  height: 1280,
  alt: "Courtyard and stone house at Kagiampakis Concept Residences, Avdou, Crete",
  type: "image/jpeg" as const,
};

export const DEFAULT_KEYWORDS: readonly string[] = [
  "Kagiampakis Concept Residences",
  "Avdou villa",
  "Crete stone house",
  "Heraklion holiday rental",
  "Lasithi plateau",
  "book direct Crete",
  "traditional house Avdou",
  "EOT 00000846700",
];

export function getDefaultOgImageAbsoluteUrl(): string {
  return getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
}
