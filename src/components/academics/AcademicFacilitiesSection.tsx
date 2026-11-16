import { Monitor, FlaskConical, Laptop, BookOpen, Star } from "lucide-react";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icon for each facility card, in CMS order
const facilityIcons = [Monitor, FlaskConical, Laptop, BookOpen];

export default function AcademicFacilitiesSection({ data }: { data: SectionContent }) {
  const facilities = (data.facilities as { title: string; description: string; image: string }[]).map((f, i) => ({
    ...f,
    icon: facilityIcons[i % facilityIcons.length],
  }));
  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
          <span className="text-[#849a62] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            {data.headline} <span className="font-script text-[#dfae19] text-[40px] md:text-[54px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="whitespace-pre-line text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Facilities 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 xl:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="flex flex-col items-center group relative pt-6">
                
                {/* Floating Icon overlapping top edge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgb(0,0,0,0.08)] border border-gray-50 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-[#dfae19]" />
                </div>

                {/* Image Container with heavily rounded edges */}
                <div className="relative w-full aspect-[4/3] rounded-[36px] overflow-hidden mb-6 shadow-sm border border-gray-100">
                  <img loading="lazy" decoding="async" 
                    src={sizedImage(facility.image, 700)} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center px-3">
                  <h3 className="font-bold text-[17px] text-[#2c402d] mb-2 leading-snug">{facility.title}</h3>
                  <p className="whitespace-pre-line text-gray-500 text-[13.5px] leading-relaxed">
                    {facility.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
