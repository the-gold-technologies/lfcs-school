import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OurSchoolCTASection() {
  return (
    <section className="pb-32 pt-16 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative lg:px-0">
        <div className="rounded-[40px] px-8 sm:px-12 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden shadow-xl bg-[#f8fcf8] border border-[#3f5333]/10 relative">
          
          <div className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Admissions Open</span>
            
            <h2 className="font-serif text-[32px] sm:text-[36px] lg:text-[44px] font-semibold text-[#0a192f] leading-[1.3] mb-6">
              Bring your Kids at LFCS & let them <br className="hidden md:block" />
              <span className="font-script text-[#3f5333] text-[40px] sm:text-[48px] lg:text-[55px] relative inline-block -my-2 px-2">
                 GROW . LEAD. LEARN
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#3f5333" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-[16px] text-gray-600 mb-10 max-w-lg leading-relaxed">
              Discover LFCS and join our vibrant community where every student is encouraged to explore their potential.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
              <Link href="/about" className="bg-white text-[#3f5333] border border-[#3f5333]/20 px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full sm:w-auto">
                Explore Our School
              </Link>

              <Link href="/admissions" className="bg-[#dfae19] text-[#0a192f] pl-8 pr-3 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#dfae19]/90 transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg w-full sm:w-auto group">
                <span>Enquire for Admission</span> 
                <span className="bg-white/30 rounded-full p-2 flex items-center justify-center group-hover:bg-white/50 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0a192f]" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#3f5333]/[0.03] blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#dfae19]/[0.05] blur-[80px] rounded-full pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
}
