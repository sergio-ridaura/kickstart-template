import en from "./en.ts";
import es from "./es.ts";

export const languages = {
  en: "in English",
  es: "en Español",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
} as const;
