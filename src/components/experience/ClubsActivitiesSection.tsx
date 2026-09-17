import { Microscope, Code, MessageSquare, BookOpen, Trophy, Lightbulb, Users, Blocks, Palette, Activity, Music } from "lucide-react";

const activities = [
  { 
    name: "Academic competitions", 
    icon: <Trophy className="w-5 h-5 text-white" />, 
    bg: "bg-[#e5a024]", 
    image: "/club-card1.webp" 
  },
  { 
    name: "Quiz & general knowledge", 
    icon: <Lightbulb className="w-5 h-5 text-white" />, 
    bg: "bg-[#d47087]", 
    image: "/club-card2.webp" 
  },
  { 
    name: "Technology / STEM activities", 
    icon: <Code className="w-5 h-5 text-white" />, 
    bg: "bg-[#832646]",
    image: "/club-card3.webp" 
  },
  { 
    name: "Debates & communication", 
    icon: <MessageSquare className="w-5 h-5 text-white" />, 
    bg: "bg-[#7949a3]", 
    image: "/club-card4.webp" 
  },
  { 
    name: "Literary activities", 
    icon: <BookOpen className="w-5 h-5 text-white" />, 
    bg: "bg-[#1e9575]", 
    image: "/club-card-5.webp" 
  },
  { 
    name: "Art & creative activities", 
    icon: <Palette className="w-5 h-5 text-white" />, 
    bg: "bg-[#e87a71]", 
    image: "/club-card-6.webp" 
  },
  { 
    name: "Sports", 
    icon: <Activity className="w-5 h-5 text-white" />, 
    bg: "bg-[#5b9e59]", 
    image: "/club-card-7.webp" 
  },
  { 
    name: "Cultural activities", 
    icon: <Music className="w-5 h-5 text-white" />, 
    bg: "bg-[#d89728]", 
    image: "/club-card-8.webp" 
  },
];

export default function ClubsActivitiesSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[#dfae19]/[0.03] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lf-burgundy font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Clubs & Activities</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
               Discover
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            an Interest.<br className="hidden md:block" /> Practice it Further.
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            At LFCS, we introduce our students to various cultural to sports activities - where they learn to participate and explore their interests. Once they discover their interest, we enroll them into these clubs that eventually help them cultivate their interest into a skill.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
          {activities.map((activity, idx) => (
            <div 
              key={idx} 
              className=" border border-gray-100 rounded-[24px] shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="relative w-full h-[160px] md:h-[200px] mt-2">
                 <img loading="lazy" decoding="async" src={activity.image} alt={activity.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                 
                 {/* Icon Badge */}
                 <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-full ${activity.bg} border-4 border-white flex items-center justify-center shadow-md z-10`}>
                   {activity.icon}
                 </div>
              </div>
              <div className="flex flex-col items-center gap-3 pb-3">
                <h3 className="font-semibold text-[#0a192f] text-[15px] text-center">{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Client Note */}
        <div className="mt-12 text-center text-[13px] text-gray-400 italic">
          * Specific club names and enrollment options vary by campus. Please inquire with the administration.
        </div>

      </div>
    </section>
  );
}
