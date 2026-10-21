import type { ReactNode } from "react";
import Link from "next/link";
import { SitePhotoHero } from "@/components/site/site-hero";
import { ViberIcon, WhatsAppIcon } from "@/components/icons";
import { SITE_FAB_CLEAR_CLASS } from "@/lib/layout-constants";
import { MAILTO, VIBER_URL, WHATSAPP_URL } from "@/lib/site-constants";

const textLinkClass = "font-medium text-primary underline-offset-4 hover:underline";

interface GuidePageProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lede: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly children: ReactNode;
}

export function GuidePage({ eyebrow, title, lede, imageSrc, imageAlt, children }: GuidePageProps) {
  return (
    <main className="bg-cream text-foreground">
      <SitePhotoHero
        src={imageSrc}
        alt={imageAlt}
        kenBurns
        className="min-h-[min(62svh,640px)]"
        contentClassName="min-h-[min(62svh,640px)] max-w-6xl pb-14 sm:pb-16 lg:pb-20"
      >
        <p className="text-xs uppercase tracking-display text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.12] text-balance text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/88">{lede}</p>
      </SitePhotoHero>
      <article className="mx-auto max-w-3xl px-6 py-14 sm:py-16 lg:px-10 lg:py-20">
        <div className="space-y-10 text-base leading-relaxed text-foreground/85">{children}</div>
      </article>
      <section
        className={`bg-gradient-warm py-14 text-primary-foreground lg:py-20 ${SITE_FAB_CLEAR_CLASS}`}
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl">Stay in the village</h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base opacity-95">
            <Link
              href="/residences/concept-1"
              className="font-semibold underline underline-offset-4"
            >
              Residence I
            </Link>{" "}
            sleeps 6.{" "}
            <Link
              href="/residences/concept-2"
              className="font-semibold underline underline-offset-4"
            >
              Residence II
            </Link>{" "}
            sleeps 7. Together they sleep 13. Book direct with host Xrisa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-stone-deep shadow-soft transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp us
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
              href="/contact"
              className="inline-flex items-center rounded-full border border-cream/40 px-8 py-3.5 text-sm text-cream/95 hover:bg-cream/10"
            >
              Contact
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
    <section id={id} className="scroll-mt-header space-y-4">
      <h2 className="font-display text-3xl text-stone-deep">{title}</h2>
      {children}
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
    <Link href={href} className={textLinkClass}>
      {children}
    </Link>
  );
}
