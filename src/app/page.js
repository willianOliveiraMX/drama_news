import article_list from "./mock_articles";
import ArticleList from "./components/article_list";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex justify-center items-center" >
        <ArticleList article_list={article_list} />
      </main>
    </div>
  );
}
