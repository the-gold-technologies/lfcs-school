"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { galleryCategories, galleryImages, type GalleryCategory } from "./galleryData";

type Filter = "All" | GalleryCategory;

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const countFor = (filter: Filter) =>
    filter === "All" ? galleryImages.length : galleryImages.filter((img) => img.category === filter).length;

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // Keyboard controls and scroll lock while the viewer is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  const current = openIndex === null ? null : images[openIndex];
  const filters: Filter[] = ["All", ...galleryCategories];

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-6xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[13px] font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#832646] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#832646] hover:text-[#832646]"
              }`}
            >
              {filter === "All" ? "All Photos" : filter}
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeFilter === filter ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {countFor(filter)}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid - photos keep their natural shape */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3">
          {images.map((img, idx) => (
            <button
              key={`${activeFilter}-${img.src}`}
              onClick={() => setOpenIndex(idx)}
              className="group relative block w-full mb-3 break-inside-avoid rounded-[14px] overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
              aria-label={`Open photo: ${img.caption}`}
            >
              <img
                loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.caption}
                className="block w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[#dfae19] text-[10px] font-bold uppercase tracking-wider">{img.category}</span>
                <span className="text-white text-[13px] font-semibold leading-snug">{img.caption}</span>
              </div>
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#0a192f] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-[#0a192f]/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={close}
          data-lenis-prevent
        >
          <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="text-[13px] text-white/70">
              {openIndex! + 1} / {images.length}
            </span>
            <button onClick={close} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center px-4 md:px-20 min-h-0">
            <img
              src={current.src}
              alt={current.caption}
              className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  className="absolute left-2 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  className="absolute right-2 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="px-4 py-5 text-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-[#dfae19] text-[11px] font-bold uppercase tracking-wider">{current.category}</span>
            <p className="text-white text-[15px] font-medium mt-1">{current.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
