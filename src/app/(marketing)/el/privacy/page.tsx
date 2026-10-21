import type { Metadata } from "next";
import { PrivacyPageView } from "@/components/site/privacy-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Απόρρητο",
  description:
    "Πώς τα Kagiampakis Concept Residences χειρίζονται τα στοιχεία που στέλνετε για κράτηση στην Αβδού.",
  path: "/el/privacy",
  locale: "el",
});

export default function ElPrivacyPage() {
  return <PrivacyPageView locale="el" />;
}
