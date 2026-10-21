import type { Metadata } from "next";
import { ResidencesPageView } from "@/components/site/residences-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The residences — Concept I & II",
  description:
    "Compare two restored stone houses in Avdou, Crete: Residence I (up to 6 guests, from €60/night) and Residence II (up to 7 guests, from €170/night). Book both for groups of 13.",
  path: "/residences",
  locale: "en",
});

export default function ResidencesPage() {
  return <ResidencesPageView locale="en" />;
}
