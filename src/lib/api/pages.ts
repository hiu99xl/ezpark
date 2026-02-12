import { cache } from 'react';
import type { PagePayload } from '@/types/api';
import { parseLexicalContent } from '@/lib/utils/lexical';
import type { HomePageData } from '@/types/api';

const getApiBaseUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) return '';
  return url.replace(/\/$/, '');
};

function normalizeLocale(locale: string | undefined | null): string {
  if (locale === 'kr' || locale === 'en' || locale === 'zh' || locale === 'ja') return locale;
  if (locale && String(locale).toLowerCase() !== 'undefined') return 'vi';
  return 'vi';
}

export type FetchPageOptions = {
  pageId: number;
  locale: string;
  depth?: number;
  draft?: boolean;
  trash?: boolean;
};

export async function fetchPage(options: FetchPageOptions): Promise<PagePayload | null> {
  const { pageId, locale, depth = 2, draft = false, trash = false } = options;
  const base = getApiBaseUrl();
  if (!base) return null;

  const params = new URLSearchParams({
    depth: String(depth),
    draft: String(draft),
    locale: normalizeLocale(locale),
    trash: String(trash),
  });

  const url = `${base}/api/pages/${pageId}?${params.toString()}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data as PagePayload;
  } catch {
    return null;
  }
}

const HOME_PAGE_ID = 3;

export const fetchHomePageData = cache(async (locale: string): Promise<HomePageData | null> => {
  const payload = await fetchPage({
    pageId: HOME_PAGE_ID,
    locale,
  });
  if (!payload) return null;

  const base = getApiBaseUrl();
  const heroImageUrl =
    payload.homepagePhoto?.url && base
      ? `${base}${payload.homepagePhoto.url.startsWith('/') ? '' : '/'}${payload.homepagePhoto.url}`
      : null;
  const heroImageAlt = payload.homepagePhoto?.alt ?? null;

  const { headlineLines, contentHeadings } = parseLexicalContent(payload.content);

  return {
    title: payload.title ?? 'Ez Park',
    heroImageUrl,
    heroImageAlt,
    headlineLines,
    contentHeadings,
  };
});
