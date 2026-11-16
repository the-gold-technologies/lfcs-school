"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

type EventPhoto = { category: string; image: string };

// Collage card sized to its photo's real shape (measured once loaded) so nothing is cropped
function CollageCard({ item, onRatio, ratio }: { item: EventPhoto; ratio: number; onRatio: (r: number) => void }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const measure = () => {
    const img = imgRef.current;
    if (img?.naturalWidth && img.naturalHeight) onRatio(img.naturalWidth / img.naturalHeight);
  };
  // Cached images can finish loading before hydration, when onLoad never fires
  useEffect(measure, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        aspectRatio: ratio,
        flexGrow: ratio,
        flexBasis: `calc(var(--row-h) * ${ratio})`,
        maxWidth: `calc(var(--row-h) * ${ratio} * 1.5)`,
      }}
      className="rounded-[16px] overflow-hidden group relative shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      <img
        ref={imgRef}
        loading="lazy"
        decoding="async"
        src={sizedImage(item.image, 900)}
        alt={`${item.category} at Little Flower`}
        onLoad={measure}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}

export default function GallerySection({ data }: { data: SectionContent }) {
  const filters = data.filters as string[];
  const galleryItems = data.photos as EventPhoto[];
  const allLabel = filters[0] ?? "";
  // Width/height ratio of each photo once measured; 4:3 until then
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [activeFilter, setActiveFilter] = useState(allLabel);

  const filteredItems = activeFilter === allLabel 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Fallback to all items if filter results in empty list, just for visual sake
  const displayItems = filteredItems.length > 0 ? filteredItems : galleryItems;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-[100%] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-10 text-balance">
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
               {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            {data.headline}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 pt-4 max-w-7xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-[12px] text-[13px] font-semibold transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-[#832646] text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#832646] hover:text-[#832646]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Justified Collage - fixed row height, each card sized to its photo so nothing is cropped */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-screen-2xl mx-auto [--row-h:140px] md:[--row-h:180px] lg:[--row-h:220px]">
          {displayItems.map((item) => (
            <CollageCard
              key={`${activeFilter}-${item.image}`}
              item={item}
              ratio={ratios[item.image] ?? 4 / 3}
              onRatio={(r) => setRatios((prev) => (prev[item.image] === r ? prev : { ...prev, [item.image]: r }))}
            />
          ))}
        </div>

        {/* Footer Area */}
        <div className="flex flex-col items-center justify-center relative max-w-5xl mx-auto mt-8 mb-8">
          
          {/* View Full Gallery Button */}
          <Link href={data.ctaLink} className="inline-flex items-center gap-2 bg-[#832646] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#6a1d37] transition-colors shadow-md z-10 text-[15px]">
            {data.ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <p className="whitespace-pre-line text-[13px] text-gray-500 mt-5 max-w-xl text-center z-10 relative">
            {data.footerNote}
          </p>         
        </div>

      </div>
    </section>
  );
}
