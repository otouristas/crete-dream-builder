"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_FAQ } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export function SiteFaq({ className }: { readonly className?: string }) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {SITE_FAQ.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
          <AccordionTrigger className="font-display text-left text-lg text-stone-deep hover:no-underline hover:text-primary md:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-foreground/80">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
