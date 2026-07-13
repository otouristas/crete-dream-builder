/** Fixed header bar height — keep in sync with `SiteNav`. */
export const SITE_HEADER_HEIGHT_CLASS = "h-[4.25rem]";

/** Content offset below fixed header (inner pages, footers). */
export const SITE_HEADER_PT_CLASS =
  "pt-[calc(5.5rem+env(safe-area-inset-top,0px))] lg:pt-[calc(6.5rem+env(safe-area-inset-top,0px))]";

/**
 * Hero / full-bleed sections: clears the fixed header + iOS safe area.
 */
export const SITE_HERO_HEADER_PAD_CLASS =
  "pt-[calc(6rem+env(safe-area-inset-top,0px))] lg:pt-[calc(7.5rem+env(safe-area-inset-top,0px))]";
