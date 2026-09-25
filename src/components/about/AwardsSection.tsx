"use client";

import { useEffect, useState } from "react";

const awards = [
  {
    title: "International Academic Recognition",
    desc: "Representation at the 1st International & 31st Annual Conference of Sahodaya School Complexes, Dubai (UAE), highlighting the school's global academic engagement and leadership in contemporary education.",
    images: [
      "/about/awards/international-recognition-1.webp",
    ],
  },
  {
    title: "National Leadership Award",
    desc: "Honoured with the Award for Leading School Chain of Uttar Pradesh at the Education Summit, Lucknow, recognising visionary leadership, quality education, and institutional excellence.",
    images: [
      "/about/awards/national-leadership-award-1.webp",
      "/about/awards/national-leadership-award-2.webp",
      "/about/awards/national-leadership-award-3.webp",
    ],
  },
  {
    title: "Prestigious Media Recognition",
    desc: "Recipient of the Dainik Jagran Award 2022 for being one of the Most Credible Brands in Education, acknowledging trust, consistency, and outstanding educational contribution.",
    images: [
      "/about/awards/media-recognition-1.webp",
      "/about/awards/media-recognition-2.webp",
    ],
  },
];

function AwardImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[36px] overflow-hidden mb-6 shadow-sm border border-gray-100">
      {images.map((src, i) => (
        <img
          key={src}
          loading="lazy"
          decoding="async"
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{ backgroundColor: i === active ? "#ffffff" : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AwardsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#842b46] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Recognition & Achievements</span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#0a192f] leading-tight mb-6">
            A Legacy of <span className="font-script text-[#dfae19] text-[44px] md:text-[56px] relative inline-block -my-4 pr-1">
              Excellence
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Pull quote */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-serif italic text-[20px] md:text-[24px] text-[#0a192f] leading-snug">
            "Nationally Honoured, Internationally Recognised"
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center group relative pt-6">
              <AwardImageSlider images={award.images} alt={award.title} />

              {/* Text Content */}
              <div className="text-center px-3">
                <h3 className="font-bold text-[17px] text-[#0a192f] mb-2 leading-snug">{award.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
