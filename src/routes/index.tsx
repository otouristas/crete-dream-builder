import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/property/exterior-courtyard.jpg";
import entranceImg from "@/assets/property/entrance-evening.jpg";
import livingFireplace from "@/assets/property/living-fireplace.jpg";
import stoneLiving from "@/assets/property/stone-living.jpg";
import diningImg from "@/assets/property/dining.jpg";
import bedroomView from "@/assets/property/bedroom-view.jpg";
import bedroomMain from "@/assets/property/bedroom-main.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kagiampakis Residences — Traditional Stone Villa in Avdou, Crete" },
      {
        name: "description",
        content:
          "A renovated stone-built residence in the village of Avdou, Crete. Cretan hospitality, mountain views, fireplace, courtyard. Sleeps 6.",
      },
      { property: "og:title", content: "Kagiampakis Residences — Avdou, Crete" },
      {
        property: "og:description",
        content:
          "Two-storey traditional stone house, renovated and fully equipped. Discover authentic Cretan hospitality.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const PHONE = "+306982210506";
const PHONE_DISPLAY = "+30 698 221 0506";
const EMAIL = "Xrisa.xk@hotmail.gr";
const WHATSAPP = `https://wa.me/306982210506?text=${encodeURIComponent(
  "Hello Xrisa, I would like to enquire about Kagiampakis Concept Residence in Avdou.",
)}`;
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Booking enquiry — Kagiampakis Residences",
)}`;
const AIRBNB =
  "https://www.airbnb.com/rooms/34710248?unique_share_id=0b129400-faa7-4d3f-97f7-b71c5da96ff6";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/70 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-lg tracking-wide text-stone-deep">
            Kagiampakis <span className="text-primary">Residences</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#story" className="hover:text-primary transition-colors">The Story</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#stay" className="hover:text-primary transition-colors">The Stay</a>
          <a href="#location" className="hover:text-primary transition-colors">Location</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href={AIRBNB}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-all shadow-soft"
        >
          Book on Airbnb
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Stone-built courtyard of Kagiampakis Residences in Avdou, Crete at dusk"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-deep/30 via-stone-deep/20 to-stone-deep/80" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28">
        <div className="animate-fade-up max-w-3xl">
          <p className="text-cream/80 text-xs tracking-display uppercase mb-6">
            Avdou · Heraklion · Crete
          </p>
          <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-balance">
            A stone house,
            <br />
            <em className="text-primary/95 font-light">whispered by the mountain.</em>
          </h1>
          <p className="mt-8 text-cream/85 text-lg max-w-xl text-pretty">
            A traditional, fully renovated two-storey residence in the village of Avdou —
            where Cretan hospitality, slow mornings, and the scent of wild herbs become
            part of your stay.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={AIRBNB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-warm"
            >
              Reserve on Airbnb →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-all"
            >
              Contact the host
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-cream/80 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-primary">★</span> 5.0 · 22 reviews
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Guest Favourite · Top 10% on Airbnb</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <img
            src={entranceImg}
            alt="Lit stone entrance and bougainvillea at the residence"
            loading="lazy"
            width={900}
            height={1200}
            className="w-full h-[520px] object-cover rounded-sm shadow-soft"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs tracking-display uppercase text-primary mb-5">Our Story</p>
          <h2 className="font-display text-4xl lg:text-5xl text-stone-deep text-balance leading-tight">
            Built of stone, kept by family,
            <em className="text-primary"> opened to you.</em>
          </h2>
          <div className="mt-8 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              In a quiet corner of Avdou — a village 35 km from Heraklion, cradled by the
              Lasithi mountains — sits a two-storey stone house lovingly restored across
              three generations of the Kagiampakis family.
            </p>
            <p>
              We kept the wooden beams, the cool thick walls, the wood-burning stove. We
              added soft beds, a fully equipped kitchen, and a private balcony that opens
              onto the cave of Agia Fotini. Everything else, the village will give you.
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Gallery() {
  const items = [
    { src: livingFireplace, alt: "Stone-walled living room with traditional details", span: "lg:col-span-2 lg:row-span-2" },
    { src: stoneLiving, alt: "Living area with wood-burning stove" },
    { src: diningImg, alt: "Dining area with white sofa" },
    { src: bedroomView, alt: "Bedroom with mountain view on the second floor" },
    { src: bedroomMain, alt: "Main bedroom on the first floor" },
  ];
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-display uppercase text-primary mb-4">A Look Inside</p>
            <h2 className="font-display text-4xl lg:text-5xl text-stone-deep">
              Quiet rooms, warm stone, soft light.
            </h2>
          </div>
          <a
            href={AIRBNB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            See all photos on Airbnb →
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-sm group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stay() {
  const features = [
    { t: "Three storeys", d: "Ground-floor kitchen & living, first-floor bedroom with private balcony, top-floor bedroom with mountain view." },
    { t: "Wood-burning stove", d: "Cook the traditional way and warm winter evenings by the fire." },
    { t: "Equipped kitchen", d: "Tea, filter coffee, espresso and everything needed to cook a Cretan meal." },
    { t: "Private courtyard", d: "Sokaki Kagiampidon — a dead-end traditional alley that becomes your terrace." },
    { t: "Mountain view", d: "Sleep facing the cave of Agia Fotini and wake to birdsong." },
    { t: "Free parking", d: "One of the few homes in the village with free on-site parking." },
  ];
  return (
    <section id="stay" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs tracking-display uppercase text-primary mb-4">The Stay</p>
          <h2 className="font-display text-4xl lg:text-5xl text-stone-deep text-balance">
            Everything for six guests, nothing in excess.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {features.map((f) => (
            <div key={f.t} className="bg-cream p-8 hover:bg-secondary/40 transition-colors">
              <div className="font-display text-2xl text-primary mb-3">{f.t}</div>
              <p className="text-foreground/75 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const places = [
    ["3.6 km", "Cave of Agia Fotini"],
    ["3.9 km", "Aposelemi Dam"],
    ["11.2 km", "Aqua Plus Water Park"],
    ["14 km", "Hersonissos beaches"],
    ["14 km", "Lasithi Plateau"],
    ["35 km", "Heraklion city"],
  ];
  return (
    <section id="location" className="py-24 lg:py-36 bg-stone-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-display uppercase text-primary mb-4">The Village</p>
          <h2 className="font-display text-4xl lg:text-5xl text-balance leading-tight">
            Avdou — between mountain and sea.
          </h2>
          <p className="mt-6 text-cream/80 text-lg leading-relaxed">
            Paragliding, the Rosa gorge, horseback riding, the Lasithi plateau and its
            eighteen villages, hidden chapels, and the beaches of Hersonissos — all within
            a short drive from your door.
          </p>
          <a
            href="https://maps.google.com/?q=Avdou+Crete+Greece"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
          >
            Open in Google Maps →
          </a>
        </div>
        <ul className="space-y-px bg-cream/10 rounded-sm overflow-hidden">
          {places.map(([d, p]) => (
            <li key={p} className="flex items-baseline justify-between px-6 py-5 bg-stone-deep/60 hover:bg-stone-deep/30 transition-colors">
              <span className="text-cream/90">{p}</span>
              <span className="font-display text-2xl text-primary">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <img src={logo} alt="" width={80} height={80} className="h-20 w-20 mx-auto opacity-90" />
        <p className="text-xs tracking-display uppercase text-primary mt-6 mb-4">Reserve Your Stay</p>
        <h2 className="font-display text-4xl lg:text-6xl text-stone-deep text-balance leading-tight">
          We would love to <em className="text-primary">welcome you.</em>
        </h2>
        <p className="mt-6 text-foreground/75 text-lg max-w-xl mx-auto">
          Speak directly with Xrisa, your host. Reply within hours, in Greek or English.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-2 p-7 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-warm text-left"
          >
            <span className="text-xs tracking-widest uppercase opacity-80">WhatsApp</span>
            <span className="font-display text-2xl">{PHONE_DISPLAY}</span>
            <span className="text-sm opacity-80 group-hover:opacity-100">Message Xrisa now →</span>
          </a>
          <a
            href={MAILTO}
            className="group flex flex-col items-start gap-2 p-7 rounded-sm border border-border bg-card hover:border-primary transition-all text-left"
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Email</span>
            <span className="font-display text-2xl text-stone-deep break-all">{EMAIL}</span>
            <span className="text-sm text-primary">Send an enquiry →</span>
          </a>
        </div>

        <div className="mt-8">
          <a
            href={AIRBNB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            …or check live availability on Airbnb →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-deep text-cream/70 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-cream text-base">Kagiampakis Residences</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
          <a href={MAILTO} className="hover:text-primary">{EMAIL}</a>
          <a
            href="https://www.instagram.com/kagiampakis_residences"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Instagram
          </a>
        </div>
        <div className="text-xs opacity-60">
          Reg. 00000846700 · Avdou, Crete, Greece
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-cream text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Gallery />
      <Stay />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
