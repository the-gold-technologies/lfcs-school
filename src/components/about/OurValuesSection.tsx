import { ShieldCheck, Heart, Star, Lightbulb, Users, Leaf } from "lucide-react";
import { splitAfterSentence, type SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icon and colours for each value card, in CMS order
const valueStyles = [
  { icon: ShieldCheck, color: "#dfae19", bgColor: "bg-[#fcf9ed]", tinyIcon: Heart },
  { icon: Heart, color: "#fb5857", bgColor: "bg-[#fdf4f4]", tinyIcon: Heart },
  { icon: Star, color: "#66733a", bgColor: "bg-[#f3f7ef]", tinyIcon: Star },
  { icon: Lightbulb, color: "#3b82f6", bgColor: "bg-[#f0f6ff]", tinyIcon: Heart },
  { icon: Users, color: "#fb5857", bgColor: "bg-[#fdf4f4]", tinyIcon: Heart },
  { icon: Leaf, color: "#dfae19", bgColor: "bg-[#fcf9ed]", tinyIcon: Heart },
];

export default function OurValuesSection({ data }: { data: SectionContent }) {
  const values = (data.values as { title: string; desc: string; image: string }[]).map((v, i) => ({
    ...valueStyles[i % valueStyles.length],
    title: v.title,
    desc: v.desc,
    img: sizedImage(v.image, 500),
  }));
  // From sm up the subtitle breaks after its first sentence
  const [subLead, subRest] = splitAfterSentence(data.subtitle);

  return (
    <section className="py-20 bg-[#fdfdfc] overflow-hidden relative">
      
      {/* Decorative Background Image */}
      <img loading="lazy" decoding="async" 
        src="/decorative_right.webp" 
        alt="" 
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none opacity-100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
           <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#0a192f] leading-tight mb-4">
            {data.headline} <span className="font-script text-[#dfae19] text-[48px] md:text-[60px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="whitespace-pre-line text-gray-500 text-[15px] max-w-2xl mx-auto mt-4">
            {subLead} {subRest && <><br className="hidden sm:block" />{subRest}</>}
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
                    <img loading="lazy" decoding="async" src={v.img} alt={v.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Title & Tiny Icon */}
                  <h3 className="font-bold text-[18px] mb-2" style={{ color: v.color }}>{v.title}</h3>
                  
                  {/* Description */}
                  <p className="whitespace-pre-line text-gray-600 text-[13px] leading-relaxed mb-6 flex-1 flex items-start justify-center">
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
