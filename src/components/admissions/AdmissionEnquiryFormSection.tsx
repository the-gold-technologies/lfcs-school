"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, ClipboardList, Loader2, MessageCircle, School } from "lucide-react";
import { schools } from "@/components/our-school/AllSchoolsListSection";
import { submitAdmissionEnquiry, type FormState } from "@/app/actions/enquiries";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3 text-[14px] text-[#0a192f] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lf-burgundy/30 focus:border-lf-burgundy transition-all";
const labelClass = "block text-[13px] font-bold text-[#0a192f] mb-2";

const classOptions = [
  "Nursery", "LKG", "UKG",
  "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII",
  "Class IX", "Class X", "Class XI", "Class XII",
];

const sessionOptions = ["2026–27", "2027–28"];

const steps = [
  { icon: ClipboardList, title: "Share a few details", text: "Tell us about your child and the class you are looking for." },
  { icon: School, title: "We check your campus", text: "Our team looks at availability at your preferred school." },
  { icon: MessageCircle, title: "We guide you", text: "We share the admission process and the next steps." },
];

export default function AdmissionEnquiryFormSection() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(submitAdmissionEnquiry, { status: "idle" });

  return (
    <section id="admission-enquiry" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Intro */}
          <div className="lg:col-span-2">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">Admission Enquiry</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
              Let&apos;s Help You Get{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Started
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Interested in admissions at Little Flower Group of Schools? Share a few details, and our team can guide you regarding the admission process and the information relevant to your preferred campus.
            </p>

            <ol className="relative flex flex-col gap-6">
              <div className="absolute left-6 top-6 bottom-6 w-px bg-[#dfae19]/30" aria-hidden="true" />
              {steps.map(({ icon: Icon, title, text }) => (
                <li key={title} className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fdf6e3] border border-[#dfae19]/30 flex items-center justify-center shrink-0 relative z-10">
                    <Icon className="w-5 h-5 text-lf-gold" strokeWidth={2} />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-[#0a192f] text-[15px]">{title}</p>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-[32px] bg-[#fdf7ee] border border-[#e5e5e5]/40 p-6 sm:p-10">
            {state.status === "success" ? (
              <div className="flex flex-col items-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#edf1e8] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#66733a]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[26px] font-medium text-[#0a192f] mb-3">Thank You</h3>
                <p className="text-gray-600 text-[14.5px] max-w-md leading-relaxed">
                  Thank you for your interest in Little Flower Group of Schools. Your enquiry has been received, and our team will review the information provided.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-6">
                {/* Spam trap: hidden from people, often filled in by bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div>
                  <h3 className="font-serif text-[24px] font-medium text-[#0a192f] mb-1">Admission Enquiry Form</h3>
                  <p className="text-gray-500 text-[13.5px]">Fields marked * are required.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="parentName">Parent / Guardian Name *</label>
                    <input id="parentName" name="parentName" type="text" required placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="campus">Preferred School / Campus</label>
                    <select id="campus" name="campus" defaultValue="" className={inputClass}>
                      <option value="">Any / Not sure</option>
                      {schools.map((school) => (
                        <option key={school.name} value={school.name}>{school.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="grade">Class Seeking Admission For *</label>
                    <select id="grade" name="grade" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a class</option>
                      {classOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="session">Academic Session *</label>
                    <select id="session" name="session" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a session</option>
                      {sessionOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="message">Message / Additional Information</label>
                    <textarea id="message" name="message" rows={4} placeholder="Anything you'd like us to know" className={inputClass} />
                  </div>
                </div>

                {state.status === "error" && (
                  <p role="alert" className="text-[13.5px] text-red-700 bg-red-50 border border-red-100 rounded-[12px] px-4 py-3">
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg w-fit disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{pending ? "Sending..." : "Submit Admission Enquiry"}</span>
                  <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                    {pending ? (
                      <Loader2 className="w-4 h-4 text-lf-burgundy animate-spin" strokeWidth={3} />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
