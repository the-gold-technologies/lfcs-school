import { BookOpen, Globe2, Lightbulb, Puzzle } from "lucide-react";

export default function EducationalApproachSection() {
  const approaches = [
    {
      icon: BookOpen,
      title: "Child-Centered Learning",
      desc: "We focus on nurturing curiosity and encouraging exploration.",
      color: "#dfae19", // gold
      bgColor: "bg-[#fcf5de]", 
      imgSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop", 
    },
    {
      icon: Lightbulb,
      title: "Experiential Learning",
      desc: "Hands-on experiences that make learning meaningful and lasting.",
      color: "#66733a", // olive
      bgColor: "bg-[#edf1e8]",
      imgSrc: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Puzzle,
      title: "Holistic Development",
      desc: "We nurture academics, creativity, sports, and life skills equally.",
      color: "#c76785", // pink
      bgColor: "bg-[#fbeff2]", 
      imgSrc: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Globe2,
      title: "Values & Character",
      desc: "Building strong values, empathy, and respect for a better tomorrow.",
      color: "#3b82f6", // blue
      bgColor: "bg-[#eff6ff]",
      imgSrc: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Full Background Image */}
      <img 
        src="/decorative_left_top.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-100"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">How We Teach</span>
          <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            Our Educational <span className="font-script text-[#dfae19] text-[44px] md:text-[52px] relative inline-block -my-4 pr-1">
              Approach
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-4">
            A dynamic blend of traditional values and modern pedagogical techniques designed to unlock every child's potential.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pb-12">
          {approaches.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Image Container with organic blob */}
              <div className="relative w-full z-10 pt-8">
                {/* Overlapping Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#fefdfa] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-20">
                  <item.icon style={{ color: item.color }} className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                {/* Image */}
                <div className="relative z-10 w-full pt-[75%] rounded-[32px] overflow-hidden shadow-sm bg-white">
                  <img src={item.imgSrc} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center mt-6">
                <h3 className="font-bold text-[#3f5333] text-[17px] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[95%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
