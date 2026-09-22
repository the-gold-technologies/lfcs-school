const steps = [
  { n: "01", title: "Initial Enquiry", desc: "Share your interest in establishing an LFCS school, along with your proposed location and initial requirements." },
  { n: "02", title: "Discussion & Evaluation", desc: "Discuss the proposed school, location, objectives and partnership requirements with the LFCS team." },
  { n: "03", title: "Location & Feasibility", desc: "Review the proposed location, infrastructure requirements and feasibility of the school project." },
  { n: "04", title: "Partnership Finalisation", desc: "Discuss and finalise the partnership structure, responsibilities, commercial terms and relevant agreements." },
  { n: "05", title: "School Planning & Development", desc: "Work on infrastructure planning, academic requirements, staffing and other preparations necessary for establishing the school." },
  { n: "06", title: "Pre-Launch Preparation", desc: "Complete relevant operational preparations, branding, admissions planning and staff readiness." },
  { n: "07", title: "School Launch", desc: "Proceed with the opening of the school after completing the applicable requirements and approvals." },
  { n: "08", title: "Ongoing Operations", desc: "Continue school operations with the agreed support and coordination framework." },
];

export default function SetupProcessSection() {
  return (
    <section id="process" className="relative py-16 bg-[#fdfdfc] scroll-mt-24">
      <img loading="lazy" decoding="async"
        src="/decorative_right.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full top-0 left-0 object-contain z-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[#3b82f6] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">School Setup Process</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            From Planning to{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              School Opening
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Establishing a school requires coordinated planning across infrastructure, academic preparation, staffing and operational readiness our proposed setup process is presented through the stages below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col items-start text-left hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="font-script text-[#dfae19] text-[32px] leading-none mb-4 block">{step.n}</span>
              <h4 className="font-bold text-[#0a192f] text-[15px] mb-2 leading-snug">{step.title}</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
