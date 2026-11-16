import { Sparkles, BookOpen, Compass, Globe2, TrendingUp } from "lucide-react";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icon for each reason card, in CMS order (colours come from the CMS)
const reasonIcons = [Sparkles, BookOpen, Compass, Globe2, TrendingUp];

export default function WhyPartnerSection({ data }: { data: SectionContent }) {
  const reasons = (data.reasons as { title: string; desc: string; color: string; bg: string; image: string }[]).map((r, i) => ({
    ...r,
    icon: reasonIcons[i % reasonIcons.length],
  }));
  return (
    <section id="why-partner" className="py-16 bg-[#fdfdfc] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            {data.headline}{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-[28px] pt-2 px-2 pb-4 group"
              style={{ backgroundColor: item.bg }}
            >
              <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <img loading="lazy" decoding="async" src={sizedImage(item.image, 500)} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div
                className="relative -mt-6 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:-translate-y-1"
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-[#0a192f] text-[14.5px] mt-4 mb-2 leading-snug">{item.title}</h4>
              <p className="whitespace-pre-line text-gray-500 text-[12.5px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
