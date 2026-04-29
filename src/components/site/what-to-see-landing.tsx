import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Church, MapPin, Mountain, Ship, Sparkles, Tent, TreePalm, Waves } from "lucide-react";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import { MAILTO, WHATSAPP_URL } from "@/lib/site-constants";

interface ExploreCard {
  readonly title: string;
  readonly distance?: string;
  readonly body: string;
  readonly icon: ReactNode;
  readonly span?: string;
}

export function WhatToSeeLanding() {
  const cards: readonly ExploreCard[] = [
    {
      title: "From your door",
      body: "Agia Fotini cave (~3.6 km), Aposelemi dam (~3.9 km), Rosa gorge, paragliding, and horseback riding — village life and limestone drama in every direction.",
      icon: <MapPin className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-7",
    },
    {
      title: "Avdou village",
      distance: "0 km",
      body: "Stone lanes, flowers, summer festivals — music, theatre, and traditional celebrations when the square fills with neighbours and visitors.",
      icon: <Church className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-5",
    },
    {
      title: "Lasithi Plateau",
      distance: "~14 km",
      body: "Eighteen villages on a high plain ringed by mountains — windmills, slow drives, and long lunches in the cool air away from the coast.",
      icon: <Mountain className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
    {
      title: "Coast & water",
      distance: "~14 km",
      body: "Hersonissos for swimming and seaside evenings. Aqua Plus water park ~11.2 km — a full family day between mountain mornings and sea afternoons.",
      icon: <Waves className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
    {
      title: "Heraklion (Irakleio)",
      distance: "~35 km",
      body: "Archaeological Museum, Knossos, Venetian harbour, walls, and markets — urban Crete before you wind back up to Avdou for the night.",
      icon: <TreePalm className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
  ];
  return (
    <main className="bg-cream text-foreground">
      <section
        className={`relative min-h-[min(72svh,720px)] w-full overflow-hidden ${SITE_HEADER_PT_CLASS}`}
      >
        <Image
          src="/property/entrance-evening.jpg"
          alt="Stone entrance and flowers in Avdou at dusk"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep via-stone-deep/55 to-stone-deep/25" />
        <div className="relative z-10 mx-auto flex min-h-[min(72svh,720px)] max-w-6xl flex-col justify-end px-6 pb-14 pt-6 lg:px-10 lg:pb-20">
          <p className="text-xs uppercase tracking-display text-primary/95">Beyond the courtyard</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.95] text-balance text-cream sm:text-5xl lg:text-7xl">
            Crete from <em className="text-primary/95 not-italic">Avdou.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/88 lg:text-xl">
            You are between the Lasithi mountains and the north coast — day trips to plateau, sea,
            and Heraklion without sacrificing the quiet of the village.
          </p>
        </div>
      </section>
      <section className="border-b border-border/60 bg-stone-deep py-12 text-cream lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3 lg:gap-10 lg:px-10">
          {[
            { label: "Airport", value: "~31 min", sub: "34.3 km" },
            { label: "Heraklion port", value: "~41 min", sub: "37.5 km" },
            { label: "Heraklion city", value: "~35 km", sub: "Museums & dining" },
          ].map((item) => (
            <div
              key={item.label}
              className="border-l-2 border-primary/70 pl-6 transition-colors hover:border-primary"
            >
              <p className="text-xs uppercase tracking-display text-cream/50">{item.label}</p>
              <p className="mt-2 font-display text-3xl text-primary lg:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm text-cream/65">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-display text-primary">Places &amp; pace</p>
              <h2 className="mt-3 font-display text-3xl text-stone-deep lg:text-5xl">
                A map in your mind — <span className="text-primary">not a checklist.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              Distances are driving estimates from the house. Ask Xrisa on WhatsApp for the routes
              she actually uses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className={`flex flex-col rounded-sm border border-border/90 bg-card p-7 shadow-soft transition-shadow hover:border-primary/30 hover:shadow-warm lg:p-8 ${card.span ?? "lg:col-span-6"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">{card.icon}</div>
                  {card.distance ? (
                    <span className="shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {card.distance}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-2xl text-stone-deep">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80 lg:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border/60 bg-secondary/40 py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="order-2 overflow-hidden rounded-sm shadow-warm ring-1 ring-border/50 lg:order-1">
            <Image
              src="/property/exterior-courtyard.jpg"
              alt="Courtyard at Kagiampakis Residences"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-display text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              When you return
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight text-stone-deep lg:text-4xl">
              Evenings belong to the village — mornings to the road you choose.
            </h2>
            <ul className="mt-8 space-y-4 text-foreground/85">
              <li className="flex gap-3">
                <Tent
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-deep">Outdoor rhythm</strong> — gorge walks, dam
                  circuits, and plateau drives without long transfers.
                </span>
              </li>
              <li className="flex gap-3">
                <Ship
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-deep">Sea days</strong> — north-coast beaches and
                  tavernas when you want salt and breeze.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-warm py-14 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">Planning drives or arrival times?</h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base opacity-95">
            Send your flight or ferry details on WhatsApp — we will help with directions and
            realistic timings from Avdou.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-stone-deep shadow-soft transition-transform hover:scale-[1.02]"
            >
              WhatsApp us
            </a>
            <a
              href={MAILTO}
              className="inline-flex rounded-full border-2 border-cream/75 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Email
            </a>
            <Link
              href="/villa#photos"
              className="inline-flex items-center rounded-full border border-cream/40 px-8 py-3.5 text-sm text-cream/95 hover:bg-cream/10"
            >
              See the villa →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
