"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { SectionContent } from "@/lib/content";

export default function StartSchoolFaqSection({ data }: { data: SectionContent }) {
  const faqs = data.faqs as { q: string; a: string; note?: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 bg-[#fdfcfc] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-left mb-12 md:mb-14">
          <span className="text-[#842b46] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            {data.headline}{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="whitespace-pre-line text-gray-500 text-[14px] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[20px] border h-fit transition-colors ${isOpen ? "border-lf-burgundy/30 bg-[#fdf7f8]" : "border-gray-100 bg-gray-50"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0a192f] text-[14.5px] md:text-[15px]">
                    {i + 1}. {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-lf-burgundy shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 -mt-1">
                    <p className="whitespace-pre-line text-gray-600 text-[13.5px] leading-relaxed">{item.a}</p>
                    {item.note && (
                      <p className="whitespace-pre-line mt-2 text-[12px] text-gray-400 italic">* Note: {item.note}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
