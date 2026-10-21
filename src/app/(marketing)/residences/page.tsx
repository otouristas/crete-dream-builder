import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { JsonLd } from "@/components/site/json-ld";
import { ResidenceCard } from "@/components/site/residence-card";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { getAllResidences } from "@/lib/residences-data";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "The residences — Concept I & II",
  description:
    "Compare two restored stone houses in Avdou, Crete: Residence I (up to 6 guests, from €60/night) and Residence II (up to 7 guests, from €170/night). Book both for groups of 13.",
  path: "/residences",
});

export default function ResidencesPage() {
  const residences = getAllResidences();

  return (
    <div className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Residences", path: "/residences" },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} pb-8 pt-8 sm:pt-12`}>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-display text-primary">
            Avdou · Heraklion · Crete
          </span>
          <h1 className="mt-3 font-display text-4xl text-stone-deep sm:text-6xl">
            Kagiampakis Concept Residences
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Two restored stone houses in Avdou village. Choose the house that fits your party, or
            reserve both for a family gathering of up to 13 guests.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            <Link
              href="/groups"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Groups of 13
            </Link>
            {" · "}
            <Link
              href="/what-to-see"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              What to see near Avdou
            </Link>
            {" · "}
            <Link
              href="/faq"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Booking FAQ
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} />
          ))}
        </div>

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-stone-deep sm:text-4xl">
              Calculate rates &amp; book direct
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select dates and guest count for a live total, then send the quote to Xrisa.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <AvailabilityCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
