import Image from "next/image";
import Link from "next/link";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { ContactChannelCard } from "@/components/site/contact-channels";
import { ResidenceCard } from "@/components/site/residence-card";
import { SiteFaq } from "@/components/site/site-faq";
import { WhatsAppIcon, ViberIcon } from "@/components/icons";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HERO_HEADER_PAD_CLASS,
  SITE_SECTION_Y_CLASS,
} from "@/lib/layout-constants";
import { getAllResidences } from "@/lib/residences-data";
import { getReviewStats } from "@/lib/review-stats";
import {
  EMAIL,
  MAILTO,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";

function Stat({ n, label }: { readonly n: string; readonly label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-primary">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

export function HomeHero() {
  const { count, ratingDisplay } = getReviewStats();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden lg:min-h-[min(100svh,900px)]"
    >
      <Image
        src="/property/exterior-courtyard.jpg"
        alt="Stone courtyard at Kagiampakis Concept Residences in Avdou, Crete"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-deep/40 via-stone-deep/30 to-stone-deep/90" />
      <div
        className={`relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-16 max-lg:justify-center sm:px-6 lg:min-h-[min(100svh,900px)] lg:justify-end lg:px-10 lg:pb-24 ${SITE_HERO_HEADER_PAD_CLASS}`}
      >
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-display text-cream/80">
            Avdou Village · Heraklion · Crete
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-balance text-cream sm:text-6xl lg:text-8xl">
            Kagiampakis
            <br />
            <em className="font-light text-primary/95">Concept Residences I &amp; II</em>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-cream/90 sm:text-xl">
            Two authentic stone houses in historic Avdou —{" "}
            <strong className="text-cream">Residence I for up to 6 guests</strong> (from €60/night)
            and <strong className="text-cream">Residence II for up to 7 guests</strong> (from
            €170/night). Reserve one, or both for groups of up to 13. About 31 minutes from
            Heraklion Airport.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:bg-primary/90"
            >
              Check rates &amp; dates
            </a>
            <a
              href={WHATSAPP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-[#25D366]/25 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all hover:bg-[#25D366]/45"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={VIBER_1_URL}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-[#7360F2]/30 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all hover:bg-[#7360F2]/50"
            >
              <ViberIcon className="h-5 w-5" />
              Viber
            </a>
            <Link
              href="/residences"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium text-cream/90 transition-all hover:bg-cream/10"
            >
              Explore both houses
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/15 pt-6 text-sm text-cream/80">
            <span className="flex items-center gap-2 font-medium">
              <span className="text-primary">★</span> {ratingDisplay} · {count} guest reviews
            </span>
            <span className="hidden sm:inline">Book direct — host rates, no platform fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeResidencesSection() {
  const residences = getAllResidences();

  return (
    <section id="residences" className={`scroll-mt-header bg-cream ${SITE_SECTION_Y_CLASS}`}>
      <div className={SITE_CONTAINER_CLASS}>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            Our accommodations
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl lg:text-6xl">
            Two distinct stone residences
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            Traditional stone and wood, renovated for modern comfort, in the quiet village of Avdou
            — between the Lasithi mountains and the north coast.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCalculatorSection() {
  return (
    <section id="calculator" className={`scroll-mt-header bg-secondary/40 ${SITE_SECTION_Y_CLASS}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            Live pricing
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl">
            Check rates &amp; availability
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Choose dates and guest count to see nightly totals and minimum-stay rules, then send the
            quote to Xrisa on WhatsApp, Viber, or email.
          </p>
        </div>

        <AvailabilityCalculator />
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <section id="story" className={`scroll-mt-header bg-cream ${SITE_SECTION_Y_CLASS}`}>
      <div
        className={`grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-20 ${SITE_CONTAINER_CLASS}`}
      >
        <div className="lg:col-span-5">
          <figure className="overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/property/entrance-evening.jpg"
              alt="Stone entrance at Kagiampakis Concept Residences at dusk"
              width={900}
              height={1200}
              className="h-[min(520px,70vw)] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </figure>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-display text-primary">
            Our story
          </p>
          <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-5xl">
            Built of stone, kept by family,
            <em className="text-primary"> opened to you.</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              In a quiet alley of Avdou — a village 35 km from Heraklion, cradled by the Lasithi
              mountains — sit the stone residences of the Kagiampakis family.
            </p>
            <p>
              We kept the wooden beams, thick thermal walls, and wood stove, and added comfortable
              beds, climate control, full kitchens, and high-speed Wi-Fi. Whether you choose Concept
              I or Concept II, you stay with Cretan warmth — and a host who answers personally.
            </p>
          </div>

          <div className="shimmer-line my-10" />

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <Stat n="2" label="Residences" />
            <Stat n="13" label="Max guests" />
            <Stat n={getReviewStats().ratingDisplay} label="Star rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeLocation() {
  const places = [
    ["3.6 km", "Cave of Agia Fotini"],
    ["3.9 km", "Aposelemi Dam"],
    ["11.2 km", "Aqua Plus Water Park"],
    ["14 km", "Hersonissos beaches"],
    ["14 km", "Lasithi Plateau"],
    ["35 km", "Heraklion city & airport"],
  ] as const;

  return (
    <section
      id="location"
      className={`scroll-mt-header relative overflow-hidden bg-stone-deep text-cream ${SITE_SECTION_Y_CLASS}`}
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/property/exterior-courtyard.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          role="presentation"
        />
      </div>
      <div
        className={`relative grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 ${SITE_CONTAINER_CLASS}`}
      >
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-display text-primary">
            The village
          </p>
          <h2 className="font-display text-4xl leading-tight text-balance lg:text-5xl">
            Avdou — between mountain &amp; sea
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Avdou sits 34.3 km (about 31 minutes) from Heraklion Airport. Paragliding, Rosa gorge,
            horseback riding, the 18 villages of Lasithi Plateau, and Hersonissos beaches are all
            easy day trips from the door.
          </p>
          <Link
            href="/what-to-see"
            className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            What to see nearby
          </Link>
          <a
            href="https://maps.google.com/?q=Kagiampakis+Concept+Residences+Avdou"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-medium text-cream/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Open in Google Maps
          </a>
        </div>

        <ul className="space-y-px overflow-hidden rounded-sm bg-cream/10">
          {places.map(([d, p]) => (
            <li
              key={p}
              className="flex items-baseline justify-between bg-stone-deep/60 px-5 py-4 transition-colors hover:bg-stone-deep/30 sm:px-6 sm:py-5"
            >
              <span className="text-cream/90">{p}</span>
              <span className="font-display text-2xl text-primary">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section id="faq" className={`scroll-mt-header bg-secondary/30 ${SITE_SECTION_Y_CLASS}`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">FAQ</p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl">
            Straight answers before you book
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Rates, guest counts, airport time, and how to message Xrisa — written for humans and
            answer engines.
          </p>
        </div>
        <div className="rounded-sm border border-border bg-card px-5 sm:px-8">
          <SiteFaq />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link href="/faq" className="font-medium text-primary underline-offset-4 hover:underline">
            View the full FAQ page
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <section
      id="contact"
      className={`scroll-mt-header bg-cream ${SITE_SECTION_Y_CLASS} ${SITE_FAB_CLEAR_CLASS}`}
    >
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
        <Image
          src="/logo-final.png"
          alt="Kagiampakis Concept Residences logo"
          width={200}
          height={200}
          className="mx-auto h-24 w-24 object-contain opacity-95 sm:h-32 sm:w-32"
        />
        <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-display text-primary">
          Reserve your stay direct
        </p>
        <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-6xl">
          We would love to <em className="text-primary">welcome you.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/75">
          Message host Xrisa on <strong className="text-stone-deep">WhatsApp</strong> or{" "}
          <strong className="text-stone-deep">Viber</strong>, or email{" "}
          <strong className="text-stone-deep">{EMAIL}</strong>. Replies are in Greek and English,
          usually within hours.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <ContactChannelCard
            href={WHATSAPP_1_URL}
            variant="whatsapp"
            eyebrow="WhatsApp primary"
            title={PHONE_1_DISPLAY}
            hint="Message Xrisa on WhatsApp"
          />
          <ContactChannelCard
            href={WHATSAPP_2_URL}
            variant="whatsapp-alt"
            eyebrow="WhatsApp secondary"
            title={PHONE_2_DISPLAY}
            hint="Message on WhatsApp"
          />
          <ContactChannelCard
            href={VIBER_1_URL}
            variant="viber"
            eyebrow="Viber chat"
            title={PHONE_1_DISPLAY}
            hint="Open Viber"
            external={false}
          />
          <ContactChannelCard
            href={MAILTO}
            variant="email"
            eyebrow="Email enquiry"
            title={EMAIL}
            hint="Send an email"
            external={false}
          />
        </div>
      </div>
    </section>
  );
}
