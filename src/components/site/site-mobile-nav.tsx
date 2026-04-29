"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AIRBNB_URL, MAILTO, WHATSAPP_URL } from "@/lib/site-constants";
import { SITE_HOME_ANCHORS, SITE_MAIN_PAGES } from "@/lib/nav-config";

export function SiteMobileNav() {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-stone-deep lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="fullscreen"
        className="flex w-screen max-w-none flex-col border-0 bg-cream p-0"
      >
        <SheetHeader className="border-b border-border/60 px-6 py-5 text-left">
          <SheetTitle className="font-display text-2xl text-stone-deep">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Primary">
          <Link
            href="/"
            className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Home
          </Link>
          {SITE_MAIN_PAGES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}
          {SITE_HOME_ANCHORS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3 border-t border-border/60 px-2 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-4 text-base font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              WhatsApp — book direct
            </a>
            <a
              href={MAILTO}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary/30 bg-card px-5 py-4 text-base font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Email an enquiry
            </a>
            <button
              type="button"
              className="text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              onClick={() => router.push("/contact")}
            >
              Contact form &amp; map
            </button>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-muted-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Airbnb (optional third-party listing)
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
