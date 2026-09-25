import { ArrowRight, GraduationCap, Users, Award, Trophy } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[65vh] md:h-[75vh] lg:h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hersection_bg.webp" alt="Students" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
          <img src="/herobg1.webp" alt="Hero Overlay" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-20 md:mt-14 pb-10 md:pb-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-2xl mb-4 md:mb-6">
            <span className="text-[#0a192f]">Rooted in Values.</span><br />
            <span className="text-lf-burgundy">Rising with <span className="font-script text-lf-burgundy text-[48px] sm:text-[64px] md:text-[65px] relative inline-block -my-4 pr-2">
              Excellence.
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span></span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-xl mb-8 md:mb-10 leading-relaxed font-light">
            A network of CBSE schools committed to academic excellence, character building and holistic development.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link href="/our-school" className="bg-lf-burgundy text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-all flex items-center gap-2 text-sm md:text-base">
              Explore Our Schools <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-lf-gold" />
            </Link>
            <Link href="/start-school" className="bg-transparent border border-lf-burgundy text-lf-burgundy px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy/5 transition-all flex items-center gap-2 text-sm md:text-base">
              Start a School <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Statistics Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-0 -mt-8 md:-mt-16 mb-10 md:mb-16">
        <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-xl py-5 md:py-8 px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left divide-x divide-gray-100">
          <div className="flex flex-row gap-2 md:gap-4 items-start">
            <GraduationCap className="w-7 h-7 md:w-11 md:h-11 text-red-500 mb-2 md:mb-3 shrink-0" strokeWidth={1.5} />
            <div>
              <div className="text-xl md:text-3xl font-medium text-[#0a192f]">14000+</div>
              <div className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 md:mt-1">Happy Students</div>
            </div>
          </div>
          <div className="flex flex-row gap-2 md:gap-4 items-start">
            <Users className="w-7 h-7 md:w-11 md:h-11 text-blue-500 mb-2 md:mb-3 shrink-0" strokeWidth={1.5} />
            <div>
              <div className="text-xl md:text-3xl font-medium text-[#0a192f]">1000+</div>
              <div className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 md:mt-1">Qualified Teachers</div>
            </div>
          </div>
          <div className="flex flex-row gap-2 md:gap-4 items-start">
            <Award className="w-7 h-7 md:w-11 md:h-11 text-pink-500 mb-2 md:mb-3 shrink-0" strokeWidth={1.5} />
            <div>
              <div className="text-xl md:text-3xl font-medium text-[#0a192f]">30+</div>
              <div className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 md:mt-1">Years Of Excellence</div>
            </div>
          </div>
          <div className="flex flex-row gap-2 md:gap-4 items-start">
            <Trophy className="w-7 h-7 md:w-11 md:h-11 text-orange-500 mb-2 md:mb-3 shrink-0" strokeWidth={1.5} />
            <div>
              <div className="text-xl md:text-3xl font-medium text-[#0a192f]">150+</div>
              <div className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 md:mt-1">Activities &amp; Achievements</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
