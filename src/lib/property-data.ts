import amenitiesJson from "@/data/amenities.json";
import reviewsJson from "@/data/reviews.json";

export interface PropertyAmenityRow {
  readonly Position: string;
  readonly Amenity: string;
}

export interface PropertyReviewRow {
  readonly Position: string;
  readonly "Reviewer Name": string;
  readonly "Reviewer Details": string;
  readonly Rating: string;
  readonly "Review Text": string;
  readonly "Profile Link": string;
}

export function getPropertyAmenities(): readonly PropertyAmenityRow[] {
  return amenitiesJson as PropertyAmenityRow[];
}

export function getPropertyReviews(): readonly PropertyReviewRow[] {
  return reviewsJson as PropertyReviewRow[];
}
