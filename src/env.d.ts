/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type NetlifyLocals = import('@astrojs/netlify').NetlifyLocals

interface ImportMetaEnv {
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
  readonly PUBLIC_SITE_AUTHOR_NAME: string;
  readonly PUBLIC_SITE_AUTHOR_URL: string;
  readonly PUBLIC_SITE_AUTHOR_EMAIL: string;
  readonly PUBLIC_SITE_KEYWORDS: string;

  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_DOMAIN: string;
  readonly PUBLIC_SITE_ADAPTER: string;
  readonly PUBLIC_SITE_BACKGROUND_COLOR: string;

  readonly MYSQL_ROOT_PASSWORD: string;
  readonly MYSQL_HOST: string;
  readonly MYSQL_USER: string;
  readonly MYSQL_PASSWORD: string;
  readonly MYSQL_DATABASE: string;
}

declare namespace App {
  interface Locals extends NetlifyLocals {}
}
