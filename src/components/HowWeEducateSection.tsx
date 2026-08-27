import { Target, Award, Monitor, Star } from "lucide-react";

export default function HowWeEducateSection() {
  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-16 items-center">
          {/* Left Image Area */}
          <div className="xl:w-[40%] relative w-full px-4 xl:px-0">
            <div className="relative z-10 ml-4">
              {/* Teal background frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] bg-[#dceae8] z-0"></div>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] border-[6px] border-[#89b3a9] z-10"></div>
              {/* Peach blob top right */}
              <div className="absolute -top-10 -right-8 w-40 h-32 bg-[#f5d7ce] rounded-[40px] rounded-bl-[80px] rotate-[15deg] z-20"></div>
              {/* Yellow blob bottom left */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#fae5a0] rounded-[40px] rounded-tr-[80px] -rotate-[15deg] z-20"></div>

              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Students learning" className="w-full h-auto min-h-[350px] rounded-[32px] object-cover relative z-10" />
            </div>
          </div>

          {/* Right Text Area */}
          <div className="xl:w-[60%] z-10 xl:pl-6">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">HOW WE EDUCATE</span>
            <h2 className="font-serif text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
              Learning Beyond <span className="font-script text-[#dfae19] text-[48px] relative inline-block -my-4 pr-1">
                Classrooms
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 mb-14 text-[16px] max-w-2xl leading-relaxed">
              We blend strong academics with innovation and creativity to nurture curious minds and confident hearts.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 md:divide-x md:divide-gray-100">

              {/* Feature 1 */}
              <div className="flex-1 md:pr-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#71a1ec] flex items-center justify-center shrink-0">
                    <Target className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Experiential<br />Learning</h4>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Hands-on learning that builds curiosity.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex-1 md:px-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#f87878] flex items-center justify-center shrink-0">
                    <Award className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Academic<br />Excellence</h4>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Strong foundation with personalized support.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex-1 md:px-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#6db387] flex items-center justify-center shrink-0">
                    <Monitor className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Technology &<br />Innovation</h4>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Smart classrooms and digital integration.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex-1 md:pl-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#a37ee8] flex items-center justify-center shrink-0">
                    <Star className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Holistic<br />Development</h4>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed">Nurturing mind, body and character.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
