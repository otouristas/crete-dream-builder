import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { SiteFaq } from "@/components/site/site-faq";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_FAQ } from "@/lib/faq-data";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { EMAIL, PHONE_1_DISPLAY, WHATSAPP_1_URL } from "@/lib/site-constants";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ — Booking, rates & Avdou",
  description:
    "Answers: nightly rates from €60, 6- and 7-guest houses, 31 minutes from Heraklion Airport, WhatsApp booking, parking, Wi-Fi, and EOT registration for Kagiampakis Concept Residences.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd data={buildFaqJsonLd()} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} max-w-3xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          Answered clearly
        </p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Direct answers about the two Avdou stone residences — rates, capacity, airport transfer
          time, and how to book with host Xrisa. {SITE_FAQ.length} questions below.
        </p>
        <div className="mt-10 rounded-sm border border-border bg-card px-5 sm:px-8">
          <SiteFaq />
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Still deciding? Message{" "}
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            WhatsApp {PHONE_1_DISPLAY}
          </a>{" "}
          or email {EMAIL}. See also{" "}
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            Contact
          </Link>{" "}
          and the{" "}
          <Link href="/#calculator" className="text-primary underline-offset-4 hover:underline">
            rate calculator
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
