import { ArrowRight } from "lucide-react";

const galleryItems = [
  { category: "Campus", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop" },
  { category: "Sports", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" },
  { category: "Classroom", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" },
  { category: "Events", image: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop" },
  { category: "Labs", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" },
  { category: "Trips", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
  { category: "Celebrations", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" },
  { category: "Competitions", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" },
  { category: "School Programmes", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" },
  { category: "Activities", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" },
  { category: "Learning", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" },
  { category: "Joy", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
];

export default function CampusGallerySection() {
  const getFlexBasis = (idx: number) => {
    const patterns = ['18%', '22%', '18%', '20%', '15%', '18%', '20%', '15%', '12%'];
    return patterns[idx % patterns.length];
  };

  return (
    <section className="py-16 md:py-24 bg-[#fcfdfe] relative border-y border-gray-100">
      <div className="max-w-[100%] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Campus Gallery</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-8">
            Seeing LFCS in <br className="hidden md:block" />
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 px-3">
               Every Day Moments
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
            The true value of a school is found in its everyday moments - children learning together, exploring ideas, participating in activities, playing, reading, growing alongside each other and many more.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore our campus through the moments that make school life meaningful.
          </p>
        </div>

        {/* Masonry-style Collage */}
        <div className="flex flex-wrap gap-3 mb-16 max-w-screen-2xl mx-auto">
          {galleryItems.map((item, idx) => (
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
          <button className="inline-flex items-center gap-2 bg-[#832646] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#6a1d37] transition-colors shadow-md z-10 text-[15px]">
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
