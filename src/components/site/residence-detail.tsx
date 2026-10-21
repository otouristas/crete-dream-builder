import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { ContactChannelRow } from "@/components/site/contact-channels";
import { GalleryWithLightbox } from "@/components/site/gallery-with-lightbox";
import { JsonLd } from "@/components/site/json-ld";
import { ResidenceSpecs } from "@/components/site/residence-specs";
import { SitePhotoHero } from "@/components/site/site-hero";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { localizeResidence } from "@/lib/i18n/residence-copy";
import { SITE_CONTAINER_CLASS, SITE_FAB_CLEAR_CLASS } from "@/lib/layout-constants";
import { getResidenceById } from "@/lib/residences-data";
import {
  EMAIL,
  MAILTO,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import { buildBreadcrumbJsonLd, buildVacationRentalJsonLd } from "@/lib/structured-data";

interface ResidencePageProps {
  readonly params: Promise<{ readonly id: string }>;
  readonly locale?: Locale;
}

export async function residenceMetadata(id: string, locale: Locale = "en") {
  const residence = getResidenceById(id);
  const path = localizedHref(locale, `/residences/${id}`);
  if (!residence) {
    return buildPageMetadata({
      title: pick(locale, "Residence not found", "Η κατοικία δεν βρέθηκε"),
      description: pick(
        locale,
        "This residence is not listed.",
        "Αυτή η κατοικία δεν υπάρχει στη λίστα.",
      ),
      path: localizedHref(locale, "/residences"),
      locale,
    });
  }

  const localized = localizeResidence(residence, locale);
  return buildPageMetadata({
    title: pick(locale, `${residence.title} in Avdou`, `${localized.title} στην Αβδού`),
    description: pick(
      locale,
      `${residence.subtitle}. Up to ${residence.maxGuests} guests, ${residence.bedrooms} bedrooms, ${residence.bathrooms} bathrooms. From €${residence.startingPriceSunThu}/night. Book direct with host Xrisa.`,
      `${localized.subtitle}. Έως ${residence.maxGuests} άτομα, ${residence.bedrooms} υπνοδωμάτια, ${residence.bathrooms} μπάνια. Από ${residence.startingPriceSunThu}€ τη διανυκτέρευση. Απευθείας κράτηση στη Χρύσα.`,
    ),
    locale,
    path,
    ogImage: {
      url: residence.heroImage,
      width: 1200,
      height: 800,
      alt: residence.title,
    },
  });
}

export async function ResidenceDetailView({ params, locale = "en" }: ResidencePageProps) {
  const { id } = await params;
  const source = getResidenceById(id);
  const residence = source ? localizeResidence(source, locale) : null;

  if (!residence) {
    notFound();
  }

  const isConcept1 = residence.id === "concept-1";

  return (
    <div className={`bg-cream text-foreground ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          {
            name: pick(locale, "Residences", "Κατοικίες"),
            path: localizedHref(locale, "/residences"),
          },
          { name: residence.title, path: localizedHref(locale, `/residences/${residence.id}`) },
        ])}
      />
      <JsonLd data={buildVacationRentalJsonLd(residence)} />

      <SitePhotoHero
        src={residence.heroImage}
        alt={residence.title}
        className="min-h-[min(70vh,720px)]"
        contentClassName="min-h-[min(70vh,720px)] pb-10 sm:pb-12 lg:pb-14"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-xs bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {residence.badge}
          </span>
          <span className="rounded-xs bg-cream/90 px-3 py-1 text-xs font-medium text-stone-deep backdrop-blur-xs">
            EOT {residence.registrationNumber}
          </span>
        </div>

        <h1 className="font-display text-4xl leading-[1.12] text-cream sm:text-6xl">
          {residence.title}
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-cream/90">{residence.subtitle}</p>

        <ResidenceSpecs
          guests={residence.maxGuests}
          bedrooms={residence.bedrooms}
          bathrooms={residence.bathrooms}
          minStayNights={residence.minStayNights}
          locale={locale}
          className="mt-6 border-t border-cream/20 pt-4 text-sm text-cream/85"
        />
      </SitePhotoHero>

      <section className="py-14 sm:py-20 lg:py-24">
        <div className={SITE_CONTAINER_CLASS}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-14 lg:col-span-8 lg:space-y-16">
              <div>
                <h2 className="mb-4 font-display text-3xl text-stone-deep">
                  {pick(locale, "About", "Σχετικά με")} {residence.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-foreground/85">
                  {residence.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p>
                    {pick(
                      locale,
                      "In short. This is one of two residences in Avdou. Check-in is after 15:00 and checkout is before 12:00. Xrisa replies in Greek or English.",
                      "Με λίγα λόγια. Είναι μία από τις δύο κατοικίες στην Αβδού. Το check-in είναι μετά τις 15:00 και το check-out πριν από τις 12:00. Η Χρύσα απαντά στα ελληνικά ή στα αγγλικά.",
                    )}{" "}
                    <Link
                      href={localizedHref(locale, "/avdou-village")}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {pick(locale, "Avdou village", "Το χωριό Αβδού")}
                    </Link>
                    {" · "}
                    <Link
                      href={localizedHref(locale, "/getting-here")}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {pick(locale, "Getting here", "Πώς θα έρθετε")}
                    </Link>
                    {" · "}
                    <Link
                      href={localizedHref(locale, "/groups")}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {pick(locale, "Groups", "Ομάδες")}
                    </Link>
                    {" · "}
                    <Link
                      href={localizedHref(locale, "/faq")}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      FAQ
                    </Link>
                    {" · "}
                    <Link
                      href={localizedHref(locale, "/day-trips")}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {pick(locale, "Day trips", "Εκδρομές")}
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">
                  {pick(locale, "Layout & spaces", "Διάταξη και χώροι")}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {residence.spaceHighlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-sm border border-border bg-card p-5 shadow-xs"
                    >
                      <h4 className="font-display text-lg text-primary">{highlight.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">
                  {pick(locale, "Sleeping arrangements", "Διαρρύθμιση ύπνου")}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {residence.sleepingArrangements.map((arr) => (
                    <div
                      key={arr.room}
                      className="overflow-hidden rounded-sm border border-border bg-card shadow-xs"
                    >
                      {arr.image ? (
                        <div className="relative h-44 w-full">
                          <Image
                            src={arr.image}
                            alt={arr.room}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      ) : null}
                      <div className="p-5">
                        <h4 className="font-display text-lg text-stone-deep">{arr.room}</h4>
                        <p className="mt-1 text-sm font-medium text-primary">{arr.beds}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">
                  {pick(locale, "Amenities", "Ανέσεις")}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {residence.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 rounded-xs border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs font-medium text-stone-deep"
                    >
                      <span className="font-bold text-primary">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-display text-2xl text-stone-deep">
                  {pick(locale, "Official rates", "Τιμές")}
                </h3>
                <div className="overflow-hidden rounded-sm border border-border bg-card shadow-xs">
                  <div className="overflow-x-auto">
                    {isConcept1 ? (
                      <table className="w-full text-left text-sm">
                        <thead className="bg-stone-deep text-xs uppercase tracking-wider text-cream">
                          <tr>
                            <th className="px-4 py-3">{pick(locale, "Guests", "Άτομα")}</th>
                            <th className="px-4 py-3">
                              {pick(locale, "Sunday – Thursday", "Κυριακή – Πέμπτη")}
                            </th>
                            <th className="px-4 py-3">
                              {pick(locale, "Friday – Saturday", "Παρασκευή – Σάββατο")}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-foreground/85">
                          {[
                            [2, 60, 70],
                            [3, 75, 80],
                            [4, 90, 95],
                            [5, 105, 110],
                            [6, 120, 130],
                          ].map(([guests, weekday, weekend]) => (
                            <tr key={guests}>
                              <td className="px-4 py-3 font-medium">
                                {pick(locale, `${guests} guests`, `${guests} άτομα`)}
                              </td>
                              <td className="px-4 py-3 font-semibold text-stone-deep">
                                {pick(locale, `€${weekday} / night`, `${weekday}€ / διανυκτέρευση`)}
                              </td>
                              <td className="px-4 py-3 font-semibold text-primary">
                                {pick(locale, `€${weekend} / night`, `${weekend}€ / διανυκτέρευση`)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-left text-sm">
                        <thead className="bg-stone-deep text-xs uppercase tracking-wider text-cream">
                          <tr>
                            <th className="px-4 py-3">
                              {pick(locale, "Capacity", "Χωρητικότητα")}
                            </th>
                            <th className="px-4 py-3">
                              {pick(locale, "Sunday – Thursday", "Κυριακή – Πέμπτη")}
                            </th>
                            <th className="px-4 py-3">
                              {pick(locale, "Friday – Saturday", "Παρασκευή – Σάββατο")}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-foreground/85">
                          <tr>
                            <td className="px-4 py-3 font-medium">
                              {pick(
                                locale,
                                "1 to 7 guests (flat rate)",
                                "1 έως 7 άτομα (ενιαία τιμή)",
                              )}
                            </td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">
                              {pick(locale, "€170 / night", "170€ / διανυκτέρευση")}
                            </td>
                            <td className="px-4 py-3 font-semibold text-primary">
                              {pick(locale, "€180 / night", "180€ / διανυκτέρευση")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                  <div className="border-t border-border bg-secondary/40 p-4 text-xs text-muted-foreground">
                    {pick(locale, "Minimum stay:", "Ελάχιστη διαμονή:")}{" "}
                    <strong>
                      {residence.minStayNights} {pick(locale, "nights", "διανυκτερεύσεις")}
                    </strong>
                    .
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">
                  {pick(locale, "Photo gallery", "Φωτογραφίες")}
                </h3>
                <GalleryWithLightbox images={residence.photos} />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-[5.5rem] space-y-5">
                <AvailabilityCalculator
                  initialResidenceId={residence.id}
                  locale={locale}
                  className="!p-5 sm:!p-6"
                />

                <div className="rounded-sm border border-border bg-stone-deep p-5 text-cream">
                  <h4 className="mb-1.5 font-display text-lg text-cream">
                    {pick(locale, "Direct host booking", "Απευθείας κράτηση")}
                  </h4>
                  <p className="mb-4 text-xs leading-relaxed text-cream/75">
                    {pick(
                      locale,
                      "Send dates to Xrisa for confirmation without platform booking fees.",
                      "Στείλτε τις ημερομηνίες στη Χρύσα για επιβεβαίωση, χωρίς προμήθεια πλατφόρμας.",
                    )}
                  </p>

                  <div className="space-y-2">
                    <ContactChannelRow
                      href={WHATSAPP_1_URL}
                      variant="whatsapp"
                      label={pick(locale, "WhatsApp primary", "WhatsApp (κύριο)")}
                      detail={PHONE_1_DISPLAY}
                    />
                    <ContactChannelRow
                      href={WHATSAPP_2_URL}
                      variant="whatsapp-alt"
                      label={pick(locale, "WhatsApp secondary", "WhatsApp (δεύτερο)")}
                      detail={PHONE_2_DISPLAY}
                    />
                    <ContactChannelRow
                      href={VIBER_1_URL}
                      variant="viber"
                      label="Viber"
                      detail={PHONE_1_DISPLAY}
                      external={false}
                    />
                    <ContactChannelRow
                      href={MAILTO}
                      variant="email"
                      label={pick(locale, "Email host", "Email στη Χρύσα")}
                      detail={EMAIL}
                      external={false}
                    />
                  </div>
                </div>

                <div className="rounded-sm border border-border bg-card p-5 text-center">
                  <p className="mb-2 text-xs text-muted-foreground">
                    {pick(locale, "Need a different size?", "Θέλετε άλλο μέγεθος;")}
                  </p>
                  <Link
                    href={localizedHref(
                      locale,
                      isConcept1 ? "/residences/concept-2" : "/residences/concept-1",
                    )}
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {isConcept1
                      ? pick(
                          locale,
                          "View Residence II (7 guests)",
                          "Δείτε την Κατοικία II (7 άτομα)",
                        )
                      : pick(
                          locale,
                          "View Residence I (6 guests)",
                          "Δείτε την Κατοικία I (6 άτομα)",
                        )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
