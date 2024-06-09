import en from "./en.ts";
import es from "./es.ts";

const languages = {
  en: "English",
  es: "Español",
};

const defaultLang = "en";

const ui = {
  en,
  es,
} as const;

export { languages, defaultLang, ui };
