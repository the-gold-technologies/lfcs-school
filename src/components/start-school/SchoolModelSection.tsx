import { BookOpen, Briefcase, LayoutGrid, Award, Building2 } from "lucide-react";
import type { SectionContent } from "@/lib/content";

// Icon for each model area, in CMS order (colours come from the CMS)
const areaIcons = [BookOpen, Briefcase, LayoutGrid, Award, Building2];

export default function SchoolModelSection({ data }: { data: SectionContent }) {
  const areas = (data.areas as { title: string; desc: string; color: string; bg: string }[]).map((a, i) => ({
    ...a,
    icon: areaIcons[i % areaIcons.length],
  }));
  // The heading wraps halfway ("A Partnership / Built Around")
  const headWords = (data.headline as string).trim().split(/\s+/);
  const half = Math.ceil(headWords.length / 2);
  return (
    <section id="model" className="py-16 bg-[#fdfdfc] relative overflow-hidden scroll-mt-24">

        <img loading="lazy" decoding="async"
        src="/decorative_right.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full top-12 left-0 object-cover z-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            {headWords.slice(0, half).join(" ")} <br /> {headWords.slice(half).join(" ")}{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[50px] relative inline-block -my-4 pr-1">
               {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
        </div>

        <div className="max-w-7xl mx-auto rounded-[32px] border border-gray-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {areas.map((item, i) => (
              <div key={i} className="py-7 px-5  flex flex-col items-center text-center gap-3 hover:bg-gray-50/60 transition-colors">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#0a192f] text-[15px] leading-snug">{item.title}</h4>
                <p className="whitespace-pre-line text-gray-500 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
