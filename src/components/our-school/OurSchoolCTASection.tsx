import { ArrowRight, Leaf, Users, Star } from "lucide-react";
import Link from "next/link";

export default function OurSchoolCTASection() {
  return (
    <section className="pb-32 pt-12 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="rounded-[40px] bg-[#fdf7ee] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-[#e5e5e5]/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-8 sm:p-12  flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#d8a32a] font-bold text-[11px] tracking-[0.25em] uppercase">
                  Admissions Open
                </span>
              </div>
              
              <h2 className="font-serif text-[38px] sm:text-[44px] lg:text-[48px] font-medium text-[#111c30] leading-[1.35] mb-5 tracking-tight">
                Give your child a place to <br />
                <span className="font-script text-[#be204c] text-[48px] sm:text-[56px] lg:text-[62px] relative inline-block -my-1 pr-2">
                  Grow. Lead. Learn.
                  <svg className="absolute bottom-[8px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 7 Q 50 12 98 3" stroke="#be204c" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>


              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <Link href="/admissions" className="bg-lf-burgundy text-white pl-6 pr-2 py-2 rounded-full font-bold text-[14px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-between gap-4 shadow-md hover:shadow-lg w-full sm:w-auto group">
                  <span>Enquire for Admission</span> 
                  <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={2.5} />
                  </span>
                </Link>

                <Link href="/about" className="bg-white text-[#41533b] border border-gray-200 px-8 py-3 rounded-full font-bold text-[14px] hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm w-full sm:w-auto">
                  Explore Our School
                </Link>
              </div>

              {/* Features Bottom Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 pt-6 border-t border-gray-200/80 text-[13px] font-semibold text-[#546072]">
                
                <div className="flex items-center gap-3 sm:pr-6">
                  <div className="text-[#41533b]">
                    <Leaf className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="leading-tight text-[12px]">Nurturing<br/>Environment</span>
                </div>

                <div className="hidden sm:block w-[1px] h-10 bg-gray-200/80"></div>

                <div className="flex items-center gap-3 sm:px-6">
                  <div className="text-[#8c2b45]">
                    <Users className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="leading-tight text-[12px]">Holistic<br/>Development</span>
                </div>

                <div className="hidden sm:block w-[1px] h-10 bg-gray-200/80"></div>

                <div className="flex items-center gap-3 sm:pl-6">
                  <div className="text-[#dfaf27]">
                    <Star className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="leading-tight text-[12px]">Brighter<br/>Futures</span>
                </div>

              </div>
              
            </div>

            {/* Right Image */}
            <div className="w-full h-[400px] lg:h-auto relative -ml-10">
              <img loading="lazy" decoding="async" 
                src="/our-school-cta.png" 
                alt="LFCS Students" 
                className="w-full h-full object-contain"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
