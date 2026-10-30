"use client";

import { useActionState, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Loader2, Upload } from "lucide-react";
import { submitCareerProfile, type FormState } from "@/app/actions/enquiries";
import { CV_EXTENSIONS, MAX_CV_BYTES } from "./careersData";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3 text-[14px] text-[#0a192f] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lf-burgundy/30 focus:border-lf-burgundy transition-all";
const labelClass = "block text-[13px] font-bold text-[#0a192f] mb-2";

const experienceOptions = ["Fresher", "Less than 2 years", "2–5 years", "5–10 years", "More than 10 years"];

type CareerProfileFormProps = {
  campuses: string[];
  // Role areas listed under Teaching / Administrative Opportunities in the CMS
  teachingRoles: string[];
  administrativeRoles: string[];
};

export default function CareerProfileForm({ campuses, teachingRoles, administrativeRoles }: CareerProfileFormProps) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(submitCareerProfile, { status: "idle" });
  const [area, setArea] = useState("");
  const [cvName, setCvName] = useState("");
  const [cvError, setCvError] = useState("");

  const roleOptions = area === "teaching" ? teachingRoles : area === "administrative" ? administrativeRoles : [...teachingRoles, ...administrativeRoles];

  // Checks the CV in the browser so people don't wait for an upload that will be rejected
  function onCvChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    let error = "";
    if (file && !CV_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))) {
      error = "Please upload your CV as a PDF or Word document.";
    } else if (file && file.size > MAX_CV_BYTES) {
      error = "Your CV must be 5 MB or smaller.";
    }
    if (error) event.target.value = "";
    setCvError(error);
    setCvName(error ? "" : file?.name ?? "");
  }

  return (
    <div>
      <div className="mb-8 pr-10">
        <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Careers at LFCS</span>
        <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#0a192f] leading-tight mb-4">
          Submit Your{" "}
          <span className="font-script text-[#dfae19] text-[32px] md:text-[40px] relative inline-block -my-3 pr-1">
            Profile
            <svg className="absolute bottom-[2px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="text-gray-600 text-[14.5px] leading-relaxed">
          Tell us about your experience, skills and area of interest, and our team can consider your profile for relevant opportunities as they arise.
        </p>
      </div>

      {state.status === "success" ? (
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-16 h-16 rounded-full bg-[#edf1e8] flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#66733a]" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-[26px] font-medium text-[#0a192f] mb-3">Thank You</h3>
          <p className="text-gray-600 text-[14.5px] max-w-md leading-relaxed">
            Thank you for your interest in a career with Little Flower Group of Schools. Your profile has been received, and our team will consider it for relevant opportunities as they arise.
          </p>
        </div>
      ) : (
        <form action={formAction} className="flex flex-col gap-6">
          {/* Spam trap: hidden from people, often filled in by bots */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <p className="text-gray-500 text-[13.5px] -mb-2">Fields marked * are required.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="fullName">Full Name *</label>
              <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">Email Address *</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="area">Area of Interest *</label>
              <select id="area" name="area" required value={area} onChange={(e) => setArea(e.target.value)} className={inputClass}>
                <option value="" disabled>Select an area</option>
                <option value="teaching">Teaching</option>
                <option value="administrative">Administrative</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="role">Role of Interest</label>
              <select id="role" name="role" defaultValue="" className={inputClass}>
                <option value="">Any suitable role</option>
                {roleOptions.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="experience">Experience</label>
              <select id="experience" name="experience" defaultValue="" className={inputClass}>
                <option value="">Select experience</option>
                {experienceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="campus">Preferred Campus</label>
              <select id="campus" name="campus" defaultValue="" className={inputClass}>
                <option value="">Any / Not sure</option>
                {campuses.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">About Your Experience &amp; Skills</label>
              <textarea id="message" name="message" rows={4} placeholder="Your qualifications, subjects, past roles and anything else you'd like us to know" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <span className={labelClass}>Upload CV</span>
              {/* The real file input covers the whole box (invisibly), so when the browser
                  returns focus to it after the file picker closes it doesn't scroll anywhere */}
              <label
                htmlFor="cv"
                className="relative flex items-center gap-4 w-full bg-white border-2 border-dashed border-gray-200 hover:border-lf-burgundy/40 focus-within:border-lf-burgundy rounded-[14px] px-4 py-4 cursor-pointer transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#fbeef2] flex items-center justify-center shrink-0">
                  {cvName ? <FileText className="w-5 h-5 text-lf-burgundy" strokeWidth={2} /> : <Upload className="w-5 h-5 text-lf-burgundy" strokeWidth={2} />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-semibold text-[#0a192f] truncate">{cvName || "Choose a file"}</span>
                  <span className="block text-[12px] text-gray-500">PDF or Word, up to 5 MB (optional)</span>
                </span>
                <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" onChange={onCvChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </label>
              {cvError && <p className="whitespace-pre-line text-[12.5px] text-red-700 mt-2">{cvError}</p>}
            </div>
          </div>

          {state.status === "error" && (
            <p role="alert" className="whitespace-pre-line text-[13.5px] text-red-700 bg-red-50 border border-red-100 rounded-[12px] px-4 py-3">
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg w-fit disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{pending ? "Sending..." : "Submit Your Profile"}</span>
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
