import { getRequestConfig, GetRequestConfigParams, RequestConfig } from 'next-intl/server';
import { Locale, routing } from './routing';

const localeFileMap: Record<string, string> = {
  'vi': 'vi',
  'en': 'en',
  'kr': 'kr',
  'zh': 'zh',
  'ja': 'ja'
};

export default getRequestConfig(async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
  let validLocale: string = locale || routing.defaultLocale;
  if (!routing.locales.includes(validLocale as Locale)) {
    validLocale = routing.defaultLocale;
  }

  const fileLocale = localeFileMap[validLocale] || validLocale;

  try {
    const messages = (await import(`./locales/${fileLocale}.json`)).default;
    return {
      messages,
      locale: validLocale
    };
  } catch (error) {
    console.error(`Failed to load locale ${fileLocale}:`, error);
    const fallbackMessages = (await import(`./locales/${routing.defaultLocale}.json`)).default;
    return {
      messages: fallbackMessages,
      locale: routing.defaultLocale
    };
  }
});
