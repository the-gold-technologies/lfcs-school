import { ArrowRight, Globe, BookOpen } from "lucide-react";
import Link from "next/link";

export default function ExperienceCTASection() {
  return (
    <section className="pb-32 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative lg:px-0">
        <div className="rounded-[40px] px-8 sm:px-12 md:px-12 lg:px-16 py-8 md:py-12 lg:py-20 overflow-hidden shadow-xl bg-[#fdf7ee] relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 items-center relative z-10">
            {/* Left Text Content */}
            <div className="md:col-span-4 flex flex-col items-start text-left">
              <span className="text-[#3f5333] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block opacity-80">Take the Next Step</span>
              
              <h2 className="font-serif text-[32px] sm:text-[36px] lg:text-[44px] font-semibold text-[#3f5333] leading-[1.3] mb-6">
                Ready to Join the <br /> LFCS Community?
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
                <Link href="/" className="bg-lf-burgundy text-white px-6 py-3 rounded-full font-bold text-[14px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full sm:w-auto">
                  Explore our School
                  <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Placeholder (Could reuse cta-bg.png or another image) */}
            <div className="md:col-span-8 flex justify-end">
              <img loading="lazy" decoding="async" 
                src="/cta-bg.png" 
                alt="Join Little Flower Family" 
                className="w-full absolute max-w-[95%] md:max-w-[75%] -bottom-10 right-0 object-contain translate-x-4 lg:translate-x-12 hidden md:block" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
