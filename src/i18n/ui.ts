import en from "@/src/i18n/en.ts";
import es from "@/src/i18n/es.ts";

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
