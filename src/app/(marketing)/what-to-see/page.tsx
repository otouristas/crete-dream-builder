import type { Metadata } from "next";
import { WhatToSeeLanding } from "@/components/site/what-to-see-landing";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "What to see — Heraklion & Crete nearby",
  description:
    "Day trips from Avdou: Lasithi Plateau, Hersonissos beaches, Aposelemi Dam, Agia Fotini cave, Heraklion museums, Rosa gorge, paragliding, Aqua Plus.",
  path: "/what-to-see",
});

export default function WhatToSeePage() {
  return <WhatToSeeLanding />;
}
