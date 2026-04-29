"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  readonly src: string;
  readonly alt: string;
  readonly span?: string;
}

interface GalleryWithLightboxProps {
  readonly images: readonly GalleryImage[];
  readonly className?: string;
}

export function GalleryWithLightbox({ images, className }: GalleryWithLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const count = images.length;
  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);
  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);
  useEffect(() => {
    if (!open) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        goPrev();
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);
  return (
    <>
      <div
        className={cn(
          "grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:gap-4 lg:auto-rows-[220px] lg:grid-cols-4",
          className,
        )}
      >
        {images.map((it, i) => (
          <figure
            key={`${it.src}-${i}`}
            className={cn(
              "group relative overflow-hidden rounded-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring",
              it.span ?? "",
            )}
          >
            <button
              type="button"
              className="absolute inset-0 z-10 cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              aria-label={`Open image ${i + 1} in gallery`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
            <Image
              src={it.src}
              alt={it.alt}
              width={1200}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </figure>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="left-0 top-0 z-[60] flex h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 gap-0 border-0 bg-black p-0 text-cream shadow-none data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 sm:rounded-none [&>button]:text-cream [&>button]:hover:bg-cream/10 [&>button]:hover:text-stone-deep"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Photo {index + 1}</DialogTitle>
          <DialogDescription className="sr-only">
            Use arrows or keyboard to browse photos. Click outside or close to exit.
          </DialogDescription>
          <div className="relative flex h-[min(92dvh,900px)] w-full items-center justify-center px-12 sm:px-16">
            <Image
              key={images[index]?.src}
              src={images[index]?.src ?? ""}
              alt={images[index]?.alt ?? ""}
              fill
              className="object-contain p-4"
              sizes="100vw"
              priority={open}
            />
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-cream/90 text-stone-deep hover:bg-cream"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-cream/90 text-stone-deep hover:bg-cream"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-cream/70">
              {index + 1} / {count} · tap outside or Esc to close
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
