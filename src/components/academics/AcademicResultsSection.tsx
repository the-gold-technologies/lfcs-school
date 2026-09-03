import { GraduationCap, Award, TrendingUp, Star, User, Medal, Trophy } from "lucide-react";

const toppersX = [
  { rank: 1, percent: "98.6%", name: "Student Name", label: "1st Topper" },
  { rank: 2, percent: "97.8%", name: "Student Name", label: "2nd Topper" },
  { rank: 3, percent: "97.2%", name: "Student Name", label: "3rd Topper" },
];

const toppersXII = [
  { rank: 1, percent: "98.2%", name: "Student Name", label: "1st Topper" },
  { rank: 2, percent: "97.4%", name: "Student Name", label: "2nd Topper" },
  { rank: 3, percent: "96.8%", name: "Student Name", label: "3rd Topper" },
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

const TopperProfile = ({ rank, percent, name, label }: { rank: number, percent: string, name: string, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24 sm:w-28 sm:h-28">
      {/* Golden Ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-[#dfae19] z-10"></div>
      
      {/* Rank Badge */}
      <div className="absolute -top-1 -left-2 w-8 h-8 rounded-full bg-[#dfae19] text-white flex items-center justify-center font-bold text-lg z-20 border-2 border-white shadow-sm">
        {rank}
      </div>
      
      {/* Placeholder Avatar */}
      <div className="absolute inset-1 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center z-0">
        <User className="w-16 h-16 text-gray-400 mt-4" />
      </div>
    </div>
    
    <RankRibbon label={label} />
    
    <div className="text-[22px] font-bold text-[#9c1f38] leading-tight">{percent}</div>
    <div className="text-gray-500 text-[12px] mt-0.5">{name}</div>
  </div>
);

const MiniProfile = () => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-2 shadow-sm border border-gray-300">
      <User className="w-8 h-8 text-gray-400 mt-2" />
    </div>
    <div className="text-[10px] text-gray-500 font-medium leading-tight text-center">Subject<br/>Name</div>
  </div>
);

const AchievementMedal = () => (
  <div className="flex flex-col items-center bg-gray-50/80 border border-gray-100 rounded-lg p-3 shadow-sm w-full">
    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-1 text-white shadow-sm">
      <Star className="w-5 h-5 fill-white" />
    </div>
    <div className="w-4 h-6 bg-gray-300 -mt-2 mb-2" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
    <div className="text-[10px] text-gray-500 font-medium leading-tight text-center mt-1">Achievement<br/>Name</div>
  </div>
);

const TrophyItem = () => (
  <div className="flex flex-col items-center">
    <Award className="w-12 h-12 text-gray-300 mb-2 drop-shadow-sm" strokeWidth={1} />
    <div className="text-[10px] text-gray-500 font-medium leading-tight text-center">Olympiad<br/>Name</div>
  </div>
);


export default function AcademicResultsSection() {
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
            <span className="text-[#9c1f38] font-bold text-[11px] tracking-widest uppercase">Academic Results</span>
          </div>
          
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            Primary Objective of <br className="hidden md:block" />
            <span className="font-script text-[#dfae19] text-[38px] md:text-[54px] relative inline-block -my-4 pr-3">
              Consistent
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Academic Performance
          </h2>
          
          <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            At LFCS, we focus on a strong foundation, concept clarity, consistent learning & preparation that helps our students perform to the best of their abilities.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative z-10">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3 flex-1 justify-center md:border-r border-gray-200">
            <div className="w-14 h-14 bg-[#9c1f38] rounded-full flex items-center justify-center shrink-0 shadow-md">
               <Trophy className="w-6 h-6 text-[#dfae19]" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#9c1f38] mb-0.5">98.6<span className="text-xl">%</span></div>
              <div className="text-[12px] text-gray-500 font-medium leading-tight">School Topper<br/>with 98.6%</div>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="flex items-center gap-3 flex-1 justify-center md:border-r border-gray-200">
            <div className="w-14 h-14 bg-[#9c1f38] rounded-full flex items-center justify-center shrink-0 shadow-md">
               <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#9c1f38] mb-0.5">96.4<span className="text-xl">%</span></div>
              <div className="text-[12px] text-gray-500 font-medium">XII Pass Percentage</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 flex-1 justify-center md:border-r border-gray-200">
            <div className="w-14 h-14 bg-[#9c1f38] rounded-full flex items-center justify-center shrink-0 shadow-md">
               <Star className="w-6 h-6 text-[#dfae19]" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#9c1f38] mb-0.5">100<span className="text-xl">%</span></div>
              <div className="text-[12px] text-gray-500 font-medium">X Pass Percentage</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="w-14 h-14 bg-[#9c1f38] rounded-full flex items-center justify-center shrink-0 shadow-md">
               <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#9c1f38] mb-0.5">94.2<span className="text-xl">%</span></div>
              <div className="text-[12px] text-gray-500 font-medium">Overall Pass Percentage</div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gradient-to-r from-transparent to-[#dfae19] w-24 md:w-48"></div>
          <Star className="w-4 h-4 text-[#dfae19] fill-[#dfae19]" />
          <h3 className="text-[#9c1f38] font-bold text-[18px] tracking-widest uppercase">Top Achievers</h3>
          <Star className="w-4 h-4 text-[#dfae19] fill-[#dfae19]" />
          <div className="h-px bg-gradient-to-l from-transparent to-[#dfae19] w-24 md:w-48"></div>
        </div>

        {/* Main Toppers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Class X */}
          <div className="bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-6 pt-0 text-center relative pt-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <RibbonTitle>CLASS X TOPPERS</RibbonTitle>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {toppersX.map((t, i) => <TopperProfile key={i} {...t} />)}
            </div>
          </div>

          {/* Class XII */}
          <div className="bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-6 pt-0 text-center relative pt-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <RibbonTitle>CLASS XII TOPPERS</RibbonTitle>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {toppersXII.map((t, i) => <TopperProfile key={i} {...t} />)}
            </div>
          </div>

        </div>

        {/* Bottom Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-6">
          
          {/* Subject-Wise */}
          <div className="lg:col-span-5 bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-5 pt-0 relative pt-8">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <RibbonTitle>SUBJECT-WISE TOPPERS</RibbonTitle>
            </div>
            <div className="flex justify-between items-center px-2 mt-4">
               <MiniProfile />
               <MiniProfile />
               <MiniProfile />
               <MiniProfile />
               <MiniProfile />
            </div>
          </div>

          {/* Merit */}
          <div className="lg:col-span-3 bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-5 pt-0 relative pt-8">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <RibbonTitle>MERIT ACHIEVEMENTS</RibbonTitle>
            </div>
            <div className="flex justify-between items-center gap-3 mt-4">
               <AchievementMedal />
               <AchievementMedal />
               <AchievementMedal />
            </div>
          </div>

          {/* Olympiad */}
          <div className="lg:col-span-4 bg-[#fcfaf7] border border-[#dfae19]/30 rounded-2xl p-5 pt-0 relative pt-8">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
              <RibbonTitle>OLYMPIAD / EXAM ACHIEVEMENTS</RibbonTitle>
            </div>
            <div className="flex justify-around items-center mt-4">
               <TrophyItem />
               <TrophyItem />
               <TrophyItem />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
