import type { Metadata } from "next";
import { FaqPageView } from "@/components/site/faq-page-view";
import { buildPageMetadata } from "@/lib/build-page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ — Booking, rates & Avdou",
  description:
    "Check-in after 15:00, checkout before 12:00, houses for 6 and 7 guests in Avdou, Crete, pets by residence, and direct booking with Xrisa.",
  path: "/faq",
  locale: "en",
});

export default function FaqPage() {
  return <FaqPageView locale="en" />;
}
