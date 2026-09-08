"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ContactChannelRow } from "@/components/site/contact-channels";
import { ViberIcon, WhatsAppIcon } from "@/components/icons";
import {
  PHONE_1_DISPLAY,
  PHONE_2_DISPLAY,
  VIBER_1_URL,
  VIBER_2_URL,
  WHATSAPP_1_URL,
  WHATSAPP_2_URL,
} from "@/lib/site-constants";

export function SiteWhatsAppFab() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    function onPointer(event: MouseEvent | TouchEvent) {
      const root = rootRef.current;
      if (root && event.target instanceof Node && !root.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-40 flex flex-col items-end gap-3 md:bottom-[calc(1.75rem+env(safe-area-inset-bottom,0px))] md:right-[calc(1.75rem+env(safe-area-inset-right,0px))]"
    >
      {isOpen ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Direct WhatsApp and Viber contact"
          className="animate-slide-up-fade w-[min(20.5rem,calc(100vw-2.5rem))] rounded-lg border border-border bg-stone-deep/96 p-4 text-cream shadow-2xl backdrop-blur-md"
        >
          <p className="border-b border-cream/15 pb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            Chat with host Xrisa
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <ContactChannelRow
              href={WHATSAPP_1_URL}
              variant="whatsapp"
              label="WhatsApp primary"
              detail={PHONE_1_DISPLAY}
            />
            <ContactChannelRow
              href={WHATSAPP_2_URL}
              variant="whatsapp-alt"
              label="WhatsApp secondary"
              detail={PHONE_2_DISPLAY}
            />
            <ContactChannelRow
              href={VIBER_1_URL}
              variant="viber"
              label="Viber primary"
              detail={PHONE_1_DISPLAY}
              external={false}
            />
            <ContactChannelRow
              href={VIBER_2_URL}
              variant="viber"
              label="Viber secondary"
              detail={PHONE_2_DISPLAY}
              external={false}
              className="bg-[#7360F2]/90"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col items-end gap-2.5">
        <a
          href={VIBER_1_URL}
          aria-label={`Open Viber chat with Xrisa at ${PHONE_1_DISPLAY}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-soft ring-2 ring-white/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ViberIcon className="h-6 w-6" />
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={
            isOpen ? "Close WhatsApp and Viber options" : "Open WhatsApp and Viber options"
          }
          className="animate-fab-glow flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
