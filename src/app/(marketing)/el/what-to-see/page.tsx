import type { Metadata } from "next";
import { WhatToSeePageView } from "@/components/site/what-to-see-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Τι να δείτε κοντά στην Αβδού",
  description:
    "Εκδρομές από την Αβδού: Οροπέδιο Λασιθίου 14 χλμ., Χερσόνησος 14 χλμ., σπήλαιο Αγίας Φωτεινής 3,6 χλμ., φράγμα Αποσελέμη 3,9 χλμ.",
  path: "/el/what-to-see",
  locale: "el",
});

export default function ElWhatToSeePage() {
  return <WhatToSeePageView locale="el" />;
}
