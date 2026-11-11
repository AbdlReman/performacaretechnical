import type { Locale } from "../types";
import { ar } from "./ar";
import { en } from "./en";

export const dictionaries = { en, ar } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
