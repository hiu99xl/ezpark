import { cache } from 'react';
import type { NewsPayload } from '@/types/api';
import type { NewsArticleData } from '@/types/api';
import { parseNewsContentToBlocks } from '@/lib/utils/lexical';

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

export type FetchNewsOptions = {
  newsId: number;
  locale: string;
  depth?: number;
  draft?: boolean;
  trash?: boolean;
};

function formatNewsDate(dateStr: string | null | undefined): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  } catch {
    return '';
  }
}

export async function fetchNewsById(options: FetchNewsOptions): Promise<NewsPayload | null> {
  const { newsId, locale, depth = 2, draft = false, trash = false } = options;
  const base = getApiBaseUrl();
  if (!base) return null;

  const params = new URLSearchParams({
    depth: String(depth),
    draft: String(draft),
    locale: normalizeLocale(locale),
    trash: String(trash),
  });

  const url = `${base}/api/news/${newsId}?${params.toString()}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data as NewsPayload;
  } catch {
    return null;
  }
}

export type FetchNewsBySlugOptions = {
  slug: string;
  locale: string;
  depth?: number;
  draft?: boolean;
  trash?: boolean;
};

export async function fetchNewsBySlug(options: FetchNewsBySlugOptions): Promise<NewsPayload | null> {
  const { slug, locale, depth = 2, draft = false, trash = false } = options;
  const base = getApiBaseUrl();
  if (!base || !slug?.trim()) return null;

  const params = new URLSearchParams({
    'where[slug][equals]': slug.trim(),
    depth: String(depth),
    draft: String(draft),
    locale: normalizeLocale(locale),
    trash: String(trash),
    limit: '1',
  });

  const url = `${base}/api/news?${params.toString()}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = (await res.json()) as { docs?: NewsPayload[] };
    const doc = data.docs?.[0];
    return doc ?? null;
  } catch {
    return null;
  }
}

const FEATURED_NEWS_ID = 12;

function normalizeNewsPayload(payload: NewsPayload, base: string): NewsArticleData {
  const photo = payload.homepagePhoto ?? payload.detailPhoto;
  const imageUrl = photo?.url && base
    ? `${base}${photo.url.startsWith('/') ? '' : '/'}${photo.url}`
    : null;
  const imageAlt = photo?.alt ?? payload.title;
  const contentBlocks = parseNewsContentToBlocks(payload.content, base || '');
  const tags = Array.isArray(payload.tags)
    ? (payload.tags as Array<{ tag?: string }>).map((t) => t.tag ?? '').filter(Boolean)
    : [];
  return {
    id: payload.id,
    slug: payload.slug,
    title: payload.title,
    excerpt: payload.excerpt ?? null,
    imageUrl,
    imageAlt,
    dateDisplay: formatNewsDate(payload.publishedAt ?? payload.updatedAt ?? payload.createdAt),
    tags,
    contentBlocks,
  };
}

export const fetchNewsArticleData = cache(async (newsId: number, locale: string): Promise<NewsArticleData | null> => {
  const payload = await fetchNewsById({ newsId, locale });
  if (!payload) return null;
  const base = getApiBaseUrl() || '';
  return normalizeNewsPayload(payload, base);
});

export const fetchNewsArticleDataBySlug = cache(async (slug: string, locale: string): Promise<NewsArticleData | null> => {
  const payload = await fetchNewsBySlug({ slug, locale });
  if (!payload) return null;
  const base = getApiBaseUrl() || '';
  return normalizeNewsPayload(payload, base);
});

export function getFeaturedNewsId(): number {
  return FEATURED_NEWS_ID;
}
