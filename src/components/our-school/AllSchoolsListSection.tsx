import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const schools = [
  { city: 'Prayagraj', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop' },
  { city: 'Lucknow', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop' },
  { city: 'Varanasi', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop' },
  { city: 'Kanpur', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop' },
  { city: 'Agra', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop' },
  { city: 'Mathura', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop' },
  { city: 'Gorakhpur', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop' },
  { city: 'Meerut', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
];

export default function AllSchoolsListSection() {
  return (
    <section id="schools" className="pb-24 pt-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="bg-[#f4f5f7] rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col">
              {/* Image Container */}
              <div className="h-[220px] overflow-hidden relative shrink-0">
                <img 
                  src={school.img} 
                  alt={`Little Flower Children's School, ${school.city}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-[#f4f5f7] relative">
                <h3 className="font-bold text-[#0a192f] text-[17px] leading-snug mb-1.5 transition-colors duration-300 line-clamp-1">
                  Little Flower School {school.city}
                </h3>
                
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 text-red-500/80 shrink-0" strokeWidth={2.5} />
                  <span className="line-clamp-1">{school.city}, {school.state}</span>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <Link 
                    href="#" 
                    className="w-full flex items-center justify-between group/link"
                  >
                    <span className="text-[#0a192f] font-bold text-[12px] uppercase tracking-wide flex items-center gap-2 group-hover/link:text-[#dfae19] transition-colors">
                      Visit School 
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#f4f5f7] group-hover/link:bg-[#dfae19]/10 text-[#0a192f] group-hover/link:text-[#dfae19] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
