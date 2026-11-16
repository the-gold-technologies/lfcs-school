import { Mail, Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { paragraphs, type SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

type Leader = { name: string; role: string; quote: string; bio: string; image: string };

// "Mr. Anand Kumar" -> "Anand Kumar" for the "A Note of Support from" label
const withoutTitle = (name: string) => name.replace(/^(Mr|Ms|Mrs|Dr)\.\s*/, "");

// Leaders are shown in CMS order: founder, chairman, two supporters, then the partner profile
export default function LeadershipSection({ data }: { data: SectionContent }) {
  const [founder, chairman, sharman, anand, partner] = data.leaders as Leader[];
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[#dfae19] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-[#c76785] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">{data.tagline}</span>
          <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            {data.headline} <span className="font-script text-[#dfae19] text-[44px] md:text-[52px] relative inline-block -my-4 pr-1">
              {data.scriptAccent}
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="whitespace-pre-line text-gray-500 text-[15px] max-w-2xl mx-auto mt-6">
              {data.subtitle}
            </p>
        </div>

        {/* Profiles */}
        <div className="space-y-24">
          
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 relative group transition-all duration-300 hover:shadow-2xl hover:border-[#dfae19]/30">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-24 bg-[#dfae19] rounded-r-2xl opacity-10"></div>
            
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                <img loading="lazy" decoding="async" src={sizedImage(founder.image, 600)} alt={founder.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <h3 className="text-[#dfae19] font-bold text-[15px] uppercase tracking-[0.15em] mb-3">{founder.role}</h3>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#0a192f] font-medium leading-tight">{founder.name}</h2>
              </div>
              <p className="whitespace-pre-line text-gray-600 text-[18px] leading-relaxed italic border-l-4 border-[#dfae19] pl-6 py-2 bg-gray-50 rounded-r-xl">
                &ldquo;{founder.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Chairman Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-2/3 space-y-6 pl-10">
              <div>
                <h3 className="text-[#c76785] font-bold text-[13px] uppercase tracking-[0.15em] mb-2">Chairman&apos;s Message</h3>
                <h2 className="font-serif text-[28px] md:text-[32px] text-[#0a192f] font-medium leading-tight">{chairman.quote}</h2>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-12 h-12 text-[#dfae19] opacity-20 -z-10 rotate-180" />
                <div className="space-y-3 text-gray-600 text-[15px] leading-relaxed">
                  {paragraphs(chairman.bio).map((p) => <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>)}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="whitespace-pre-line font-serif text-[20px] text-[#0a192f] font-medium">{chairman.name}</p>
                <p className="whitespace-pre-line text-[#c76785] text-[13px] font-bold uppercase tracking-wider mt-1">{chairman.role}</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 max-w-[300px] mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group relative">
                <img loading="lazy" decoding="async" src={sizedImage(chairman.image, 600)} alt={`${chairman.name}, ${chairman.role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

          {/* Note of Support Section */}
          <div id="note-of-support" className="scroll-mt-28 flex flex-col md:flex-row items-center gap-6 lg:gap-10 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 relative transition-all duration-300 hover:shadow-2xl hover:border-[#c76785]/30">
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-24 bg-[#c76785] rounded-l-2xl opacity-10"></div>

            <div className="w-full md:w-1/3 max-w-[300px] md:max-w-none mx-auto md:self-stretch relative">
              <div className="relative aspect-[5/6] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-lg group">
                <img loading="lazy" decoding="async" src={sizedImage(sharman.image, 600)} alt={`${sharman.name}, ${sharman.role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(#c76785_2px,transparent_2px)] [background-size:16px_16px] opacity-30 -z-10"></div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <h3 className="text-[#c76785] font-bold text-[13px] uppercase tracking-[0.15em] mb-2">A Note of Support from {withoutTitle(sharman.name)}</h3>
                <h2 className="font-serif text-[22px] md:text-[26px] text-[#0a192f] font-medium leading-tight">
                  &ldquo;{sharman.quote}&rdquo;
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-10 h-10 text-[#dfae19] opacity-20 -z-10 rotate-180" />
                <div className="space-y-2 text-gray-600 text-[14px] leading-relaxed">
                  {paragraphs(sharman.bio).map((p) => <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>)}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="whitespace-pre-line font-serif text-[18px] text-[#0a192f] font-medium">{sharman.name}</p>
                <p className="whitespace-pre-line text-[#c76785] text-[13px] font-bold uppercase tracking-wider mt-1">{sharman.role}</p>
              </div>
            </div>
          </div>

          {/* Anand Kumar Note of Support Section */}
          <div id="anand-kumar" className="scroll-mt-28 flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-10 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 relative transition-all duration-300 hover:shadow-2xl hover:border-[#dfae19]/30">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-24 bg-[#dfae19] rounded-r-2xl opacity-10"></div>

            <div className="w-full md:w-2/3 space-y-4 pl-4">
              <div>
                <h3 className="text-[#dfae19] font-bold text-[13px] uppercase tracking-[0.15em] mb-2">A Note of Support from {withoutTitle(anand.name)}</h3>
                <h2 className="font-serif text-[22px] md:text-[26px] text-[#0a192f] font-medium leading-tight">
                  &ldquo;{anand.quote}&rdquo;
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-10 h-10 text-[#dfae19] opacity-20 -z-10 rotate-180" />
                <div className="space-y-2 text-gray-600 text-[14px] leading-relaxed">
                  {paragraphs(anand.bio).map((p) => <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>)}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="whitespace-pre-line font-serif text-[18px] text-[#0a192f] font-medium">{anand.name}</p>
                <p className="whitespace-pre-line text-[#dfae19] text-[13px] font-bold uppercase tracking-wider mt-1">{anand.role}</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 max-w-[300px] md:max-w-none mx-auto md:self-stretch relative">
              <div className="relative aspect-[5/6] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-lg group">
                <img loading="lazy" decoding="async" src={sizedImage(anand.image, 600)} alt={`${anand.name}, ${anand.role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(#dfae19_2px,transparent_2px)] [background-size:16px_16px] opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Concort Consultant Management Profile Section */}
          <div className="pt-12">
            <div className="text-center mb-12">
              <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Our Partners</span>
              <h2 className="font-serif text-[32px] md:text-[36px] font-medium text-[#0a192f] leading-tight">
                {partner.role} <span className="text-[#dfae19]">Management Profile</span>
              </h2>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full md:w-3/5 space-y-6 pl-10">
                <div>
                  <h2 className="font-serif text-[28px] md:text-[32px] text-[#0a192f] font-medium leading-tight">{partner.name}</h2>
                </div>

                <div className="space-y-3 text-gray-600 text-[15px] leading-relaxed">
                  {paragraphs(partner.bio).map((p) => <p key={p.slice(0, 40)} className="whitespace-pre-line">{p}</p>)}
                </div>
              </div>

              <div className="w-full md:w-2/5 relative pt-8">
                <div className="relative aspect-[1690/1000] rounded-2xl overflow-hidden shadow-xl group">
                  <img loading="lazy" decoding="async" src={sizedImage(partner.image, 900)} alt={`${partner.name} – ${partner.quote}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="whitespace-pre-line text-white text-[12px] font-medium">{partner.quote}</p>
                    <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                        <FaLinkedin className="w-3.5 h-3.5" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#dfae19] hover:text-[#0a192f] transition-all duration-300 border border-white/20">
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(#c76785_2px,transparent_2px)] [background-size:16px_16px] opacity-30 -z-10"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
