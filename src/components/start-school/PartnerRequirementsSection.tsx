import { HeartHandshake, Users, Building2, Wallet, ShieldCheck, Info } from "lucide-react";

const profile = [
  { icon: HeartHandshake, title: "Commitment to Education", desc: "An interest in contributing to children's education and the development of the local community.", color: "#dfae19" },
  { icon: Users, title: "Management Capability", desc: "The ability to manage or arrange the resources required for school operations.", color: "#66733a" },
  { icon: Building2, title: "Infrastructure Readiness", desc: "Access to suitable land, premises or the resources needed for school development, according to the applicable requirements.", color: "#3b82f6" },
  { icon: Wallet, title: "Financial Preparedness", desc: "The ability to meet the investment and operating requirements established for the proposed school.", color: "#c76785" },
  { icon: ShieldCheck, title: "Long-Term Commitment", desc: "A willingness to work towards developing and maintaining the school over the long term.", color: "#842b46" },
];

const eligibilityPending = [
  "Eligible individual / organisation types",
  "Minimum land requirement",
  "Preferred location",
  "Financial eligibility",
  "Management experience",
  "School board / affiliation requirements",
];

export default function PartnerRequirementsSection() {
  return (
    <section id="requirements" className="relative py-16 bg-[#fdfcfc] scroll-mt-24">
      <img loading="lazy" decoding="async"
        src="/decorative_left_top.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Partner Requirements</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            Who Can Explore an{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              LFCS Partnership?
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            We welcome enquiries from individuals and organisations who share an interest in education and are prepared to meet the requirements of establishing and managing a school.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-14 pt-6 mb-16">
          {profile.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="relative w-14 h-14 -mb-7 z-20 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
              </div>
              <div className="w-full bg-gray-50 rounded-[20px] pt-11 pb-6 px-5 h-full border border-gray-100">
                <h4 className="font-bold text-[#0a192f] text-[14.5px] mb-2 leading-snug">{item.title}</h4>
                <p className="text-gray-500 text-[12.5px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility - pending confirmation */}
        <div className="rounded-[24px] border-2 border-dashed border-[#dfae19]/40 bg-[#fcf9ed] p-6 md:p-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Info className="w-5 h-5 text-[#b8860b] shrink-0" strokeWidth={1.5} />
            <h3 className="font-bold text-[#0a192f] text-[16px]">Partner Eligibility </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3">
            {eligibilityPending.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-[13.5px] text-gray-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfae19] shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 pt-4 border-t border-[#dfae19]/20 text-[12px] text-gray-500 italic">
            * These eligibility criteria are indicative and will be confirmed with LFCS management before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}
