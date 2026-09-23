"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const filters = [
  "All Events", 
  "Annual Functions", 
  "Sports Days", 
  "Competitions", 
  "Celebrations", 
  "Educational Trips", 
  "Workshops", 
  "School Programmes"
];

const galleryItems = [
  { category: "Annual Functions", image: "/home-page/Experience8.webp" },
  { category: "Sports Days", image: "/experience/sports1.webp" },
  { category: "School Programmes", image: "/home-page/skills1.webp" },
  { category: "Competitions", image: "/home-page/Experience9.webp" },
  { category: "Workshops", image: "/academics/collabrative.webp" },
  { category: "Educational Trips", image: "/experience/art1.webp" },
  { category: "Celebrations", image: "/experience/life1.webp" },
  { category: "Competitions", image: "/academics/practical.webp" },
  { category: "School Programmes", image: "/experience/art2.webp" },
  { category: "Annual Functions", image: "/home-page/skills4.webp" },
  { category: "Educational Trips", image: "/home-page/Experience4.webp" },
  { category: "Celebrations", image: "/experience/life2.webp" },
  { category: "Sports Days", image: "/experience/sports2.webp" },
  { category: "Workshops", image: "/home-page/skills2.webp" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All Events");

  const filteredItems = activeFilter === "All Events" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Fallback to all items if filter results in empty list, just for visual sake
  const displayItems = filteredItems.length > 0 ? filteredItems : galleryItems;

  const getFlexBasis = (idx: number) => {
    const patterns = ['18%', '22%', '18%', '20%', '15%', '18%', '20%', '15%', '12%'];
    return patterns[idx % patterns.length];
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-[100%] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Events, Trips & Celebrations</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-10">
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
               Experiences
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            that Become Part of <br className="hidden md:block" /> a Student Life
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

        {/* Masonry-style Collage */}
        <div className="flex flex-wrap gap-3 mb-16 max-w-screen-2xl mx-auto">
          {displayItems.map((item, idx) => (
            <div 
              key={idx} 
              style={{ flexBasis: getFlexBasis(idx), flexGrow: 1 }}
              className="h-[140px] md:h-[180px] lg:h-[220px] rounded-[16px] overflow-hidden group relative min-w-[140px] sm:min-w-[180px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img loading="lazy" decoding="async" 
                src={item.image} 
                alt={item.category} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Footer Area */}
        <div className="flex flex-col items-center justify-center relative max-w-5xl mx-auto mt-8 mb-8">
          
          {/* View Full Gallery Button */}
          <button className="inline-flex items-center gap-2 bg-[#832646] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#6a1d37] transition-colors shadow-md z-10 text-[15px]">
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-[13px] text-gray-500 mt-5 max-w-xl text-center z-10 relative">
            Explore hundreds more moments from our campuses in our complete media library. Specific events and celebrations may vary depending on the academic calendar and campus.
          </p>         
        </div>

      </div>
    </section>
  );
}
