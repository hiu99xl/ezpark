import { NextRequest } from 'next/server';
import { fetchNewsArticleData, fetchNewsArticleDataBySlug, getFeaturedNewsId } from '@/lib/api/news';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');
  const locale = searchParams.get('locale') ?? 'vi';

  if (id) {
    const newsId = parseInt(id, 10);
    if (Number.isNaN(newsId)) {
      return Response.json(null, { status: 400 });
    }
    const data = await fetchNewsArticleData(newsId, locale);
    return Response.json(data);
  }

  if (slug?.trim()) {
    if (slug === 'featured') {
      const data = await fetchNewsArticleData(getFeaturedNewsId(), locale);
      return Response.json(data);
    }
    const data = await fetchNewsArticleDataBySlug(slug.trim(), locale);
    return Response.json(data);
  }

  return Response.json(null, { status: 400 });
}
