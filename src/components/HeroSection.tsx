import { ArrowRight, GraduationCap, MapPin, Flag, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hersection_bg.png"
            alt="Students"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
          <img
            src="/herobg1.png"
            alt="Hero Overlay"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto mt-14">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-medium leading-tight max-w-2xl mb-6">
            <span className="text-[#0a192f]">Rooted in Values.</span><br />
            <span className="text-lf-burgundy">Rising with <span className="font-script text-lf-burgundy text-[64px] md:text-[65px] relative inline-block -my-4 pr-2">
              Excellence.
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10 leading-relaxed font-light">
            A network of CBSE schools committed to academic excellence, character building and holistic development.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lf-burgundy text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-all flex items-center gap-2">
              Explore Our Schools <ArrowRight className="w-5 h-5 text-lf-gold" />
            </button>
            <button className="bg-transparent border border-lf-burgundy text-lf-burgundy px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy/5 transition-all flex items-center gap-2">
              Admissions Open <GraduationCap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Statistics Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full -mt-16 mb-16">
        <div className="bg-white rounded-[32px] shadow-xl py-8 px-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-left divide-x divide-gray-100">
          <div className="flex flex-row gap-4 items-start">
            <BuildingIcon className="w-11 h-11 text-red-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">60+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Schools</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <MapPin className="w-11 h-11 text-orange-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">40+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Cities</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Flag className="w-11 h-11 text-green-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">5</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">States</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Users className="w-11 h-11 text-blue-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">50,000+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Students</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Award className="w-11 h-11 text-pink-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">20+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}
