import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewsLanding } from "@/components/site/reviews-landing";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { buildBreadcrumbJsonLd, buildReviewsJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Guest reviews",
  description:
    "5.0-star guest reviews for Kagiampakis Concept Residences in Avdou, Crete — cleanliness, stone-house charm, and family hospitality. Book direct via WhatsApp or Viber.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <JsonLd data={buildReviewsJsonLd()} />
      <ReviewsLanding />
    </>
  );
}
