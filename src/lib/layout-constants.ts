/** Fixed header bar height — keep in sync with `SiteNav`. */
export const SITE_HEADER_HEIGHT_CLASS = "h-[4.25rem]";

/** Content offset below fixed header (inner pages, footers). */
export const SITE_HEADER_PT_CLASS = "pt-[4.25rem]";

/**
 * Hero / full-bleed sections: clears the fixed header + iOS safe area. Use on the *content*
 * wrapper, not the full-bleed image section, so photography stays edge-to-edge.
 */
export const SITE_HERO_HEADER_PAD_CLASS = "pt-[calc(4.25rem+env(safe-area-inset-top,0px))]";
