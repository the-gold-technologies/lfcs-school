import { Monitor, FlaskConical, Laptop, BookOpen, Star } from "lucide-react";

const facilities = [
  {
    title: "Smart / Digital Classrooms",
    description: "Technology-enabled resources that support classroom instruction and visual learning.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    icon: Monitor
  },
  {
    title: "Science Laboratories",
    description: "Environment where students can experiment & practically apply their science concepts.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    icon: FlaskConical
  },
  {
    title: "Computer Laboratories",
    description: "Facilities that help students develop digital and computer skills.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    icon: Laptop
  },
  {
    title: "Library",
    description: "An Independent learning zone that encourages students to understand the world.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop",
    icon: BookOpen
  }
];

export default function AcademicFacilitiesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
          <span className="text-[#849a62] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">INFRASTRUCTURE</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            Academic <span className="font-script text-[#dfae19] text-[40px] md:text-[54px] relative inline-block -my-4 pr-1">
              Facilities
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            At LFCS, the academic facilities are curated to complement the classroom learning of students where they are provided with more resources to learn, develop & understand better.
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
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center px-3">
                  <h3 className="font-bold text-[17px] text-[#2c402d] mb-2 leading-snug">{facility.title}</h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">
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
