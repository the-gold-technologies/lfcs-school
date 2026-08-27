import { Target, Award, Monitor, Star } from "lucide-react";

export default function HowWeEducateSection() {
  return (
    <section className="py-14 md:py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Decorative background */}
      <img
        src="/decorative_right.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
          {/* Left Image Area — hidden on mobile, show on xl */}
          <div className="xl:w-[40%] relative w-full px-4 xl:px-0 hidden xl:block">
            <div className="relative z-10 ml-4">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] bg-[#dceae8] z-0"></div>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] border-[6px] border-[#89b3a9] z-10"></div>
              <div className="absolute -top-10 -right-8 w-40 h-32 bg-[#f5d7ce] rounded-[40px] rounded-bl-[80px] rotate-[15deg] z-20"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#fae5a0] rounded-[40px] rounded-tr-[80px] -rotate-[15deg] z-20"></div>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Students learning" className="w-full h-auto min-h-[350px] rounded-[32px] object-cover relative z-10" />
            </div>
          </div>

          {/* Right Text Area */}
          <div className="xl:w-[60%] z-10 xl:pl-6 w-full">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">HOW WE EDUCATE</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4 md:mb-2">
              Learning Beyond <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Classrooms
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 mb-10 md:mb-14 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
              We blend strong academics with innovation and creativity to nurture curious minds and confident hearts.
            </p>

            <div className="grid grid-cols-2 md:flex md:flex-row items-start gap-6 md:gap-0 md:divide-x md:divide-gray-100">
              {[
                { icon: Target, color: 'bg-[#71a1ec]', title: 'Experiential Learning', desc: 'Hands-on learning that builds curiosity.' },
                { icon: Award, color: 'bg-[#f87878]', title: 'Academic Excellence', desc: 'Strong foundation with personalized support.' },
                { icon: Monitor, color: 'bg-[#6db387]', title: 'Technology & Innovation', desc: 'Smart classrooms and digital integration.' },
                { icon: Star, color: 'bg-[#a37ee8]', title: 'Holistic Development', desc: 'Nurturing mind, body and character.' },
              ].map(({ icon: Icon, color, title, desc }, i) => (
                <div key={title} className={`flex-1 flex flex-col gap-3 ${i > 0 ? 'md:px-6' : 'md:pr-6'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-[42px] h-[42px] md:w-[46px] md:h-[46px] rounded-full ${color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0a192f] text-[13px] md:text-[15px] leading-tight">{title}</h4>
                  </div>
                  <p className="text-[12px] md:text-[13px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
