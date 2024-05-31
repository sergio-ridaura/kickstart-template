import { ui } from "@src/i18n/ui";

export default function getUrlI18n(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return `/${lang}` as keyof typeof ui;
  return "";
}
