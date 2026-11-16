import { ArrowRight, BookOpen, HeartHandshake, Sparkles, School } from "lucide-react";
import { paragraphs, splitFirstWord, type SectionContent } from "@/lib/content";

// Icon and colours for each pillar card, in CMS order
const pillarStyles = [
  { icon: BookOpen, bg: "bg-[#fbeef2]", color: "text-lf-burgundy" },
  { icon: HeartHandshake, bg: "bg-[#edf1e8]", color: "text-lf-olive" },
  { icon: Sparkles, bg: "bg-[#fdf6e3]", color: "text-lf-gold" },
  { icon: School, bg: "bg-[#f8ede4]", color: "text-lf-orange" },
];

export default function AdmissionOverviewSection({ data }: { data: SectionContent }) {
  const [accentWord, accentRest] = splitFirstWord(data.scriptAccent);
  const pillars = (data.pillars as { title: string; desc: string }[]).map((p, i) => ({
    title: p.title,
    text: p.desc,
    ...pillarStyles[i % pillarStyles.length],
  }));
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="lg:col-span-7">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              {data.headline}{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                {accentWord}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              {accentRest}
            </h2>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
              {paragraphs(data.overview).map((p) => (
                <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>
              ))}
            </div>
            <a
              href={data.ctaLink}
              className="mt-8 inline-flex items-center gap-4 bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-colors shadow-md"
            >
              {data.ctaText}
              <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
              </span>
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map(({ icon: Icon, title, text, bg, color }, i) => (
              <div
                key={title}
                className={`p-4 sm:p-6 rounded-[24px] border border-gray-100 bg-[#fefdfa] shadow-[0_4px_20px_rgb(0,0,0,0.03)] ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-[#0a192f] text-[15px] mb-1.5">{title}</h3>
                <p className="whitespace-pre-line text-gray-500 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
