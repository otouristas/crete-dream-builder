import { getAbsoluteUrl } from "@/lib/site-url";

export const SITE_NAME = "Kagiampakis Concept Residences";
export const SITE_TAGLINE = "Traditional stone residences in Avdou, Crete — book direct";
export const DEFAULT_OG_IMAGE_PATH = "/property/exterior-courtyard.jpg";
export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1920,
  height: 1280,
  alt: "Stone courtyard at Kagiampakis Concept Residences, Avdou, Crete",
  type: "image/jpeg" as const,
};

export const HOME_TITLE = `${SITE_NAME} — Traditional Stone Houses in Avdou, Crete`;
export const HOME_DESCRIPTION =
  "Avdou, Crete · stone houses · sleeps 6, 7 or 13. Residence I from €60/night, Residence II from €170. Book direct.";

export const DEFAULT_KEYWORDS: readonly string[] = [
  "Kagiampakis Concept Residences",
  "Avdou villa",
  "Avdou Crete accommodation",
  "Crete stone house",
  "traditional house Avdou",
  "Heraklion holiday rental",
  "Lasithi plateau stay",
  "Hersonissos villa nearby",
  "book direct Crete",
  "Crete vacation rental WhatsApp",
  "EOT 00000846700",
  "EOT 00001845501",
  "Kagiampakis Residences Avdou",
];

export function getDefaultOgImageAbsoluteUrl(): string {
  return getAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
}
