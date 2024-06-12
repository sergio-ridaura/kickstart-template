import pkg from "./../package.json";
// import { languages, defaultLang } from "@/src/i18n/ui"

export const PUBLIC_SITE_TITLE= import.meta.env.PUBLIC_SITE_TITLE || pkg.title;
export const PUBLIC_SITE_DESCRIPTION=import.meta.env.PUBLIC_SITE_DESCRIPTION || pkg.description;
export const PUBLIC_SITE_AUTHOR_NAME=import.meta.env.PUBLIC_SITE_AUTHOR_NAME || pkg.author.name;
export const PUBLIC_SITE_AUTHOR_URL=import.meta.env.PUBLIC_SITE_AUTHOR_URL || pkg.author.url;
export const PUBLIC_SITE_AUTHOR_EMAIL=import.meta.env.PUBLIC_SITE_AUTHOR_EMAIL || pkg.author.email;
export const PUBLIC_SITE_KEYWORDS=import.meta.env.PUBLIC_SITE_KEYWORDS.split(', ') || pkg.keywords;
// export const PUBLIC_SITE_LANG = Object.keys(languages) as [string, ...string[]];
// export const PUBLIC_SITE_LANG_DEFAULT=defaultLang;

export const PUBLIC_SITE_URL=import.meta.env.PUBLIC_SITE_URL;
export const PUBLIC_SITE_DOMAIN=import.meta.env.PUBLIC_SITE_DOMAIN;
export const PUBLIC_SITE_ADAPTER=import.meta.env.PUBLIC_SITE_ADAPTER;
export const PUBLIC_SITE_BACKGROUND_COLOR=`#${import.meta.env.PUBLIC_SITE_BACKGROUND_COLOR}`;
export const PUBLIC_SITE_THEME_COLOR=`#${import.meta.env.PUBLIC_SITE_THEME_COLOR}`;

export const PUBLIC_DEV_TITLE=pkg.title;
export const PUBLIC_DEV_DESCRIPTION=pkg.description;
export const PUBLIC_DEV_AUTHOR_NAME=pkg.author.name;
export const PUBLIC_DEV_AUTHOR_URL=pkg.author.url;
export const PUBLIC_DEV_AUTHOR_EMAIL=pkg.author.email;
export const PUBLIC_DEV_KEYWORDS=pkg.keywords;
export const PUBLIC_DEV_VERSION=pkg.version;
