import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ article_content }) => {
  const { midia: { cover_image } = {} } = article_content;

  return (
    <Link href={article_content.slug}>
      <section className="m-1 mb-3.5 pb-3.5 flex justify-between border-b border-gray-300">
        <div className="pr-4">
          <span className="text-xs text-white p-1.5 bg-[#d53500] font-bold">{article_content.type}</span>
          <h3 className="text-2xl font-bold pb-0.5">
            {article_content.title}
          </h3>
          <h4 className="text-sm w-65">{article_content.subtitle}</h4>
          <div className="mt-2 text-xs">
            <span>Por {article_content.author.name}</span>
            <span> | </span>
            <span>{new Date(article_content.dates.published_at).toLocaleDateString(article_content.locale, {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
        </div>

        <div className="relative w-22 h-32 sm:w-32 sm:h-45 shrink-0 aspect-square bg-orange-1 overflow-hidden rounded">
          {
            !!cover_image && (
              <Image 
                src={cover_image.url} 
                alt={cover_image.alt_text} 
                fill
                sizes="(max-width: 640px) 88px, 128px"
                className="object-cover"
                priority
              />
            )
          }
        </div>
      </section>
    </Link>
  );
};

export default ArticleCard;