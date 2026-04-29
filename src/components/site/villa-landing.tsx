import Image from "next/image";
import Link from "next/link";
import { GalleryWithLightbox } from "@/components/site/gallery-with-lightbox";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { getPropertyAmenities } from "@/lib/property-data";
import { getPropertyPhotos } from "@/lib/property-photos";
import { MAILTO, WHATSAPP_URL } from "@/lib/site-constants";

function assignAmenityGroup(amenity: string): string {
  const n = amenity.toLowerCase();
  if (
    n.includes("kitchen") ||
    n.includes("fridge") ||
    n.includes("cook") ||
    n.includes("oven") ||
    n.includes("coffee") ||
    n.includes("crockery")
  ) {
    return "Kitchen & dining";
  }
  if (
    n.includes("wifi") ||
    n.includes("tv") ||
    n.includes("heating") ||
    n.includes("air conditioning")
  ) {
    return "Climate & media";
  }
  if (
    n.includes("parking") ||
    n.includes("entrance") ||
    n.includes("patio") ||
    n.includes("balcony") ||
    n.includes("garden") ||
    n.includes("luggage") ||
    n.includes("long-term") ||
    n.includes("host greets")
  ) {
    return "Arrival & outdoors";
  }
  if (
    n.includes("smoke") ||
    n.includes("carbon") ||
    n.includes("first aid") ||
    n.includes("alarm")
  ) {
    return "Safety";
  }
  return "Comfort & bedroom";
}

interface AmenityGroup {
  readonly title: string;
  readonly items: readonly string[];
}

function buildAmenityGroups(
  rows: ReturnType<typeof getPropertyAmenities>,
): readonly AmenityGroup[] {
  const map = new Map<string, string[]>();
  for (const row of rows) {
    const g = assignAmenityGroup(row.Amenity);
    const list = map.get(g) ?? [];
    list.push(row.Amenity);
    map.set(g, list);
  }
  const order = [
    "Kitchen & dining",
    "Comfort & bedroom",
    "Climate & media",
    "Arrival & outdoors",
    "Safety",
  ];
  return order
    .filter((title) => map.has(title))
    .map((title) => ({ title, items: map.get(title) ?? [] }));
}

export function VillaLanding() {
  const photos = getPropertyPhotos().map((photo, i) => ({
    ...photo,
    span: i === 0 ? "lg:col-span-2 lg:row-span-2" : undefined,
  }));
  const amenityRows = getPropertyAmenities();
  const groups = buildAmenityGroups(amenityRows);
  return (
    <main className="bg-cream text-foreground">
      <section
        className="relative min-h-[min(92svh,900px)] w-full overflow-hidden"
        aria-labelledby="villa-hero-heading"
      >
        <Image
          src="/property/exterior-courtyard.jpg"
          alt="Stone courtyard and entrance at Kagiampakis Concept Residences, Avdou"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-deep/55 via-stone-deep/35 to-stone-deep/88" />
        <div
          className={`relative z-10 mx-auto flex min-h-[min(92svh,900px)] max-w-7xl flex-col justify-end px-6 pb-16 pt-8 lg:px-10 lg:pb-24 ${SITE_HEADER_PT_CLASS}`}
        >
          <div className="max-w-4xl animate-fade-up">
            <p className="text-xs uppercase tracking-display text-cream/75">Avdou · Crete</p>
            <h1
              id="villa-hero-heading"
              className="mt-4 font-display text-5xl leading-[0.95] text-balance text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              The villa
              <br />
              <em className="font-light text-primary/95">three levels of stone &amp; light.</em>
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cream/88 lg:text-xl">
              A fully renovated residence — kitchen and living on the ground floor, bedrooms above,
              mountain views, courtyard, and every amenity for up to six guests.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-warm transition-all hover:bg-primary/90"
              >
                WhatsApp — enquire
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-full border border-cream/45 px-8 py-4 text-base text-cream transition-all hover:bg-cream/10"
              >
                Email your dates
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-cream/70">
              <a href="#photos" className="underline-offset-4 transition-colors hover:text-primary">
                Gallery →
              </a>
              <a
                href="#amenities"
                className="underline-offset-4 transition-colors hover:text-primary"
              >
                Amenities →
              </a>
              <Link
                href="/contact"
                className="underline-offset-4 transition-colors hover:text-primary"
              >
                Map &amp; contact →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-stone-deep py-16 text-cream lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
          {[
            { k: "3", l: "levels", d: "Ground living & kitchen, two sleeping floors" },
            { k: "6", l: "guests", d: "Two bedrooms · one bathroom · courtyard" },
            { k: "35", l: "km to Heraklion", d: "Airport ~31 min · port ~41 min" },
            { k: "EOT", l: "00000846700", d: "Licensed vacation rental · Avdou" },
          ].map((item) => (
            <div
              key={item.l}
              className="border-l-2 border-primary/80 pl-6 transition-colors hover:border-primary"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl text-primary lg:text-6xl">{item.k}</span>
                <span className="text-xs uppercase tracking-display text-cream/55">{item.l}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 lg:py-28" aria-labelledby="villa-story-heading">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-display text-primary">The residence</p>
              <h2
                id="villa-story-heading"
                className="mt-4 font-display text-4xl leading-tight text-balance text-stone-deep lg:text-5xl"
              >
                Built for slow mornings and long evenings.
              </h2>
            </div>
            <div className="space-y-12 lg:col-span-7">
              <div className="rounded-sm border border-border/80 bg-card/50 p-8 shadow-soft backdrop-blur-sm lg:p-10">
                <h3 className="font-display text-2xl text-primary">About this space</h3>
                <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                  In Avdou — near the Aposelemi dam, 35 km from Heraklion — a traditional stone
                  house, renovated and fully equipped. Your stay connects you with Cretan
                  hospitality and culture.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-sm border border-border bg-secondary/30 p-8">
                  <h3 className="font-display text-xl text-stone-deep">Ground floor</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    Kitchen and living room. Winter warmth from the wood stove; tea, filter coffee,
                    and espresso provided. Sokaki Kagiampidon — your courtyard alley — for quiet
                    evenings (smoking outdoors).
                  </p>
                </div>
                <div className="rounded-sm border border-border bg-secondary/30 p-8">
                  <h3 className="font-display text-xl text-stone-deep">First &amp; second floor</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    Double bed and WC on the first floor, with a private balcony. Top floor: double
                    and single bed with a view toward the cave of Agia Fotini. Smoking allowed on
                    the balcony only.
                  </p>
                </div>
              </div>
              <div className="rounded-sm bg-primary/10 px-8 py-8 lg:px-10 lg:py-10">
                <h3 className="font-display text-xl text-stone-deep">Guest access</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/85">
                  The whole house, the first-floor balcony, and the ground-floor courtyard. Outdoor
                  smoking only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border/60 bg-secondary/35 py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <figure className="overflow-hidden rounded-sm shadow-warm ring-1 ring-border/60">
              <Image
                src="/property/living-fireplace.jpg"
                alt="Living room with stone walls and fireplace"
                width={960}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </figure>
            <div>
              <p className="text-xs uppercase tracking-display text-primary">Around you</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-stone-deep lg:text-5xl">
                Village, mountain, sea — all within reach.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Paragliding, the Rosa gorge, horseback riding, Agia Fotini cave (3.6 km), Aposelemi
                dam (3.9 km), Lasithi plateau (14 km), Hersonissos beaches and Aqua Plus (11.2 km).
              </p>
              <ul className="mt-8 space-y-3 border-t border-border pt-8 text-sm text-foreground/75">
                <li className="flex justify-between gap-4 border-b border-border/60 py-2">
                  <span>Neighbourhood</span>
                  <span className="text-right text-muted-foreground">
                    Stone lanes, flowers, summer festivals &amp; music
                  </span>
                </li>
                <li className="flex justify-between gap-4 py-2">
                  <span>Airport / port</span>
                  <span className="text-right font-display text-lg text-primary">
                    ~31 / ~41 min
                  </span>
                </li>
              </ul>
              <Link
                href="/what-to-see"
                className="mt-8 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Explore what to see →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="photos"
        className="scroll-mt-[4.5rem] py-20 lg:py-28"
        aria-labelledby="villa-photos-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-display text-primary">Gallery</p>
              <h2
                id="villa-photos-heading"
                className="mt-3 font-display text-4xl text-stone-deep lg:text-6xl"
              >
                Walk the rooms <em className="text-primary not-italic">before you arrive.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right lg:text-base">
              Tap any image for a full-screen view. Every photo is served from this site — no
              redirect to booking platforms.
            </p>
          </div>
          <div className="mt-12">
            <GalleryWithLightbox images={photos} />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-warm py-16 text-primary-foreground lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.985_0.012_80_/_0.12),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-display opacity-90">Reserve</p>
          <h2 className="font-display text-4xl leading-tight text-balance lg:text-5xl">
            Ready to hold your dates?
          </h2>
          <p className="max-w-xl text-pretty text-base opacity-95 lg:text-lg">
            Message Xrisa on WhatsApp or send an email — fastest way to confirm availability and ask
            anything about the house or Avdou.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-stone-deep shadow-soft transition-transform hover:scale-[1.02]"
            >
              Open WhatsApp
            </a>
            <a
              href={MAILTO}
              className="inline-flex rounded-full border-2 border-cream/70 px-8 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Email enquiry
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-cream/40 px-8 py-3.5 text-base text-cream/95 underline-offset-4 hover:bg-cream/10"
            >
              Contact page &amp; map
            </Link>
          </div>
        </div>
      </section>
      <section
        id="amenities"
        className="scroll-mt-[4.5rem] border-t border-border/60 bg-cream py-20 lg:py-28"
        aria-labelledby="villa-amenities-heading"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-display text-primary">Amenities</p>
            <h2
              id="villa-amenities-heading"
              className="mt-4 font-display text-4xl leading-tight text-stone-deep lg:text-5xl"
            >
              Everything considered — <em className="text-primary not-italic">nothing generic.</em>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curated for a real stay: from kitchen kit to parking, grouped so you can scan at a
              glance.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {groups.map((group) => (
              <div
                key={group.title}
                className="rounded-sm border border-border bg-card p-8 shadow-soft lg:p-10"
              >
                <h3 className="border-b border-border pb-4 font-display text-2xl text-stone-deep">
                  {group.title}
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map((name) => (
                    <li
                      key={name}
                      className="flex items-start gap-2 text-sm leading-snug text-foreground/85"
                    >
                      <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                        ✦
                      </span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border/60 bg-stone-deep py-20 text-cream lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-display text-primary">Book direct</p>
          <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
            We&apos;ll answer personally — usually within hours.
          </h2>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-sm bg-primary p-8 text-left text-primary-foreground shadow-warm transition-colors hover:bg-primary/90"
            >
              <span className="text-xs uppercase tracking-widest opacity-90">WhatsApp</span>
              <span className="font-display text-2xl">Message us</span>
              <span className="text-sm opacity-90">Preferred for quick replies →</span>
            </a>
            <a
              href={MAILTO}
              className="flex flex-col gap-2 rounded-sm border border-cream/25 bg-cream/5 p-8 text-left transition-colors hover:border-primary hover:bg-cream/10"
            >
              <span className="text-xs uppercase tracking-widest text-cream/60">Email</span>
              <span className="font-display text-2xl text-cream">Enquiry</span>
              <span className="text-sm text-primary">Open mail with subject line →</span>
            </a>
          </div>
          <Link
            href="/reviews"
            className="mt-10 inline-block text-sm text-cream/65 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Read guest reviews →
          </Link>
        </div>
      </section>
    </main>
  );
}
