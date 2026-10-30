import { GraduationCap, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

type Banner = { title: string; subtitle: string; ctaText: string; ctaLink: string; image: string };

// The first CMS banner uses the burgundy design, the second the gold design
export default function CTABanners({ data }: { data: SectionContent }) {
  const [admissions, partner] = data.banners as Banner[];
  return (
    <section className="max-w-7xl mx-auto w-full py-5 px-3 md:px-0">
      <div className="flex flex-col md:flex-row gap-6">
        {admissions && (
        <div className="flex-1 bg-lf-burgundy rounded-[40px] overflow-hidden relative p-6 md:p-10 flex flex-col justify-center min-h-[300px]">
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-3/5">
            <img loading="lazy" decoding="async" src={sizedImage(admissions.image, 900)} className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt={admissions.title} />
          </div>
          <div className="relative z-10 w-full md:w-2/3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <GraduationCap className="w-6 h-6 text-lf-burgundy" strokeWidth={1.5} />
            </div>
            <h2 className="text-[26px] md:text-[32px] font-serif text-white mb-2 leading-tight">{admissions.title}</h2>
            <p className="whitespace-pre-line text-gray-200 text-[14px] mb-8 max-w-sm leading-relaxed">{admissions.subtitle}</p>
            <Link href={admissions.ctaLink} className="bg-lf-gold text-[#0a192f] px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#c99a12] transition-colors w-max flex items-center gap-2">
              {admissions.ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        )}

        {partner && (
        <div className="flex-1 bg-lf-gold rounded-[40px] overflow-hidden relative p-10 flex flex-col justify-center min-h-[300px]">
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-3/5">
            <img loading="lazy" decoding="async" src={sizedImage(partner.image, 900)} className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt={partner.title} />
          </div>
          <div className="relative z-10 w-full md:w-2/3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Building className="w-6 h-6 text-lf-gold" strokeWidth={1.5} />
            </div>
            <h2 className="text-[26px] md:text-[32px] font-serif text-[#0a192f] mb-2 leading-tight">{partner.title}</h2>
            <p className="whitespace-pre-line text-[#0a192f]/80 text-[14px] mb-8 max-w-sm leading-relaxed">{partner.subtitle}</p>
            <Link href={partner.ctaLink} className="bg-lf-burgundy text-white px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#6c2339] transition-colors w-max flex items-center gap-2">
              {partner.ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
