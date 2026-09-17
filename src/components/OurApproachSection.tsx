"use client";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function OurApproachSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-[#fcfdfe]">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-[#0a192f] rounded-[40px] p-10  md:p-14 flex flex-col lg:flex-row items-center relative overflow-hidden shadow-xl">
          {/* Left Content */}
          <div className="lg:w-[32%] z-10 shrink-0">
            <span className="text-[#dfae19] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">OUR APPROACH</span>
            <h2 className="font-serif text-[34px] md:text-[42px] font-medium text-white leading-tight mb-5">
              Learning That<br />Builds <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Life Skills
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-400 mb-10 text-[15px] leading-relaxed max-w-sm">
              Not just academics we prepare children for life, with knowledge, character and curiosity.
            </p>

            <Link href="/academics" className="bg-[#dfae19] text-[#0a192f] px-7 py-3.5 rounded-[16px] font-bold text-[14px] hover:bg-white transition-colors flex items-center justify-center w-fit gap-2 cursor-pointer">
              Explore Academics <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Carousel Area */}
          <div className="lg:w-[71%] w-full relative z-10">
            {/* Navigation Arrows */}
            <div className="absolute -top-10 right-0 hidden lg:flex gap-3">
              <button onClick={scrollLeft} className="w-9 h-9 rounded-full bg-white text-[#0a192f] flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button onClick={scrollRight} className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div ref={scrollContainerRef} className="flex gap-5 overflow-x-auto pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
              {[
                { img: '/home-page/skills1.jpg', label: 'Experiential\nLearning' },
                { img: '/home-page/skills2.jpg', label: 'Technology &\nInnovation' },
                { img: '/home-page/skills3.jpg', label: 'Sports &\nPhysical Growth' },
                { img: '/home-page/skills4.jpeg', label: 'Art, Culture &\nExpression' },
                { img: '/home-page/skills5.jpg', label: 'Science &\nResearch' },
                { img: '/home-page/skills6.jpg', label: 'Academic\nExcellence' },
              ].map((card, i) => (
                <div key={i} className="relative snap-start shrink-0">
                  {i === 0 && <div className="absolute -inset-0.5 rounded-[24px]"></div>}
                  <div className="w-[200px] h-[280px] rounded-[24px] overflow-hidden relative group border-[1.5px] border-white/20 bg-[#0a192f]">
                    <img loading="lazy" decoding="async" src={card.img} alt={card.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-medium text-[15px] leading-snug whitespace-pre-line">{card.label}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
