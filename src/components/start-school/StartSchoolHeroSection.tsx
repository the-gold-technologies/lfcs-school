import { ChevronRight } from "lucide-react";
import Image from "next/image";
import EnquiryCTAButton from "./EnquiryCTAButton";

export default function StartSchoolHeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-[#fefdfa] pt-24 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#842b46]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left w-full max-w-4xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Start a School</span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-[55px] font-medium leading-tight mb-6 text-[#0a192f]">
              Start a School. <br /> Shape a {' '}
              <span className="font-script text-lf-burgundy text-[40px] sm:text-[48px] md:text-[60px] relative inline-block -my-2 pr-2">
                Future.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              Become a part of LFCS and bring quality education closer to communities, in partnership with individuals and organisations who share our commitment to learning and growth.
            </p>

            <EnquiryCTAButton className="inline-flex items-center gap-2 bg-lf-burgundy text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors text-sm">
              Start Your Enquiry
              <ChevronRight className="w-4 h-4" />
            </EnquiryCTAButton>
          </div>


          {/* Right Image */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end pr-10">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-[600px] mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/start-school/start-school-hero.webp"
                alt="Students interacting at school"
                width={1115}
                height={1024}
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
