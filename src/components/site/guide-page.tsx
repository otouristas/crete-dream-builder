import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { SitePhotoHero } from "@/components/site/site-hero";
import { ViberIcon, WhatsAppIcon } from "@/components/icons";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { SITE_FAB_CLEAR_CLASS } from "@/lib/layout-constants";
import { EMAIL, MAILTO, VIBER_1_URL, WHATSAPP_1_URL } from "@/lib/site-constants";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export function GuidePage({
  locale,
  path,
  eyebrow,
  h1,
  lede,
  inShort,
  image,
  children,
}: {
  readonly locale: Locale;
  readonly path: string;
  readonly eyebrow: string;
  readonly h1: string;
  readonly lede: string;
  readonly inShort: string;
  readonly image: { readonly src: string; readonly alt: string };
  readonly children: ReactNode;
}) {
  return (
    <main className={`bg-cream text-foreground ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: pick(locale, "Home", "Αρχική"), path: localizedHref(locale, "/") },
          { name: h1, path },
        ])}
      />
      <SitePhotoHero
        src={image.src}
        alt={image.alt}
        kenBurns
        className="min-h-[min(62svh,640px)]"
        contentClassName="min-h-[min(62svh,640px)] max-w-6xl pb-14 sm:pb-16 lg:pb-20"
      >
        <p className="text-xs uppercase tracking-display text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.12] text-balance text-cream sm:text-5xl lg:text-6xl">
          {h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">{lede}</p>
      </SitePhotoHero>
      <article className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
        <p className="text-base leading-relaxed text-foreground/85">
          <span className="font-semibold text-stone-deep">
            {pick(locale, "In short. ", "Με λίγα λόγια. ")}
          </span>
          {inShort}
        </p>
        <div className="mt-10 space-y-10">{children}</div>
      </article>
      <section className="bg-gradient-warm py-14 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">
            {pick(locale, "Stay in Avdou", "Μείνετε στην Αβδού")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base opacity-95">
            {pick(
              locale,
              "Residence I sleeps up to 6 and Residence II sleeps up to 7. They are two residences in Avdou. Message Xrisa in Greek or English.",
              "Η Κατοικία I φιλοξενεί έως 6 άτομα και η Κατοικία II έως 7. Είναι δύο κατοικίες στην Αβδού. Στείλτε μήνυμα στη Χρύσα, στα ελληνικά ή στα αγγλικά.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-stone-deep shadow-soft"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={VIBER_1_URL}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/75 px-6 py-3 text-sm font-semibold text-cream"
            >
              <ViberIcon className="h-4 w-4" />
              Viber
            </a>
            <a
              href={MAILTO}
              className="inline-flex rounded-full border-2 border-cream/75 px-6 py-3 text-sm font-semibold text-cream"
            >
              {EMAIL}
            </a>
            <Link
              href={localizedHref(locale, "/contact")}
              className="inline-flex items-center rounded-full border border-cream/40 px-6 py-3 text-sm text-cream/95"
            >
              {pick(locale, "Contact", "Επικοινωνία")}
            </Link>
            <Link
              href={localizedHref(locale, "/residences/concept-1")}
              className="inline-flex items-center rounded-full border border-cream/40 px-6 py-3 text-sm text-cream/95"
            >
              {pick(locale, "Residence I", "Κατοικία I")}
            </Link>
            <Link
              href={localizedHref(locale, "/residences/concept-2")}
              className="inline-flex items-center rounded-full border border-cream/40 px-6 py-3 text-sm text-cream/95"
            >
              {pick(locale, "Residence II", "Κατοικία II")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function GuideSection({
  id,
  title,
  children,
}: {
  readonly id?: string;
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-header">
      <h2 className="font-display text-3xl text-stone-deep">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}

export function TextLink({
  href,
  children,
}: {
  readonly href: string;
  readonly children: ReactNode;
}) {
  return (
    <Link href={href} className="font-medium text-primary underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}
