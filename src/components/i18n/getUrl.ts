import { ui } from "@src/i18n/ui";

/**
 * Retrieves the language code from the URL pathname.
 */
export const getUrlI18n = (url: URL) => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return `/${lang}` as keyof typeof ui;
  return "";
};
