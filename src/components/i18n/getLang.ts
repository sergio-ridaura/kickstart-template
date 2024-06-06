import { ui, defaultLang } from "@src/i18n/ui";

/**
 * Determines the language for internationalization (i18n) based on the URL pathname.
 */
export const getLangI18n = (url: URL) => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};
