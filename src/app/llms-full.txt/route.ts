import { faqAnswerText, SITE_FAQ } from "@/lib/faq-data";
import { getPropertyReviews } from "@/lib/property-data";
import { getAllResidences } from "@/lib/residences-data";
import { getReviewStats } from "@/lib/review-stats";
import {
  EMAIL,
  INSTAGRAM_URL,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  REGISTRATION,
} from "@/lib/site-constants";
import { withLlmsHeader } from "@/lib/seo-parity/llms-header";

export const dynamic = "force-static";

const ORIGIN = "https://kagiampakisresidences.com";

/**
 * Long-form companion to /llms.txt, generated from the same data files the
 * pages render (residences, FAQ, guest reviews), so it cannot drift from them.
 */
function body(): string {
  const stats = getReviewStats();
  const residences = getAllResidences()
    .map((r) =>
      [
        `### ${r.title}`,
        `URL: ${ORIGIN}/residences/${r.id}`,
        r.subtitle,
        "",
        `- Guests: up to ${r.maxGuests} · Bedrooms: ${r.bedrooms} · Bathrooms: ${r.bathrooms}`,
        `- Minimum stay: ${r.minStayNights} nights`,
        `- From €${r.startingPriceSunThu}/night Sunday–Thursday, from €${r.startingPriceFriSat}/night Friday–Saturday`,
        `- Registration number: ${r.registrationNumber}`,
        `- Airbnb listing: ${r.airbnbUrl}`,
        "",
        ...r.description,
        "",
        "Spaces:",
        ...r.spaceHighlights.map((s) => `- ${s.title}: ${s.desc}`),
        "",
        "Sleeping arrangements:",
        ...r.sleepingArrangements.map((s) => `- ${s.room}: ${s.beds}`),
        "",
        "Amenities:",
        ...r.amenities.map((a) => `- ${a}`),
        "",
        "Pricing notes:",
        ...r.pricingNotes.map((n) => `- ${n}`),
      ].join("\n"),
    )
    .join("\n\n");

  const faq = SITE_FAQ.map((f) => `- Q: ${f.question}\n  A: ${faqAnswerText(f.answer)}`).join("\n");

  const reviews = getPropertyReviews()
    .map(
      (r) =>
        `- ${r["Reviewer Name"]} (${r["Reviewer Details"]}), ${r.Rating}/5: ${r["Review Text"].replace(/\s+/g, " ").trim()}`,
    )
    .join("\n");

  return `# Kagiampakis Concept Residences — Complete Knowledge Base

> Two family-hosted restored stone residences in Avdou village, Heraklion region, Crete, Greece. Book direct with host Xrisa via WhatsApp, Viber, or email.

## Contact and booking
- Host: Xrisa (Kagiampakis family)
- Phone / WhatsApp / Viber: ${PHONE_1_DISPLAY} (primary), ${PHONE_2_DISPLAY} (secondary)
- Email: ${EMAIL}
- Instagram: ${INSTAGRAM_URL}
- Registration: ${REGISTRATION}
- Contact page: ${ORIGIN}/contact

## Residences
${residences}

## Frequently asked questions
${faq}

## Guest reviews (${stats.count} reviews, rating ${stats.ratingDisplay}/5)
${reviews}

## Key pages
- Home: ${ORIGIN}/
- Residences: ${ORIGIN}/residences
- What to see nearby: ${ORIGIN}/what-to-see
- Avdou village: ${ORIGIN}/avdou-village
- Lasithi Plateau: ${ORIGIN}/lasithi-plateau
- Day trips: ${ORIGIN}/day-trips
- Getting here: ${ORIGIN}/getting-here
- Groups and families: ${ORIGIN}/groups
- Reviews: ${ORIGIN}/reviews
- FAQ: ${ORIGIN}/faq
- Contact: ${ORIGIN}/contact
`;
}

export function GET() {
  return new Response(withLlmsHeader(body(), { origin: ORIGIN, kind: "full" }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
