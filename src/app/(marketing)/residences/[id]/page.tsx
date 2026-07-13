import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { GalleryWithLightbox } from "@/components/site/gallery-with-lightbox";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_HERO_HEADER_PAD_CLASS } from "@/lib/layout-constants";
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
import { WhatsAppIcon, ViberIcon, EmailIcon } from "@/components/icons";

interface ResidencePageProps {
  readonly params: Promise<{ readonly id: string }>;
}

export async function generateMetadata({ params }: ResidencePageProps) {
  const { id } = await params;
  const residence = getResidenceById(id);
  if (!residence) {
    return buildPageMetadata({
      title: "Residence Not Found",
      description: "",
      path: "/residences",
    });
  }

  return buildPageMetadata({
    title: `${residence.title} — Avdou, Crete`,
    description: `${residence.subtitle}. Capacity up to ${residence.maxGuests} guests. ${residence.bedrooms} Bedrooms, ${residence.bathrooms} Bathrooms. Book direct.`,
    path: `/residences/${id}`,
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
    <div className="bg-cream text-foreground">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={residence.heroImage}
          alt={residence.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep via-stone-deep/40 to-black/20" />

        <div
          className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 lg:px-10 ${SITE_HERO_HEADER_PAD_CLASS}`}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="rounded-xs bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {residence.badge}
            </span>
            <span className="rounded-xs bg-cream/90 px-3 py-1 text-xs font-medium text-stone-deep backdrop-blur-xs">
              EOT Reg. {residence.registrationNumber}
            </span>
          </div>

          <h1 className="font-display text-4xl text-cream sm:text-6xl">{residence.title}</h1>
          <p className="mt-2 max-w-2xl text-lg text-cream/90">{residence.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-cream/80 border-t border-cream/20 pt-4">
            <div>
              👥 Capacity: <strong>{residence.maxGuests} Guests</strong>
            </div>
            <div>
              🛏️ Bedrooms: <strong>{residence.bedrooms}</strong>
            </div>
            <div>
              🛁 Bathrooms: <strong>{residence.bathrooms}</strong>
            </div>
            <div>
              🌙 Min Stay: <strong>{residence.minStayNights} Nights</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Main Information Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* Description */}
              <div>
                <h2 className="font-display text-3xl text-stone-deep mb-4">
                  About {residence.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-foreground/85">
                  {residence.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Space Highlights */}
              <div>
                <h3 className="font-display text-2xl text-stone-deep mb-6">
                  Space Architecture &amp; Layout
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

              {/* Sleeping Arrangements */}
              <div>
                <h3 className="font-display text-2xl text-stone-deep mb-6">
                  Sleeping Arrangements
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {residence.sleepingArrangements.map((arr) => (
                    <div
                      key={arr.room}
                      className="overflow-hidden rounded-sm border border-border bg-card shadow-xs"
                    >
                      {arr.image && (
                        <div className="relative h-44 w-full">
                          <Image src={arr.image} alt={arr.room} fill className="object-cover" />
                        </div>
                      )}
                      <div className="p-5">
                        <h4 className="font-display text-lg text-stone-deep">{arr.room}</h4>
                        <p className="mt-1 text-sm font-medium text-primary">{arr.beds}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Checklist */}
              <div>
                <h3 className="font-display text-2xl text-stone-deep mb-6">Property Amenities</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {residence.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 rounded-xs border border-border/80 bg-secondary/40 px-3.5 py-2.5 text-xs text-stone-deep font-medium"
                    >
                      <span className="text-primary font-bold">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Rates & Pricing Matrix */}
              <div>
                <h3 className="font-display text-2xl text-stone-deep mb-4">
                  Official Rates &amp; Pricing
                </h3>
                <div className="overflow-hidden rounded-sm border border-border bg-card shadow-xs">
                  {isConcept1 ? (
                    <table className="w-full text-left text-sm">
                      <thead className="bg-stone-deep text-cream text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3">Guest Count</th>
                          <th className="px-4 py-3">Sunday – Thursday</th>
                          <th className="px-4 py-3">Friday – Saturday</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-foreground/85">
                        <tr>
                          <td className="px-4 py-3 font-medium">2 Guests</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€60 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€70 / night</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">3 Guests</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€75 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€80 / night</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">4 Guests</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€90 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€95 / night</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">5 Guests</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€105 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€110 / night</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">6 Guests</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€120 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€130 / night</td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-left text-sm">
                      <thead className="bg-stone-deep text-cream text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3">Guest Capacity</th>
                          <th className="px-4 py-3">Sunday – Thursday</th>
                          <th className="px-4 py-3">Friday – Saturday</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-foreground/85">
                        <tr>
                          <td className="px-4 py-3 font-medium">1 to 7 Guests (Flat Rate)</td>
                          <td className="px-4 py-3 font-semibold text-stone-deep">€170 / night</td>
                          <td className="px-4 py-3 font-semibold text-primary">€180 / night</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  <div className="bg-secondary/40 p-4 text-xs text-muted-foreground border-t border-border">
                    ℹ️ Minimum stay requirement: <strong>{residence.minStayNights} nights</strong>.
                  </div>
                </div>
              </div>

              {/* Photo Gallery with Lightbox */}
              <div>
                <h3 className="font-display text-2xl text-stone-deep mb-6">Photo Gallery</h3>
                <GalleryWithLightbox images={residence.photos} />
              </div>
            </div>

            {/* Right Sticky Booking Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-[5.5rem] space-y-5">
                <AvailabilityCalculator
                  initialResidenceId={residence.id}
                  className="!p-5 sm:!p-6"
                />

                {/* Additional Quick Contact Card */}
                <div className="rounded-sm border border-border bg-stone-deep p-5 text-cream">
                  <h4 className="font-display text-lg text-cream mb-1.5">Direct Host Booking</h4>
                  <p className="text-xs text-cream/75 leading-relaxed mb-4">
                    Send dates directly to host Xrisa for instant confirmation without platform
                    booking fees.
                  </p>

                  <div className="space-y-2 text-xs">
                    <a
                      href={WHATSAPP_1_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 font-semibold text-white transition-all hover:bg-[#20bd5a]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                      <span>WhatsApp Primary</span>
                      <span className="ml-auto text-[11px] opacity-85">{PHONE_1_DISPLAY}</span>
                    </a>

                    <a
                      href={WHATSAPP_2_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#25D366]/90 px-4 py-2.5 font-semibold text-white transition-all hover:bg-[#25D366]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                      <span>WhatsApp Secondary</span>
                      <span className="ml-auto text-[11px] opacity-85">{PHONE_2_DISPLAY}</span>
                    </a>

                    <a
                      href={VIBER_1_URL}
                      className="flex items-center gap-2 rounded-full bg-[#7360F2] px-4 py-2.5 font-semibold text-white transition-all hover:bg-[#6351e3]"
                    >
                      <ViberIcon className="h-3.5 w-3.5 shrink-0" />
                      <span>Viber Message</span>
                      <span className="ml-auto text-[11px] opacity-85">{PHONE_1_DISPLAY}</span>
                    </a>

                    <a
                      href={MAILTO}
                      className="flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-2.5 font-medium text-cream transition-all hover:bg-cream/20"
                    >
                      <EmailIcon className="h-3.5 w-3.5 shrink-0" />
                      <span>Email Host</span>
                      <span className="ml-auto text-[11px] opacity-85">{EMAIL}</span>
                    </a>
                  </div>
                </div>

                {/* Link to other residence */}
                <div className="rounded-sm border border-border bg-card p-5 text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Need a different size residence?
                  </p>
                  <Link
                    href={isConcept1 ? "/residences/concept-2" : "/residences/concept-1"}
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    View{" "}
                    {isConcept1
                      ? "Concept Residence II (7 Guests) →"
                      : "Concept Residence I (6 Guests) →"}
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
