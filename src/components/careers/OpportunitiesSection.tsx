import Image from "next/image";
import { ArrowRight, BookOpen, Briefcase, CheckCircle2, type LucideIcon } from "lucide-react";
import EnquiryCTAButton from "@/components/start-school/EnquiryCTAButton";
import { paragraphs, type SectionContent } from "@/lib/content";

type Opportunity = {
  label: string;
  icon: string;
  heading: string;
  script: string;
  description: string;
  roles: string[];
  cta: string;
  img: string;
};

// The CMS stores each block's icon by name
const opportunityIcons: Record<string, LucideIcon> = { BookOpen, Briefcase };

export default function OpportunitiesSection({ data }: { data: SectionContent }) {
  const opportunities = data.opportunities as Opportunity[];
  return (
    <section id="opportunities" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-24">
        {opportunities.map((item, index) => {
          const flip = index % 2 === 1;
          const Icon = opportunityIcons[item.icon] ?? Briefcase;
          return (
            <div key={item.label} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Image */}
              <div className={`lg:col-span-5 relative ${flip ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
                  <Image src={item.img} alt={`${item.label} at Little Flower Group of Schools`} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
                </div>
                <div className={`absolute -bottom-5 ${flip ? "right-6" : "left-6"} bg-lf-burgundy text-white rounded-[18px] shadow-lg px-5 py-3 flex items-center gap-3`}>
                  <Icon className="w-5 h-5 text-lf-gold" strokeWidth={2} />
                  <span className="text-[13px] font-bold">{item.roles.length} role areas</span>
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
                <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">{item.label}</span>
                <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
                  {item.heading}{" "}
                  <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                    {item.script}
                    <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>

                <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-7">
                  {paragraphs(item.description).map((p) => (
                    <p key={p} className="whitespace-pre-line">{p}</p>
                  ))}
                </div>

                <div className="rounded-[24px] bg-[#fefdfa] border border-gray-100 p-5 sm:p-6 mb-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Potential Roles</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {item.roles.map((role) => (
                      <li key={role} className="flex items-start gap-2.5 text-[14px] font-semibold text-[#0a192f]">
                        <CheckCircle2 className="w-[18px] h-[18px] text-lf-olive shrink-0 mt-0.5" strokeWidth={2} />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                <EnquiryCTAButton
                  className="inline-flex items-center gap-4 bg-lf-burgundy text-white pl-6 pr-2 py-2 rounded-full font-bold text-[14px] sm:text-[15px] hover:bg-lf-burgundy-hover transition-colors shadow-md"
                >
                  {item.cta}
                  <span className="bg-white rounded-full p-1.5 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
                  </span>
                </EnquiryCTAButton>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
