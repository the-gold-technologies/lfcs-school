import Image from "next/image";

const principals = [
  { name: "Sarita Kedia", school: "LFCS, Nizamuddinpura", city: "Mau", img: "/academics/principals/sarita-kedia.webp" },
  { name: "P. L. Jaishi", school: "LFCS, Sikatiya", city: "Mau", img: "/academics/principals/pl-jaishi.webp" },
  { name: "Sanjay Rai", school: "LFCS, Ghosi", city: "Ghosi", img: "/academics/principals/sanjay-rai.webp" },
  { name: "Deepa Pal", school: "LFCS, Ballia", city: "Mau", img: "/academics/principals/deepa-pal.webp" },
  { name: "Ekta Singh", school: "LFCS, Kasimabad Ghazipur", city: "Kasimabad", img: "/academics/principals/ekta-singh.webp" },
  { name: "Zeeta Lepcha", school: "LFIS, Mau", city: "Mau", img: "/academics/principals/zeeta-lepcha.webp" },
];

export default function FacultySection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="faculty">
      
      {/* Decorative Image */}
      <img loading="lazy" decoding="async" 
        src="/decorative_left_top.webp" 
        alt="" 
        className="absolute inset-0 w-full h-full -top-32 object-contain z-0 pointer-events-none opacity-100"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">OUR FACULTY</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            Meet Our School
            <span className="font-script text-[#dfae19] text-[38px] md:text-[54px] relative inline-block -my-4 pl-4">
               Principals
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto mt-6">
            Each Little Flower campus is led by an experienced principal who brings vision, care and a commitment to excellence, guiding teachers and students alike towards academic and personal growth.
          </p>
        </div>

        {/* Principals Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-x-12 lg:gap-y-10 max-w-[1100px] mx-auto">
          {principals.map((p) => (
            <div key={p.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[232px] group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.name}, Principal of ${p.school}`}
                  fill
                  sizes="(min-width: 1024px) 232px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-[#0a192f] font-semibold text-[18px] mb-1">{p.name}</h3>
                <p className="text-lf-burgundy font-bold text-[13px] uppercase tracking-wider">{p.school}</p>
                <p className="text-gray-500 text-[13px] mt-1">{p.city}, Uttar Pradesh</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
