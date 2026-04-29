/**
 * Primary navigation — same labels and paths for desktop, mobile, and footer.
 */
export interface SiteNavItem {
  readonly href: string;
  readonly label: string;
}

/** Main pages (home is the logo only). Gallery & amenities live on The Villa. */
export const SITE_MAIN_PAGES: readonly SiteNavItem[] = [
  { href: "/villa", label: "The Villa" },
  { href: "/reviews", label: "Reviews" },
  { href: "/what-to-see", label: "What to See" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE_GALLERY_LINK: SiteNavItem = {
  href: "/villa#photos",
  label: "Gallery",
};

/** Homepage section anchors (no Gallery — use `SITE_GALLERY_LINK` / The Villa). */
export const SITE_HOME_ANCHORS: readonly SiteNavItem[] = [
  { href: "/#story", label: "The Story" },
  { href: "/#stay", label: "The Stay" },
  { href: "/#location", label: "Location" },
] as const;

/** Mobile sheet: single list without duplicate “old” anchors. */
export const SITE_MOBILE_NAV_LINKS: readonly SiteNavItem[] = [
  { href: "/", label: "Home" },
  ...SITE_MAIN_PAGES,
  SITE_GALLERY_LINK,
] as const;
