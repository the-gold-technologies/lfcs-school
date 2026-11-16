import { Target, Users, GraduationCap, HeartHandshake, type LucideIcon } from "lucide-react";
import { paragraphs, type SectionContent } from "@/lib/content";

// The CMS stores each highlight's icon by name; card colours follow CMS order
const highlightIcons: Record<string, LucideIcon> = { Target, Users, GraduationCap, HeartHandshake };
const highlightStyles = [
  { bg: "bg-[#fbeef2]", color: "text-lf-burgundy" },
  { bg: "bg-[#edf1e8]", color: "text-lf-olive" },
  { bg: "bg-[#fdf6e3]", color: "text-lf-gold" },
  { bg: "bg-[#f8ede4]", color: "text-lf-orange" },
];

export default function WhyWorkWithUsSection({ data }: { data: SectionContent }) {
  const highlights = (data.highlights as { icon: string; title: string; text: string }[]).map((h, i) => ({
    ...highlightStyles[i % highlightStyles.length],
    icon: highlightIcons[h.icon] ?? Target,
    title: h.title,
    text: h.text,
  }));
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          <div className="lg:col-span-5">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight">
              {data.headline}{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                {data.scriptAccent}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[15px] text-gray-600 leading-relaxed lg:pt-8">
            {paragraphs(data.description).map((p) => (
              <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, text, bg, color }) => (
            <div
              key={title}
              className="group p-6 rounded-[24px] border border-gray-100 bg-[#fefdfa] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg hover:border-[#dfae19]/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
              </div>
              <h3 className="font-serif text-[20px] text-[#0a192f] leading-snug mb-2">{title}</h3>
              <p className="whitespace-pre-line text-gray-500 text-[14px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
