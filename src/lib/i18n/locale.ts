export type Locale = "en" | "el";

export interface LocalePathPair {
  readonly en: string;
  readonly el: string;
}

/**
 * English path is the canonical key. Greek slugs follow the content plan
 * where a Greek keyword needs its own path; everything else keeps the same slug under /el.
 */
export const LOCALE_PATHS: readonly LocalePathPair[] = [
  { en: "/", el: "/el" },
  { en: "/residences", el: "/el/residences" },
  { en: "/residences/concept-1", el: "/el/residences/concept-1" },
  { en: "/residences/concept-2", el: "/el/residences/concept-2" },
  { en: "/reviews", el: "/el/reviews" },
  { en: "/what-to-see", el: "/el/what-to-see" },
  { en: "/faq", el: "/el/faq" },
  { en: "/contact", el: "/el/contact" },
  { en: "/privacy", el: "/el/privacy" },
  { en: "/villa", el: "/el/villa" },
  { en: "/avdou-village", el: "/el/avdou" },
  { en: "/lasithi-plateau", el: "/el/oropedio-lasithiou" },
  { en: "/day-trips", el: "/el/ekdromes" },
  { en: "/getting-here", el: "/el/getting-here" },
  { en: "/groups", el: "/el/omades" },
] as const;

const BY_EN = new Map(LOCALE_PATHS.map((pair) => [pair.en, pair]));
const BY_EL = new Map(LOCALE_PATHS.map((pair) => [pair.el, pair]));

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "el";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/el" || pathname.startsWith("/el/") ? "el" : "en";
}

function splitHref(href: string): { path: string; suffix: string } {
  const hashIndex = href.indexOf("#");
  const queryIndex = href.indexOf("?");
  const cut = [hashIndex, queryIndex].filter((index) => index >= 0).sort((a, b) => a - b)[0];
  if (cut === undefined) {
    return { path: href, suffix: "" };
  }
  return { path: href.slice(0, cut), suffix: href.slice(cut) };
}

export function greekPath(englishPath: string): string {
  const known = BY_EN.get(englishPath);
  if (known) {
    return known.el;
  }
  if (englishPath === "/el" || englishPath.startsWith("/el/")) {
    return englishPath;
  }
  return englishPath === "/" ? "/el" : `/el${englishPath}`;
}

export function englishPath(path: string): string {
  const known = BY_EL.get(path) ?? BY_EN.get(path);
  if (known) {
    return known.en;
  }
  if (path === "/el") {
    return "/";
  }
  if (path.startsWith("/el/")) {
    return path.slice(3) || "/";
  }
  return path;
}

export function localizedHref(locale: Locale, href: string): string {
  if (
    locale === "en" ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("viber:")
  ) {
    return href;
  }
  const { path, suffix } = splitHref(href);
  const normalized = path === "" ? "/" : path;
  return `${greekPath(englishPath(normalized))}${suffix}`;
}

export function alternatePath(pathname: string): string {
  const { path, suffix } = splitHref(pathname);
  const locale = localeFromPathname(path);
  const target = locale === "el" ? englishPath(path) : greekPath(englishPath(path));
  return `${target}${suffix}`;
}

export function hreflangPaths(path: string): { en: string; el: string; xDefault: string } {
  const en = englishPath(path);
  const el = greekPath(en);
  return { en, el, xDefault: en };
}

export function pick<T>(locale: Locale, en: T, el: T): T {
  return locale === "el" ? el : en;
}
