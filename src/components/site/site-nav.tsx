import Image from "next/image";
import Link from "next/link";
import { SITE_HEADER_HEIGHT_CLASS } from "@/lib/layout-constants";
import { SITE_GALLERY_LINK, SITE_MAIN_PAGES } from "@/lib/nav-config";
import { WHATSAPP_URL } from "@/lib/site-constants";
import { SiteMobileNav } from "@/components/site/site-mobile-nav";

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-cream/90 backdrop-blur-md">
      <nav
        className={`mx-auto flex ${SITE_HEADER_HEIGHT_CLASS} max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-10`}
        aria-label="Primary"
      >
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Kagiampakis Concept Residences"
            width={160}
            height={160}
            className="h-14 w-14 shrink-0 object-contain sm:h-[4rem] sm:w-[4rem]"
            priority
          />
          <span className="font-display hidden min-w-0 truncate text-base tracking-wide text-stone-deep md:inline lg:text-lg">
            Kagiampakis <span className="text-primary">Residences</span>
          </span>
        </Link>
        <div className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-muted-foreground lg:flex">
          {SITE_MAIN_PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={SITE_GALLERY_LINK.href}
            className="whitespace-nowrap transition-colors hover:text-primary"
          >
            {SITE_GALLERY_LINK.label}
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary/90 sm:inline-flex md:text-sm"
          >
            WhatsApp
          </a>
          <SiteMobileNav />
        </div>
      </nav>
    </header>
  );
}
