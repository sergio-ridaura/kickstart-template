import { defaultLang, languages } from "@src/i18n/ui";
import getLangI18n from "./getLang";

/**
 * Generates a URL object and label for language switching based on the current URL and language.
 */
const getSwitchI18n = (url: URL) => {
  const lang = getLangI18n(url);
  for (const [key, value] of Object.entries(languages)) {
    if (key !== lang) {
      if (key !== defaultLang) {
        const page = `/${key}${url.pathname}`;
        return {
          url: `${url.origin}${page}`,
          label: value,
        };
      } else {
        const page = `${url.pathname}`;
        const goTo = page.replace(`/${page.split("/")[1]}/`, "");
        return {
          url: `${url.origin}/${goTo}`,
          label: value,
        };
      }
    }
  }
};

export default getSwitchI18n;
