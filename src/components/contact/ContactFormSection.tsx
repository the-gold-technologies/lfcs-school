"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { schools } from "@/components/our-school/AllSchoolsListSection";
import { submitContactForm, type FormState } from "@/app/actions/enquiries";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3 text-[14px] text-[#0a192f] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lf-burgundy/30 focus:border-lf-burgundy transition-all";
const labelClass = "block text-[13px] font-bold text-[#0a192f] mb-2";

const contactDetails = [
  // TODO: phone number pending from client
  { icon: Phone, label: "Call Us", value: "", bg: "bg-[#fbeef2]", color: "text-lf-burgundy" },
  { icon: Mail, label: "Email Us", value: "franchise@lfcsschools.com", href: "mailto:franchise@lfcsschools.com", bg: "bg-[#fdf6e3]", color: "text-lf-gold" },
  { icon: MapPin, label: "Visit Us", value: "B-1/142, Sector-G, Aliganj, Lucknow - 226024, Uttar Pradesh", bg: "bg-[#edf1e8]", color: "text-lf-olive" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 5:00 PM", bg: "bg-[#f8ede4]", color: "text-lf-orange" },
];

export default function ContactFormSection() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(submitContactForm, { status: "idle" });

  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-[#0a192f] leading-tight mb-2">
              Get in{" "}
              <span className="font-script text-[#dfae19] text-[32px] md:text-[38px]">Touch</span>
            </h2>
            <p className="text-gray-600 text-[14.5px] leading-relaxed mb-4">
              Reach our central office directly, or send us a message and the right team will respond.
            </p>

            {contactDetails.map(({ icon: Icon, label, value, href, bg, color }) => {
              const content = (
                <>
                  <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">{label}</p>
                    <p className="text-[15px] font-semibold text-[#0a192f] break-words">{value}</p>
                  </div>
                </>
              );
              const cardClass = "flex items-center gap-4 p-5 rounded-[20px] border border-gray-100 bg-[#fefdfa] shadow-[0_4px_20px_rgb(0,0,0,0.03)]";
              return href ? (
                <a key={label} href={href} className={`${cardClass} hover:border-lf-burgundy/30 transition-colors`}>
                  {content}
                </a>
              ) : (
                <div key={label} className={cardClass}>{content}</div>
              );
            })}
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
                  Your message has been received. Our team will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-6">
                {/* Spam trap: hidden from people, often filled in by bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div>
                  <h3 className="font-serif text-[24px] font-medium text-[#0a192f] mb-1">Send Us a Message</h3>
                  <p className="text-gray-500 text-[13.5px]">Fields marked required must be filled in.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="enquiryType">Enquiry Type</label>
                    <select id="enquiryType" name="enquiryType" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select an option</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="start-school">Start a School</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="campus">Preferred Campus</label>
                    <select id="campus" name="campus" defaultValue="" className={inputClass}>
                      <option value="">Any / Not sure</option>
                      {schools.map((school) => (
                        <option key={school.name} value={school.name}>{school.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" className={inputClass} />
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
                  <span>{pending ? "Sending..." : "Send Message"}</span>
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
