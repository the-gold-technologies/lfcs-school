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
import type { SectionContent } from "@/lib/content";

// Icons for each support item, grouped by stage in CMS order
const stageIcons = [
  [ClipboardList, BookOpen, Megaphone, Users],
  [GraduationCap, CheckCircle2, Rocket],
  [LayoutGrid, Settings, Award, RefreshCw],
];

export default function SupportProvidedSection({ data }: { data: SectionContent }) {
  type Stage = { label: string; color: string; bg: string; items: { title: string; desc: string }[] };
  const stages = (data.stages as Stage[]).map((stage, si) => ({
    ...stage,
    items: stage.items.map((item, ii) => ({ ...item, icon: stageIcons[si]?.[ii] ?? CheckCircle2 })),
  }));
  return (
    <section id="support" className="py-16 bg-[#ffffff] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-5">
            {data.headline}{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
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
                      <p className="whitespace-pre-line text-gray-500 text-[12.5px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Framework */}
        <div className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {stages.map((stage) => stage.label.replace(/\s+Support$/i, "")).map((label, i, all) => (
            <div key={label} className="flex items-center gap-3 sm:gap-4">
              <span className="bg-white border border-gray-200 text-[#0a192f] font-bold text-[12px] uppercase tracking-wide px-5 py-2.5 rounded-full shadow-sm">
                {label}
              </span>
              {i < all.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
