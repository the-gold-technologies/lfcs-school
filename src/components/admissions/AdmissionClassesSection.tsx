import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import { stageStyles, type StageContent } from "@/components/academics/AcademicJourneySection";
import { splitFirstWord, type SectionContent } from "@/lib/content";

export default function AdmissionClassesSection({ data }: { data: SectionContent }) {
  const stages = (data.classes as StageContent[]).map((stage, i) => ({
    ...stage,
    ...stageStyles[i % stageStyles.length],
  }));
  // "<Stage> / for Your Child": only the accent's first word uses the script font
  const [accentWord, accentRest] = splitFirstWord(data.scriptAccent);
  return (
    <section className="py-16 bg-[#fcfdfe] relative overflow-hidden">
      <img loading="lazy" decoding="async" src="/decorative_left.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover -top-32 -left-10 pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
              {data.headline}{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                {accentWord}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              {accentRest && <><br />{accentRest}</>}
            </h2>
            <p className="whitespace-pre-line text-gray-500 text-[15px] leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <a
            href={data.ctaLink}
            className="shrink-0 inline-flex items-center gap-2 border border-[#0a192f]/20 text-[#0a192f] px-6 py-2.5 rounded-[16px] font-semibold text-sm hover:bg-[#0a192f] hover:text-white transition-colors"
          >
            {data.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stages.map((stage) => (
            <div key={stage.title} className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow flex sm:flex-col">
              <div className={`relative w-32 shrink-0 sm:w-auto sm:aspect-[4/3] overflow-hidden ${stage.lightBg}`}>
                <Image src={stage.image} alt={`${stage.title} at Little Flower`} fill sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 128px" className="object-contain object-center sm:object-bottom p-2 sm:pb-0 sm:pt-4 sm:px-3 group-hover:scale-105 transition-transform duration-500 origin-bottom" />
              </div>
              <div className={`hidden sm:block h-1 ${stage.bgColor}`} />
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <span className={`text-[12px] font-bold tracking-wider ${stage.textColor} mb-1`}>
                  {stage.grades.replace(/[[\]]/g, "")}
                </span>
                <h3 className="font-serif text-[20px] text-[#0a192f] leading-snug mb-2">{stage.title}</h3>
                <p className="whitespace-pre-line text-gray-500 text-[13px] leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-[18px] bg-[#fdf6e3] border border-[#dfae19]/20 px-5 py-4 max-w-3xl">
          <Info className="w-5 h-5 text-lf-gold shrink-0 mt-0.5" strokeWidth={2} />
          <p className="whitespace-pre-line text-[14px] text-gray-600 leading-relaxed">
            {data.noticeText}
          </p>
        </div>
      </div>
    </section>
  );
}
