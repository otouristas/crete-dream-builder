import Image from "next/image";
import Link from "next/link";
import { GalleryWithLightbox } from "@/components/site/gallery-with-lightbox";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { getPropertyPhotos } from "@/lib/property-photos";
import { EMAIL, MAILTO, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site-constants";

function Stat({ n, label }: { readonly n: string; readonly label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-primary">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="/property/exterior-courtyard.jpg"
        alt="Stone-built courtyard of Kagiampakis Residences in Avdou, Crete at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-deep/30 via-stone-deep/20 to-stone-deep/80" />
      <div
        className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-28 ${SITE_HEADER_PT_CLASS}`}
      >
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-display text-cream/80">
            Avdou · Heraklion · Crete
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-balance text-cream sm:text-6xl lg:text-8xl">
            A stone house,
            <br />
            <em className="font-light text-primary/95">whispered by the mountain.</em>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-cream/85">
            A traditional, fully renovated two-storey residence in the village of Avdou — where
            Cretan hospitality, slow mornings, and the scent of wild herbs become part of your stay.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground shadow-warm transition-all hover:bg-primary/90"
            >
              WhatsApp — book direct
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-cream transition-all hover:bg-cream/10"
            >
              Email your dates
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-cream/95 transition-all hover:bg-cream/10"
            >
              Contact &amp; map
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-cream/80">
            <span className="flex items-center gap-2">
              <span className="text-primary">★</span> 5.0 · 22 guest reviews
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Book direct — WhatsApp or email for the best experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStory() {
  return (
    <section id="story" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <figure className="overflow-hidden rounded-sm shadow-soft">
            <Image
              src="/property/entrance-evening.jpg"
              alt="Lit stone entrance and bougainvillea at the residence"
              width={900}
              height={1200}
              className="h-[520px] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <figcaption className="sr-only">Entrance at dusk</figcaption>
          </figure>
        </div>
        <div className="lg:col-span-7">
          <p className="mb-5 text-xs uppercase tracking-display text-primary">Our Story</p>
          <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-5xl">
            Built of stone, kept by family,
            <em className="text-primary"> opened to you.</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              In a quiet corner of Avdou — a village 35 km from Heraklion, cradled by the Lasithi
              mountains — sits a two-storey stone house lovingly restored across three generations
              of the Kagiampakis family.
            </p>
            <p>
              We kept the wooden beams, the cool thick walls, the wood-burning stove. We added soft
              beds, a fully equipped kitchen, and a private balcony that opens onto the cave of Agia
              Fotini. Everything else, the village will give you.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="7" label="years hosting" />
            <Stat n="22" label="five-star reviews" />
            <Stat n="6" label="guests · 2 bedrooms" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeGallery() {
  const photos = getPropertyPhotos().map((photo, i) => ({
    ...photo,
    span: i === 0 ? "lg:col-span-2 lg:row-span-2" : undefined,
  }));
  return (
    <section id="gallery" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-display text-primary">A Look Inside</p>
            <h2 className="font-display text-4xl text-stone-deep lg:text-5xl">
              Quiet rooms, warm stone, soft light.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Tap any photo for a full-screen gallery — hosted here, not on a booking platform.
            </p>
          </div>
          <Link
            href="/villa#photos"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Full villa page &amp; amenities →
          </Link>
        </div>
        <GalleryWithLightbox images={photos} />
      </div>
    </section>
  );
}

export function HomeStay() {
  const features = [
    {
      t: "Three storeys",
      d: "Ground-floor kitchen & living, first-floor bedroom with private balcony, top-floor bedroom with mountain view.",
    },
    {
      t: "Wood-burning stove",
      d: "Cook the traditional way and warm winter evenings by the fire.",
    },
    {
      t: "Equipped kitchen",
      d: "Tea, filter coffee, espresso and everything needed to cook a Cretan meal.",
    },
    {
      t: "Private courtyard",
      d: "Sokaki Kagiampidon — a dead-end traditional alley that becomes your terrace.",
    },
    { t: "Mountain view", d: "Sleep facing the cave of Agia Fotini and wake to birdsong." },
    { t: "Free parking", d: "One of the few homes in the village with free on-site parking." },
  ] as const;
  return (
    <section id="stay" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-display text-primary">The Stay</p>
          <h2 className="font-display text-4xl text-balance text-stone-deep lg:text-5xl">
            Everything for six guests, nothing in excess.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="bg-cream p-8 transition-colors hover:bg-secondary/40">
              <div className="mb-3 font-display text-2xl text-primary">{f.t}</div>
              <p className="leading-relaxed text-foreground/75">{f.d}</p>
            </div>
          ))}
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
    ["35 km", "Heraklion city"],
  ] as const;
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-stone-deep py-24 text-cream lg:py-36"
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
          <p className="mb-4 text-xs uppercase tracking-display text-primary">The Village</p>
          <h2 className="font-display text-4xl leading-tight text-balance lg:text-5xl">
            Avdou — between mountain and sea.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Paragliding, the Rosa gorge, horseback riding, the Lasithi plateau and its eighteen
            villages, hidden chapels, and the beaches of Hersonissos — all within a short drive from
            your door.
          </p>
          <Link
            href="/what-to-see"
            className="mt-6 inline-flex text-sm text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            What to see in Heraklion &amp; nearby →
          </Link>
          <a
            href="https://maps.google.com/?q=Avdou+Crete+Greece"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
    <section id="contact" className="bg-cream py-24 pb-32 lg:py-36 lg:pb-40">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={200}
          className="mx-auto h-32 w-32 object-contain opacity-95 sm:h-40 sm:w-40"
        />
        <p className="mb-4 mt-8 text-xs uppercase tracking-display text-primary">
          Reserve Your Stay
        </p>
        <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-6xl">
          We would love to <em className="text-primary">welcome you.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/75">
          The best way to reserve is <strong className="text-stone-deep">WhatsApp</strong> or{" "}
          <strong className="text-stone-deep">email</strong>. Speak directly with Xrisa — replies
          within hours, in Greek or English.
        </p>
        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-2 rounded-sm bg-primary p-8 text-left text-primary-foreground shadow-warm transition-all hover:bg-primary/90 sm:p-9"
          >
            <span className="text-xs uppercase tracking-widest opacity-90">
              WhatsApp — preferred
            </span>
            <span className="font-display text-2xl sm:text-3xl">{PHONE_DISPLAY}</span>
            <span className="text-sm opacity-90 group-hover:opacity-100">Message Xrisa now →</span>
          </a>
          <a
            href={MAILTO}
            className="group flex flex-col items-start gap-2 rounded-sm border-2 border-primary/25 bg-card p-8 text-left transition-all hover:border-primary sm:p-9"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
            <span className="font-display break-all text-2xl text-stone-deep sm:text-3xl">
              {EMAIL}
            </span>
            <span className="text-sm font-medium text-primary">Send an enquiry →</span>
          </a>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-sm border border-border/80 bg-secondary/30 px-6 py-5 text-left text-sm text-foreground/80">
          <Link
            href="/contact"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Contact page
          </Link>{" "}
          — map, enquiry form, and quick links. Third-party listing sites are optional only if you
          already use them; we always recommend messaging us first.
        </div>
      </div>
    </section>
  );
}
