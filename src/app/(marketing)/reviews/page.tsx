import type { Metadata } from "next";
import { ReviewsPageView } from "@/components/site/reviews-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Guest reviews",
  description:
    "5.0-star guest reviews for Kagiampakis Concept Residences in Avdou, Crete — cleanliness, stone-house charm, and family hospitality. Book direct via WhatsApp or Viber.",
  path: "/reviews",
  locale: "en",
});

export default function ReviewsPage() {
  return <ReviewsPageView locale="en" />;
}
