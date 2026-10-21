import type { Metadata } from "next";
import { WhatToSeePageView } from "@/components/site/what-to-see-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "What to see near Avdou",
  description:
    "Day trips from Kagiampakis Concept Residences: Lasithi Plateau (14 km), Hersonissos beaches (14 km), Agia Fotini cave (3.6 km), Heraklion & Knossos (35 km), Aqua Plus (11.2 km).",
  path: "/what-to-see",
  locale: "en",
});

export default function WhatToSeePage() {
  return <WhatToSeePageView locale="en" />;
}
