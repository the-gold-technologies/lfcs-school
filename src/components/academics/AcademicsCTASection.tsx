import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AcademicsCTASection() {
  return (
    <section className="py-12 md:py-20 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative lg:px-0">
        <div className="rounded-[40px] px-8 sm:px-12 md:px-12 lg:px-16 py-8 md:py-12 lg:py-20  overflow-hidden shadow-xl bg-[#fdf7ee]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            {/* Left Text Content */}
            <div className="md:col-span-5 flex flex-col items-start text-left">
              <h2 className="font-serif text-[32px] sm:text-[36px] lg:text-[36px] font-semibold text-[#3f5333] leading-[1.35] mb-6">
                A Strogn Foundation Today,<br /> A Brighter Tomorrow.
              </h2>
              
              <Link href="#admissions" className="bg-lf-burgundy text-white pl-6 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg inline-flex w-max">
                <span>Enquire Now</span> 
                <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
                </span>
              </Link>
            </div>

            {/* Right Image */}
            <div className="md:col-span-7 flex justify-end">
              <img 
                src="/cta-bg.png" 
                alt="Join Little Flower Family" 
                className="w-full absolute max-w-[95%] md:max-w-[70%] -top-6 object-contain translate-x-4 lg:translate-x-12" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


