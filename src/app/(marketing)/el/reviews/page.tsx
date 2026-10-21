import type { Metadata } from "next";
import { ReviewsPageView } from "@/components/site/reviews-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Κριτικές επισκεπτών",
  description:
    "Κριτικές για τις δύο κατοικίες στην Αβδού. Στο Airbnb η Κατοικία I έχει 5,0 από 26 κριτικές. Η Κατοικία II δεν έχει ακόμη κριτικές στο Airbnb.",
  path: "/el/reviews",
  locale: "el",
});

export default function ElReviewsPage() {
  return <ReviewsPageView locale="el" />;
}
