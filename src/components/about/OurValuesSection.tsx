import { ShieldCheck, Heart, Star, Lightbulb, Users, Leaf, Send } from "lucide-react";

export default function OurValuesSection() {
  const values = [
    { 
      icon: ShieldCheck, 
      title: "Integrity", 
      desc: "We do the right thing at all times, even when no one is watching.", 
      color: "#dfae19", // gold
      bgColor: "bg-[#fcf9ed]", // very light gold
      tinyIcon: Heart,
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop"
    },
    { 
      icon: Heart, 
      title: "Respect", 
      desc: "We value every single individual and treat everyone with kindness.", 
      color: "#fb5857", // red/pink
      bgColor: "bg-[#fdf4f4]", // very light pink
      tinyIcon: Heart,
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop"
    },
    { 
      icon: Star, 
      title: "Excellence", 
      desc: "We consistently strive for the highest standards in all that we do.", 
      color: "#66733a", // olive
      bgColor: "bg-[#f3f7ef]", // very light green
      tinyIcon: Star,
      img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=400&auto=format&fit=crop"
    },
    { 
      icon: Lightbulb, 
      title: "Innovation", 
      desc: "We embrace new ideas and creativity to solve real-world challenges.", 
      color: "#3b82f6", // blue
      bgColor: "bg-[#f0f6ff]", // very light blue
      tinyIcon: Heart,
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=400&auto=format&fit=crop"
    },
    { 
      icon: Users, 
      title: "Community", 
      desc: "We build strong, supportive relationships that help us grow together.", 
      color: "#fb5857", // red/pink
      bgColor: "bg-[#fdf4f4]", 
      tinyIcon: Heart,
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop"
    },
    { 
      icon: Leaf, 
      title: "Responsibility", 
      desc: "We take full ownership of our actions and care deeply for our world.", 
      color: "#dfae19", // gold
      bgColor: "bg-[#fcf9ed]", 
      tinyIcon: Heart,
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop"
    },
  ];

  return (
    <section className="py-20 bg-[#fdfdfc] overflow-hidden relative">
      
      {/* Decorative Background Image */}
      <img 
        src="/decorative_right.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none opacity-100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
           <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Core Values</span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#0a192f] leading-tight mb-4">
            The Pillars of Our <span className="font-script text-[#dfae19] text-[48px] md:text-[60px] relative inline-block -my-4 pr-1">
              Community
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-4">
            Our core values are the foundation of everything we do. <br className="hidden sm:block" />
            They guide our choices, shape our culture, and inspire a better tomorrow.
          </p>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Dashed line connecting icons behind */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center mt-12 lg:mt-0">
                {/* Top Icon overlapping card */}
                <div 
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100/50 z-20 mb-[-28px] relative"
                  style={{ color: v.color }}
                >
                  <v.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                {/* Pill Card */}
                <div className={`w-full ${v.bgColor} rounded-t-full rounded-b-[40px] px-3 pt-[18px] pb-8 flex flex-col items-center text-center shadow-sm h-full transition-transform hover:-translate-y-2 duration-300`}>
                  
                  {/* Circle Image */}
                  <div className="w-full aspect-[3/4] rounded-[100px] overflow-hidden mb-6 border-[5px] border-white shadow-sm bg-white">
                    <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Title & Tiny Icon */}
                  <h3 className="font-bold text-[18px] mb-2" style={{ color: v.color }}>{v.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-6 flex-1 flex items-start justify-center">
                    {v.desc}
                  </p>
                  
                  {/* Bottom Line */}
                  <div className="w-8 h-1 rounded-full mt-auto" style={{ backgroundColor: v.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
