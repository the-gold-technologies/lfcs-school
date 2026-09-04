import Image from "next/image";

const faculty = [
  { name: "Meera Patel", role: "Head of English", img: "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=2070&auto=format&fit=crop" },
  { name: "Rajesh Kumar", role: "Mathematics", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop" },
  { name: "Ananya Sharma", role: "Science", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Amit Singh", role: "Social Studies", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
  { name: "Kavita Reddy", role: "Arts & Culture", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop" },
  { name: "Vikram Malhotra", role: "Physical Education", img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1978&auto=format&fit=crop" },
  { name: "Priya Desai", role: "Computer Science", img: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=2070&auto=format&fit=crop" },
  { name: "Suresh Iyer", role: "Physics", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
];

export default function FacultySection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="faculty">
      
      {/* Decorative Image */}
      <img 
        src="/decorative_left_top.png" 
        alt="" 
        className="absolute inset-0 w-full h-full -top-32 object-contain z-0 pointer-events-none opacity-100"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c76785] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">OUR FACULTY</span>
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
            Meet Our Inspiring
            <span className="font-script text-[#dfae19] text-[38px] md:text-[54px] relative inline-block -my-4 pl-4">
               Educators
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto mt-6">
            Our team of experienced and passionate educators is dedicated to nurturing each student's potential, fostering a love for learning, and guiding them towards academic and personal excellence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {faculty.map((member, i) => (
            <div key={i} className="group relative rounded-[24px] overflow-hidden aspect-[4/5] bg-gray-100 shadow-sm cursor-pointer">
              <img 
                src={member.img} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-[18px] mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</h3>
                <p className="text-[#dfae19] font-medium text-[13px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
