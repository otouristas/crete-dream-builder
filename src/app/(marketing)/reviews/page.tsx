import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { getPropertyReviews } from "@/lib/property-data";
import { GOOGLE_BUSINESS_URL, TRIPADVISOR_URL } from "@/lib/site-constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Guest reviews",
  description:
    "Five-star guest reviews for Kagiampakis Concept Residences, Avdou — stone villa, cleanliness, Cretan hospitality. Book direct via WhatsApp or email.",
  path: "/reviews",
});

function StarRow({ rating }: { readonly rating: string }) {
  const n = Math.min(5, Math.max(0, Number.parseInt(rating, 10) || 0));
  return (
    <span className="text-primary" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="sr-only">{n} stars</span>
    </span>
  );
}

export default function ReviewsPage() {
  const reviews = getPropertyReviews();
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS}`}>
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-display text-primary">Guest voices</p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">Reviews</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Recent feedback from guests who stayed at the residence. You can also read us on{" "}
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Google
          </a>{" "}
          and{" "}
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Tripadvisor
          </a>
          .
        </p>
        <ul className="mt-14 space-y-10">
          {reviews.map((review) => (
            <li
              key={review.Position}
              className="border-b border-border pb-10 last:border-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-display text-xl text-stone-deep">{review["Reviewer Name"]}</p>
                  <p className="text-sm text-muted-foreground">{review["Reviewer Details"]}</p>
                </div>
                <StarRow rating={review.Rating} />
              </div>
              <p className="mt-4 whitespace-pre-line text-foreground/85 leading-relaxed">
                {review["Review Text"]}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            Plan your stay — WhatsApp or email
          </Link>
        </p>
      </div>
    </main>
  );
}
