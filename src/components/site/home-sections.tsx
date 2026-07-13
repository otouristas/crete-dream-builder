import Image from "next/image";
import Link from "next/link";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { ResidenceCard } from "@/components/site/residence-card";
import { WhatsAppIcon, ViberIcon, EmailIcon } from "@/components/icons";
import { SITE_HERO_HEADER_PAD_CLASS } from "@/lib/layout-constants";
import { getAllResidences } from "@/lib/residences-data";
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
        className={`relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pb-20 max-lg:justify-center lg:min-h-[min(100svh,900px)] lg:justify-end lg:px-10 lg:pb-28 ${SITE_HERO_HEADER_PAD_CLASS}`}
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
            Two authentic, stone-built Cretan residences in historic Avdou village. Choose between
            <strong className="text-cream"> Residence I (up to 6 guests)</strong> and{" "}
            <strong className="text-cream"> Residence II (up to 7 guests)</strong>, or reserve both
            for large group gatherings up to 13 guests.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:bg-primary/90"
            >
              Check Availability &amp; Rates →
            </a>
            <a
              href={WHATSAPP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-[#25D366]/20 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all hover:bg-[#25D366]/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Direct
            </a>
            <Link
              href="/residences"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium text-cream/90 transition-all hover:bg-cream/10"
            >
              Explore Both Residences
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-cream/80 border-t border-cream/15 pt-6">
            <span className="flex items-center gap-2 font-medium">
              <span className="text-primary">★</span> 5.0 Rating · 23 Reviews
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Book Direct — Best Rate Guaranteed &amp; Instant Host Communication
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeResidencesSection() {
  const residences = getAllResidences();

  return (
    <section id="residences" className="scroll-mt-header bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            Our Accommodations
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl lg:text-6xl">
            Two Distinct Stone Residences
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            Crafted with traditional stone and wood architecture, renovated with high modern
            comforts, and situated in the peaceful village of Avdou.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
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
    <section id="calculator" className="scroll-mt-header bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            Live Pricing &amp; Dates
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl">
            Check Rates &amp; Availability
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Select your dates and guest count to see instantaneous rates and minimum stay rules.
          </p>
        </div>

        <AvailabilityCalculator />
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <section id="story" className="scroll-mt-header bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <figure className="overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/property/entrance-evening.jpg"
              alt="Stone entrance at Kagiampakis Concept Residences at dusk"
              width={900}
              height={1200}
              className="h-[520px] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </figure>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-display text-primary">
            Our Story
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
              We preserved the wooden beams, thick thermal stone walls, and traditional wood stove,
              while introducing plush beds, climate control, fully equipped kitchens, and high-speed
              Wi-Fi. Whether you choose Concept I or Concept II, authentic Cretan warmth awaits.
            </p>
          </div>

          {/* Decorative shimmer divider */}
          <div className="shimmer-line my-10" />

          <div className="grid grid-cols-3 gap-6">
            <Stat n="2" label="Residences" />
            <Stat n="13" label="Max Guests" />
            <Stat n="5.0" label="Star Rating" />
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
    ["14 km", "Hersonissos Beaches"],
    ["14 km", "Lasithi Plateau"],
    ["35 km", "Heraklion City & Airport"],
  ] as const;

  return (
    <section
      id="location"
      className="scroll-mt-header relative overflow-hidden bg-stone-deep py-24 text-cream lg:py-36"
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
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-display text-primary">
            The Village
          </p>
          <h2 className="font-display text-4xl leading-tight text-balance lg:text-5xl">
            Avdou — Between Mountain &amp; Sea
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Paragliding, hiking the Rosa gorge, horseback riding, exploring the 18 villages of
            Lasithi Plateau, and swimming at Hersonissos beaches — all within easy reach from your
            private residence door.
          </p>
          <Link
            href="/what-to-see"
            className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            What to see nearby →
          </Link>
          <a
            href="https://maps.google.com/?q=Avdou+Crete+Greece"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-medium text-cream/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>

        <ul className="space-y-px overflow-hidden rounded-sm bg-cream/10">
          {places.map(([d, p]) => (
            <li
              key={p}
              className="flex items-baseline justify-between bg-stone-deep/60 px-6 py-5 transition-colors hover:bg-stone-deep/30"
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

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-header bg-cream py-24 pb-32 lg:py-36 lg:pb-40">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Image
          src="/logo-final.png"
          alt="Kagiampakis Concept Residences Logo"
          width={200}
          height={200}
          className="mx-auto h-28 w-28 object-contain opacity-95 sm:h-36 sm:w-36"
        />
        <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-display text-primary">
          Reserve Your Stay Direct
        </p>
        <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-6xl">
          We would love to <em className="text-primary">welcome you.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/75">
          Reach out directly via <strong className="text-stone-deep">WhatsApp</strong>,{" "}
          <strong className="text-stone-deep">Viber</strong>, or{" "}
          <strong className="text-stone-deep">Email</strong>. Speak directly with host Xrisa for
          instant responses and personalized arrangements.
        </p>

        {/* Contact Grid */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-3 rounded-sm bg-[#25D366] p-7 text-left text-white shadow-warm transition-all hover:bg-[#20bd5a]"
          >
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="h-6 w-6" />
              <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
                WhatsApp (Primary)
              </span>
            </div>
            <span className="font-display text-2xl sm:text-3xl">{PHONE_1_DISPLAY}</span>
            <span className="text-xs opacity-90 group-hover:opacity-100">
              Message Xrisa on WhatsApp →
            </span>
          </a>

          <a
            href={WHATSAPP_2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-3 rounded-sm bg-stone-deep p-7 text-left text-cream shadow-warm transition-all hover:bg-stone-deep/90"
          >
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                WhatsApp (Secondary)
              </span>
            </div>
            <span className="font-display text-2xl sm:text-3xl">{PHONE_2_DISPLAY}</span>
            <span className="text-xs opacity-90 group-hover:opacity-100">
              Message on WhatsApp →
            </span>
          </a>

          <a
            href={VIBER_1_URL}
            className="group flex flex-col items-start gap-3 rounded-sm bg-[#7360F2] p-7 text-left text-white shadow-warm transition-all hover:bg-[#6351e3]"
          >
            <div className="flex items-center gap-2">
              <ViberIcon className="h-6 w-6" />
              <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
                Viber Chat
              </span>
            </div>
            <span className="font-display text-2xl sm:text-3xl">{PHONE_1_DISPLAY}</span>
            <span className="text-xs opacity-90 group-hover:opacity-100">Open Viber Chat →</span>
          </a>

          <a
            href={MAILTO}
            className="group flex flex-col items-start gap-3 rounded-sm border-2 border-primary/25 bg-card p-7 text-left transition-all hover:border-primary"
          >
            <div className="flex items-center gap-2">
              <EmailIcon className="h-6 w-6 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email Enquiry
              </span>
            </div>
            <span className="font-display break-all text-2xl text-stone-deep">{EMAIL}</span>
            <span className="text-xs font-medium text-primary">Send an email enquiry →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
