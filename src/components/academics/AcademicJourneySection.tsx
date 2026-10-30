import { ChevronRight } from "lucide-react";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Colours for each learning stage, in CMS order (also used by the Admissions class cards)
export const stageStyles = [
  { bgColor: "bg-[#ffb703]", textColor: "text-[#ffb703]", lightBg: "bg-[#ffb703]/10" },
  { bgColor: "bg-[#2a9d8f]", textColor: "text-[#2a9d8f]", lightBg: "bg-[#2a9d8f]/10" },
  { bgColor: "bg-[#0077b6]", textColor: "text-[#0077b6]", lightBg: "bg-[#0077b6]/10" },
  { bgColor: "bg-[#7209b7]", textColor: "text-[#7209b7]", lightBg: "bg-[#7209b7]/10" },
  { bgColor: "bg-[#ff4d6d]", textColor: "text-[#ff4d6d]", lightBg: "bg-[#ff4d6d]/10" },
];

export type StageContent = { title: string; grades: string; desc: string; image: string };

export default function AcademicJourneySection({ data }: { data: SectionContent }) {
  const stages = (data.stages as StageContent[]).map((stage, i) => ({
    ...stage,
    ...stageStyles[i % stageStyles.length],
  }));
  return (
    <section className="pt-16 md:pt-24 pb-12 bg-[#fdfdfc] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="text-[#fca311] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">{data.tagline}</span>
          
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-0">
              {data.headline} <br className="hidden md:block" />
              <span className="font-script text-[#dfae19] text-[38px] md:text-[54px] relative inline-block -my-4">
                {data.scriptAccent}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              {data.subtitle}
            </h2>
          </div>

          <div className="shrink-0 lg:max-w-md flex flex-col items-start lg:pb-2 gap-6">
            
            <a href={data.ctaLink} className="inline-flex items-center gap-3 bg-lf-burgundy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-lf-burgundy-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              {data.ctaText} <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="relative pt-12 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-5 z-10 relative">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center group relative">

                {/* Card */}
                <div className="w-full bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col relative z-10 transition-transform duration-300 group-hover:-translate-y-2 h-[480px]">
                  
                  {/* Colored Header Area (50%) */}
                  <div className={`${stage.lightBg} rounded-t-[32px] pt-10 pb-2 px-4 h-1/2 shrink-0 flex items-end justify-center overflow-hidden`}>
                     <img loading="lazy" decoding="async" src={sizedImage(stage.image, 500)} alt={`${stage.title} at Little Flower`} className="w-full h-full object-contain object-bottom scale-[1.15] origin-bottom" />
                  </div>

                  {/* Text Content (50%) */}
                  <div className="p-4 md:p-6 flex flex-col items-center text-center h-1/2 shrink-0">
                    <h3 className={`font-bold text-[19px] mb-1 ${stage.textColor}`}>
                      {stage.title}
                    </h3>
                    <div className={`font-bold text-[15px] mb-4 ${stage.textColor}`}>
                      {stage.grades}
                    </div>
                    <p className="whitespace-pre-line text-gray-500 text-[13px] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
