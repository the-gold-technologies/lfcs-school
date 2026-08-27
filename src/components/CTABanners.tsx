import { GraduationCap, Building, ArrowRight } from "lucide-react";

export default function CTABanners() {
  return (
    <section className="max-w-7xl mx-auto w-full py-5 px-3 md:px-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-lf-burgundy rounded-[40px] overflow-hidden relative p-6 md:p-10 flex flex-col justify-center min-h-[300px]">
          <div className="absolute right-0 top-0 bottom-0 w-3/5">
            <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt="Student" />
          </div>
          <div className="relative z-10 w-full md:w-2/3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <GraduationCap className="w-6 h-6 text-lf-burgundy" strokeWidth={1.5} />
            </div>
            <h2 className="text-[26px] md:text-[32px] font-serif text-white mb-2 leading-tight">Admissions Open</h2>
            <p className="text-gray-200 text-[14px] mb-8 max-w-sm leading-relaxed">Begin your child's journey of excellence and endless possibilities.</p>
            <button className="bg-lf-gold text-[#0a192f] px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#c99a12] transition-colors w-max flex items-center gap-2">
              Learn About Admissions <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-lf-gold rounded-[40px] overflow-hidden relative p-10 flex flex-col justify-center min-h-[300px]">
          <div className="absolute right-0 top-0 bottom-0 w-3/5">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt="School" />
          </div>
          <div className="relative z-10 w-full md:w-2/3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Building className="w-6 h-6 text-lf-gold" strokeWidth={1.5} />
            </div>
            <h2 className="text-[26px] md:text-[32px] font-serif text-[#0a192f] mb-2 leading-tight">Start a School</h2>
            <p className="text-[#0a192f]/80 text-[14px] mb-8 max-w-sm leading-relaxed">Partner with us to bring quality education to more communities.</p>
            <button className="bg-lf-burgundy text-white px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#6c2339] transition-colors w-max flex items-center gap-2">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
