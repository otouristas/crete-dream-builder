import Link from "next/link";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { JsonLd } from "@/components/site/json-ld";
import { ResidenceCard } from "@/components/site/residence-card";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { getAllResidences } from "@/lib/residences-data";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function ResidencesPageView({ locale = "en" }: { readonly locale?: Locale }) {
  const residences = getAllResidences();

  return (
    <div className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          {
            name: pick(locale, "Residences", "Κατοικίες"),
            path: localizedHref(locale, "/residences"),
          },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} pb-8 pt-8 sm:pt-12`}>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-display text-primary">
            {pick(locale, "Avdou · Heraklion · Crete", "Αβδού · Ηράκλειο · Κρήτη")}
          </span>
          <h1 className="mt-3 font-display text-4xl text-stone-deep sm:text-6xl">
            Kagiampakis Concept Residences
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            <span className="font-semibold text-stone-deep">
              {pick(locale, "In short. ", "Με λίγα λόγια. ")}
            </span>
            {pick(
              locale,
              "Two restored stone houses in Avdou. Residence I sleeps up to 6 and Residence II up to 7. They are two residences in Avdou, so a group of up to 13 reserves both. Check-in is after 15:00.",
              "Δύο ανακαινισμένα πέτρινα σπίτια στην Αβδού. Η Κατοικία I φιλοξενεί έως 6 άτομα και η Κατοικία II έως 7. Είναι δύο κατοικίες στην Αβδού, οπότε μια παρέα έως 13 ατόμων κλείνει και τις δύο. Το check-in είναι μετά τις 15:00.",
            )}
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            <Link
              href={localizedHref(locale, "/groups")}
              className="text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Groups and families", "Ομάδες και οικογένειες")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/getting-here")}
              className="text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Getting here", "Πώς θα έρθετε")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/faq")}
              className="text-primary underline-offset-4 hover:underline"
            >
              FAQ
            </Link>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} locale={locale} />
          ))}
        </div>

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-stone-deep sm:text-4xl">
              {pick(
                locale,
                "Calculate rates & book direct",
                "Υπολογίστε την τιμή και κλείστε απευθείας",
              )}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pick(
                locale,
                "Select dates and guest count for a live total, then send the quote to Xrisa.",
                "Διαλέξτε ημερομηνίες και άτομα για το σύνολο και στείλτε την προσφορά στη Χρύσα.",
              )}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <AvailabilityCalculator locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
