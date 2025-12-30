import styles from "./styles.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Article = ({ article_content }) => {
  return (
    <div className="w-full flex justify-center">
      <article className="m-3.5 mt-12.5 max-w-165">
        <span className="text-xs text-white p-1.5 bg-[#d53500] font-bold">{article_content.type}</span>
        <h1 className="mt-1.5 mb-4.5 text-6xl">{article_content.title}</h1>
        <h2 className="mt-1.5 mb-4.5 text-3xl">{article_content.subtitle}</h2>

        <div className="mt-2 text-4x1">
          <span>Por {article_content.author.name}</span>
          <span> | </span>
          <span>{new Date(article_content.dates.published_at).toLocaleDateString(article_content.locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}</span>
        </div>

        <div>
          <div className="mt-10 styles rich-text-container">
            {documentToReactComponents({
              nodeType: 'document',
              content: article_content.content
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
