import { Palette, Music, Tent } from "lucide-react";

const activities = [
  "Art & Craft",
  "Music",
  "Dance",
  "Drawing & Painting",
  "Cultural performances",
  "Celebrations",
  "Creative competitions",
  "School exhibitions and programmes"
];

export default function ArtsCultureSection() {
  return (
    <section className="py-16 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Content */}
          <div className="flex flex-col items-start max-w-xl order-2 lg:order-1">
            <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Arts, Culture & Creativity</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              A Place to Create & 
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pl-3">
                 Express
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At LFCS, we provide students with an opportunity to explore their creative interests. We open doors for various activities such as art, music, dance, cultural programmes, and many other creative activities where students can get a chance to explore their creativity, develop their interests & can participate in these activities during their school life.
            </p>

            <div className="w-full bg-white rounded-[20px] p-6 md:p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0a192f] mb-5 text-[18px]">Creative & Cultural Activities</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      {idx % 3 === 0 ? <Palette className="w-4 h-4 text-[#c76785]" /> : 
                       idx % 3 === 1 ? <Music className="w-4 h-4 text-[#c76785]" /> : 
                       <Tent className="w-4 h-4 text-[#c76785]" />}
                    </div>
                    <span className="text-[14px] text-gray-700 font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-4">
              <div className="h-48 md:h-64 rounded-[20px] overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Art and Craft" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 md:h-48 rounded-[20px] overflow-hidden shadow-sm bg-[#c76785]/10 flex items-center justify-center p-6 text-center">
                <p className="text-[#c76785] font-bold text-[18px] leading-tight">
                  Creativity, expression, & culture
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8 md:pt-12">
              <div className="h-32 md:h-48 rounded-[20px] overflow-hidden shadow-sm bg-[#3498db]/10 flex items-center justify-center">
                <Palette className="w-12 h-12 text-[#3498db]" />
              </div>
              <div className="h-48 md:h-64 rounded-[20px] overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop" 
                  alt="Cultural Performance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
