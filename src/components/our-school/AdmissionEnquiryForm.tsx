"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { schools } from "@/components/our-school/AllSchoolsListSection";
import { submitContactForm, type FormState } from "@/app/actions/enquiries";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3 text-[14px] text-[#0a192f] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lf-burgundy/30 focus:border-lf-burgundy transition-all";
const labelClass = "block text-[13px] font-bold text-[#0a192f] mb-2";

const grades = [
  "Pre-Nursery / Play Group",
  "Nursery",
  "LKG",
  "UKG",
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
];

export default function AdmissionEnquiryForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(submitContactForm, { status: "idle" });

  return (
    <div>
      <div className="mb-8 pr-10">
        <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Admissions Open</span>
        <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#0a192f] leading-tight mb-4">
          Enquire for{" "}
          <span className="font-script text-[#dfae19] text-[32px] md:text-[40px] relative inline-block -my-3 pr-1">
            Admission
            <svg className="absolute bottom-[2px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="text-gray-600 text-[14.5px] leading-relaxed">
          Share a few details and our admissions team will get in touch to guide you through the process. You can also email us at <a href="mailto:franchise@lfcsschools.com" className="font-semibold text-lf-burgundy hover:underline">franchise@lfcsschools.com</a>.
        </p>
      </div>

      {state.status === "success" ? (
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-16 h-16 rounded-full bg-[#edf1e8] flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#66733a]" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-[26px] font-medium text-[#0a192f] mb-3">Thank You</h3>
          <p className="text-gray-600 text-[14.5px] max-w-md leading-relaxed">
            Your admission enquiry has been received. Our admissions team will contact you shortly.
          </p>
        </div>
      ) : (
        <form action={formAction} className="flex flex-col gap-6">
          {/* Spam trap: hidden from people, often filled in by bots */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <input type="hidden" name="enquiryType" value="admissions" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="admission-fullName">Parent / Guardian Name</label>
              <input id="admission-fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="admission-phone">Phone Number</label>
              <input id="admission-phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="admission-email">Email Address</label>
              <input id="admission-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="admission-grade">Class Seeking Admission</label>
              <select id="admission-grade" name="grade" defaultValue="" className={inputClass}>
                <option value="">Select a class</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="admission-campus">Preferred Campus</label>
              <select id="admission-campus" name="campus" defaultValue="" className={inputClass}>
                <option value="">Any / Not sure</option>
                {schools.map((school) => (
                  <option key={school.name} value={school.name}>{school.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="admission-message">Message</label>
              <textarea id="admission-message" name="message" rows={4} required placeholder="Your child's name, age, or any questions you have" className={inputClass} />
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
            <span>{pending ? "Sending..." : "Submit Enquiry"}</span>
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
  );
}
