import Image from "next/image";
import Link from "next/link";
import {
  AIRBNB_RESI_1_URL,
  AIRBNB_RESI_2_URL,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEWS_LOGO_URL,
  INSTAGRAM_URL,
  MAILTO,
  PHONE_1,
  PHONE_1_DISPLAY,
  PHONE_2,
  PHONE_2_DISPLAY,
  REGISTRATION,
  SITE_DOMAIN,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import { SITE_HOME_ANCHORS, SITE_MAIN_PAGES } from "@/lib/nav-config";
import { WhatsAppIcon, ViberIcon, PhoneIcon, EmailIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-stone-deep text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex shrink-0 brightness-0 invert">
                <Image
                  src="/logo-final.png"
                  alt="Kagiampakis Concept Residences Logo"
                  width={96}
                  height={96}
                  className="h-20 w-20 object-contain opacity-95 sm:h-24 sm:w-24"
                />
              </span>
              <span className="font-display text-xl text-cream sm:text-2xl">
                Kagiampakis <br className="hidden sm:inline" />
                <span className="text-primary">Concept Residences</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Two traditional stone residences in Avdou, Crete — Concept Residence I (6 guests)
              &amp; Concept Residence II (7 guests). Hosted by the Kagiampakis family.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-cream/20 bg-cream/5 px-3 py-2 text-xs text-cream/90 transition-colors hover:border-primary hover:text-primary"
              >
                <Image
                  src={GOOGLE_REVIEWS_LOGO_URL}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0"
                />
                Google
              </a>
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-cream/20 bg-cream/5 px-3 py-2 text-xs text-cream/90 transition-colors hover:border-primary hover:text-primary"
              >
                <Image
                  src={TRIPADVISOR_LOGO_URL}
                  alt=""
                  width={88}
                  height={22}
                  className="h-5 w-auto shrink-0 object-contain opacity-90"
                />
                Tripadvisor
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-display text-primary">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-cream/85 transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              {SITE_MAIN_PAGES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {SITE_HOME_ANCHORS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-display text-primary">
              Book Direct &amp; Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-cream transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Primary ({PHONE_1_DISPLAY})
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_2_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]/80" />
                  WhatsApp Secondary ({PHONE_2_DISPLAY})
                </a>
              </li>
              <li>
                <a
                  href={VIBER_1_URL}
                  className="inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-primary"
                >
                  <ViberIcon className="h-4 w-4 text-[#7360F2]" />
                  Viber ({PHONE_1_DISPLAY})
                </a>
              </li>
              <li>
                <a
                  href={VIBER_2_URL}
                  className="inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-primary"
                >
                  <ViberIcon className="h-4 w-4 text-[#7360F2]/80" />
                  Viber ({PHONE_2_DISPLAY})
                </a>
              </li>
              <li>
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-primary"
                >
                  <EmailIcon className="h-4 w-4 text-primary" />
                  Email: {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-display text-primary">
              Direct Phone
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_1}`}
                  className="inline-flex items-center gap-2 font-medium text-cream transition-colors hover:text-primary"
                >
                  <PhoneIcon className="h-4 w-4 text-primary" />
                  {PHONE_1_DISPLAY} (Primary)
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_2}`}
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-primary"
                >
                  <PhoneIcon className="h-4 w-4 text-primary/70" />
                  {PHONE_2_DISPLAY} (Secondary)
                </a>
              </li>
            </ul>

            <h2 className="mt-6 text-xs font-semibold uppercase tracking-display text-primary">
              Airbnb Listings
            </h2>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href={AIRBNB_RESI_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 transition-colors hover:text-primary"
                >
                  Airbnb: Residence I (6 Guests)
                </a>
              </li>
              <li>
                <a
                  href={AIRBNB_RESI_2_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 transition-colors hover:text-primary"
                >
                  Airbnb: Residence II (7 Guests)
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 transition-colors hover:text-primary"
                >
                  Instagram @kagiampakis_residences
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 pt-10 text-xs text-cream/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>{REGISTRATION}</p>
            <p className="sm:text-right">
              © {new Date().getFullYear()} {SITE_DOMAIN}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
