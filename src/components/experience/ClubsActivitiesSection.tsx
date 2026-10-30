import { Code, MessageSquare, BookOpen, Trophy, Lightbulb, Palette, Activity, Music } from "lucide-react";

import { splitAfterSentence, type SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Badge icon for each club card, in CMS order
const clubIcons = [Trophy, Lightbulb, Code, MessageSquare, BookOpen, Palette, Activity, Music];

export default function ClubsActivitiesSection({ data }: { data: SectionContent }) {
  const activities = (data.clubs as { name: string; bg: string; image: string }[]).map((club, i) => ({
    ...club,
    Icon: clubIcons[i % clubIcons.length],
  }));
  // The CMS headline repeats the script word ("Discover an Interest. ..."), so drop it here;
  // from md up the heading breaks after its first sentence
  const accent = (data.scriptAccent as string).trim();
  const headline = (data.headline as string).trim();
  const rest = headline.startsWith(accent) ? headline.slice(accent.length).trim() : headline;
  const [restLead, restTail] = splitAfterSentence(rest);
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-[40%] h-[100%] bg-[#dfae19]/[0.03] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lf-burgundy font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
               {accent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            {restLead}{restTail && <><br className="hidden md:block" /> {restTail}</>}
          </h2>
          <p className="whitespace-pre-line text-[15px] text-gray-600 leading-relaxed mb-4">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
          {activities.map((activity, idx) => (
            <div 
              key={idx} 
              className=" border border-gray-100 rounded-[24px] shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="relative w-full h-[160px] md:h-[200px] mt-2">
                 <img loading="lazy" decoding="async" src={sizedImage(activity.image, 500)} alt={activity.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                 
                 {/* Icon Badge */}
                 <div style={{ backgroundColor: activity.bg }} className={`absolute bottom-3 left-3 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-md z-10`}>
                   <activity.Icon className="w-5 h-5 text-white" />
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
          {data.clientNote}
        </div>

      </div>
    </section>
  );
}
