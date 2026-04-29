import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { getPropertyReviews } from "@/lib/property-data";
import { GOOGLE_BUSINESS_URL, MAILTO, TRIPADVISOR_URL, WHATSAPP_URL } from "@/lib/site-constants";

function StarRow({ rating }: { readonly rating: string }) {
  const n = Math.min(5, Math.max(0, Number.parseInt(rating, 10) || 0));
  return (
    <div className="flex items-center gap-1.5" aria-label={`${n} out of 5 stars`}>
      <span className="text-primary" aria-hidden>
        {"★".repeat(n)}
      </span>
      <span className="sr-only">{n} stars</span>
    </div>
  );
}

export function ReviewsLanding() {
  const reviews = getPropertyReviews();
  const count = reviews.length;
  const allFive = reviews.every((r) => Number.parseInt(r.Rating, 10) >= 5);
  return (
    <main className="bg-cream text-foreground">
      <section
        className={`relative overflow-hidden border-b border-cream/10 bg-stone-deep text-cream ${SITE_HEADER_PT_CLASS}`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <Image
            src="/property/bedroom-view.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-deep via-stone-deep/95 to-stone-deep/88" />
        <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-display text-primary">Guest voices</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.98] text-balance text-cream sm:text-5xl lg:text-6xl">
            What people remember <em className="text-primary not-italic">after they leave.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Every note below is from a real stay — same house, same family welcome. Prefer your own
            thread? Message us on WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-end gap-8 border-t border-cream/15 pt-10">
            <div>
              <p className="font-display text-5xl text-primary sm:text-6xl">5.0</p>
              <p className="mt-1 text-xs uppercase tracking-display text-cream/55">
                Average rating
              </p>
            </div>
            <div className="h-12 w-px bg-cream/20" aria-hidden />
            <div>
              <p className="font-display text-5xl text-cream sm:text-6xl">{count}</p>
              <p className="mt-1 text-xs uppercase tracking-display text-cream/55">Reviews shown</p>
            </div>
            <div className="h-12 w-px bg-cream/20 max-sm:hidden" aria-hidden />
            <p className="max-w-xs text-sm text-cream/65 max-sm:w-full sm:ml-4">
              {allFive
                ? "Shown reviews are five-star experiences guests chose to publish on the original platform."
                : "Ratings reflect guest feedback from our listing history."}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-cream/25 bg-cream/5 px-5 py-2.5 text-sm text-cream transition-colors hover:border-primary hover:bg-cream/10"
            >
              Google reviews →
            </a>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-cream/25 bg-cream/5 px-5 py-2.5 text-sm text-cream transition-colors hover:border-primary hover:bg-cream/10"
            >
              Tripadvisor →
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-warm transition-colors hover:bg-primary/90"
            >
              Ask a question on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <section className="relative py-16 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(90vw,48rem)] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {reviews.map((review, index) => {
              const isFeatured = index === 0;
              return (
                <li key={review.Position} className={isFeatured ? "md:col-span-2" : ""}>
                  <article
                    className={`relative h-full overflow-hidden rounded-sm border bg-card shadow-soft transition-shadow hover:shadow-warm ${
                      isFeatured
                        ? "border-primary/35 bg-gradient-to-br from-card via-card to-primary/[0.07] p-8 md:p-10 lg:p-12"
                        : "border-border/80 p-7 lg:p-8"
                    }`}
                  >
                    <Quote
                      className={`absolute text-primary/15 ${isFeatured ? "right-6 top-6 h-16 w-16 md:h-20 md:w-20" : "right-5 top-5 h-12 w-12"}`}
                      aria-hidden
                      strokeWidth={1}
                    />
                    <div className="relative flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-xl text-stone-deep md:text-2xl">
                          {review["Reviewer Name"]}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {review["Reviewer Details"]}
                        </p>
                      </div>
                      <StarRow rating={review.Rating} />
                    </div>
                    <p
                      className={`relative mt-5 whitespace-pre-line leading-relaxed text-foreground/85 ${isFeatured ? "max-w-4xl text-base md:text-lg" : "text-sm md:text-base"}`}
                    >
                      {review["Review Text"]}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="border-t border-border/60 bg-gradient-warm py-14 text-primary-foreground lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-display opacity-90">Your turn</p>
          <h2 className="font-display text-3xl leading-tight lg:text-4xl">
            Book direct — we answer personally.
          </h2>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cream px-7 py-3 text-sm font-semibold text-stone-deep shadow-soft transition-transform hover:scale-[1.02]"
            >
              WhatsApp
            </a>
            <a
              href={MAILTO}
              className="inline-flex rounded-full border-2 border-cream/75 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Email
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-cream/40 px-7 py-3 text-sm text-cream/95 hover:bg-cream/10"
            >
              Contact &amp; map
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
