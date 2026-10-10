import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/components/news-&-events/newsData";

export default function NewsSection() {
  const [lead, ...rest] = newsItems;
  const side = rest.slice(0, 3);

  return (
    <section id="news" className="pb-14 md:pb-24 bg-[#fcfdfe] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">NEWS & EVENTS</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
              Making{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Headlines.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] mt-2">Our latest milestones, as covered by media houses across India.</p>
          </div>

          <Link href="/news-&-events" className="shrink-0 inline-flex items-center gap-2 border border-[#0a192f]/20 text-[#0a192f] px-6 py-2.5 rounded-[16px] font-semibold text-sm hover:bg-[#0a192f] hover:text-white transition-colors">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6">
          {/* Lead story */}
          <a
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block min-h-[360px] lg:min-h-[460px] rounded-[24px] overflow-hidden shadow-sm"
          >
            <img loading="lazy" decoding="async" src={lead.img} alt={lead.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] from-15% via-[#0a192f]/80 via-45% to-transparent to-75%" />

            <span className="absolute top-5 left-5 bg-[#dfae19] text-[#0a192f] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Featured
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex items-center gap-3 text-white/80 text-xs font-semibold mb-3">
                <span className="bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">{lead.source}</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {lead.date}</span>
              </div>
              <h3 className="font-serif text-white text-[20px] md:text-[24px] font-medium leading-snug mb-3 line-clamp-3">{lead.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed line-clamp-2 mb-5 max-w-xl">{lead.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-[#dfae19] text-sm font-bold">
                Read Full Story <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </a>

          {/* Side stories */}
          <div className="grid grid-rows-3 gap-4">
            {side.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-3 bg-white border border-gray-100 rounded-[20px] hover:shadow-md hover:border-[#dfae19]/40 transition-all"
              >
                <div className="w-28 sm:w-36 shrink-0 rounded-[14px] overflow-hidden">
                  <img loading="lazy" decoding="async" src={item.img} alt={item.title} className="w-full h-full min-h-[96px] object-cover object-[center_20%] group-hover:scale-[1.05] transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center min-w-0 py-1 pr-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="text-lf-burgundy">{item.source}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-gray-400">{item.date}</span>
                  </div>
                  <h4 className="font-bold text-[#0a192f] text-sm leading-snug line-clamp-2 mb-2 group-hover:text-lf-burgundy transition-colors">{item.title}</h4>
                  <span className="text-gray-500 text-xs font-bold flex items-center gap-1 group-hover:text-[#0a192f] transition-colors">
                    Read More <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
