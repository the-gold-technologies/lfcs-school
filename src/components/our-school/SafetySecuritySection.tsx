import { ShieldCheck } from "lucide-react";

export default function SafetySecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-1 flex flex-col items-start max-w-xl">
            <span className="text-[#e74c3c] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Safety & Security</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              A Safe Environment <br/>
              <span className="font-script text-[#3f5333] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                 to Grow
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#3f5333" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] font-medium text-gray-800 leading-relaxed mb-4">
              Children learn best when they feel safe, supported and cared for.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              At LFCS, safety and security are an integral part of the school environment. Our approach is centred on creating a secure and responsible setting where students can participate in school life with confidence.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              From everyday supervision to responsible campus practices, we believe that creating a safe environment is fundamental to nurturing independent and confident learners.
            </p>
            
            <div className="flex items-center gap-4 bg-[#fefdfa] border border-[#dfae19]/30 rounded-[16px] p-4 px-6">
               <ShieldCheck className="w-8 h-8 text-[#dfae19]" />
               <span className="text-[14px] font-semibold text-[#0a192f]">Supervised environment for all academic and non-academic activities.</span>
            </div>
          </div>

          <div className="order-2 relative w-full h-[400px] md:h-[500px]">
             <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[30px] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Safe Campus" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-[#3f5333]/10 mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
