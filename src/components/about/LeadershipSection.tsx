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
                <img loading="lazy" decoding="async" src="/about/founder.jpg" alt="Late Vijay Shankar Yadav Ji" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="text-[#dfae19] font-bold text-[15px] uppercase tracking-[0.15em] mb-3">Founder’s Vision</h3>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#0a192f] font-medium leading-tight">Late Vijay Shankar Yadav Ji</h2>
              </div>
              <p className="text-gray-600 text-[18px] leading-relaxed italic border-l-4 border-[#dfae19] pl-6 py-2 bg-gray-50 rounded-r-xl">
                "The foundation of Little Flower's educational journey was laid by Late Shiksha Ratan Vijay Shankar Yadav Ji, whose belief in the importance of education continues to remain part of the institution's identity."
              </p>
            </div>
          </div>

          {/* Chairman Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="text-[#c76785] font-bold text-[13px] uppercase tracking-[0.15em] mb-2">Chairman's Message</h3>
                <h2 className="font-serif text-[28px] md:text-[32px] text-[#0a192f] font-medium leading-tight">Education That Creates Lasting Impact</h2>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-12 h-12 text-[#dfae19] opacity-20 -z-10 rotate-180" />
                <div className="space-y-3 text-gray-600 text-[15px] leading-relaxed">
                  <p>At Little Flower, we believe that the true purpose of education is to prepare children not only for examinations, but for the opportunities and responsibilities that lie ahead.</p>
                  <p>Our journey has always been guided by a commitment to provide quality education while creating an environment where students can develop knowledge, character, confidence and a sense of responsibility.</p>
                  <p>We are proud of the journey Little Flower has undertaken so far, but we also recognise that education is constantly evolving. Our responsibility is to keep learning, improving and creating better opportunities for every student who becomes a part of the Little Flower family.</p>
                  <p>We look forward to continuing this journey with the trust and support of our students, parents, educators and communities.</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="font-serif text-[20px] text-[#0a192f] font-medium">Mr. Murali Yadav</p>
                <p className="text-[#c76785] text-[13px] font-bold uppercase tracking-wider mt-1">Chairman, Little Flower Group of Schools</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 max-w-[300px] mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group relative">
                <img loading="lazy" decoding="async" src="/about/chairman.jpg" alt="Chairman" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(#dfae19_2px,transparent_2px)] [background-size:16px_16px] opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Concort Consultant Management Profile Section */}
          <div className="pt-16">
            <div className="text-center mb-12">
              <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Our Partners</span>
              <h2 className="font-serif text-[32px] md:text-[36px] font-medium text-[#0a192f] leading-tight">
                Concort Consultant <span className="text-[#dfae19]">Management Profile</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Ms. Manju Rana */}
              {/* Ms. Manju Rana */}
              {/* Ms. Manju Rana */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#c76785]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c76785] opacity-5 rounded-bl-[100px] transition-all duration-500 group-hover:scale-110"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-12 mb-8 relative z-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy" decoding="async" src="/about/founder-partner.jpg" alt="Ms. Manju Rana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[24px] md:text-[28px] text-[#0a192f] font-medium mb-1">Ms. Manju Rana</h3>
                    <p className="text-[#c76785] text-[14px] font-bold uppercase tracking-wider">Founder</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed relative z-10">
                  <p>Felicitated with the National Award for Teachers by the President of India in 2018 for her contribution in the field of education for over 34 years.</p>
                  <p>Former Director of the Seth Anandram Jaipuria Group of Schools, with extensive experience in academics, strategic planning, and administrative management.</p>
                  <p>Worked closely with premier educational bodies like CBSE, British Council, NPSC, and Sahodaya Schools Complex.</p>
                  <p>A CBSE expert trainer and auditor, delivering workshops on educational leadership and publishing insightful articles in national publications.</p>
                </div>
              </div>

              {/* Ms. V. Suprabha */}
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border overflow-hidden border-gray-100 relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#dfae19]/30">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#dfae19] opacity-5 rounded-br-[100px] transition-all duration-500 group-hover:scale-110"></div>
                
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-12 mb-8 relative z-10 text-center sm:text-right">
                  <div>
                    <h3 className="font-serif text-[24px] md:text-[28px] text-[#0a192f] font-medium mb-1">Ms. V. Suprabha</h3>
                    <p className="text-[#dfae19] text-[14px] font-bold uppercase tracking-wider">Co-Founder</p>
                  </div>
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg mx-auto sm:mx-0">
                    <img loading="lazy" decoding="async" src="/about/cofounder-partner.jpg" alt="Ms. V. Suprabha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed relative z-10">
                  <p>Over 33 years of diverse leadership experience across major institutions like Bluebells Public School and Seth Anandram Jaipuria School.</p>
                  <p>Former Associate Professor at the College of Education, Guru Gobind Singh IP University, delivering impactful capacity building for educators.</p>
                  <p>A seasoned policy designer who empowers schools through strategic leadership and robust governance, notably guiding schools to ISO certification.</p>
                  <p>An independent auditor who has contributed to national bodies such as CBSE, NTA, British Council, and NIOS SWAYAM to realize academic excellence.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
