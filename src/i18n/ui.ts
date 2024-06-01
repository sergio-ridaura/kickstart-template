import en from "./en.ts";
import es from "./es.ts";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
} as const;
