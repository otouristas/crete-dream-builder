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
import { SITE_CONTAINER_CLASS, SITE_FAB_CLEAR_CLASS } from "@/lib/layout-constants";
import { getAllResidences, getResidenceById } from "@/lib/residences-data";
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
}

export function generateStaticParams() {
  return getAllResidences().map((residence) => ({ id: residence.id }));
}

export async function generateMetadata({ params }: ResidencePageProps) {
  const { id } = await params;
  const residence = getResidenceById(id);
  if (!residence) {
    return buildPageMetadata({
      title: "Residence not found",
      description: "This residence is not listed.",
      path: "/residences",
    });
  }

  return buildPageMetadata({
    title: `${residence.title} in Avdou`,
    description: `${residence.subtitle}. Up to ${residence.maxGuests} guests, ${residence.bedrooms} ${residence.bedrooms === 1 ? "bedroom" : "bedrooms"}, ${residence.bathrooms} ${residence.bathrooms === 1 ? "bathroom" : "bathrooms"}. From €${residence.startingPriceSunThu}/night. Book direct with host Xrisa.`,
    path: `/residences/${id}`,
    ogImage: {
      url: residence.heroImage,
      width: 1200,
      height: 800,
      alt: residence.title,
    },
  });
}

export default async function ResidenceDetailPage({ params }: ResidencePageProps) {
  const { id } = await params;
  const residence = getResidenceById(id);

  if (!residence) {
    notFound();
  }

  const isConcept1 = residence.id === "concept-1";

  return (
    <div className={`bg-cream text-foreground ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Residences", path: "/residences" },
          { name: residence.title, path: `/residences/${residence.id}` },
        ])}
      />
      <JsonLd data={buildVacationRentalJsonLd(residence)} />

      <SitePhotoHero
        src={residence.heroImage}
        alt={residence.title}
        padHeader={false}
        className="h-[min(70vh,720px)] min-h-[440px]"
        contentClassName="h-[min(70vh,720px)] min-h-[440px] justify-end pb-10 lg:pb-12"
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
          className="mt-6 border-t border-cream/20 pt-4 text-sm text-cream/85"
        />
      </SitePhotoHero>

      <section className="py-14 sm:py-20 lg:py-24">
        <div className={SITE_CONTAINER_CLASS}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-14 lg:col-span-8 lg:space-y-16">
              <div>
                <h2 className="mb-4 font-display text-3xl text-stone-deep">
                  About {residence.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-foreground/85">
                  {residence.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">Layout &amp; spaces</h3>
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
                  Sleeping arrangements
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
                <h3 className="mb-6 font-display text-2xl text-stone-deep">Amenities</h3>
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
                <h3 className="mb-4 font-display text-2xl text-stone-deep">Official rates</h3>
                <div className="overflow-hidden rounded-sm border border-border bg-card shadow-xs">
                  <div className="overflow-x-auto">
                    {isConcept1 ? (
                      <table className="w-full text-left text-sm">
                        <thead className="bg-stone-deep text-xs uppercase tracking-wider text-cream">
                          <tr>
                            <th className="px-4 py-3">Guests</th>
                            <th className="px-4 py-3">Sunday – Thursday</th>
                            <th className="px-4 py-3">Friday – Saturday</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-foreground/85">
                          <tr>
                            <td className="px-4 py-3 font-medium">2 guests</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">€60 / night</td>
                            <td className="px-4 py-3 font-semibold text-primary">€70 / night</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">3 guests</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">€75 / night</td>
                            <td className="px-4 py-3 font-semibold text-primary">€80 / night</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">4 guests</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">€90 / night</td>
                            <td className="px-4 py-3 font-semibold text-primary">€95 / night</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">5 guests</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">
                              €105 / night
                            </td>
                            <td className="px-4 py-3 font-semibold text-primary">€110 / night</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">6 guests</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">
                              €120 / night
                            </td>
                            <td className="px-4 py-3 font-semibold text-primary">€130 / night</td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-left text-sm">
                        <thead className="bg-stone-deep text-xs uppercase tracking-wider text-cream">
                          <tr>
                            <th className="px-4 py-3">Capacity</th>
                            <th className="px-4 py-3">Sunday – Thursday</th>
                            <th className="px-4 py-3">Friday – Saturday</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-foreground/85">
                          <tr>
                            <td className="px-4 py-3 font-medium">1 to 7 guests (flat rate)</td>
                            <td className="px-4 py-3 font-semibold text-stone-deep">
                              €170 / night
                            </td>
                            <td className="px-4 py-3 font-semibold text-primary">€180 / night</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                  <div className="border-t border-border bg-secondary/40 p-4 text-xs text-muted-foreground">
                    Minimum stay: <strong>{residence.minStayNights} nights</strong>.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-2xl text-stone-deep">Photo gallery</h3>
                <GalleryWithLightbox images={residence.photos} />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-[5.5rem] space-y-5">
                <AvailabilityCalculator
                  initialResidenceId={residence.id}
                  className="!p-5 sm:!p-6"
                />

                <div className="rounded-sm border border-border bg-stone-deep p-5 text-cream">
                  <h4 className="mb-1.5 font-display text-lg text-cream">Direct host booking</h4>
                  <p className="mb-4 text-xs leading-relaxed text-cream/75">
                    Send dates to Xrisa for confirmation without platform booking fees.
                  </p>

                  <div className="space-y-2">
                    <ContactChannelRow
                      href={WHATSAPP_1_URL}
                      variant="whatsapp"
                      label="WhatsApp primary"
                      detail={PHONE_1_DISPLAY}
                    />
                    <ContactChannelRow
                      href={WHATSAPP_2_URL}
                      variant="whatsapp-alt"
                      label="WhatsApp secondary"
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
                      label="Email host"
                      detail={EMAIL}
                      external={false}
                    />
                  </div>
                </div>

                <div className="rounded-sm border border-border bg-card p-5 text-center">
                  <p className="mb-2 text-xs text-muted-foreground">Need a different size?</p>
                  <Link
                    href={isConcept1 ? "/residences/concept-2" : "/residences/concept-1"}
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {isConcept1 ? "View Residence II (7 guests)" : "View Residence I (6 guests)"}
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
