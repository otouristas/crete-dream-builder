import { Metadata } from "next";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { ResidenceCard } from "@/components/site/residence-card";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { getAllResidences } from "@/lib/residences-data";

export const metadata: Metadata = buildPageMetadata({
  title: "The Residences — Concept I & II | Kagiampakis Concept Residences",
  description:
    "Explore our two traditional stone residences in Avdou, Crete. Kagiampakis Concept Residence I (up to 6 guests) & Residence II (up to 7 guests). Book direct.",
  path: "/residences",
});

export default function ResidencesPage() {
  const residences = getAllResidences();

  return (
    <div className={`bg-cream text-foreground pb-16 sm:pb-24 ${SITE_HEADER_PT_CLASS}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-display text-primary">
            Avdou · Heraklion · Crete
          </span>
          <h1 className="font-display text-4xl text-stone-deep sm:text-6xl mt-2">
            Kagiampakis Concept Residences
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Discover our two restored stone houses in Avdou village. Choose the residence that fits
            your party, or reserve both for large family gatherings.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} />
          ))}
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="font-display text-3xl text-stone-deep sm:text-4xl">
              Calculate Rates &amp; Book Direct
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select check-in/out dates and guest count to see live prices and send an instant
              reservation request.
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
