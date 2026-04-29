import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";

export const metadata: Metadata = buildPageMetadata({
  title: "What to see — Heraklion & Crete nearby",
  description:
    "Day trips from Avdou: Lasithi Plateau, Hersonissos beaches, Aposelemi Dam, Agia Fotini cave, Heraklion museums, Rosa gorge, paragliding, Aqua Plus.",
  path: "/what-to-see",
});

export default function WhatToSeePage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS}`}>
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-display text-primary">Around Avdou</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-stone-deep lg:text-5xl">
          What to see — Heraklion &amp; Crete nearby
        </h1>
        <p className="mt-6 text-lg text-foreground/80">
          The house sits between mountain and sea: day trips to the Lasithi plateau, swimming on the
          north coast, and the museums and food of Heraklion are all within easy reach.
        </p>
        <section className="mt-14">
          <h2 className="font-display text-2xl text-stone-deep">From your door</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-foreground/85">
            <li>
              <strong>Cave of Agia Fotini</strong> — about 3.6 km; dramatic mountain scenery.
            </li>
            <li>
              <strong>Aposelemi Dam</strong> — about 3.9 km; walk or drive along the reservoir.
            </li>
            <li>
              <strong>Rosa gorge</strong>, paragliding, and horseback riding — local outdoor options
              in and around the village.
            </li>
            <li>
              <strong>Avdou itself</strong> — stone lanes, flowers, summer festivals with music,
              theatre, and traditional celebrations.
            </li>
          </ul>
        </section>
        <section className="mt-14">
          <h2 className="font-display text-2xl text-stone-deep">Lasithi Plateau</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            About 14 km away — eighteen villages, windmills, and the high plain ringed by mountains.
            Ideal for a slow drive, lunch in a village taverna, and a cooler afternoon away from the
            coast.
          </p>
        </section>
        <section className="mt-14">
          <h2 className="font-display text-2xl text-stone-deep">Coast &amp; water</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            <strong>Hersonissos</strong> and its beaches are about 14 km away — swimming, seaside
            walks, and evening bustle. <strong>Aqua Plus</strong> water park is about 11.2 km for
            families who want a full day out.
          </p>
        </section>
        <section className="mt-14">
          <h2 className="font-display text-2xl text-stone-deep">Heraklion (Irakleio)</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            The island&apos;s capital is roughly <strong>35 km</strong> — the Archaeological Museum
            and Knossos, the Venetian harbour and city walls, markets, and some of Crete&apos;s best
            urban dining. Combine a museum morning with lunch in the centre before driving back up
            to the cool of Avdou.
          </p>
        </section>
        <section className="mt-14">
          <h2 className="font-display text-2xl text-stone-deep">Arriving</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            <strong>Nikos Kazantzakis Airport</strong> — about 31 minutes (34.3 km).{" "}
            <strong>Heraklion port</strong> — about 41 minutes (37.5 km). We are happy to help with
            directions; WhatsApp is the easiest way to coordinate arrival times.
          </p>
        </section>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/villa"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
          >
            Read about the villa
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm hover:border-primary"
          >
            Contact &amp; map
          </Link>
        </div>
      </article>
    </main>
  );
}
