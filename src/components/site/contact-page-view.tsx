import Image from "next/image";
import Link from "next/link";
import { ContactEnquiryForm } from "@/components/site/contact-enquiry-form";
import { ContactChannelCard } from "@/components/site/contact-channels";
import { JsonLd } from "@/components/site/json-ld";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import {
  EMAIL,
  GOOGLE_BUSINESS_URL,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_REVIEWS_LOGO_URL,
  MAILTO,
  PHONE_1,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function ContactPageView({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          { name: pick(locale, "Contact", "Επικοινωνία"), path: localizedHref(locale, "/contact") },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} max-w-5xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          {pick(locale, "Direct host booking", "Απευθείας κράτηση")}
        </p>
        <h1 className="mt-2 font-display text-4xl text-stone-deep lg:text-5xl">
          {pick(locale, "Contact host Xrisa", "Επικοινωνία με τη Χρύσα")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          <span className="font-semibold text-stone-deep">
            {pick(locale, "In short. ", "Με λίγα λόγια. ")}
          </span>
          {pick(
            locale,
            "Message Xrisa for Residence I or Residence II, two residences in Avdou. She replies in Greek and English. Check-in is after 15:00. The form below opens your mail app.",
            "Στείλτε μήνυμα στη Χρύσα για την Κατοικία I ή την Κατοικία II, δύο κατοικίες στην Αβδού. Απαντά στα ελληνικά και στα αγγλικά. Το check-in είναι μετά τις 15:00. Η φόρμα ανοίγει την εφαρμογή email σας.",
          )}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ContactChannelCard
            href={WHATSAPP_1_URL}
            variant="whatsapp"
            eyebrow={pick(locale, "WhatsApp primary", "WhatsApp (κύριο)")}
            title={PHONE_1_DISPLAY}
            hint={pick(locale, "Message Xrisa on WhatsApp", "Μήνυμα στη Χρύσα στο WhatsApp")}
          />
          <ContactChannelCard
            href={WHATSAPP_2_URL}
            variant="whatsapp-alt"
            eyebrow={pick(locale, "WhatsApp secondary", "WhatsApp (δεύτερο)")}
            title={PHONE_2_DISPLAY}
            hint={pick(locale, "Message secondary WhatsApp", "Μήνυμα στο δεύτερο WhatsApp")}
          />
          <ContactChannelCard
            href={VIBER_1_URL}
            variant="viber"
            eyebrow={pick(locale, "Viber primary", "Viber (κύριο)")}
            title={PHONE_1_DISPLAY}
            hint={pick(locale, "Open Viber chat", "Άνοιγμα συνομιλίας στο Viber")}
            external={false}
          />
          <ContactChannelCard
            href={VIBER_2_URL}
            variant="viber"
            eyebrow={pick(locale, "Viber secondary", "Viber (δεύτερο)")}
            title={PHONE_2_DISPLAY}
            hint={pick(locale, "Open Viber chat", "Άνοιγμα συνομιλίας στο Viber")}
            external={false}
          />
          <ContactChannelCard
            href={`tel:${PHONE_1}`}
            variant="phone"
            eyebrow={pick(locale, "Call primary", "Κλήση (κύριο)")}
            title={PHONE_1_DISPLAY}
            hint={pick(locale, "Call host Xrisa", "Καλέστε τη Χρύσα")}
            external={false}
          />
          <ContactChannelCard
            href={MAILTO}
            variant="email"
            eyebrow={pick(locale, "Direct email", "Email")}
            title={EMAIL}
            hint={pick(locale, "Send an email enquiry", "Στείλτε email")}
            external={false}
          />
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-6 border-y border-border py-8">
          <span className="text-sm text-muted-foreground">
            {pick(locale, "Reviews & listings:", "Κριτικές και καταχωρίσεις:")}
          </span>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-deep transition-colors hover:text-primary"
          >
            <Image
              src={GOOGLE_REVIEWS_LOGO_URL}
              alt=""
              width={22}
              height={22}
              className="h-6 w-6"
            />
            Google Business
          </a>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-deep transition-colors hover:text-primary"
          >
            <Image
              src={TRIPADVISOR_LOGO_URL}
              alt=""
              width={96}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <span className="sr-only">Tripadvisor</span>
          </a>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl text-stone-deep">
              {pick(locale, "Email enquiry", "Αίτημα με email")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pick(
                locale,
                "Choose a residence and dates. Your mail app opens addressed to",
                "Διαλέξτε κατοικία και ημερομηνίες. Ανοίγει η εφαρμογή email προς",
              )}{" "}
              <strong>{EMAIL}</strong>.
            </p>
            <div className="mt-8">
              <ContactEnquiryForm locale={locale} />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-stone-deep">
              {pick(locale, "Where you'll find us", "Πού θα μας βρείτε")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pick(
                locale,
                "Kagiampakis Concept Residences, Avdou, Crete 70005 — about 31 minutes from Heraklion Airport (34.3 km) and 41 minutes from Heraklion port (37.5 km).",
                "Kagiampakis Concept Residences, Αβδού, Κρήτη 70005 — περίπου 31 λεπτά από το αεροδρόμιο Ηρακλείου (34,3 χλμ.) και 41 λεπτά από το λιμάνι (37,5 χλμ.).",
              )}{" "}
              <Link
                href={localizedHref(locale, "/getting-here")}
                className="text-primary underline-offset-4 hover:underline"
              >
                {pick(locale, "Getting here", "Πώς θα έρθετε")}
              </Link>
            </p>
            <div className="mt-6 overflow-hidden rounded-sm border border-border shadow-soft">
              <iframe
                title="Kagiampakis Concept Residences on Google Maps"
                src={GOOGLE_MAPS_EMBED_SRC}
                width="600"
                height="450"
                className="h-[min(50vh,420px)] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-sm">
              <a
                href="https://maps.google.com/?q=Kagiampakis+Concept+Residences+Avdou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                {pick(locale, "Open in Google Maps", "Άνοιγμα στους Χάρτες Google")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
