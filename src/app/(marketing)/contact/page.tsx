import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactEnquiryForm } from "@/components/site/contact-enquiry-form";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { SITE_HEADER_PT_CLASS } from "@/lib/layout-constants";
import {
  EMAIL,
  GOOGLE_BUSINESS_URL,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_REVIEWS_LOGO_URL,
  MAILTO,
  PHONE_DISPLAY,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  WHATSAPP_URL,
} from "@/lib/site-constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "WhatsApp, email, and enquiry form for Kagiampakis Concept Residences, Avdou. Map, airport and port times, Google and Tripadvisor links. Book direct.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS}`}>
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-display text-primary">Book direct</p>
        <h1 className="mt-3 font-display text-4xl text-stone-deep lg:text-5xl">Contact us</h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          The fastest way to reserve dates or ask questions is WhatsApp or email. We reply in Greek
          and English, usually within hours.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-sm bg-primary p-6 text-primary-foreground shadow-warm transition-colors hover:bg-primary/90"
          >
            <span className="text-xs uppercase tracking-widest opacity-90">WhatsApp</span>
            <span className="font-display text-2xl">{PHONE_DISPLAY}</span>
            <span className="text-sm opacity-90">Message Xrisa →</span>
          </a>
          <a
            href={MAILTO}
            className="flex flex-col gap-2 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
            <span className="font-display break-all text-2xl text-stone-deep">{EMAIL}</span>
            <span className="text-sm text-primary">Send an enquiry →</span>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6 border-y border-border py-8">
          <span className="text-sm text-muted-foreground">Reviews &amp; listings:</span>
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
            Google
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
            Tripadvisor
          </a>
        </div>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl text-stone-deep">Email enquiry form</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fills your mail app with your message to {EMAIL}.
            </p>
            <div className="mt-8">
              <ContactEnquiryForm />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl text-stone-deep">Where you&apos;ll find us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Kagiampakis Concept Residences, Avdou — 31 min from Heraklion airport (34.3 km), 41
              min from Heraklion port (37.5 km).
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
              <Link
                href="https://maps.google.com/?q=Kagiampakis+Concept+Residences+Avdou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Open in Google Maps →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
