import Image from "next/image";
import Link from "next/link";
import { AvailabilityCalculator } from "@/components/site/availability-calculator";
import { ContactChannelCard } from "@/components/site/contact-channels";
import { ResidenceCard } from "@/components/site/residence-card";
import { SiteFaq } from "@/components/site/site-faq";
import { SitePhotoHero } from "@/components/site/site-hero";
import { WhatsAppIcon, ViberIcon } from "@/components/icons";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_SECTION_Y_CLASS,
} from "@/lib/layout-constants";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
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

export function HomeHero({ locale = "en" }: { readonly locale?: Locale }) {
  const { count, ratingDisplay } = getReviewStats();

  return (
    <SitePhotoHero
      id="top"
      src="/property/exterior-courtyard.jpg"
      alt="Stone courtyard at Kagiampakis Concept Residences in Avdou, Crete"
      kenBurns
      className="min-h-[100svh] lg:min-h-[min(100svh,900px)]"
      contentClassName="min-h-[100svh] pb-16 sm:pb-20 lg:min-h-[min(100svh,900px)] lg:pb-28"
    >
      <div className="animate-fade-up max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-display text-cream/80">
          {pick(locale, "Avdou Village · Heraklion · Crete", "Αβδού · Ηράκλειο · Κρήτη")}
        </p>
        <h1 className="font-display text-4xl leading-[1.15] text-balance text-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-7xl xl:text-8xl">
          Kagiampakis
          <br />
          <span className="font-light text-primary/95">Concept Residences I &amp; II</span>
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-cream [text-shadow:0_1px_16px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-lg lg:text-xl">
          {pick(
            locale,
            "Two authentic stone houses in historic Avdou — ",
            "Δύο αυθεντικά πέτρινα σπίτια στην Αβδού — ",
          )}
          <strong className="text-cream">
            {pick(locale, "Residence I for up to 6 guests", "Κατοικία I για έως 6 άτομα")}
          </strong>{" "}
          {pick(locale, "(from €60/night)", "(από 60€/διανυκτέρευση)")} {pick(locale, "and", "και")}{" "}
          <strong className="text-cream">
            {pick(locale, "Residence II for up to 7 guests", "Κατοικία II για έως 7 άτομα")}
          </strong>{" "}
          {pick(locale, "(from €170/night).", "(από 170€/διανυκτέρευση).")}{" "}
          {pick(
            locale,
            "Reserve one, or both for groups of up to 13. About 31 minutes from Heraklion Airport.",
            "Κλείνετε τη μία ή και τις δύο, δύο κατοικίες στην Αβδού, για έως 13 άτομα. Περίπου 31 λεπτά από το αεροδρόμιο Ηρακλείου.",
          )}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:bg-primary/90"
          >
            {pick(locale, "Check rates & dates", "Τιμές και ημερομηνίες")}
          </a>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/40 bg-[#25D366]/30 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all hover:bg-[#25D366]/50 sm:flex-none"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              WhatsApp
            </a>
            <a
              href={VIBER_1_URL}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/40 bg-[#7360F2]/40 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-xs transition-all hover:bg-[#7360F2]/55 sm:flex-none"
            >
              <ViberIcon className="h-5 w-5 shrink-0" />
              Viber
            </a>
          </div>
          <Link
            href={localizedHref(locale, "/residences")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium text-cream/90 transition-all hover:bg-cream/10"
          >
            {pick(locale, "Explore both houses", "Δείτε και τις δύο κατοικίες")}
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/15 pt-6 text-sm text-cream/80">
          <span className="flex items-center gap-2 font-medium">
            <span className="text-primary">★</span> {ratingDisplay} · {count}{" "}
            {pick(locale, "guest reviews", "κριτικές επισκεπτών")}
          </span>
          <span className="hidden sm:inline">
            {pick(
              locale,
              "Book direct — host rates, no platform fees",
              "Απευθείας κράτηση — τιμές οικοδεσπότη, χωρίς προμήθεια πλατφόρμας",
            )}
          </span>
        </div>
      </div>
    </SitePhotoHero>
  );
}

export function HomeResidencesSection({ locale = "en" }: { readonly locale?: Locale }) {
  const residences = getAllResidences();

  return (
    <section id="residences" className={`scroll-mt-header bg-cream ${SITE_SECTION_Y_CLASS}`}>
      <div className={SITE_CONTAINER_CLASS}>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            {pick(locale, "Our accommodations", "Τα καταλύματα")}
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl lg:text-6xl">
            {pick(locale, "Two distinct stone residences", "Δύο ξεχωριστές πέτρινες κατοικίες")}
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            {pick(
              locale,
              "Traditional stone and wood, renovated for modern comfort, in the quiet village of Avdou — between the Lasithi mountains and the north coast.",
              "Παραδοσιακή πέτρα και ξύλο, ανακαινισμένα για σύγχρονη άνεση, στο ήσυχο χωριό της Αβδού — ανάμεσα στα βουνά του Λασιθίου και τη βόρεια ακτή.",
            )}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCalculatorSection({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <section id="calculator" className={`scroll-mt-header bg-secondary/40 ${SITE_SECTION_Y_CLASS}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">
            {pick(locale, "Live pricing", "Τιμή της στιγμής")}
          </p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl">
            {pick(locale, "Check rates & availability", "Δείτε τιμές και διαθεσιμότητα")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {pick(
              locale,
              "Choose dates and guest count to see nightly totals and minimum-stay rules, then send the quote to Xrisa on WhatsApp, Viber, or email.",
              "Διαλέξτε ημερομηνίες και άτομα για να δείτε το σύνολο και την ελάχιστη διαμονή, και στείλτε την προσφορά στη Χρύσα σε WhatsApp, Viber ή email.",
            )}
          </p>
        </div>

        <AvailabilityCalculator locale={locale} />
      </div>
    </section>
  );
}

export function HomeStory({ locale = "en" }: { readonly locale?: Locale }) {
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
            {pick(locale, "Our story", "Η ιστορία μας")}
          </p>
          <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-5xl">
            {pick(
              locale,
              "Built of stone, kept by family,",
              "Χτισμένα με πέτρα, κρατημένα από οικογένεια,",
            )}
            <span className="text-primary">
              {" "}
              {pick(locale, "opened to you.", "ανοιχτά για εσάς.")}
            </span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              {pick(
                locale,
                "In a quiet alley of Avdou — a village 35 km from Heraklion, cradled by the Lasithi mountains — sit the stone residences of the Kagiampakis family.",
                "Σε ένα ήσυχο σοκάκι της Αβδού — χωριό 35 χλμ. από το Ηράκλειο, στην αγκαλιά των βουνών του Λασιθίου — βρίσκονται οι πέτρινες κατοικίες της οικογένειας Καγιαμπάκη.",
              )}
            </p>
            <p>
              {pick(
                locale,
                "We kept the wooden beams, thick thermal walls, and wood stove, and added comfortable beds, climate control, full kitchens, and high-speed Wi-Fi. Whether you choose Concept I or Concept II, you stay with Cretan warmth — and a host who answers personally.",
                "Κρατήσαμε τα ξύλινα δοκάρια, τους χοντρούς τοίχους και την ξυλόσομπα, και προσθέσαμε άνετα κρεβάτια, κλιματισμό, πλήρεις κουζίνες και γρήγορο Wi-Fi. Είτε διαλέξετε την Κατοικία I είτε την Κατοικία II, μένετε με κρητική φιλοξενία — και με οικοδέσποινα που απαντά η ίδια.",
              )}
            </p>
          </div>

          <div className="shimmer-line my-10" />

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <Stat n="2" label={pick(locale, "Residences", "Κατοικίες")} />
            <Stat n="13" label={pick(locale, "Max guests", "Μέγιστα άτομα")} />
            <Stat
              n={getReviewStats().ratingDisplay}
              label={pick(locale, "Star rating", "Βαθμολογία")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeLocation({ locale = "en" }: { readonly locale?: Locale }) {
  const places = pick(
    locale,
    [
      ["3.6 km", "Cave of Agia Fotini"],
      ["3.9 km", "Aposelemi Dam"],
      ["11.2 km", "Aqua Plus Water Park"],
      ["14 km", "Hersonissos beaches"],
      ["14 km", "Lasithi Plateau"],
      ["35 km", "Heraklion city & airport"],
    ],
    [
      ["3,6 χλμ.", "Σπήλαιο Αγίας Φωτεινής"],
      ["3,9 χλμ.", "Φράγμα Αποσελέμη"],
      ["11,2 χλμ.", "Υδάτινο πάρκο Aqua Plus"],
      ["14 χλμ.", "Παραλίες Χερσονήσου"],
      ["14 χλμ.", "Οροπέδιο Λασιθίου"],
      ["35 χλμ.", "Ηράκλειο, πόλη και αεροδρόμιο"],
    ],
  );

  return (
    <section
      id="location"
      className={`scroll-mt-header relative overflow-hidden bg-stone-deep text-cream ${SITE_SECTION_Y_CLASS}`}
    >
      <div className="absolute inset-0 opacity-35">
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
            {pick(locale, "The village", "Το χωριό")}
          </p>
          <h2 className="font-display text-4xl leading-tight text-balance lg:text-5xl">
            {pick(locale, "Avdou — between mountain & sea", "Αβδού — ανάμεσα σε βουνό και θάλασσα")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            {pick(
              locale,
              "In short. Two stone residences in Avdou, Crete, hosted by Xrisa. Residence I sleeps 6 and Residence II sleeps 7, up to 13 across both. Check-in is after 15:00 and checkout is before 12:00. Avdou is 34.3 km, about 31 minutes, from Heraklion Airport.",
              "Με λίγα λόγια. Δύο πέτρινες κατοικίες στην Αβδού της Κρήτης, με οικοδέσποινα τη Χρύσα. Η Κατοικία I για 6 άτομα και η Κατοικία II για 7, έως 13 και στις δύο. Το check-in είναι μετά τις 15:00 και το check-out πριν από τις 12:00. Η Αβδού απέχει 34,3 χλμ., περίπου 31 λεπτά, από το αεροδρόμιο Ηρακλείου.",
            )}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream/80">
            {pick(
              locale,
              "Paragliding, the Rosa gorge, horseback riding, the 18 villages of the Lasithi Plateau, and the beaches of Hersonissos are day trips from the door.",
              "Το αλεξίπτωτο πλαγιάς, το φαράγγι της Ρόζας, η ιππασία, τα 18 χωριά του Οροπεδίου Λασιθίου και οι παραλίες της Χερσονήσου είναι ημερήσιες εκδρομές από την πόρτα.",
            )}
          </p>
          <p className="mt-4 text-sm text-cream/75">
            <Link
              href={localizedHref(locale, "/avdou-village")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Avdou village", "Το χωριό Αβδού")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/lasithi-plateau")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Lasithi Plateau", "Οροπέδιο Λασιθίου")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/day-trips")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Day trips", "Εκδρομές")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/getting-here")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Getting here", "Πώς θα έρθετε")}
            </Link>
            {" · "}
            <Link
              href={localizedHref(locale, "/groups")}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {pick(locale, "Groups", "Ομάδες")}
            </Link>
          </p>
          <Link
            href={localizedHref(locale, "/what-to-see")}
            className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            {pick(locale, "What to see nearby", "Τι να δείτε κοντά")}
          </Link>
          <a
            href="https://maps.google.com/?q=Kagiampakis+Concept+Residences+Avdou"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-medium text-cream/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {pick(locale, "Open in Google Maps", "Άνοιγμα στους Χάρτες Google")}
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

export function HomeFaqSection({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <section id="faq" className={`scroll-mt-header bg-secondary/30 ${SITE_SECTION_Y_CLASS}`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-display text-primary">FAQ</p>
          <h2 className="font-display text-4xl text-stone-deep sm:text-5xl">
            {pick(locale, "Straight answers before you book", "Ξεκάθαρες απαντήσεις πριν κλείσετε")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {pick(
              locale,
              "Rates, guest counts, airport time, and how to message Xrisa — written for humans and answer engines.",
              "Τιμές, άτομα, χρόνος ως το αεροδρόμιο και πώς στέλνετε μήνυμα στη Χρύσα.",
            )}
          </p>
        </div>
        <div className="rounded-sm border border-border bg-card px-5 sm:px-8">
          <SiteFaq locale={locale} />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link
            href={localizedHref(locale, "/faq")}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "View the full FAQ page", "Όλες οι ερωτήσεις")}
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeContact({ locale = "en" }: { readonly locale?: Locale }) {
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
          {pick(locale, "Reserve your stay direct", "Κλείστε απευθείας")}
        </p>
        <h2 className="font-display text-4xl leading-tight text-balance text-stone-deep lg:text-6xl">
          {pick(locale, "We would love to", "Θα χαρούμε να")}{" "}
          <span className="text-primary">{pick(locale, "welcome you.", "σας υποδεχτούμε.")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/75">
          {pick(locale, "Message host Xrisa on", "Στείλτε μήνυμα στη Χρύσα σε")}{" "}
          <strong className="text-stone-deep">WhatsApp</strong> {pick(locale, "or", "ή")}{" "}
          <strong className="text-stone-deep">Viber</strong>
          {pick(locale, ", or email ", ", ή στο email ")}
          <strong className="text-stone-deep">{EMAIL}</strong>
          {pick(
            locale,
            ". Replies are in Greek and English, usually within hours.",
            ". Οι απαντήσεις είναι στα ελληνικά και στα αγγλικά, συνήθως μέσα σε λίγες ώρες.",
          )}
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <ContactChannelCard
            href={WHATSAPP_1_URL}
            variant="whatsapp"
            eyebrow={pick(locale, "WhatsApp primary", "WhatsApp, κύριο")}
            title={PHONE_1_DISPLAY}
            hint={pick(locale, "Message Xrisa on WhatsApp", "Μήνυμα στη Χρύσα στο WhatsApp")}
          />
          <ContactChannelCard
            href={WHATSAPP_2_URL}
            variant="whatsapp-alt"
            eyebrow={pick(locale, "WhatsApp secondary", "WhatsApp, δεύτερο")}
            title={PHONE_2_DISPLAY}
            hint={pick(locale, "Message on WhatsApp", "Μήνυμα στο WhatsApp")}
          />
          <ContactChannelCard
            href={VIBER_1_URL}
            variant="viber"
            eyebrow={pick(locale, "Viber chat", "Συνομιλία Viber")}
            title={PHONE_1_DISPLAY}
            hint={pick(locale, "Open Viber", "Άνοιγμα Viber")}
            external={false}
          />
          <ContactChannelCard
            href={MAILTO}
            variant="email"
            eyebrow={pick(locale, "Email enquiry", "Ερώτηση με email")}
            title={EMAIL}
            hint={pick(locale, "Send an email", "Στείλτε email")}
            external={false}
          />
        </div>
      </div>
    </section>
  );
}
