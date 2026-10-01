import { MapPin, Globe, ArrowUpRight } from "lucide-react";
import { schools } from "@/components/our-school/AllSchoolsListSection";

export default function ContactCampusesSection() {
  return (
    <section className="pt-8 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Our Campuses</span>
          <h2 className="font-serif text-[28px] md:text-[38px] font-medium text-[#0a192f] leading-tight mb-4">
            Reach a{" "}
            <span className="font-script text-[#832646] text-[32px] md:text-[44px]">Campus Near You</span>
          </h2>
          <p className="text-gray-600 text-[14.5px] leading-relaxed">
            Contact or visit any of our schools directly for campus-specific admissions and information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div
              key={school.name}
              className="group relative flex flex-col justify-end aspect-[16/10] min-h-[250px] p-5 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.16)] transition-shadow duration-500"
            >
              {/* Background image */}
              <img
                loading="lazy"
                decoding="async"
                src={school.img}
                alt={school.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent"></div>

              <div className="relative z-10">
                <h3 className="font-serif text-[20px] font-medium text-white mb-1.5 leading-tight">{school.name}</h3>

                <div className="flex items-start gap-2 text-[12.5px] text-white/85 leading-snug mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#dfae19] mt-0.5 shrink-0" strokeWidth={2} />
                  <span>{school.address}</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${school.name} ${school.address}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lf-burgundy text-white text-[12px] font-bold hover:bg-lf-burgundy-hover transition-colors"
                  >
                    Directions
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </a>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-[12px] font-bold hover:bg-white hover:text-[#0a192f] transition-colors"
                  >
                    <Globe className="w-4 h-4" strokeWidth={2} />
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
