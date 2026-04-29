import Image from "next/image";
import Link from "next/link";
import {
  AIRBNB_URL,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEWS_LOGO_URL,
  INSTAGRAM_URL,
  MAILTO,
  PHONE,
  PHONE_DISPLAY,
  REGISTRATION,
  TRIPADVISOR_LOGO_URL,
  TRIPADVISOR_URL,
  WHATSAPP_URL,
} from "@/lib/site-constants";
import { SITE_GALLERY_LINK, SITE_HOME_ANCHORS, SITE_MAIN_PAGES } from "@/lib/nav-config";

export function SiteFooter() {
  return (
    <footer className="bg-stone-deep text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex shrink-0 brightness-0 invert">
                <Image
                  src="/logo.png"
                  alt="Kagiampakis Concept Residences"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain opacity-95 sm:h-28 sm:w-28"
                />
              </span>
              <span className="font-display text-xl text-cream sm:text-2xl">
                Kagiampakis Residences
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Traditional stone villa in Avdou, Crete — renovated with care, hosted by the
              Kagiampakis family. Book direct by WhatsApp or email for the best experience.
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
            <h2 className="text-xs font-medium uppercase tracking-display text-primary">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Home
                </Link>
              </li>
              {SITE_MAIN_PAGES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={SITE_GALLERY_LINK.href}
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {SITE_GALLERY_LINK.label}
                </Link>
              </li>
              {SITE_HOME_ANCHORS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-display text-primary">
              Book direct
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cream transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  WhatsApp — fastest reply
                </a>
              </li>
              <li>
                <a
                  href={MAILTO}
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Email {EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Contact form &amp; map
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-display text-primary">Also on</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={AIRBNB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Airbnb (optional)
                </a>
              </li>
            </ul>
            <h2 className="mt-8 text-xs font-medium uppercase tracking-display text-primary">
              Phone
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="text-cream/85 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-cream/10 pt-10 text-xs text-cream/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>{REGISTRATION}</p>
            <p className="sm:text-right">
              © {new Date().getFullYear()} Kagiampakis Residences. All rights reserved.
            </p>
          </div>
          <p className="text-center sm:text-left">
            Made by{" "}
            <a
              href="https://anotherseoguru.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              anotherseoguru.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
