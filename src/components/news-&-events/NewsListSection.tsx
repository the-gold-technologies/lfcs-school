import { ArrowUpRight, CalendarDays } from "lucide-react";
import { coverageOutlets, newsItems } from "./newsData";

export default function NewsListSection() {
  const [lead, ...stories] = newsItems;

  return (
    <>
      {/* Lead story */}
      <section className="pt-10 md:pt-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] rounded-[28px] overflow-hidden shadow-lg"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[400px] overflow-hidden">
              <img src={lead.img} alt={lead.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <span className="absolute top-5 left-5 bg-[#dfae19] text-[#0a192f] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                Lead Story
              </span>
            </div>

            <div className="relative bg-lf-burgundy text-white p-7 md:p-10 flex flex-col justify-center overflow-hidden">
              <span aria-hidden="true" className="absolute -top-6 right-4 font-serif text-[180px] leading-none text-white/[0.06] select-none">&ldquo;</span>
              <div className="flex items-center gap-3 text-xs font-semibold text-white/75 mb-4">
                <span className="text-[#dfae19] uppercase tracking-[0.15em] font-bold">{lead.source}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {lead.date}</span>
              </div>
              <h2 className="font-serif text-[24px] md:text-[30px] font-medium leading-snug mb-4">{lead.title}</h2>
              <p className="text-white/75 text-sm leading-relaxed mb-7">{lead.excerpt}</p>
              <span className="self-start inline-flex items-center gap-2 bg-[#dfae19] text-[#0a192f] px-5 py-2.5 rounded-[14px] text-sm font-bold group-hover:bg-white transition-colors">
                Read Full Story <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Press marquee */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="shrink-0">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase block">As Covered By</span>
            <span className="font-serif text-[#0a192f] text-lg">100+ media outlets</span>
          </div>
          <div className="relative flex-1 overflow-hidden py-3 border-y border-gray-100">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee items-center">
              {[...coverageOutlets, ...coverageOutlets].map((name, i) => (
                <span key={i} className="flex items-center shrink-0 font-serif text-[17px] text-gray-400 hover:text-lf-burgundy transition-colors">
                  <span className="px-5">{name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfae19]/60" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More stories: alternating editorial rows */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#0a192f] leading-tight">
              More{" "}
              <span className="font-script text-[#dfae19] text-[32px] md:text-[40px] relative inline-block -my-4 pr-1">
                Stories
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stories.length} articles</span>
          </div>

          <div className="divide-y divide-gray-100">
            {stories.map((item, i) => {
              const [day, ...monthYear] = item.date.split(" ");
              const flip = i % 2 === 1;
              return (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid grid-cols-1 ${flip ? "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"} gap-5 md:gap-10 items-center md:items-stretch py-7`}
                >
                  <div className={`relative ${flip ? "md:order-2" : ""}`}>
                    <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[200px] rounded-[20px] overflow-hidden">
                      <img loading="lazy" decoding="async" src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-[1.04] transition-transform duration-500" />
                    </div>
                    <div className={`absolute -bottom-4 ${flip ? "md:-left-4 left-4" : "md:-right-4 right-4"} bg-white rounded-[16px] shadow-md px-4 py-2 text-center`}>
                      <span className="block font-serif text-[26px] leading-none text-lf-burgundy">{day}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">{monthYear.join(" ")}</span>
                    </div>
                  </div>

                  <div className={`pt-3 md:py-2 md:self-center ${flip ? "md:order-1" : ""}`}>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-lf-olive bg-lf-olive/[0.08] px-3 py-1 rounded-full mb-3">
                      {item.source}
                    </span>
                    <h3 className="font-serif text-[21px] md:text-[26px] font-medium text-[#0a192f] leading-snug mb-3 group-hover:text-lf-burgundy transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-4 max-w-xl">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a192f] border-b-2 border-[#dfae19] pb-0.5 group-hover:text-lf-burgundy transition-colors">
                      Read on {item.source} <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
