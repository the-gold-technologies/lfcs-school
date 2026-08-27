"use client";
import { Trophy, Lightbulb, Microscope, LayoutGrid, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

// Each column cycles through its own set of school-environment images, offset by time
const columnImages = [
  [
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",   // Sports
    "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop", // PE field
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2072&auto=format&fit=crop", // Students running
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop", // Swimming
  ],
  [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", // Science lab
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Tech/computer
    "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop", // Books/study
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", // Classroom
  ],
  [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", // Teacher classroom
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", // Students studying
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop", // Art & music
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop", // School building
  ],
];

function AutoImageColumn({ images, delayMs }: { images: string[]; delayMs: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => (prev + 1) % images.length);
    }, 3000 + delayMs);
    return () => clearInterval(t);
  }, [images.length, delayMs]);

  return (
    <div className="w-full rounded-[20px] overflow-hidden h-full shrink-0 shadow-sm border border-gray-100 relative">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="School experience"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 0.8s ease",
            zIndex: i === active ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent z-10" />
    </div>
  );
}


export default function ExperienceSection() {
  return (
    <section className="py-14 md:py-24 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
          <div className="xl:w-[35%] px-4 sm:px-6 lg:px-8 xl:px-0">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">THE SCHOOL EXPERIENCE</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4 md:mb-5">
              Where Learning Comes <span className="font-script text-[#dfae19] text-[48px] relative inline-block -my-4 pr-1">
                Alive
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 mb-8 text-[15px] max-w-lg leading-relaxed">
              From world-class infrastructure to vibrant activities, we provide experiences that shape well-rounded individuals.
            </p>

            <div className="flex gap-4 sm:gap-4 flex-wrap mb-10">
              <div className="flex flex-col items-center gap-3 w-[70px]">
                <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                  <Trophy className="w-[24px] h-[24px]" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Sports</span>
              </div>
              <div className="flex flex-col items-center gap-3 w-[70px]">
                <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                  <Lightbulb className="w-[24px] h-[24px]" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Arts & Culture</span>
              </div>
              <div className="flex flex-col items-center gap-3 w-[70px]">
                <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                  <Microscope className="w-[24px] h-[24px]" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Modern Labs</span>
              </div>
              <div className="flex flex-col items-center gap-3 w-[70px]">
                <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                  <LayoutGrid className="w-[24px] h-[24px]" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Clubs & Activities</span>
              </div>
              <div className="hidden sm:flex flex-col items-center gap-3 w-[70px]">
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                  <ShieldCheck className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Safe Campus</span>
              </div>
            </div>

            <button className="bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-[16px] font-bold text-[14px] hover:bg-lf-burgundy-hover transition-colors flex items-center gap-1 w-fit shadow-md group">
              Explore Experience
              <div className="w-10 h-10  flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Right: 3 auto-cycling image columns — hidden on mobile, visible from lg */}
          <div className="xl:w-[65%] w-full px-4 sm:px-6 xl:px-0">
            {/* Single image for small screens — full width */}
            <div className="xl:hidden w-full rounded-[20px] overflow-hidden h-[260px] sm:h-[320px] relative shadow-sm border border-gray-100">
              <AutoImageColumn images={columnImages[0]} delayMs={0} />
            </div>
            {/* 3-column layout for xl+ */}
            <div className="hidden xl:flex gap-4 h-[440px] relative">
              <div className="absolute -bottom-6 -left-6 z-20">
                <Star className="w-14 h-14 text-[#c7a4ff] fill-[#c7a4ff]/30 rotate-[-15deg]" strokeWidth={1.5} />
              </div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[0]} delayMs={0} /></div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[1]} delayMs={1000} /></div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[2]} delayMs={2000} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
