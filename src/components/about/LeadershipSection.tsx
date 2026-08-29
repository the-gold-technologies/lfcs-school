import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa"; // Or FaLinkedinIn

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Lt. Shiksha Ratan Vijay Shankar Yadav Ji",
      role: "Founder",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
      bio: "The foundation of Little Flower's educational journey was laid by Late Shiksha Ratan Vijay Shankar Yadav Ji, whose belief in the importance of education continues to remain part of the institution's identity."
    },
    {
      name: "[Management Name]",
      role: "[Designation]",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "Management profiles, photographs, designations and individual messages can be added here."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        <div className="text-center mb-16">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Leadership / Management</span>
          <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            Guiding the <span className="font-script text-[#dfae19] text-[44px] md:text-[52px] relative inline-block -my-4 pr-1">
              Institution
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-6">
            Little Flower's growth has been guided by a management committed to building an institution focused on quality education and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <div key={i} className="group">
              <div className="relative h-[400px] rounded-[32px] overflow-hidden mb-6 shadow-lg">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Overlay with socials on hover */}
                <div className="absolute inset-0 bg-[#0a192f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a192f] hover:bg-[#dfae19] transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a192f] hover:bg-[#dfae19] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center px-4">
                <h3 className="font-bold text-[#0a192f] text-[20px] mb-1">{leader.name}</h3>
                <p className="text-[#dfae19] font-bold text-[13px] uppercase tracking-wider mb-4">{leader.role}</p>
                <p className="text-gray-500 text-[14px] leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
