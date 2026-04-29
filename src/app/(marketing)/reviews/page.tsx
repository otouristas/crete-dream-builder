import type { Metadata } from "next";
import { ReviewsLanding } from "@/components/site/reviews-landing";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Guest reviews",
  description:
    "Five-star guest reviews for Kagiampakis Concept Residences, Avdou — stone villa, cleanliness, Cretan hospitality. Book direct via WhatsApp or email.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return <ReviewsLanding />;
}
