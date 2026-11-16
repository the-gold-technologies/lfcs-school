import { ArrowRight, GraduationCap, Users, Award, Trophy } from "lucide-react";
import Link from "next/link";
import { splitLastWord, type SectionContent } from "@/lib/content";
import type { HeadingTag } from "@/lib/seo";

const statIcons = [
  { Icon: GraduationCap, color: "text-red-500" },
  { Icon: Users, color: "text-blue-500" },
  { Icon: Award, color: "text-pink-500" },
  { Icon: Trophy, color: "text-orange-500" },
];

export default function HeroSection({ data, headingTag: Heading }: { data: SectionContent; headingTag: HeadingTag }) {
  const [accentLead, accentLast] = splitLastWord(data.scriptAccent);
  const stats = data.stats as { value: string; label: string }[];
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[65vh] md:h-[75vh] lg:h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.bgImage} alt="Little Flower students" className="hero-bg absolute inset-0 w-full h-full object-cover object-top" />
          <div className="hero-panel absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
          <img src={data.overlayImage} alt="" className="hero-overlay absolute inset-0 w-full h-full object-cover pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-20 md:mt-14 pb-10 md:pb-0">
          <Heading className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-2xl mb-4 md:mb-6">
            <span className="hero-rise inline-block text-[#0a192f]" style={{ animationDelay: "0.6s" }}>{data.headline}</span><br />
            <span className="hero-rise inline-block text-lf-burgundy" style={{ animationDelay: "0.85s" }}>{accentLead && `${accentLead} `}<span className="font-script text-lf-burgundy text-[48px] sm:text-[64px] md:text-[65px] relative inline-block -my-4 pr-2">
              {accentLast}
              <svg className="absolute bottom-[4px] left-0 w-full h-[10px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path className="hero-draw" pathLength={100} d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span></span>
          </Heading>
          <p className="whitespace-pre-line hero-rise text-base md:text-xl text-gray-700 max-w-xl mb-8 md:mb-10 leading-relaxed font-light" style={{ animationDelay: "1.1s" }}>
            {data.subtitle}
          </p>
          <div className="hero-rise flex flex-wrap gap-3 md:gap-4" style={{ animationDelay: "1.3s" }}>
            <Link href={data.primaryCtaLink} className="bg-lf-burgundy text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-all flex items-center gap-2 text-sm md:text-base">
              {data.primaryCtaText} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-lf-gold" />
            </Link>
            <Link href={data.secondaryCtaLink} className="bg-transparent border border-lf-burgundy text-lf-burgundy px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy/5 transition-all flex items-center gap-2 text-sm md:text-base">
              {data.secondaryCtaText} <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Statistics Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-0 -mt-8 md:-mt-16 mb-10 md:mb-16">
        <div className="hero-rise bg-white rounded-[24px] md:rounded-[32px] shadow-xl py-5 md:py-8 px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left divide-x divide-gray-100" style={{ animationDelay: "1.5s" }}>
          {stats.map(({ value, label }, i) => {
            const { Icon, color } = statIcons[i % statIcons.length];
            return (
              <div key={label} className="flex flex-row gap-2 md:gap-4 items-start">
                <Icon className={`w-7 h-7 md:w-11 md:h-11 ${color} mb-2 md:mb-3 shrink-0`} strokeWidth={1.5} />
                <div>
                  <div className="text-xl md:text-3xl font-medium text-[#0a192f]">{value}</div>
                  <div className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 md:mt-1">{label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
