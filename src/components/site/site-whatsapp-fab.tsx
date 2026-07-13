"use client";

import { useState } from "react";
import {
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";
import { WhatsAppIcon, ViberIcon } from "@/components/icons";

export function SiteWhatsAppFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-40 flex flex-col items-end gap-3 md:bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] md:right-[calc(2rem+env(safe-area-inset-right,0px))]">
      {/* Expanded Quick Contact Popover */}
      {isOpen && (
        <div className="animate-slide-up-fade flex flex-col gap-2 rounded-lg border border-border bg-stone-deep/95 p-4 text-cream shadow-2xl backdrop-blur-md">
          <div className="border-b border-cream/15 pb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            Quick Direct Contact
          </div>

          {/* WhatsApp Primary */}
          <a
            href={WHATSAPP_1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md bg-[#25D366] px-3.5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp (Primary)</span>
            <span className="ml-auto text-[11px] opacity-90">{PHONE_1_DISPLAY}</span>
          </a>

          {/* WhatsApp Secondary */}
          <a
            href={WHATSAPP_2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md bg-[#25D366]/90 px-3.5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>WhatsApp (Secondary)</span>
            <span className="ml-auto text-[11px] opacity-90">{PHONE_2_DISPLAY}</span>
          </a>

          {/* Viber 1 */}
          <a
            href={VIBER_1_URL}
            className="flex items-center gap-3 rounded-md bg-[#7360F2] px-3.5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <ViberIcon className="h-4 w-4 shrink-0" />
            <span>Viber Primary</span>
            <span className="ml-auto text-[11px] opacity-90">{PHONE_1_DISPLAY}</span>
          </a>

          {/* Viber 2 */}
          <a
            href={VIBER_2_URL}
            className="flex items-center gap-3 rounded-md bg-[#7360F2]/90 px-3.5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <ViberIcon className="h-4 w-4 shrink-0" />
            <span>Viber Secondary</span>
            <span className="ml-auto text-[11px] opacity-90">{PHONE_2_DISPLAY}</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button — with pulsing glow */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Quick Direct Contacts (WhatsApp & Viber)"
        className="animate-fab-glow flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white/30 transition-transform hover:scale-105 focus-visible:outline-none"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
