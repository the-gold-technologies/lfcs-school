import GalleryHeroSection from "@/components/gallery/GalleryHeroSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Photo Gallery | Little Flower Group of Schools",
  description: "Photos from Little Flower campuses: classrooms, science labs, early years, sports, arts and culture, and school events.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <GalleryHeroSection />
      <GalleryGrid />
    </main>
  );
}
