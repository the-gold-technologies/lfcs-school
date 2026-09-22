"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3 text-[14px] text-[#0a192f] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lf-burgundy/30 focus:border-lf-burgundy transition-all";
const labelClass = "block text-[13px] font-bold text-[#0a192f] mb-2";

export default function EnquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <div className="mb-8">
        <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Start a School Enquiry</span>
        <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#0a192f] leading-tight mb-4">
          Let&apos;s Discuss{" "}
          <span className="font-script text-[#dfae19] text-[32px] md:text-[40px] relative inline-block -my-3 pr-1">
            Your School Project
            <svg className="absolute bottom-[2px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="text-gray-600 text-[14.5px] leading-relaxed">
          If you are interested in establishing an LFCS school, share your details with us. Our team can understand your requirements and guide you through the next steps of the enquiry process.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-16 h-16 rounded-full bg-[#edf1e8] flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#66733a]" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-[26px] font-medium text-[#0a192f] mb-3">Thank You</h3>
          <p className="text-gray-600 text-[14.5px] max-w-md leading-relaxed">
            Your enquiry has been received. The LFCS team will review your details and get in touch with you regarding the next steps.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Personal Details */}
          <div>
            <h3 className="font-bold text-[#0a192f] text-[16px] mb-6 pb-3 border-b border-gray-100">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass} htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="contactNumber">Contact Number</label>
                <input id="contactNumber" name="contactNumber" type="tel" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="city">City / Location</label>
                <input id="city" name="city" type="text" required placeholder="Your city" className={inputClass} />
              </div>
            </div>
          </div>

          {/* School Project Details */}
          <div>
            <h3 className="font-bold text-[#0a192f] text-[16px] mb-6 pb-3 border-b border-gray-100">School Project Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="proposedLocation">Proposed School Location</label>
                <input id="proposedLocation" name="proposedLocation" type="text" placeholder="City / area for the proposed school" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="landOwnership">Do you own or have access to land?</label>
                <select id="landOwnership" name="landOwnership" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="planning">Planning to acquire</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="landArea">Approximate Land Area</label>
                <input id="landArea" name="landArea" type="text" placeholder="e.g. 1 acre" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="schoolLevel">Proposed School Level</label>
                <select id="schoolLevel" name="schoolLevel" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select an option</option>
                  <option value="pre-primary">Pre-Primary</option>
                  <option value="primary">Primary</option>
                  <option value="middle">Middle</option>
                  <option value="secondary">Secondary</option>
                  <option value="senior-secondary">Senior Secondary</option>
                  <option value="to-be-discussed">To be discussed</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="investment">Estimated Investment Capacity</label>
                <input id="investment" name="investment" type="text" placeholder="e.g. ₹50 Lakhs – ₹1 Crore" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="experience">Previous Experience in Education / School Management</label>
                <textarea id="experience" name="experience" rows={3} placeholder="Share any relevant background, if applicable" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">Message / Project Details</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us more about your proposed school project" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 text-[13px] text-gray-600 leading-relaxed cursor-pointer">
            <input type="checkbox" required className="mt-0.5 w-4 h-4 accent-lf-burgundy shrink-0" />
            I agree to be contacted by the LFCS team regarding my enquiry.
          </label>

          <button
            type="submit"
            className="bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg w-fit"
          >
            <span>Submit Enquiry</span>
            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
