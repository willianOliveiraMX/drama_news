import { NextResponse } from 'next/server';
import dramaNewsApi from '../../../services/drama_news_api';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const { article } = await dramaNewsApi.getArticleBySlug(category);

    return NextResponse.json(article);
  } catch (error) {
    if (error.response.status === 404) {
      return NextResponse.json([]);
    }

    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
