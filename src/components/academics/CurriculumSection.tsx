import { BookOpen, Calculator, FlaskConical, Globe, Target, Laptop } from "lucide-react";

export default function CurriculumSection() {
  return (
    <section className="py-14 md:py-20 bg-[#fcfdfe] relative overflow-hidden" id="curriculum">
      {/* Decorative background */}
      <img
        src="/decorative_right.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-70"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">

          {/* Left Image Area — hidden on mobile, show on xl */}
          <div className="xl:w-[40%] relative w-full px-4 xl:px-0 hidden xl:block">
            <div className="relative z-10 ml-4">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] bg-[#f5d7ce] z-0"></div>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] border-[6px] border-[#c76785]/40 z-10"></div>
              <div className="absolute -top-10 -right-8 w-40 h-32 bg-[#fae5a0] rounded-[40px] rounded-bl-[80px] rotate-[15deg] z-20"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#dceae8] rounded-[40px] rounded-tr-[80px] -rotate-[15deg] z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                alt="Students learning together"
                className="w-full h-auto min-h-[400px] rounded-[32px] object-cover relative z-10"
              />
            </div>
          </div>

          {/* Right Text Area */}
          <div className="xl:w-[60%] z-10 xl:pl-6 w-full">
            <span className="text-[#c76785] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">OUR CURRICULUM</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4 md:mb-14">
              A curriculum applied for <br /> 
              Developmental
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pl-4">
                 Learning
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-500 mb-6 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
              Our curriculum is designed to provide students with a structured academic journey, with learning developing from foundational concepts to deeper subject understanding as they move through different school levels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 mt-8">
              {[
                { icon: BookOpen, color: 'bg-[#f87878]', title: 'Languages', desc: 'English, Hindi & more.' },
                { icon: Calculator, color: 'bg-[#dfae19]', title: 'Mathematics', desc: 'Logical & analytical.' },
                { icon: FlaskConical, color: 'bg-[#6db387]', title: 'Science', desc: 'Exploration & experiments.' },
                { icon: Globe, color: 'bg-[#71a1ec]', title: 'Social Science', desc: 'History & geography.' },
                { icon: Laptop, color: 'bg-[#a37ee8]', title: 'Computer / IT', desc: 'Digital literacy.' },
                { icon: Target, color: 'bg-orange-400', title: 'Life Skills', desc: 'Physical Ed & General Knowledge.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className={`w-[44px] h-[44px] rounded-full ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-[20px] h-[20px] text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2.5">
                    <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">{title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
