import { Sparkles, BookOpen, Compass, Globe2, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "An Established Educational Identity",
    desc: "Built around the Little Flower identity and values-led philosophy.",
    color: "#dfae19",
    bg: "#fcf5de",
    image: "/start-school/lfis-mau-crop.webp",
  },
  {
    icon: BookOpen,
    title: "A Focus on Quality Education",
    desc: "A structured environment that supports academic foundations and growth.",
    color: "#66733a",
    bg: "#edf1e8",
    image: "/academics/classroom.webp",
  },
  {
    icon: Compass,
    title: "Academic & Operational Guidance",
    desc: "Support across academic planning and school operations, per the partnership scope.",
    color: "#3b82f6",
    bg: "#eff6ff",
    image: "/about/story1.webp",
  },
  {
    icon: Globe2,
    title: "A Shared Educational Vision",
    desc: "Be part of an initiative expanding access to quality education.",
    color: "#c76785",
    bg: "#fbeff2",
    image: "/experience/art1.webp",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Institutional Development",
    desc: "Build a school that grows sustainably and serves its community.",
    color: "#842b46",
    bg: "#fbeef1",
    image: "/home-page/future.webp",
  },
];

export default function WhyPartnerSection() {
  return (
    <section id="why-partner" className="py-16 bg-[#fdfdfc] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Why Start an LFCS School?</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            Build an Educational Institution{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              With Purpose
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
                <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div
                className="relative -mt-6 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:-translate-y-1"
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-[#0a192f] text-[14.5px] mt-4 mb-2 leading-snug">{item.title}</h4>
              <p className="text-gray-500 text-[12.5px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
