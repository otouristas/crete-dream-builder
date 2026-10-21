import { pick, type Locale } from "@/lib/i18n/locale";

export interface ChromeLink {
  readonly href: string;
  readonly label: string;
  readonly description?: string;
}

export function chrome(locale: Locale) {
  const residences: readonly ChromeLink[] = [
    {
      href: "/residences/concept-1",
      label: pick(locale, "Residence I", "Κατοικία I"),
      description: pick(
        locale,
        "Up to 6 guests · 2 bedrooms · Min 2 nights",
        "Έως 6 άτομα · 2 υπνοδωμάτια · Ελάχιστο 2 διανυκτερεύσεις",
      ),
    },
    {
      href: "/residences/concept-2",
      label: pick(locale, "Residence II", "Κατοικία II"),
      description: pick(
        locale,
        "Up to 7 guests · 3 bedrooms · Min 3 nights",
        "Έως 7 άτομα · 3 υπνοδωμάτια · Ελάχιστο 3 διανυκτερεύσεις",
      ),
    },
    {
      href: "/residences",
      label: pick(locale, "Compare Both", "Δείτε και τις δύο"),
      description: pick(
        locale,
        "Side-by-side overview of both residences",
        "Σύντομη παρουσίαση και των δύο κατοικιών στην Αβδού",
      ),
    },
    {
      href: "/#calculator",
      label: pick(locale, "Rates & Calculator", "Τιμές και υπολογιστής"),
      description: pick(
        locale,
        "Check live pricing and availability",
        "Δείτε τιμή και διαθεσιμότητα",
      ),
    },
  ];

  const top: readonly ChromeLink[] = [
    { href: "/reviews", label: pick(locale, "Reviews", "Κριτικές") },
    { href: "/what-to-see", label: pick(locale, "What to See", "Τι να δείτε") },
    { href: "/faq", label: pick(locale, "FAQ", "Ερωτήσεις") },
    { href: "/contact", label: pick(locale, "Contact", "Επικοινωνία") },
  ];

  const guides: readonly ChromeLink[] = [
    { href: "/avdou-village", label: pick(locale, "Avdou village", "Το χωριό Αβδού") },
    { href: "/lasithi-plateau", label: pick(locale, "Lasithi Plateau", "Οροπέδιο Λασιθίου") },
    { href: "/day-trips", label: pick(locale, "Day trips", "Ημερήσιες εκδρομές") },
    { href: "/getting-here", label: pick(locale, "Getting here", "Πώς θα έρθετε") },
    { href: "/groups", label: pick(locale, "Groups & families", "Ομάδες και οικογένειες") },
  ];

  return {
    home: pick(locale, "Home", "Αρχική"),
    residencesLabel: pick(locale, "Residences", "Κατοικίες"),
    menu: pick(locale, "Menu", "Μενού"),
    openMenu: pick(locale, "Open menu", "Άνοιγμα μενού"),
    explore: pick(locale, "Explore", "Περιήγηση"),
    guidesLabel: pick(locale, "Guides", "Οδηγοί"),
    bookDirect: pick(locale, "Book direct", "Απευθείας κράτηση"),
    language: pick(locale, "ΕΛ", "EN"),
    residences,
    top,
    guides,
    legal: [
      { href: "/faq", label: pick(locale, "FAQ", "Ερωτήσεις") },
      { href: "/privacy", label: pick(locale, "Privacy", "Απόρρητο") },
    ] as const,
    anchors: [
      { href: "/#residences", label: pick(locale, "Residences", "Κατοικίες") },
      { href: "/#calculator", label: pick(locale, "Rates & Calculator", "Τιμές και υπολογιστής") },
      { href: "/#story", label: pick(locale, "Our Story", "Η ιστορία μας") },
      { href: "/#location", label: pick(locale, "Location", "Τοποθεσία") },
      { href: "/#faq", label: pick(locale, "FAQ", "Ερωτήσεις") },
    ] as const,
  };
}
