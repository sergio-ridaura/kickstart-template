import { ui, defaultLang } from "@src/i18n/ui";
import { getLangI18n } from "..";

export default function translateI18n(url: URL) {
  const lang = getLangI18n(url);
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
