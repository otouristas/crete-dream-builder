import { getPropertyReviews } from "@/lib/property-data";

export const REVIEW_RATING = 5;
export const REVIEW_RATING_DISPLAY = "5.0";

export function getReviewStats() {
  const reviews = getPropertyReviews();
  return {
    count: reviews.length,
    rating: REVIEW_RATING,
    ratingDisplay: REVIEW_RATING_DISPLAY,
  };
}
