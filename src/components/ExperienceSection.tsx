"use client";
import { Trophy, Lightbulb, Microscope, LayoutGrid, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { SectionContent } from "@/lib/content";
import { sizedImage } from "@/lib/image";

// Icons for the feature highlights, in CMS order
const featureIcons = [Trophy, Lightbulb, Microscope, LayoutGrid, ShieldCheck];

function AutoImageColumn({ images, delayMs }: { images: string[]; delayMs: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => (prev + 1) % images.length);
    }, 3000 + delayMs);
    return () => clearInterval(t);
  }, [images.length, delayMs]);

  return (
    <div className="w-full rounded-[20px] overflow-hidden h-full shrink-0 shadow-sm border border-gray-100 relative">
      {images.map((src, i) => (
        <img loading="lazy" decoding="async"
          key={src}
          src={sizedImage(src, 800)}
          alt="Student life at Little Flower schools"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 0.8s ease",
            zIndex: i === active ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent z-10" />
    </div>
  );
}


export default function ExperienceSection({ data }: { data: SectionContent }) {
  // CMS photos are split into three consecutive groups, one per auto-cycling column
  const photos = (data.photos as { image: string }[]).map((p) => p.image);
  const perColumn = Math.ceil(photos.length / 3);
  const columnImages = [0, 1, 2].map((c) => photos.slice(c * perColumn, (c + 1) * perColumn));
  const features = data.features as string[];
  return (
    <section className="py-14 md:py-24 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
          <div className="xl:w-[35%] px-4 sm:px-6 lg:px-8 xl:px-0">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">{data.tagline}</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4 md:mb-5">
              {data.headline} <span className="font-script text-[#dfae19] text-[48px] relative inline-block -my-4 pr-1">
                {data.scriptAccent}
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="whitespace-pre-line text-gray-500 mb-8 text-[15px] max-w-lg leading-relaxed">
              {data.subtitle}
            </p>

            <div className="flex gap-4 sm:gap-4 flex-wrap mb-10">
              {features.map((label, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                // The fifth highlight is hidden on phones to keep a single row
                const last = i === 4;
                return (
                  <div key={label} className={`${last ? "hidden sm:flex" : "flex"} flex-col items-center gap-3 w-[70px]`}>
                    <div className={`${last ? "w-[42px] h-[42px] md:w-[52px] md:h-[52px]" : "w-[52px] h-[52px]"} rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]`}>
                      <Icon className={last ? "w-[20px] h-[20px] md:w-[24px] md:h-[24px]" : "w-[24px] h-[24px]"} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">{label}</span>
                  </div>
                );
              })}
            </div>

            <Link href={data.ctaLink} className="bg-lf-burgundy text-white pl-7 pr-2 py-2 rounded-[16px] font-bold text-[14px] hover:bg-lf-burgundy-hover transition-colors flex items-center gap-1 w-fit shadow-md group">
              {data.ctaText}
              <div className="w-10 h-10  flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>

          {/* Right: 3 auto-cycling image columns — hidden on mobile, visible from lg */}
          <div className="xl:w-[65%] w-full px-4 sm:px-6 xl:px-0">
            {/* Single image for small screens — full width */}
            <div className="xl:hidden w-full rounded-[20px] overflow-hidden h-[260px] sm:h-[320px] relative shadow-sm border border-gray-100">
              <AutoImageColumn images={columnImages[0]} delayMs={0} />
            </div>
            {/* 3-column layout for xl+ */}
            <div className="hidden xl:flex gap-4 h-[440px] relative">
              <div className="absolute -bottom-6 -left-6 z-20">
                <Star className="w-14 h-14 text-[#c7a4ff] fill-[#c7a4ff]/30 rotate-[-15deg]" strokeWidth={1.5} />
              </div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[0]} delayMs={0} /></div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[1]} delayMs={1000} /></div>
              <div className="w-1/3 shrink-0 h-full"><AutoImageColumn images={columnImages[2]} delayMs={2000} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
