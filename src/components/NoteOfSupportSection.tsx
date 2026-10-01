import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const notes = [
  {
    name: "Sharman Joshi",
    role: "Actor",
    img: "/about/sharman-joshi.webp",
    alt: "Sharman Joshi holding a Little Flower Children School sign",
    headline: "Some journeys are worth supporting because of the trust behind them.",
    excerpt: "I am happy to extend my support to Little Flower Children School and its journey towards making quality education accessible to more children and families.",
    href: "/about#note-of-support",
  },
  {
    name: "Mr. Anand Kumar",
    role: "Mathematician & Educator",
    img: "/about/anand-kumar.webp",
    alt: "Mr. Anand Kumar, Mathematician and Educator",
    headline: "Education can change the direction of a child's life.",
    excerpt: "But for that change to happen, quality education must reach the children who need it. I wish LFCS the very best as it takes this important vision to more children and families across India.",
    href: "/about#anand-kumar",
  },
];

export default function NoteOfSupportSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="relative bg-[#0a192f] rounded-[2rem] overflow-hidden p-6 md:p-10">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#dfae19] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#c76785] opacity-10 rounded-full blur-3xl translate-y-1/2"></div>

          <div className="relative z-10 text-center mb-8 md:mb-10">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase block mb-1">Notes of Support</span>
            <h2 className="font-serif text-[28px] md:text-[36px] text-white font-medium leading-tight">
              Voices That Believe in Our Journey
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {notes.map(({ name, role, img, alt, headline, excerpt, href }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-5 md:gap-6 hover:border-[#dfae19]/40 transition-colors">
                <div className="w-full max-w-[200px] sm:w-[38%] sm:max-w-none mx-auto sm:mx-0 shrink-0">
                  <div className="relative aspect-[5/6] sm:aspect-auto sm:h-full rounded-xl overflow-hidden shadow-xl ring-4 ring-white/10 group">
                    <img loading="lazy" decoding="async" src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-3 w-8 h-8 text-[#dfae19] opacity-20 rotate-180" />
                    <h3 className="font-serif text-[20px] md:text-[22px] text-white font-medium leading-snug">{headline}</h3>
                  </div>

                  <p className="text-white/70 text-[14px] leading-relaxed mt-3 mb-4">&ldquo;{excerpt}&rdquo;</p>

                  <div className="mt-auto pt-4 border-t border-white/10 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-serif text-[18px] text-white font-medium">{name}</p>
                      <p className="text-[#dfae19] text-[11px] font-bold uppercase tracking-wider mt-1">{role}</p>
                    </div>
                    <Link href={href} className="text-[#dfae19] hover:text-white text-[13px] font-semibold flex items-center gap-1.5 transition-colors shrink-0">
                      Read Note <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
