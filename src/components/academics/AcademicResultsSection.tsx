import { GraduationCap, Award, Star, Trophy, Crown } from "lucide-react";
import type { SectionContent, Topper } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icon tile for each highlight stat, in CMS order
const statIcons = [
  <Trophy key="trophy" className="w-6 h-6 text-[#dfae19]" />,
  <GraduationCap key="cap" className="w-7 h-7 text-white" />,
  <Star key="star" className="w-6 h-6 text-[#dfae19]" />,
  <Award key="award" className="w-6 h-6 text-white" />,
];

// Ribbon Title Component
const RibbonTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="relative inline-block mb-10 mt-2">
    <div className="bg-[#9c1f38] text-white font-bold py-2.5 px-10 text-[15px] tracking-widest relative z-10 shadow-md">
      {children}
    </div>
    {/* Left Ribbon Tail */}
    <div 
      className="absolute top-3 -left-4 w-6 h-[44px] bg-[#6a1526] -z-10" 
      style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 35% 50%, 0 0)' }}
    />
    {/* Right Ribbon Tail */}
    <div 
      className="absolute top-3 -right-4 w-6 h-[44px] bg-[#6a1526] -z-10" 
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 65% 50%, 100% 0)' }}
    />
  </div>
);

// Rank Ribbon Component
const RankRibbon = ({ label }: { label: string }) => (
  <div className="relative inline-block mt-4 mb-3 w-[120px]">
    <div className="bg-[#9c1f38] text-white font-semibold py-1 px-2 text-[11px] relative z-10 text-center">
      {label}
    </div>
    <div 
      className="absolute top-1.5 -left-2 w-4 h-[28px] bg-[#6a1526] -z-10" 
      style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 40% 50%, 0 0)' }}
    />
    <div 
      className="absolute top-1.5 -right-2 w-4 h-[28px] bg-[#6a1526] -z-10" 
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 60% 50%, 100% 0)' }}
    />
  </div>
);

const FeaturedTopper = ({ topper, badge }: { topper: Topper; badge: string }) => (
  <div className="flex flex-col items-center text-center">
    <Crown className="w-8 h-8 text-[#dfae19] fill-[#dfae19]/30 mb-1" strokeWidth={1.5} />
    <div className="relative w-32 h-32 sm:w-36 sm:h-36">
      <div className="absolute inset-0 rounded-full border-4 border-[#dfae19] z-10"></div>
      <div className="absolute -top-1 -left-1 w-9 h-9 rounded-full bg-[#9c1f38] text-white flex items-center justify-center font-bold text-[13px] z-20 border-2 border-white shadow-sm">
        1st
      </div>
      <div className="absolute inset-1.5 rounded-full overflow-hidden bg-gray-100">
        <img loading="lazy" decoding="async" src={sizedImage(topper.image, 300)} alt={topper.name} className="w-full h-full object-cover object-top" />
      </div>
    </div>
    <RankRibbon label={badge} />
    <div className="text-[30px] font-bold text-[#9c1f38] leading-none">{topper.percent}</div>
    <div className="text-[#0a192f] font-semibold text-[15px] mt-1.5">{topper.name}</div>
  </div>
);

const TopperCard = ({ topper }: { topper: Topper }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-20 h-20 sm:w-[88px] sm:h-[88px] rounded-full p-[3px] bg-gradient-to-br from-[#dfae19] to-[#f5d77a] shadow-sm">
      <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 border-2 border-white">
        <img loading="lazy" decoding="async" src={sizedImage(topper.image, 200)} alt={topper.name} className="w-full h-full object-cover object-top" />
      </div>
    </div>
    <div className="text-[17px] font-bold text-[#9c1f38] leading-tight mt-2.5">{topper.percent}</div>
    <div className="text-gray-600 text-[12px] font-medium leading-snug mt-0.5">{topper.name}</div>
  </div>
);

const ClassToppersBlock = ({ title, exam, badge, toppers, gridCols }: { title: string; exam: string; badge: string; toppers: Topper[]; gridCols: string }) => {
  if (!toppers.length) return null;
  const [first, ...rest] = toppers;
  return (
    <div className="bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-6 md:p-8 pt-16 md:pt-16 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <RibbonTitle>{title}</RibbonTitle>
      </div>
      <p className="whitespace-pre-line text-center text-[13px] font-semibold text-gray-500 tracking-wide mb-8">{exam}</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-3 lg:border-r border-[#dfae19]/30 lg:pr-6">
          <FeaturedTopper topper={first} badge={badge} />
        </div>
        <div className={`lg:col-span-9 grid ${gridCols} gap-x-4 gap-y-8`}>
          {rest.map((t, i) => <TopperCard key={i} topper={t} />)}
        </div>
      </div>
    </div>
  );
};


export default function AcademicResultsSection({ data, toppersX, toppersXII }: { data: SectionContent; toppersX: Topper[]; toppersXII: Topper[] }) {
  const stats = data.stats as { value: string; label: string }[];
  return (
    <section className="py-16 bg-white relative overflow-hidden font-sans">
      
      {/* Decorative BG stars & dots */}
      <div className="absolute top-20 left-10 text-[#dfae19] opacity-30">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-10 text-[#dfae19] opacity-40">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute top-10 right-40 text-[#dfae19] opacity-20">
        <Star className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Top Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#9c1f38]/30 rounded-full px-4 py-1 mb-6 bg-white shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#9c1f38]" />
            <span className="text-[#9c1f38] font-bold text-[11px] tracking-widest uppercase">{data.tagline}</span>
          </div>
          
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            {data.headline} <br className="hidden md:block" />
            <span className="font-script text-[#dfae19] text-[38px] md:text-[54px] relative inline-block -my-4 pr-3">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            {data.headlineSuffix}
          </h2>
          
          <p className="whitespace-pre-line text-gray-600 text-[14px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative z-10">
          
          {stats.map(({ value, label }, i) => {
            // "97%" keeps its smaller percent sign
            const percent = value.endsWith("%");
            return (
              <div
                key={label}
                className={`flex items-center gap-3 flex-1 w-full max-w-[240px] md:max-w-none justify-start md:justify-center ${i < stats.length - 1 ? "md:border-r border-gray-200" : ""}`}
              >
                <div className="w-14 h-14 bg-[#9c1f38] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  {statIcons[i % statIcons.length]}
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#9c1f38] mb-0.5">
                    {percent ? value.slice(0, -1) : value}
                    {percent && <span className="text-xl">%</span>}
                  </div>
                  <div className="text-[12px] text-gray-500 font-medium leading-tight">{label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gradient-to-r from-transparent to-[#dfae19] w-24 md:w-48"></div>
          <Star className="w-4 h-4 text-[#dfae19] fill-[#dfae19]" />
          <h3 className="text-[#9c1f38] font-bold text-[18px] tracking-widest uppercase">{data.achieversHeading}</h3>
          <Star className="w-4 h-4 text-[#dfae19] fill-[#dfae19]" />
          <div className="h-px bg-gradient-to-l from-transparent to-[#dfae19] w-24 md:w-48"></div>
        </div>

        {/* Main Toppers */}
        <div className="flex flex-col gap-14 mb-6">
          <ClassToppersBlock
            title={data.classXTitle}
            exam={data.classXExam}
            badge={data.topperBadge}
            toppers={toppersX}
            gridCols="grid-cols-2 sm:grid-cols-4 md:grid-cols-6"
          />
          <ClassToppersBlock
            title={data.classXIITitle}
            exam={data.classXIIExam}
            badge={data.topperBadge}
            toppers={toppersXII}
            gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
          />
        </div>

      </div>
    </section>
  );
}
