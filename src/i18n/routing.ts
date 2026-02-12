import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en', 'kr', 'zh'], // 'ja' hidden
  defaultLocale: 'vi',
  localePrefix: 'always',
  localeDetection: true,
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax'
  },
  alternateLinks: true
});

export type Locale = (typeof routing.locales)[number];
