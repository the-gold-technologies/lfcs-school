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
              className="flex flex-col p-6 rounded-[24px] border border-gray-100 bg-[#fefdfa] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow"
            >
              <h3 className="font-serif text-[20px] font-medium text-[#0a192f] mb-1">{school.name}</h3>
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-lf-gold mb-4">
                {school.city}, {school.state}
              </p>

              <div className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed mb-6">
                <MapPin className="w-4 h-4 text-lf-burgundy mt-1 shrink-0" strokeWidth={2} />
                <span>{school.address}</span>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${school.name} ${school.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-lf-burgundy text-white text-[13px] font-bold hover:bg-lf-burgundy-hover transition-colors"
                >
                  Directions
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-[#41533b] text-[13px] font-bold hover:bg-gray-50 transition-colors"
                >
                  <Globe className="w-4 h-4" strokeWidth={2} />
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
