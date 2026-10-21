import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Church, MapPin, Mountain, Ship, Sparkles, Tent, TreePalm, Waves } from "lucide-react";
import { ViberIcon, WhatsAppIcon } from "@/components/icons";
import { SitePhotoHero } from "@/components/site/site-hero";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { MAILTO, VIBER_URL, WHATSAPP_URL } from "@/lib/site-constants";

interface ExploreCard {
  readonly title: string;
  readonly distance?: string;
  readonly body: string;
  readonly icon: ReactNode;
  readonly span?: string;
}

export function WhatToSeeLanding({ locale = "en" }: { readonly locale?: Locale }) {
  const cards: readonly ExploreCard[] = [
    {
      title: pick(locale, "From your door", "Από την πόρτα σας"),
      body: pick(
        locale,
        "Agia Fotini cave (~3.6 km), Aposelemi dam (~3.9 km), Rosa gorge, paragliding, and horseback riding — village life and limestone drama in every direction.",
        "Σπήλαιο Αγίας Φωτεινής (3,6 χλμ.), φράγμα Αποσελέμη (3,9 χλμ.), φαράγγι Ρόζας, αλεξίπτωτο πλαγιάς και ιππασία.",
      ),
      icon: <MapPin className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-7",
    },
    {
      title: pick(locale, "Avdou village", "Χωριό Αβδού"),
      distance: pick(locale, "0 km", "0 χλμ."),
      body: pick(
        locale,
        "Stone lanes, flowers, summer festivals — music, theatre, and traditional celebrations when the square fills with neighbours and visitors.",
        "Πέτρινα σοκάκια, λουλούδια και καλοκαιρινές γιορτές — μουσική, θέατρο και παραδοσιακές εκδηλώσεις.",
      ),
      icon: <Church className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-5",
    },
    {
      title: pick(locale, "Lasithi Plateau", "Οροπέδιο Λασιθίου"),
      distance: pick(locale, "~14 km", "14 χλμ."),
      body: pick(
        locale,
        "Eighteen villages on a high plain ringed by mountains — windmills, slow drives, and long lunches in the cool air away from the coast.",
        "Δεκαοκτώ χωριά, 14 χλμ. από τα σπίτια. Χρόνος οδήγησης δεν δημοσιεύεται· ρωτήστε τη Χρύσα για τη διαδρομή.",
      ),
      icon: <Mountain className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
    {
      title: pick(locale, "Coast & water", "Ακτή"),
      distance: pick(locale, "~14 km", "14 χλμ."),
      body: pick(
        locale,
        "Hersonissos for swimming and seaside evenings. Aqua Plus water park ~11.2 km — a full family day between mountain mornings and sea afternoons.",
        "Η Χερσόνησος για μπάνιο απέχει 14 χλμ. Το Aqua Plus απέχει 11,2 χλμ.",
      ),
      icon: <Waves className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
    {
      title: pick(locale, "Heraklion (Irakleio)", "Ηράκλειο"),
      distance: pick(locale, "~35 km", "35 χλμ."),
      body: pick(
        locale,
        "Archaeological Museum, Knossos, Venetian harbour, walls, and markets — urban Crete before you wind back up to Avdou for the night.",
        "Η πόλη του Ηρακλείου απέχει περίπου 35 χλμ. από τις κατοικίες στην Αβδού.",
      ),
      icon: <TreePalm className="h-6 w-6" strokeWidth={1.25} aria-hidden />,
      span: "lg:col-span-4",
    },
  ];
  return (
    <main className="bg-cream text-foreground">
      <SitePhotoHero
        src="/property/entrance-evening.jpg"
        alt="Stone entrance and flowers in Avdou at dusk"
        kenBurns
        className="min-h-[min(72svh,720px)]"
        contentClassName="min-h-[min(72svh,720px)] max-w-6xl pb-14 sm:pb-16 lg:pb-20"
      >
        <p className="text-xs uppercase tracking-display text-primary/95">
          {pick(locale, "Beyond the courtyard", "Πέρα από την αυλή")}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.12] text-balance text-cream sm:text-5xl lg:text-7xl">
          {pick(locale, "Crete from", "Η Κρήτη από την")}{" "}
          <span className="text-primary/95">{pick(locale, "Avdou.", "Αβδού.")}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/88 lg:text-xl">
          {pick(
            locale,
            "In short. The two residences in Avdou sit between the Lasithi mountains and the north coast. Agia Fotini is 3.6 km, the dam 3.9 km, and both the plateau and Hersonissos are 14 km.",
            "Με λίγα λόγια. Οι δύο κατοικίες στην Αβδού κάθονται ανάμεσα στα βουνά του Λασιθίου και τη βόρεια ακτή. Η Αγία Φωτεινή απέχει 3,6 χλμ., το φράγμα 3,9 χλμ., και το οροπέδιο και η Χερσόνησος από 14 χλμ.",
          )}
        </p>
      </SitePhotoHero>
      <section className="border-b border-border/60 bg-stone-deep py-12 text-cream lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3 lg:gap-10 lg:px-10">
          {[
            {
              label: pick(locale, "Airport", "Αεροδρόμιο"),
              value: pick(locale, "~31 min", "31 λεπτά"),
              sub: "34,3 km",
            },
            {
              label: pick(locale, "Heraklion port", "Λιμάνι Ηρακλείου"),
              value: pick(locale, "~41 min", "41 λεπτά"),
              sub: "37,5 km",
            },
            {
              label: pick(locale, "Heraklion city", "Πόλη Ηρακλείου"),
              value: "~35 km",
              sub: pick(locale, "Museums & dining", "Περίπου 35 χλμ."),
            },
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
              <p className="text-xs uppercase tracking-display text-primary">
                {pick(locale, "Places & pace", "Μέρη και ρυθμός")}
              </p>
              <h2 className="mt-3 font-display text-3xl text-stone-deep lg:text-5xl">
                {pick(locale, "A map in your mind — ", "Ένας χάρτης στο μυαλό — ")}
                <span className="text-primary">
                  {pick(locale, "not a checklist.", "όχι λίστα υποχρεώσεων.")}
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              {pick(
                locale,
                "Distances are the ones the host publishes from the houses. Ask Xrisa on WhatsApp for the routes she actually uses.",
                "Οι αποστάσεις είναι αυτές που δημοσιεύει η οικοδέσποινα από τα σπίτια. Ρωτήστε τη Χρύσα στο WhatsApp ποια διαδρομή χρησιμοποιεί.",
              )}
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
              {pick(locale, "When you return", "Όταν γυρίζετε")}
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight text-stone-deep lg:text-4xl">
              {pick(
                locale,
                "Evenings belong to the village — mornings to the road you choose.",
                "Τα βράδια ανήκουν στο χωριό — τα πρωινά στον δρόμο που θα διαλέξετε.",
              )}
            </h2>
            <ul className="mt-8 space-y-4 text-foreground/85">
              <li className="flex gap-3">
                <Tent
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-deep">
                    {pick(locale, "Outdoor rhythm", "Έξω")}
                  </strong>{" "}
                  {pick(
                    locale,
                    "— gorge walks, dam circuits, and plateau drives without long transfers.",
                    "— βόλτες στο φαράγγι, το φράγμα και το οροπέδιο.",
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <Ship
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>
                  <strong className="text-stone-deep">
                    {pick(locale, "Sea days", "Μέρες στη θάλασσα")}
                  </strong>{" "}
                  {pick(
                    locale,
                    "— north-coast beaches and tavernas when you want salt and breeze.",
                    "— παραλίες της βόρειας ακτής, όταν θέλετε αλάτι και αέρα.",
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-warm py-14 pb-28 text-primary-foreground lg:py-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">
            {pick(locale, "Planning drives or arrival times?", "Σχεδιάζετε διαδρομή ή ώρα άφιξης;")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base opacity-95">
            {pick(
              locale,
              "Send your flight or ferry details on WhatsApp — we will help with directions and realistic timings from Avdou.",
              "Στείλτε την ώρα πτήσης ή πλοίου στο WhatsApp — η Χρύσα μπορεί να σας πει τη διαδρομή και ρεαλιστικούς χρόνους από την Αβδού.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-stone-deep shadow-soft transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {pick(locale, "WhatsApp us", "WhatsApp")}
            </a>
            <a
              href={VIBER_URL}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/75 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              <ViberIcon className="h-4 w-4" />
              Viber
            </a>
            <a
              href={MAILTO}
              className="inline-flex rounded-full border-2 border-cream/75 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Email
            </a>
            <Link
              href={localizedHref(locale, "/residences")}
              className="inline-flex items-center rounded-full border border-cream/40 px-8 py-3.5 text-sm text-cream/95 hover:bg-cream/10"
            >
              {pick(locale, "See the villa →", "Δείτε τις κατοικίες →")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
