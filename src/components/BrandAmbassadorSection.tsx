import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export default function BrandAmbassadorSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="relative bg-[#0a192f] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#dfae19] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#c76785] opacity-10 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="w-full max-w-[260px] md:w-1/4 relative z-10 shrink-0">
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/10 group">
              <img loading="lazy" decoding="async" src="/about/brand-ambassador.webp" alt="Sharman Joshi, Brand Ambassador of Little Flower Children School" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div className="w-full md:flex-1 relative z-10 space-y-5">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase block">A Message from the Brand Ambassador</span>

            <div className="relative">
              <Quote className="absolute -top-3 -left-5 w-10 h-10 text-[#dfae19] opacity-20 rotate-180" />
              <h2 className="font-serif text-[26px] md:text-[34px] text-white font-medium leading-tight">
                Because Every Child Deserves the Chance to Learn, <br/> Grow and Dream.
              </h2>
            </div>

            <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl">
              &ldquo;Education has the power to shape not just a child&apos;s future, but the future of an entire community. I am glad to be a part of this journey, and to stand behind a vision that believes in the power of education to create a better tomorrow.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-5 border-t border-white/10">
              <div>
                <p className="font-serif text-[20px] text-white font-medium">Sharman Joshi</p>
                <p className="text-[#dfae19] text-[12px] font-bold uppercase tracking-wider mt-1">Brand Ambassador, Little Flower Children School</p>
              </div>
              <Link href="/about#brand-ambassador" className="bg-[#dfae19] text-[#0a192f] px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-[#c99c14] transition-colors flex items-center gap-2 text-sm md:text-base w-fit">
                Read Full Message <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
