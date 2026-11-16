import Image from "next/image";
import { Quote } from "lucide-react";
import { paragraphs, type SectionContent } from "@/lib/content";

export default function WorkCultureSection({ data }: { data: SectionContent }) {
  const values = data.values as string[];
  return (
    <section className="py-16 md:py-24 bg-[#fdf7ee] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
              <Image src={data.cultureImage} alt="LFCS staff member with the school band" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 rounded-[28px] bg-lf-gold/20 -z-10" aria-hidden="true" />
          </div>

          <div className="lg:col-span-7">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              {data.headline}{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                {data.scriptAccent}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-6">
              {paragraphs(data.description).map((p) => (
                <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {values.map((value) => (
                <span key={value} className="bg-white border border-lf-burgundy/15 text-lf-burgundy text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm">
                  {value}
                </span>
              ))}
            </div>

            <blockquote className="relative bg-white rounded-[24px] border-l-4 border-lf-gold p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-lf-gold/25" strokeWidth={1.5} />
              <p className="whitespace-pre-line font-serif text-[18px] md:text-[20px] text-[#0a192f] leading-snug pr-8">
                {data.quote}
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
