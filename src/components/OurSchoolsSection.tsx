"use client";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const schools = [
  { city: 'Prayagraj', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop' },
  { city: 'Lucknow', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop' },
  { city: 'Varanasi', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop' },
  { city: 'Kanpur', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop' },
  { city: 'Agra', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop' },
  { city: 'Mathura', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop' },
  { city: 'Gorakhpur', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop' },
  { city: 'Meerut', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
];

// Card width + gap in px — must match CSS below
const CARD_W = 300;
const GAP = 20;
const STEP = CARD_W + GAP;

export default function OurSchoolsSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = schools.length - 4; // show 4 at a time

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  // Auto-advance, stops at end then resets
  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, 2800);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Decorative background */}
      <img
        src="/decorative_left.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 top-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">OUR SCHOOLS</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
              A Strong Network. A Shared{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Vision.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] mt-2">Our schools spread across cities, united by the same values and commitment.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button onClick={prev} disabled={index === 0}
              className="w-10 h-10 rounded-full border border-[#0a192f]/20 text-[#0a192f] flex items-center justify-center hover:bg-[#0a192f] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} disabled={index === maxIndex}
              className="w-10 h-10 rounded-full bg-[#0a192f] text-white flex items-center justify-center hover:bg-[#dfae19] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 border border-[#0a192f]/20 text-[#0a192f] px-5 py-2.5 rounded-[16px] font-semibold hover:bg-gray-50 transition-colors text-[14px] ml-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5"
            style={{ transform: `translateX(-${index * STEP}px)`, transition: "transform 0.5s ease" }}
          >
            {schools.map((school, i) => (
              <div key={i} className="min-w-[300px] w-[300px] bg-[#f4f5f7] rounded-[20px] overflow-hidden border border-gray-200  hover:-translate-y-1 transition-transform duration-300 group shrink-0">
                <div className="h-[160px] overflow-hidden">
                  <img src={school.img} alt={school.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#0a192f] text-[15px] leading-snug mb-2">
                    Little Flower School {school.city}
                  </h3>
                  <div className="flex items-center gap-2 text-[12.5px] font-medium text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-red-500/80 shrink-0" strokeWidth={2} />
                    {school.city}, {school.state}
                  </div>
                  <a href="#" className="text-[#0a192f] font-bold text-[13px] flex items-center gap-1.5 hover:text-[#dfae19] transition-colors">
                    Visit School <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#0a192f] w-6" : "bg-gray-300 w-2 hover:bg-gray-400"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
