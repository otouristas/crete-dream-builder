import type { ReactNode } from "react";
import Image from "next/image";
import { SITE_HERO_HEADER_PAD_CLASS } from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

/** Darkens the lower third for type while keeping the photo visible. */
export const SITE_HERO_OVERLAY_CLASS =
  "absolute inset-0 bg-gradient-to-b from-stone-deep/30 via-stone-deep/40 to-stone-deep/80";

interface SitePhotoHeroProps {
  readonly src: string;
  readonly alt: string;
  readonly children: ReactNode;
  readonly id?: string;
  readonly labelledBy?: string;
  readonly className?: string;
  readonly contentClassName?: string;
  readonly overlayClassName?: string;
  readonly kenBurns?: boolean;
  readonly priority?: boolean;
  readonly padHeader?: boolean;
  /** Push children to the bottom when there is spare height (safe — uses mt-auto). */
  readonly alignEnd?: boolean;
}

export function SitePhotoHero({
  src,
  alt,
  children,
  id,
  labelledBy,
  className,
  contentClassName,
  overlayClassName = SITE_HERO_OVERLAY_CLASS,
  kenBurns = false,
  priority = true,
  padHeader = true,
  alignEnd = true,
}: SitePhotoHeroProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative w-full overflow-hidden bg-stone-deep", className)}
    >
      <div className="absolute inset-0">
        <div
          className={cn("absolute inset-0", kenBurns && "animate-ken-burns will-change-transform")}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className={overlayClassName} aria-hidden />
      <div
        className={cn(
          // Literal pad utilities kept here so Tailwind always emits them even if
          // layout-constants scanning fails. Never put justify-end on this flex
          // row — oversized copy overflows upward under the fixed header after
          // mobile chrome show/hide on scroll. mt-auto on the inner block is safe.
          "relative z-10 mx-auto flex w-full max-w-7xl flex-col px-7 sm:px-8 lg:px-10",
          padHeader && SITE_HERO_HEADER_PAD_CLASS,
          padHeader &&
            "pt-[calc(7.5rem+env(safe-area-inset-top,0px))] lg:pt-[calc(8.5rem+env(safe-area-inset-top,0px))]",
          contentClassName,
        )}
      >
        <div className={cn(alignEnd && "mt-auto", "w-full min-w-0")}>{children}</div>
      </div>
    </section>
  );
}
