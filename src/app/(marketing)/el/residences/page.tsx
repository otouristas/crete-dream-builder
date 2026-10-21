import type { Metadata } from "next";
import { ResidencesPageView } from "@/components/site/residences-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Οι κατοικίες",
  description:
    "Δύο ανακαινισμένα πέτρινα σπίτια στην Αβδού: Κατοικία I έως 6 άτομα και Κατοικία II έως 7. Δύο κατοικίες στην Αβδού για έως 13 άτομα.",
  path: "/el/residences",
  locale: "el",
});

export default function ElResidencesPage() {
  return <ResidencesPageView locale="el" />;
}
