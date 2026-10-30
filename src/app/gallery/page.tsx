import type { Metadata } from "next";
import GalleryHeroSection from "@/components/gallery/GalleryHeroSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import { getGallery, getPage } from "@/lib/content";
import { absoluteUrl, buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const photos = await getGallery();
  return buildPageMetadata("gallery", photos[0]?.src);
}

export default async function GalleryPage() {
  const photos = await getGallery();
  const [{ sections: s }, schemas] = await Promise.all([
    getPage("gallery"),
    pageSchemas("gallery", [
      {
        "@type": "ImageGallery",
        name: "Little Flower school photo gallery",
        url: absoluteUrl("/gallery"),
        image: photos.map((p) => ({ "@type": "ImageObject", contentUrl: p.src, caption: p.caption })),
      },
    ]),
  ]);

  const headingTag = await heroHeadingTag("gallery");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <JsonLd data={schemas} />
      <GalleryHeroSection data={s.GalleryHeroSection} headingTag={headingTag} />
      <GalleryGrid photos={photos} />
    </div>
  );
}
