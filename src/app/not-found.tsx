import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";

export default async function NotFound() {
  const requestHeaders = await headers();
  const locale: Locale = requestHeaders.get("x-locale") === "el" ? "el" : "en";

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-cream px-5 py-16 text-center">
      <Image
        src="/logo-final.png"
        alt=""
        width={96}
        height={96}
        className="mb-8 h-20 w-20 object-contain"
      />
      <p className="text-xs font-semibold uppercase tracking-display text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl text-stone-deep">
        {pick(locale, "Page not found", "Η σελίδα δεν βρέθηκε")}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        {pick(
          locale,
          "That link does not exist. The residences, rates, and WhatsApp booking are still right here.",
          "Αυτός ο σύνδεσμος δεν υπάρχει. Οι κατοικίες, οι τιμές και η κράτηση στο WhatsApp είναι εδώ.",
        )}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={localizedHref(locale, "/")}
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {pick(locale, "Back home", "Αρχική")}
        </Link>
        <Link
          href={localizedHref(locale, "/residences")}
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-stone-deep hover:border-primary"
        >
          {pick(locale, "View residences", "Οι κατοικίες")}
        </Link>
        <Link
          href={localizedHref(locale, "/contact")}
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-stone-deep hover:border-primary"
        >
          {pick(locale, "Contact", "Επικοινωνία")}
        </Link>
      </div>
    </div>
  );
}
