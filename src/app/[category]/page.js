import ArticleList from "../components/article_list";
import dramaNewsApi from "../services/drama_news_api";


export default async function Home({ params }) {
  const { category } = await params;
  
  const { articles } = await dramaNewsApi.getArticlesByCategory(category);

  if (!articles || articles.length === 0) {
    return (
      <div className="flex">
        <main className="flex flex-col justify-center items-center w-full" >
          <p>Nenhum artigo encontrado para essa categoria.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex">
      <main className="flex flex-col justify-center items-center w-full" >
        <ArticleList article_list={articles} />
      </main>
    </div>
  );
}
