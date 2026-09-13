/** Fixed header bar height — keep in sync with `SiteNav`. */
export const SITE_HEADER_HEIGHT_CLASS = "h-[4.5rem] lg:h-20";

/** Content offset below fixed header (inner pages). */
export const SITE_HEADER_PT_CLASS =
  "pt-[calc(5.75rem+env(safe-area-inset-top,0px))] lg:pt-[calc(6.5rem+env(safe-area-inset-top,0px))]";

/**
 * Hero / full-bleed sections: clears the fixed header + iOS safe area.
 * Applied on the content wrapper only so photography stays edge-to-edge.
 */
export const SITE_HERO_HEADER_PAD_CLASS =
  "pt-[calc(6.25rem+env(safe-area-inset-top,0px))] lg:pt-[calc(7.25rem+env(safe-area-inset-top,0px))]";

export const SITE_CONTAINER_CLASS = "mx-auto max-w-7xl px-5 sm:px-6 lg:px-10";

export const SITE_SECTION_Y_CLASS = "py-16 sm:py-20 lg:py-28";

/** Extra bottom space so the chat FABs never cover CTAs. */
export const SITE_FAB_CLEAR_CLASS = "pb-28 sm:pb-24";
