import type { Metadata } from "next";
import { HomeContent } from "@/components/site/home-page";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Πέτρινα σπίτια στην Αβδού",
  description:
    "Δύο πέτρινες κατοικίες στην Αβδού της Κρήτης. Η Κατοικία I για έως 6 άτομα, η Κατοικία II για έως 7. Check-in μετά τις 15:00. Κράτηση στη Χρύσα.",
  path: "/el",
  locale: "el",
});

export default function ElHomePage() {
  return <HomeContent locale="el" />;
}
