'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArticleList from '../article_list';

export default function LoadMoreArticles({ initialArticles, total, limit }) {
  const [articles, setArticles] = useState(initialArticles);
  const [offset, setOffset] = useState(limit);
  const router = useRouter();

  const loadMore = async () => {
    const response = await fetch(`/api/articles?limit=${limit}&offset=${offset}`);
    const newArticles = await response.json();
    console.log('newArticles', newArticles);
    setArticles([...articles, ...newArticles.articles]);
    setOffset(offset + limit);
    router.replace(`/?offset=${offset + limit}`, { scroll: false });
  };

  return (
    <div>
      <ArticleList article_list={articles} />
      {
        articles.length < total && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMore}
            className="bg-[#d53500]  text-white font-bold py-2 px-4 rounded-2xl cursor-pointer"
          >
            Ver mais artigos
          </button>
        </div>
      )
        }
    </div>
  );
}
