import { CheckCircle2 } from "lucide-react";

const experiences = [
  "Classroom learning",
  "Sports and physical activities",
  "Creative and cultural activities",
  "Competitions and events",
  "Clubs and student activities",
  "Educational trips",
  "Celebrations and school programmes",
];

export default function LifeAtLFCSSection() {
  return (
    <section id="life-at-lfcs" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Life at LFCS</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              Upskilling, Participating & <br/> Growing 
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pl-3">
                 EveryDay
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-8">
              <p>
                At LFCS, even though academics form the core for the student these different activities & opportunities shape them and make them ready for their future.
              </p>
              <p>
                Right from Classroom projects to cultural events, sports activities to competitions LFCS provides students with a variety of opportunities where they can participate & engage more with their school life.
              </p>
            </div>
            
            <div className="w-full">
              <h3 className="font-semibold text-[#0a192f] mb-4 text-[16px]">A typical LFCS experience brings together:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lf-burgundy shrink-0" />
                    <span className="text-[14px] text-gray-700 font-medium">{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Images Layout */}
          <div className="relative w-full h-[500px] hidden md:block">
            {/* Background pattern */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-[#dfae19]/10 rounded-full blur-[60px]"></div>
            
            <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-[20px] overflow-hidden shadow-lg border-4 border-white z-10">
              <img loading="lazy" decoding="async" 
                src="/experience/life1.webp" 
                alt="Creative activities" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[20px] overflow-hidden shadow-xl border-4 border-white z-20">
              <img loading="lazy" decoding="async" 
                src="/experience/life2.webp" 
                alt="Sports activities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Single Image */}
          <div className="md:hidden w-full h-[300px] rounded-[20px] overflow-hidden shadow-md">
            <img loading="lazy" decoding="async" 
              src="/experience/life2.webp" 
              alt="School Life" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
