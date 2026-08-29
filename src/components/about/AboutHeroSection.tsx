import { ChevronRight } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-[#fefdfa] pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c76785]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-2xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">About Us</span>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[55px] font-medium leading-tight mb-6 text-[#0a192f]">
              Empowering Minds, <br />
              Nurturing <span className="font-script text-lf-burgundy text-[40px] sm:text-[48px] md:text-[60px] relative inline-block -my-2 pr-2">
                Futures.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              Discover the heart of Little Flower Group of Schools. A legacy of excellence, rooted in values, and dedicated to shaping the leaders of tomorrow.
            </p>

            <a href="#academics" className="inline-flex items-center gap-2 bg-lf-burgundy text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors text-sm">
              Explore Our Academics
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 relative w-full flex justify-end">
            <div className="relative w-full max-w-full lg:max-w-[110%] overflow-hidden scale-105 origin-right">
              <img src="/about-hero.png" alt="Little Flower Children School Hero" className="w-full h-auto object-contain" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
