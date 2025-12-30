import dramaNewsApi from "./services/drama_news_api";
import LoadMoreArticles from "./components/load_more";
import config from "./config";

export default async function Home({ searchParams }) {
  const { offset: searchParamOffset } = await searchParams;
  const limit = config.limit_page;
  const offset = Number(searchParamOffset) || 0;
  
  const { articles, total } = await dramaNewsApi.getAllArticles(limit, offset);

  return (
    <div className="flex">
      <main className="flex flex-col justify-center items-center w-full" >
        {articles ? <LoadMoreArticles initialArticles={articles} total={total} limit={limit} /> : <span>loading</span>}
      </main>
    </div>
  );
}
