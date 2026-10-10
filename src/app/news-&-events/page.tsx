import NewsHeroSection from "@/components/news-&-events/NewsHeroSection";
import NewsListSection from "@/components/news-&-events/NewsListSection";

export const metadata = {
  title: "News & Events | Little Flower Group of Schools",
  description: "Latest news, announcements and press coverage from Little Flower schools.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <NewsHeroSection />
      <NewsListSection />
    </main>
  );
}
