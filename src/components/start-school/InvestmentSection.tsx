import { MapPin, Building2, FlaskConical, Dumbbell, Armchair, Settings } from "lucide-react";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icon for each investment area, in CMS order (colours come from the CMS)
const considerationIcons = [MapPin, Building2, FlaskConical, Dumbbell, Armchair, Settings];

export default function InvestmentSection({ data }: { data: SectionContent }) {
  const considerations = (data.considerations as { title: string; desc: string; color: string; bg: string; image: string }[]).map(
    (c, i) => ({ ...c, icon: considerationIcons[i % considerationIcons.length] }),
  );
  return (
    <section id="investment" className="py-16 bg-[#fdfcfc] relative overflow-hidden scroll-mt-24">
      <img loading="lazy" decoding="async"
        src="/decorative_left.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full -top-40 h-full object-contain z-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#b56f35] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            {data.headline}{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="whitespace-pre-line text-gray-500 text-[15px] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {considerations.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[5/3] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img loading="lazy" decoding="async" src={sizedImage(item.image, 600)} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div
                className="relative -mt-7 z-20 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.12)] border-4 border-white transition-transform duration-300 group-hover:-translate-y-1"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-[#0a192f] text-[16px] mt-4 mb-2 leading-snug">{item.title}</h4>
              <p className="whitespace-pre-line text-gray-500 text-[13px] leading-relaxed max-w-[90%]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
