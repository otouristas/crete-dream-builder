/**
 * Primary navigation — labels and paths for desktop, mobile, and footer.
 */
export interface SiteNavItem {
  readonly href: string;
  readonly label: string;
  readonly description?: string;
}

/** Residences sub-menu items (dropdown children) */
export const SITE_RESIDENCES_LINKS: readonly SiteNavItem[] = [
  {
    href: "/residences/concept-1",
    label: "Residence I",
    description: "Up to 6 guests · 2 bedrooms · Min 2 nights",
  },
  {
    href: "/residences/concept-2",
    label: "Residence II",
    description: "Up to 7 guests · 3 bedrooms · Min 3 nights",
  },
  {
    href: "/residences",
    label: "Compare Both",
    description: "Side-by-side overview of both residences",
  },
  {
    href: "/#calculator",
    label: "Rates & Calculator",
    description: "Check live pricing and availability",
  },
] as const;

/** Top-level nav items (no dropdown) */
export const SITE_TOP_LEVEL_PAGES: readonly SiteNavItem[] = [
  { href: "/reviews", label: "Reviews" },
  { href: "/what-to-see", label: "What to See" },
  { href: "/contact", label: "Contact" },
] as const;

/** Flat list of all main pages (for footer, sitemap, etc.) */
export const SITE_MAIN_PAGES: readonly SiteNavItem[] = [
  { href: "/residences", label: "The Residences" },
  { href: "/residences/concept-1", label: "Residence I" },
  { href: "/residences/concept-2", label: "Residence II" },
  { href: "/reviews", label: "Reviews" },
  { href: "/what-to-see", label: "What to See" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE_CALCULATOR_LINK: SiteNavItem = {
  href: "/#calculator",
  label: "Rates & Calculator",
};

/** Homepage section anchors */
export const SITE_HOME_ANCHORS: readonly SiteNavItem[] = [
  { href: "/#residences", label: "Residences" },
  { href: "/#calculator", label: "Rates & Calculator" },
  { href: "/#story", label: "Our Story" },
  { href: "/#location", label: "Location" },
] as const;

/** Mobile sheet list */
export const SITE_MOBILE_NAV_LINKS: readonly SiteNavItem[] = [
  { href: "/", label: "Home" },
  ...SITE_MAIN_PAGES,
  SITE_CALCULATOR_LINK,
] as const;
