import {
  ClipboardList,
  BookOpen,
  Megaphone,
  Users,
  GraduationCap,
  CheckCircle2,
  Rocket,
  LayoutGrid,
  Settings,
  Award,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    label: "Pre-Launch Support",
    color: "#dfae19",
    bg: "#fcf5de",
    items: [
      { icon: ClipboardList, title: "School Planning", desc: "Guidance on the initial planning and development requirements, where applicable." },
      { icon: BookOpen, title: "Academic Planning", desc: "Support with academic structure, curriculum implementation and teaching-related planning, subject to the agreed scope." },
      { icon: Megaphone, title: "Branding & Communication", desc: "Guidelines for applying the LFCS brand identity across relevant school touchpoints." },
      { icon: Users, title: "Faculty & Staff Planning", desc: "Guidance related to staffing requirements, recruitment and training, if included in the partnership." },
    ],
  },
  {
    label: "Launch Support",
    color: "#842b46",
    bg: "#fbeef1",
    items: [
      { icon: GraduationCap, title: "Admissions Planning", desc: "Support for planning the admission process and related communication activities, where applicable." },
      { icon: CheckCircle2, title: "School Readiness", desc: "Coordination of relevant preparations required before the school begins operations." },
      { icon: Rocket, title: "Marketing & Launch Collaterals", desc: "Support with approved branding and marketing materials, according to the partnership scope." },
    ],
  },
  {
    label: "Post-Launch Support",
    color: "#3b82f6",
    bg: "#eff6ff",
    items: [
      { icon: LayoutGrid, title: "Academic Coordination", desc: "Support related to academic planning and implementation, where agreed." },
      { icon: Settings, title: "Operational Guidance", desc: "Assistance with relevant operational processes and school management requirements." },
      { icon: Award, title: "Training & Development", desc: "Possible training and development programmes for teachers and staff, subject to availability." },
      { icon: RefreshCw, title: "Continuous Coordination", desc: "Ongoing support arrangements as defined in the partnership agreement." },
    ],
  },
];

export default function SupportProvidedSection() {
  return (
    <section id="support" className="py-16 bg-[#ffffff] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">What LFCS Provides</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            Support Across the School{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              Development Journey
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, si) => (
            <div key={si} className="bg-gray-50 rounded-[24px] p-6 md:p-7 border border-gray-100">
              <h3 className="font-bold text-lg text-[#0a192f] mb-6 flex items-center gap-3">
                {stage.label}
              </h3>

              <div className="flex flex-col gap-5">
                {stage.items.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: stage.color }} strokeWidth={1.5} />
                    <div>
                      <h4 className="font-bold text-[#0a192f] text-[13.5px] mb-1 leading-snug">{item.title}</h4>
                      <p className="text-gray-500 text-[12.5px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Framework */}
        <div className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {["Pre-Launch", "Launch", "Post-Launch"].map((label, i) => (
            <div key={label} className="flex items-center gap-3 sm:gap-4">
              <span className="bg-white border border-gray-200 text-[#0a192f] font-bold text-[12px] uppercase tracking-wide px-5 py-2.5 rounded-full shadow-sm">
                {label}
              </span>
              {i < 2 && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
