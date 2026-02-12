export const localeToLanguageId: Record<string, number> = {
  vi: 1,
  en: 2,
  kr: 3,
  zh: 4,
  ja: 5,
};

export function getLanguageIdFromLocale(locale: string): number {
  return localeToLanguageId[locale] ?? 1;
}
