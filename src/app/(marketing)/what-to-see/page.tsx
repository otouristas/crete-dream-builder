import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { WhatToSeeLanding } from "@/components/site/what-to-see-landing";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "What to see near Avdou",
  description:
    "Day trips from Kagiampakis Concept Residences: Lasithi Plateau (14 km), Hersonissos beaches (14 km), Agia Fotini cave (3.6 km), Heraklion & Knossos (35 km), Aqua Plus (11.2 km).",
  path: "/what-to-see",
});

export default function WhatToSeePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What to see", path: "/what-to-see" },
        ])}
      />
      <WhatToSeeLanding />
    </>
  );
}
