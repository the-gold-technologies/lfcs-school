import Image from "next/image";
import { ChevronRight, Users } from "lucide-react";

export default function CareersHeroSection() {
  return (
    <section className="relative flex items-center bg-[#fefdfa] pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden">
      <div className="hidden md:block absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#842b46]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">
              Careers at Little Flower Group of Schools
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.2] mb-6 text-[#0a192f]">
              Build Your Career. Shape Young{" "}
              <span className="font-script text-lf-burgundy text-[40px] sm:text-[48px] md:text-[58px] relative inline-block -my-2 pr-2">
                Futures.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed max-w-xl mb-8">
              <p>
                At Little Flower Group of Schools, we believe that meaningful education begins with people who are passionate about learning and development. We welcome individuals who want to contribute to an environment where students are encouraged to learn, grow and realise their potential.
              </p>
              <p>
                Explore opportunities to become part of a team committed to education, collaboration and continuous improvement.
              </p>
            </div>

            <a
              href="#opportunities"
              className="inline-flex items-center gap-2 bg-lf-burgundy text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors text-sm"
            >
              Explore Opportunities
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-6 relative w-full max-w-[580px] mx-auto lg:mr-0 aspect-[5/4]">
            <div className="absolute top-0 left-0 w-[80%] aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
              <Image src="/about/approach1.webp" alt="LFCS teacher guiding students at a science display" fill priority sizes="(min-width: 1024px) 475px, 82vw" className="object-cover" />
            </div>

            <div className="absolute right-0 bottom-0 w-[36%] aspect-[3/4] rounded-[24px] overflow-hidden border-[6px] border-white shadow-xl">
              <Image src="/about/values3.webp" alt="Teacher helping a student at the blackboard" fill sizes="(min-width: 1024px) 210px, 36vw" className="object-cover" />
            </div>

            <div className="absolute left-4 bottom-2 bg-white rounded-[18px] shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fbeef2] flex items-center justify-center">
                <Users className="w-5 h-5 text-lf-burgundy" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-serif text-[22px] leading-none text-[#0a192f]">8</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mt-1">Institutions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
