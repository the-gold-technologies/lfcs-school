"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can apply to start an LFCS school?",
    a: "Individuals and eligible organisations interested in establishing a school may enquire. The applicable eligibility requirements will depend on the LFCS partnership model.",
  },
  {
    q: "What is the minimum land requirement?",
    a: "The land requirement will depend on the proposed school model, location and applicable infrastructure requirements.",
    note: "Need to confirm this from client — the actual details.",
  },
  {
    q: "What investment is required to start an LFCS school?",
    a: "The investment depends on the proposed school size, location, infrastructure and partnership terms. The LFCS team can provide details after understanding the proposed project.",
  },
  {
    q: "Does LFCS provide academic support?",
    a: "Academic support will depend on the agreed partnership structure and scope of services.",
  },
  {
    q: "Does LFCS help with school infrastructure planning?",
    a: "Details of infrastructure planning and support will depend on the school model and agreed responsibilities.",
  },
  {
    q: "Does LFCS support teacher recruitment and training?",
    a: "Recruitment and training support, if available, will be provided according to the applicable partnership terms.",
  },
  {
    q: "How long does it take to start a school?",
    a: "The timeline depends on location, approvals, infrastructure development, staffing and other project requirements.",
  },
  {
    q: "Does LFCS assist with admissions and marketing?",
    a: "Support for admissions and marketing will depend on the agreed partnership scope.",
  },
  {
    q: "Can I start an LFCS school in my city?",
    a: "You can submit an enquiry with your proposed location. The LFCS team can review the details and discuss the applicable requirements.",
  },
  {
    q: "How can I enquire about starting an LFCS school?",
    a: "Complete the enquiry form on this page, and the relevant team can contact you regarding your proposal.",
  },
];

export default function StartSchoolFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 bg-[#fdfcfc] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-left mb-12 md:mb-14">
          <span className="text-[#842b46] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">FAQs</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            Frequently Asked{" "}
            <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
              Questions
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            Find answers to common questions about starting an LFCS school. For specific queries, feel free to reach out to our team.
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
                    <p className="text-gray-600 text-[13.5px] leading-relaxed">{item.a}</p>
                    {item.note && (
                      <p className="mt-2 text-[12px] text-gray-400 italic">* Note: {item.note}</p>
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
