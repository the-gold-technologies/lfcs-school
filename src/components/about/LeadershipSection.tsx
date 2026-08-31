import { Mail, Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfae19] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c76785] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Leadership / Management</span>
          <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            Guiding the <span className="font-script text-[#dfae19] text-[44px] md:text-[52px] relative inline-block -my-4 pr-1">
              Institution
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-6">
              Little Flower's growth has been guided by a management committed to building an institution focused on quality education and student development.
            </p>
        </div>

        {/* Profiles */}
        <div className="space-y-24">
          
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 relative group transition-all duration-300 hover:shadow-2xl hover:border-[#dfae19]/30">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-24 bg-[#dfae19] rounded-r-2xl opacity-10"></div>
            
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" alt="Late Shiksha Ratan Vijay Shankar Yadav Ji" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="text-[#dfae19] font-bold text-[15px] uppercase tracking-[0.15em] mb-3">Founder’s Vision</h3>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#0a192f] font-medium leading-tight">Late Shiksha Ratan Vijay Shankar Yadav Ji</h2>
              </div>
              <p className="text-gray-600 text-[18px] leading-relaxed italic border-l-4 border-[#dfae19] pl-6 py-2 bg-gray-50 rounded-r-xl">
                "The foundation of Little Flower's educational journey was laid by Late Shiksha Ratan Vijay Shankar Yadav Ji, whose belief in the importance of education continues to remain part of the institution's identity."
              </p>
            </div>
          </div>

          {/* Chairman Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-3/5 space-y-8">
              <div>
                <h3 className="text-[#c76785] font-bold text-[15px] uppercase tracking-[0.15em] mb-3">Chairman's Message</h3>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#0a192f] font-medium leading-tight">Education That Creates Lasting Impact</h2>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#dfae19] opacity-20 -z-10 rotate-180" />
                <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
                  <p>At Little Flower, we believe that the true purpose of education is to prepare children not only for examinations, but for the opportunities and responsibilities that lie ahead.</p>
                  <p>Our journey has always been guided by a commitment to provide quality education while creating an environment where students can develop knowledge, character, confidence and a sense of responsibility.</p>
                  <p>We are proud of the journey Little Flower has undertaken so far, but we also recognise that education is constantly evolving. Our responsibility is to keep learning, improving and creating better opportunities for every student who becomes a part of the Little Flower family.</p>
                  <p>We look forward to continuing this journey with the trust and support of our students, parents, educators and communities.</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <p className="font-serif text-[24px] text-[#0a192f] font-medium">— [Name of the Chairman]</p>
                <p className="text-[#c76785] text-[15px] font-bold uppercase tracking-wider mt-2">Chairman, Little Flower Group of Schools</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/5">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#dfae19_2px,transparent_2px)] [background-size:16px_16px] opacity-30 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
