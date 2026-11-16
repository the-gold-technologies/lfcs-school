import { ArrowRight, MapPin, Globe } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import type { Campus } from "@/lib/content";
import { sizedImage } from "@/lib/image";

export default function AllSchoolsListSection({ schools }: { schools: Campus[] }) {
  return (
    <section id="schools" className="pb-24 pt-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="bg-[#f4f5f7] rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col">
              {/* Image Container */}
              <div className="h-[220px] overflow-hidden relative shrink-0">
                <img loading="lazy" decoding="async" 
                  src={sizedImage(school.img, 700)} 
                  alt={school.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-[#f4f5f7] relative">
                <h3 className="font-bold text-[#0a192f] text-[16px] leading-snug mb-1.5 transition-colors duration-300 truncate" title={school.name}>
                  {school.name}
                </h3>
                
                <div className="flex items-start gap-2 text-[13px] font-medium text-gray-500 mb-4 h-[40px]">
                  <MapPin className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="line-clamp-2" title={school.address}>{school.address}</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    {school.website && (
                      <Link href={school.website} target="_blank" className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md transition-all">
                        <Globe className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {school.facebook && (
                      <Link href={school.facebook} target="_blank" className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md transition-all">
                        <FaFacebook className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {school.instagram && (
                      <Link href={school.instagram} target="_blank" className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:shadow-md transition-all">
                        <FaInstagram className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {school.youtube && (
                      <Link href={school.youtube} target="_blank" className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:shadow-md transition-all">
                        <FaYoutube className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                  
                  {school.website && (
                    <Link
                      href={school.website}
                      target="_blank"
                      className="flex items-center gap-1.5 group/link"
                    >
                      <span className="text-[#0a192f] font-bold text-[11px] uppercase tracking-wide group-hover/link:text-[#dfae19] transition-colors">
                        Website
                      </span>
                      <span className="w-6 h-6 rounded-full bg-white border border-gray-200 group-hover/link:bg-[#dfae19]/10 text-[#0a192f] group-hover/link:text-[#dfae19] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
