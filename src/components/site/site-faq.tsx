"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type FaqAnswerPart, SITE_FAQ } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

function FaqAnswer({ answer }: { readonly answer: readonly FaqAnswerPart[] }) {
  return answer.map((part, partIndex) => {
    if (typeof part === "string") {
      return <span key={partIndex}>{part}</span>;
    }
    return (
      <Link
        key={partIndex}
        href={part.href}
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {part.label}
      </Link>
    );
  });
}

export function SiteFaq({ className }: { readonly className?: string }) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {SITE_FAQ.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`} className="border-border px-1">
          <AccordionTrigger className="py-5 font-display text-left text-lg text-stone-deep hover:no-underline hover:text-primary md:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/80">
            <FaqAnswer answer={item.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
