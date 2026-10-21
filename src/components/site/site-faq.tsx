"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqText, SITE_FAQ } from "@/lib/faq-data";
import type { Locale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

export function SiteFaq({
  className,
  locale = "en",
}: {
  readonly className?: string;
  readonly locale?: Locale;
}) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {SITE_FAQ.map((item, index) => {
        const text = faqText(item, locale);
        return (
          <AccordionItem key={text.question} value={`faq-${index}`} className="border-border px-1">
            <AccordionTrigger className="py-5 font-display text-left text-lg text-stone-deep hover:no-underline hover:text-primary md:text-xl">
              {text.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/80">
              {text.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
