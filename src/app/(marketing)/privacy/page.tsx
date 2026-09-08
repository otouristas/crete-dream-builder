import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import {
  SITE_CONTAINER_CLASS,
  SITE_FAB_CLEAR_CLASS,
  SITE_HEADER_PT_CLASS,
} from "@/lib/layout-constants";
import { EMAIL, PHONE_1_DISPLAY, SITE_DOMAIN } from "@/lib/site-constants";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "How Kagiampakis Concept Residences handles booking enquiries, WhatsApp, Viber, and email contact data in Avdou, Crete.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <article className={`${SITE_CONTAINER_CLASS} max-w-3xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">Legal</p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">Privacy notice</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 8 September 2026</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            This site is operated by the Kagiampakis family for{" "}
            <strong>Kagiampakis Concept Residences</strong> in Avdou, Crete ({SITE_DOMAIN}). We
            process only the information you choose to send when you enquire about a stay.
          </p>
          <h2 className="font-display text-2xl text-stone-deep">What we collect</h2>
          <p>
            The enquiry form opens your own email app addressed to {EMAIL}. We do not store that
            form on this website. If you write via WhatsApp, Viber, phone ({PHONE_1_DISPLAY}), or
            email, we receive your name, number or address, dates, guest count, and any message you
            include, so we can reply and confirm a booking.
          </p>
          <h2 className="font-display text-2xl text-stone-deep">Why we use it</h2>
          <p>
            We use your details solely to answer questions, hold dates, and host your stay. We do
            not sell personal data. Messages may remain in our phone or inbox for the length of the
            reservation and a reasonable period afterwards for accounting and guest history.
          </p>
          <h2 className="font-display text-2xl text-stone-deep">Cookies and analytics</h2>
          <p>
            This marketing site does not set advertising cookies. Hosting may log standard technical
            requests (IP address, browser, page path) needed to deliver the pages. Embedded Google
            Maps on the contact page is provided by Google and follows Google&apos;s privacy terms
            when you interact with the map.
          </p>
          <h2 className="font-display text-2xl text-stone-deep">Your rights</h2>
          <p>
            You may ask to access, correct, or delete the enquiry data we hold, or object to further
            contact, by emailing {EMAIL}. For complaints you may also contact the Hellenic Data
            Protection Authority (dpa.gr).
          </p>
          <p>
            Questions? Use the{" "}
            <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
              contact page
            </Link>{" "}
            or {EMAIL}.
          </p>
        </div>
      </article>
    </main>
  );
}
