import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { SiteFaq } from "@/components/site/site-faq";
import { SITE_FAQ } from "@/lib/faq-data";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { EMAIL, PHONE_1_DISPLAY, WHATSAPP_1_URL } from "@/lib/site-constants";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";

export function FaqPageView({ locale = "en" }: { readonly locale?: Locale }) {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd data={buildFaqJsonLd(locale)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          { name: pick(locale, "FAQ", "Ερωτήσεις"), path: localizedHref(locale, "/faq") },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} max-w-3xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          {pick(locale, "Answered clearly", "Ξεκάθαρες απαντήσεις")}
        </p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">
          {pick(locale, "Frequently asked questions", "Συχνές ερωτήσεις")}
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          <span className="font-semibold text-stone-deep">
            {pick(locale, "In short. ", "Με λίγα λόγια. ")}
          </span>
          {pick(
            locale,
            `Two residences in Avdou: up to 6 guests and up to 7, 13 when both are reserved. Check-in after 15:00, checkout before 12:00. Heraklion Airport is 34.3 km, about 31 minutes. ${SITE_FAQ.length} answers below.`,
            `Δύο κατοικίες στην Αβδού: έως 6 και έως 7 άτομα, 13 όταν κλείνουν και οι δύο. Check-in μετά τις 15:00, check-out πριν από τις 12:00. Το αεροδρόμιο Ηρακλείου απέχει 34,3 χλμ., περίπου 31 λεπτά. ${SITE_FAQ.length} απαντήσεις παρακάτω.`,
          )}
        </p>
        <div className="mt-10 rounded-sm border border-border bg-card px-5 sm:px-8">
          <SiteFaq locale={locale} />
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          {pick(locale, "Still deciding? Message", "Ακόμη το σκέφτεστε; Στείλτε μήνυμα στο")}{" "}
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            WhatsApp {PHONE_1_DISPLAY}
          </a>{" "}
          {pick(locale, "or email", "ή στο email")} {EMAIL}.{" "}
          {pick(locale, "See also", "Δείτε επίσης")}{" "}
          <Link
            href={localizedHref(locale, "/contact")}
            className="text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "Contact", "Επικοινωνία")}
          </Link>
          {", "}
          <Link
            href={localizedHref(locale, "/getting-here")}
            className="text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "getting here", "πώς θα έρθετε")}
          </Link>
          {", "}
          <Link
            href={localizedHref(locale, "/groups")}
            className="text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "groups", "ομάδες")}
          </Link>{" "}
          {pick(locale, "and the", "και τον")}{" "}
          <Link
            href={localizedHref(locale, "/#calculator")}
            className="text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "rate calculator", "υπολογιστή τιμών")}
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
