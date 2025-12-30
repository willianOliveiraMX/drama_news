import dramaNewsApi from "@/app/services/drama_news_api";
import Article from '@/app/components/article';

export async function generateMetadata({ params }) {
  const { category, date, slug } = await params;
  const { article } = await dramaNewsApi.getArticleBySlug(`/${category}/${date}/${slug}`);

  return {
    title: article.seo.title_tag,
    description: article.seo.meta_description,
    author: article.author.name,
    article: {
      published_time: article.dates.published,
      modified_time: article.dates.modified,
      authors: [article.author.name],
    },
    locale: 'pt_BR',
    site_name: 'Drama News',
    openGraph: {
      images: [article.social_graph.og_image],
      type: 'article',
      url: article.seo.canonical_url
    }
  };
}

const Page = async ({ params }) => {
  const { category, date, slug } = await params;
  const { article } = await dramaNewsApi.getArticleBySlug(`/${category}/${date}/${slug}`);

  return (
    <>
      <Article article_content={article} />
    </>
  );
};

export default Page;
