import type { Metadata } from "next";
import { VillaLanding } from "@/components/site/villa-landing";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The Villa",
  description:
    "Full-screen hero, photo gallery, and curated amenities: three-level stone house in Avdou, Crete. Book direct — WhatsApp or email. EOT 00000846700.",
  path: "/villa",
});

export default function VillaPage() {
  return <VillaLanding />;
}
