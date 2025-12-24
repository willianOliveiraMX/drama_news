import ArticleCard from "../article_card";

const ArticleList = ({ article_list = [] }) => {
  return (
    <div className="flex flex-col pt-10">
      {article_list.length === 0 ? (
        <p>Infelizmente não foi possível carregar a listagem de artigos.</p>
      ) : (
        article_list.map((article) => (
          <ArticleCard key={Math.random()} article_content={article} />
        ))
      )}
    </div>
  );
};

export default ArticleList;

