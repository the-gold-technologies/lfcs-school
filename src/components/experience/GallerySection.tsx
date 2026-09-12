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
  { category: "Annual Functions", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop" },
  { category: "Sports Days", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" },
  { category: "School Programmes", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" },
  { category: "Competitions", image: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop" },
  { category: "Workshops", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" },
  { category: "Educational Trips", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
  { category: "Celebrations", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" },
  { category: "Competitions", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" },
  { category: "School Programmes", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" },
  { category: "Annual Functions", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" },
  { category: "Educational Trips", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" },
  { category: "Celebrations", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
  { category: "Sports Days", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop" },
  { category: "Workshops", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
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
              <img 
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
