import { Activity, Dumbbell, Medal } from "lucide-react";
import { paragraphs, splitFirstWord, type SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

export default function SportsFitnessSection({ data }: { data: SectionContent }) {
  // "An <Active> School Life": only the accent's first word uses the script font
  const [accentWord, accentRest] = splitFirstWord(data.scriptAccent);
  const activities = (data.activities as { title: string }[]).map((a) => a.title);
  const [introPara, ...morePara] = paragraphs(data.description);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0        ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-48 md:h-64 rounded-[20px] overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" 
                  src={sizedImage(data.image1, 600)} 
                  alt="Swimming at Little Flower" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 md:h-48 rounded-[20px] overflow-hidden shadow-sm bg-lf-burgundy/10 flex items-center justify-center p-6 text-center">
                <p className="whitespace-pre-line text-lf-burgundy font-bold text-[18px] leading-tight">
                  {data.calloutText}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8 md:pt-12">
              <div className="h-32 md:h-48 rounded-[20px] overflow-hidden shadow-sm bg-[#dfae19]/10 flex items-center justify-center">
                <Dumbbell className="w-12 h-12 text-[#dfae19]" />
              </div>
              <div className="h-48 md:h-64 rounded-[20px] overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" 
                  src={sizedImage(data.image2, 600)} 
                  alt="Outdoor sports at Little Flower" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-start max-w-xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              {data.headline} 
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 px-3">
                 {accentWord}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {accentRest}
            </h2>
            
            <p className="whitespace-pre-line text-[15px] text-gray-600 leading-relaxed mb-6">{introPara}</p>
            {morePara.map((p) => (
              <p key={p.slice(0, 40)} className="whitespace-pre-line text-[15px] text-gray-600 leading-relaxed mb-8">{p}</p>
            ))}

            <div className="w-full bg-gray-50 rounded-[20px] p-6 md:p-7 border border-gray-100">
              <h3 className="font-bold text-[#0a192f] mb-6 flex items-center gap-2">
                <Medal className="w-5 h-5 text-[#dfae19]" />
                {data.activitiesTitle}
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] text-gray-700 font-medium">
                    <Activity className="w-4 h-4 text-lf-burgundy" />
                    {activity}
                  </li>
                ))}
              </ul>

              {/* Client Note - Displayed visually but subtly */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-[12px] text-gray-400 italic">
                {data.clientNote}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
