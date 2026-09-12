import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function OurSchoolHeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-[#fefdfa] pt-32 pb-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c76785]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Our School</span>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[55px] font-medium leading-[1.3] mb-8 text-[#0a192f]">
              A Place to <br />
              <span className="font-script text-[#832646] text-[40px] sm:text-[48px] md:text-[55px] relative inline-block -my-2 pr-2">
                 Learn, Grow & Lead.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At Little Flower Children’s School - our prime focus is on the school environment because we feel a school is a place that plays an important part in any student’s learning journey & here is where students shape themselves.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Our Campus strives to bring in such environment of learning, exploration, creativity, play & everyday growth - a place where each student feels secure and has the chance to explore various academic & non-academic opportunities, making them ready with confidence.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="lg:col-span-6 mt-12 lg:mt-0 relative hidden md:block">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="LFCS Campus" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
