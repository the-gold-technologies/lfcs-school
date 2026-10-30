import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { SectionContent } from "@/lib/content";
import type { HeadingTag } from "@/lib/seo";

export default function ExperienceHeroSection({ data, headingTag: Heading }: { data: SectionContent; headingTag: HeadingTag }) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-[#fefdfa] pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="hidden md:block absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c76785]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-2xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
            
            <Heading className="font-serif text-3xl sm:text-4xl md:text-[55px] font-medium leading-[1.3] mb-6 text-[#0a192f]">
              {data.headline} <br />
              <span className="font-script text-lf-burgundy text-[40px] sm:text-[48px] md:text-[55px] relative inline-block -my-2 pr-2">
                 {data.scriptAccent}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </Heading>

            <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              {data.subtitle}
            </h2>
            <a href={data.ctaLink} className="inline-flex items-center gap-2 bg-lf-burgundy text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors text-sm">
              {data.ctaText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 relative w-full flex justify-center">
            <div className="relative w-full max-w-full lg:max-w-[100%] overflow-hidden scale-90">
              <Image 
                src={data.image} 
                alt="Little Flower students interacting at school" 
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
