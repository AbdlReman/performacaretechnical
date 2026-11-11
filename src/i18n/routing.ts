import type { Locale } from "./types";

export const locales = ["en", "ar"] as const;
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ar";
}

/** Build a public URL for the given locale (en has no prefix). */
export function localizedPath(path: string, locale: Locale): string {
  const [beforeHash, hash] = path.split("#");
  const [beforeQuery, query] = beforeHash.split("?");
  let clean = !beforeQuery || beforeQuery === "/" ? "/" : beforeQuery.startsWith("/") ? beforeQuery : `/${beforeQuery}`;

  let result: string;
  if (locale === "ar") {
    if (clean === "/") result = "/ar";
    else if (clean.startsWith("/ar/") || clean === "/ar") result = clean;
    else result = `/ar${clean}`;
  } else {
    if (clean === "/ar") result = "/";
    else if (clean.startsWith("/ar/")) result = clean.slice(3) || "/";
    else result = clean;
  }

  if (query) result += `?${query}`;
  if (hash !== undefined && path.includes("#")) result += `#${hash}`;
  return result;
}

/** Detect locale from a pathname. */
export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "en";
}

/** Path without locale prefix, always starting with /. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  // Internal rewritten /en paths
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname || "/";
}
