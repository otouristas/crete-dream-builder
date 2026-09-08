import type { Metadata } from "next";
import Image from "next/image";
import { ContactEnquiryForm } from "@/components/site/contact-enquiry-form";
import { ContactChannelCard } from "@/components/site/contact-channels";
import { JsonLd } from "@/components/site/json-ld";
import { buildPageMetadata } from "@/lib/build-page-metadata";
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
  PHONE_2,
  PHONE_2_DISPLAY,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & direct booking",
  description:
    "WhatsApp, Viber, phone, and email for Kagiampakis Concept Residences in Avdou, Crete. Host Xrisa: +30 694 968 7227 and +30 698 221 0506. 31 minutes from Heraklion Airport.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className={`bg-cream text-foreground ${SITE_HEADER_PT_CLASS} ${SITE_FAB_CLEAR_CLASS}`}>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <div className={`${SITE_CONTAINER_CLASS} max-w-5xl py-12 lg:py-16`}>
        <p className="text-xs font-semibold uppercase tracking-display text-primary">
          Direct host booking
        </p>
        <h1 className="mt-2 font-display text-4xl text-stone-deep lg:text-5xl">
          Contact host Xrisa
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          The fastest way to reserve <strong>Residence I</strong> or <strong>Residence II</strong>{" "}
          is WhatsApp or Viber. We reply in Greek and English, usually within hours. Email works too
          — the form below opens your mail app.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactChannelCard
            href={WHATSAPP_1_URL}
            variant="whatsapp"
            eyebrow="WhatsApp primary"
            title={PHONE_1_DISPLAY}
            hint="Message Xrisa on WhatsApp"
          />
          <ContactChannelCard
            href={WHATSAPP_2_URL}
            variant="whatsapp-alt"
            eyebrow="WhatsApp secondary"
            title={PHONE_2_DISPLAY}
            hint="Message secondary WhatsApp"
          />
          <ContactChannelCard
            href={VIBER_1_URL}
            variant="viber"
            eyebrow="Viber primary"
            title={PHONE_1_DISPLAY}
            hint="Open Viber chat"
            external={false}
          />
          <ContactChannelCard
            href={VIBER_2_URL}
            variant="viber"
            eyebrow="Viber secondary"
            title={PHONE_2_DISPLAY}
            hint="Open Viber chat"
            external={false}
          />
          <ContactChannelCard
            href={`tel:${PHONE_1}`}
            variant="phone"
            eyebrow="Call primary"
            title={PHONE_1_DISPLAY}
            hint="Call host Xrisa"
            external={false}
          />
          <ContactChannelCard
            href={MAILTO}
            variant="email"
            eyebrow="Direct email"
            title={EMAIL}
            hint="Send an email enquiry"
            external={false}
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Secondary line:{" "}
          <a href={`tel:${PHONE_2}`} className="font-medium text-stone-deep hover:text-primary">
            {PHONE_2_DISPLAY}
          </a>
        </p>

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
            <h2 className="font-display text-2xl text-stone-deep">Email enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose a residence and dates. Your mail app opens addressed to{" "}
              <strong>{EMAIL}</strong>.
            </p>
            <div className="mt-8">
              <ContactEnquiryForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-stone-deep">Where you&apos;ll find us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Kagiampakis Concept Residences, Avdou, Crete 70005 — about 31 minutes from Heraklion
              Airport (34.3 km) and 41 minutes from Heraklion port (37.5 km).
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
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
