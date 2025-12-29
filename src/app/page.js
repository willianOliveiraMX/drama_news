import ArticleList from "./components/article_list";
import dramaNewsApi from "./services/drama_news_api";

export default async function Home() {
  const article_list = await dramaNewsApi.getAllArticles();

  return (
    <div className="flex">
      <main className="flex justify-center items-center" >
        {article_list ? <ArticleList article_list={article_list} /> : <span>loading</span>}
      </main>
    </div>
  );
}
