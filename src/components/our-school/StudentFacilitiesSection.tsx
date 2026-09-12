import { ShieldCheck, HeartPulse, Bus, Coffee } from "lucide-react";

const facilities = [
  { name: "Safe Transport", icon: Bus, desc: "Reliable and secure transportation network for all students." },
  { name: "Medical Care", icon: HeartPulse, desc: "On-campus medical support available during school hours." },
  { name: "Nutritious Cafeteria", icon: Coffee, desc: "Healthy and hygienic meals prepared for growing children." },
  { name: "Campus Security", icon: ShieldCheck, desc: "24/7 monitored and secure environment across all premises." },
];

export default function StudentFacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fcfdfe] relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3f5333] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Student Facilities</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            Giving a Memorable <br/>
            <span className="font-script text-[#3498db] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
               School Experience
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#3498db" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            A positive & supportive school environment is much more than academic excellence in a student&apos;s life. 
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            The Student Facilities at LFCS is designed in such a way to provide all the necessary facilities to our students that support the needs of children and create a comfortable, accessible & learning environment. Every supporting space plays its part in helping students feel a sense of belonging, independence and care throughout their time at LFCS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#f8f9fa] group-hover:bg-[#3498db] transition-colors flex items-center justify-center mb-6">
                <facility.icon className="w-8 h-8 text-[#3498db] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#0a192f] text-[18px] mb-3">{facility.name}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{facility.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
