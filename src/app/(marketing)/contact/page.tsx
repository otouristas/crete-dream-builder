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
  PHONE_1,
  PHONE_1_DISPLAY,
  PHONE_2,
  PHONE_2_DISPLAY,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Direct Booking — Kagiampakis Concept Residences",
  description:
    "WhatsApp, Viber, email, and enquiry form for Kagiampakis Concept Residences I & II, Avdou. Phone contacts: +30 694 968 7227 and +30 698 221 0506. Map & airport directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS}`}>
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          Direct Host Booking
        </p>
        <h1 className="mt-2 font-display text-4xl text-stone-deep lg:text-5xl">
          Contact Host Xrisa
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          The fastest way to reserve dates or ask questions for <strong>Residence I</strong> or{" "}
          <strong>Residence II</strong> is WhatsApp, Viber, or Email. We reply in Greek and English,
          usually within hours.
        </p>

        {/* Primary Contact Buttons Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-sm bg-[#25D366] p-6 text-white shadow-warm transition-all hover:bg-[#20bd5a]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
              WhatsApp (Primary Phone)
            </span>
            <span className="font-display text-2xl">{PHONE_1_DISPLAY}</span>
            <span className="text-sm opacity-90">Message Xrisa on WhatsApp →</span>
          </a>

          <a
            href={WHATSAPP_2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-sm bg-stone-deep p-6 text-cream shadow-warm transition-all hover:bg-stone-deep/90"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              WhatsApp (Secondary Phone)
            </span>
            <span className="font-display text-2xl">{PHONE_2_DISPLAY}</span>
            <span className="text-sm opacity-90">Message Secondary Phone →</span>
          </a>

          <a
            href={VIBER_1_URL}
            className="flex flex-col gap-2 rounded-sm bg-[#7360F2] p-6 text-white shadow-warm transition-all hover:bg-[#6351e3]"
          >
            <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
              Viber Message
            </span>
            <span className="font-display text-2xl">{PHONE_1_DISPLAY}</span>
            <span className="text-sm opacity-90">Open Viber Chat →</span>
          </a>

          <a
            href={`tel:${PHONE_1}`}
            className="flex flex-col gap-2 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Direct Call (Primary)
            </span>
            <span className="font-display text-2xl text-stone-deep">{PHONE_1_DISPLAY}</span>
            <span className="text-sm text-primary">Call Host Xrisa →</span>
          </a>

          <a
            href={`tel:${PHONE_2}`}
            className="flex flex-col gap-2 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Direct Call (Secondary)
            </span>
            <span className="font-display text-2xl text-stone-deep">{PHONE_2_DISPLAY}</span>
            <span className="text-sm text-primary">Call Secondary Line →</span>
          </a>

          <a
            href={MAILTO}
            className="flex flex-col gap-2 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Direct Email
            </span>
            <span className="font-display break-all text-2xl text-stone-deep">{EMAIL}</span>
            <span className="text-sm text-primary">Send Email Enquiry →</span>
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
            Tripadvisor
          </a>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl text-stone-deep">Direct Email Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select your residence preference and dates to send a message directly to{" "}
              <strong>{EMAIL}</strong>.
            </p>
            <div className="mt-8">
              <ContactEnquiryForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-stone-deep">Where You&apos;ll Find Us</h2>
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
              <a
                href="https://maps.google.com/?q=Kagiampakis+Concept+Residences+Avdou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Open in Google Maps →
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
