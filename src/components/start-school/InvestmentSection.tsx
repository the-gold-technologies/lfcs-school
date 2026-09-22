import { MapPin, Building2, FlaskConical, Dumbbell, Armchair, Settings } from "lucide-react";

const considerations = [
  { icon: MapPin, title: "Land & Location", desc: "Identification of suitable land and location based on the school's proposed size, community needs and applicable requirements.", color: "#dfae19", bg: "#fcf5de", image: "/start-school/investment1.webp" },
  { icon: Building2, title: "School Building", desc: "Planning classrooms, administrative spaces and other required areas for school operations.", color: "#66733a", bg: "#edf1e8", image: "/start-school/investment2.webp" },
  { icon: FlaskConical, title: "Academic Facilities", desc: "Provision of appropriate learning resources, laboratories, library and other facilities, as applicable.", color: "#3b82f6", bg: "#eff6ff", image: "/start-school/investment3.webp" },
  { icon: Dumbbell, title: "Sports & Activity Areas", desc: "Planning spaces for physical education, sports and student activities.", color: "#c76785", bg: "#fbeff2", image: "/start-school/investment4.webp" },
  { icon: Armchair, title: "Furniture & Equipment", desc: "Arranging classroom furniture, computers, teaching resources and other essential equipment.", color: "#842b46", bg: "#fbeef1", image: "/start-school/investment5.webp" },
  { icon: Settings, title: "Operational Resources", desc: "Planning for staffing, technology, administration and ongoing school operations.", color: "#b56f35", bg: "#fdf2e9", image: "/start-school/investment6.webp" },
];

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-16 bg-[#fdfcfc] relative overflow-hidden scroll-mt-24">
      <img loading="lazy" decoding="async"
        src="/decorative_left.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full -top-40 h-full object-contain z-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#b56f35] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Investment & Infrastructure</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            Planning the{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              Resources for Your School
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            The investment and infrastructure requirements for an LFCS school will depend on the proposed location, school size, classes offered, facilities and applicable regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {considerations.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[5/3] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div
                className="relative -mt-7 z-20 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.12)] border-4 border-white transition-transform duration-300 group-hover:-translate-y-1"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-[#0a192f] text-[16px] mt-4 mb-2 leading-snug">{item.title}</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[90%]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
