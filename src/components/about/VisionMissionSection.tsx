import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-10  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Vision Card */}
          <div className="bg-lf-olive rounded-[40px] p-10 md:p-14 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#dfae19]/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#dfae19] flex items-center justify-center mb-8 shadow-lg">
                <Eye className="w-8 h-8 text-lf-olive" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-[36px] font-medium text-white mb-6">Our Vision</h2>
              <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light">
                To be a leading educational network that empowers students to achieve their highest potential, fostering a generation of compassionate, innovative, and responsible global citizens who will make a positive impact on the world.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#c76785] rounded-[40px] p-10 md:p-14 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
             {/* Decorative background circle */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
             
             <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-lg">
                <Target className="w-8 h-8 text-[#c76785]" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-[36px] font-medium text-white mb-6">Our Mission</h2>
              <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light">
                To provide a dynamic, inclusive, and values-driven learning environment where excellence in academics, character development, and holistic growth is cultivated through dedicated teaching and strong community partnerships.
              </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
