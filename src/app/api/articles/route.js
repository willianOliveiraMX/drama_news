import { NextResponse } from 'next/server';
import dramaNewsApi from '../../services/drama_news_api';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  try {
    const { articles, total } = await dramaNewsApi.getAllArticles(limit, offset);

    return NextResponse.json({ articles, total });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
