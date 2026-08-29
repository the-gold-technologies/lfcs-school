import { Sparkles, History, Users } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="py-20  bg-white relative overflow-hidden">
      
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 pr-8">
            <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#0a192f] leading-tight mb-6">
              A Journey of <span className="font-script text-[#dfae19] text-[44px] md:text-[56px] relative inline-block -my-4 pr-1">
                Dedication
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
              <p>
                Founded in 1995 with a single classroom and a big dream, Little Flower School began its journey with a simple mission: to provide quality, value-based education that goes beyond textbooks.
              </p>
              <p>
                Over the past two decades, we have grown from a modest neighborhood school into a vast network of educational institutions across multiple states. What hasn't changed is our commitment to fostering a nurturing environment where every child feels valued, encouraged, and challenged to achieve their best.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfdfe] border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <History className="w-6 h-6 text-[#c76785]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a192f] text-[18px]">1995</h4>
                  <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wide">Year Founded</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fcfdfe] border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#dfae19]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a192f] text-[18px]">50,000+</h4>
                  <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wide">Alumni Network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images */}
          <div className="lg:w-1/2 relative w-full h-[500px]">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Teacher and students" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[32px] overflow-hidden shadow-xl z-20 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Students in classroom" className="w-full h-full object-cover" />
            </div>
            
            {/* Playful shapes behind images */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#dfae19]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-10 left-20 w-40 h-40 bg-[#c76785]/10 rounded-full z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
