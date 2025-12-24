import article_list from "@/app/mock_articles";
import Article from '@/app/components/article';

export async function generateMetadata() {
  const article_content = article_list[0];

  return {
    title: article_content.seo.title_tag,
    description: article_content.seo.meta_description,
    author: article_content.author.name,
    article: {
      published_time: article_content.dates.published,
      modified_time: article_content.dates.modified,
      authors: [article_content.author.name],
    },
    locale: 'pt_BR',
    site_name: 'Drama News',
    openGraph: {
      images: [article_content.social_graph.og_image],
      type: 'article',
      url: article_content.seo.canonical_url
    }
  };
}

const Page = async ({ params }) => {
  const { category, date, slug } = await params;
  
  const article_content = article_list[0];

  return (
    <>
      <Article article_content={article_content} />
    </>
  );
};

export default Page;
