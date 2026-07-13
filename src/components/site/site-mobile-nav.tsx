"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  MAILTO,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
} from "@/lib/site-constants";
import {
  SITE_RESIDENCES_LINKS,
  SITE_TOP_LEVEL_PAGES,
  SITE_CALCULATOR_LINK,
} from "@/lib/nav-config";
import { WhatsAppIcon, ViberIcon } from "@/components/icons";

export function SiteMobileNav() {
  const [residencesOpen, setResidencesOpen] = useState(false);

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
          {/* Home */}
          <Link
            href="/"
            className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Home
          </Link>

          {/* Residences — Collapsible Group */}
          <button
            type="button"
            onClick={() => setResidencesOpen((prev) => !prev)}
            className="flex items-center justify-between rounded-md px-4 py-3.5 text-left text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Residences</span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${residencesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {residencesOpen && (
            <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
              {SITE_RESIDENCES_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-base text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary"
                >
                  <span className="font-medium">{link.label}</span>
                  {link.description && (
                    <span className="ml-2 text-xs text-muted-foreground">{link.description}</span>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Top-level pages */}
          {SITE_TOP_LEVEL_PAGES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          ))}

          {/* Calculator link */}
          <Link
            href={SITE_CALCULATOR_LINK.href}
            className="rounded-md px-4 py-3.5 text-lg text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SITE_CALCULATOR_LINK.label}
          </Link>

          {/* Quick Contact Actions */}
          <div className="mt-auto flex flex-col gap-3 border-t border-border/60 px-2 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <a
              href={WHATSAPP_1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-base font-medium text-white shadow-soft transition-colors hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp — {PHONE_1_DISPLAY}
            </a>
            <a
              href={WHATSAPP_2_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366]/90 px-5 py-4 text-base font-medium text-white shadow-soft transition-colors hover:bg-[#25D366]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp — {PHONE_2_DISPLAY}
            </a>
            <a
              href={VIBER_1_URL}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7360F2] px-5 py-4 text-base font-medium text-white shadow-soft transition-colors hover:bg-[#6351e3]"
            >
              <ViberIcon className="h-5 w-5" />
              Viber Chat
            </a>
            <a
              href={MAILTO}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary/30 bg-card px-5 py-4 text-base font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Email an enquiry
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
