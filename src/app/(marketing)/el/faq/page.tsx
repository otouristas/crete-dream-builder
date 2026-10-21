import type { Metadata } from "next";
import { FaqPageView } from "@/components/site/faq-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Ερωτήσεις — κράτηση και Αβδού",
  description:
    "Check-in μετά τις 15:00, check-out πριν τις 12:00, κατοικίες για 6 και 7 άτομα στην Αβδού, κατοικίδια ανά σπίτι και απευθείας κράτηση στη Χρύσα.",
  path: "/el/faq",
  locale: "el",
});

export default function ElFaqPage() {
  return <FaqPageView locale="el" />;
}
