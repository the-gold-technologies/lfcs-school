import type { Metadata } from "next";
import NewsHeroSection from "@/components/news-&-events/NewsHeroSection";
import NewsListSection from "@/components/news-&-events/NewsListSection";
import JsonLd from "@/components/JsonLd";
import { getNews, getPage } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const news = await getNews();
  return buildPageMetadata("news-and-events", news[0]?.img);
}

export default async function NewsPage() {
  const news = await getNews();
  const [{ sections: s }, schemas] = await Promise.all([
    getPage("news-and-events"),
    // Press coverage, each story linking to the publisher's article
    pageSchemas("news-and-events", [
      {
        "@type": "ItemList",
        name: "Little Flower in the news",
        itemListElement: news.map((n, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "NewsArticle",
            headline: n.title,
            description: n.excerpt,
            image: n.img,
            url: n.url,
            publisher: { "@type": "Organization", name: n.source },
          },
        })),
      },
    ]),
  ]);

  const headingTag = await heroHeadingTag("news-and-events");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <JsonLd data={schemas} />
      <NewsHeroSection data={s.NewsHeroSection} headingTag={headingTag} />
      <NewsListSection data={s.NewsListSection} news={news} />
    </div>
  );
}
