import { ui, defaultLang } from "@/src/i18n/ui";
import getLangI18n from "@/src/components/astro/i18n/getLang";

/**
 * Creates a translation function based on the current URL language.
 */
const translateI18n = (url: URL) => {
  const lang = getLangI18n(url);
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
};

export default translateI18n;
