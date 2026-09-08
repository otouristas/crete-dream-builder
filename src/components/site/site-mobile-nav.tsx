"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ContactChannelRow } from "@/components/site/contact-channels";
import {
  MAILTO,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import {
  SITE_CALCULATOR_LINK,
  SITE_RESIDENCES_LINKS,
  SITE_TOP_LEVEL_PAGES,
} from "@/lib/nav-config";

export function SiteMobileNav() {
  const [open, setOpen] = useState(false);
  const [residencesOpen, setResidencesOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
            onClick={close}
            className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => setResidencesOpen((prev) => !prev)}
            aria-expanded={residencesOpen}
            className="flex items-center justify-between rounded-md px-4 py-3.5 text-left text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Residences</span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${residencesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {residencesOpen ? (
            <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
              {SITE_RESIDENCES_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-md px-3 py-2.5 text-base text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary"
                >
                  <span className="font-medium">{link.label}</span>
                  {link.description ? (
                    <span className="ml-2 text-xs text-muted-foreground">{link.description}</span>
                  ) : null}
                </Link>
              ))}
            </div>
          ) : null}

          {SITE_TOP_LEVEL_PAGES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={SITE_CALCULATOR_LINK.href}
            onClick={close}
            className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SITE_CALCULATOR_LINK.label}
          </Link>

          <div className="mt-auto flex flex-col gap-2.5 border-t border-border/60 px-2 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <ContactChannelRow
              href={WHATSAPP_1_URL}
              variant="whatsapp"
              label="WhatsApp"
              detail={PHONE_1_DISPLAY}
              className="h-12 rounded-full px-5 text-base"
            />
            <ContactChannelRow
              href={WHATSAPP_2_URL}
              variant="whatsapp-alt"
              label="WhatsApp"
              detail={PHONE_2_DISPLAY}
              className="h-12 rounded-full px-5 text-base"
            />
            <ContactChannelRow
              href={VIBER_1_URL}
              variant="viber"
              label="Viber chat"
              detail={PHONE_1_DISPLAY}
              external={false}
              className="h-12 rounded-full px-5 text-base"
            />
            <a
              href={MAILTO}
              className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-primary/30 bg-card px-5 text-base font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Email an enquiry
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
