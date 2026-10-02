import { Sprout, School, Award, MapPin, Building2, Send, Star, Leaf } from "lucide-react";

export default function OurGrowthSection() {
  const milestones = [
    {
      year: "1993",
      title: "The Beginning",
      desc: "Founded by Late Shri Vijay Shankar Yadav in a temporary space with just 30 students.",
      color: "#dfae19",
      bgColor: "bg-[#fcf8ee]",
      icon: Sprout,
      img: "/about/founder-portrait.webp",
      imgPosition: "center 15%",
      borderRadius: "60px 24px 60px 24px"
    },
    {
      year: "2012",
      title: "LFCS Kiriharapur, Ballia",
      desc: "An exemplary academy established with modern facilities and cutting edge amenities.",
      color: "#66733a",
      bgColor: "bg-[#edf2ea]",
      icon: School,
      img: "/schools/Khalispur-Balia.webp",
      imgPosition: "center",
      borderRadius: "24px 60px 24px 60px"
    },
    {
      year: "2014",
      title: "LFIS, Mau",
      desc: "Our flagship international school in Khalishpur, with high tech facilities and an Olympic standard swimming pool.",
      color: "#fb5857",
      bgColor: "bg-[#fcf2f2]",
      icon: Award,
      img: "/about/journey-lfis-mau.webp",
      imgPosition: "center",
      borderRadius: "60px 24px 60px 24px"
    },
    {
      year: "2018",
      title: "LFCS, Ghosi",
      desc: "Extending holistic, value based education to the children of remote villages.",
      color: "#3b82f6",
      bgColor: "bg-[#eff5fd]",
      icon: MapPin,
      img: "/schools/Ghosi.webp",
      imgPosition: "center 35%",
      borderRadius: "24px 60px 24px 60px"
    },
    {
      year: "2022",
      title: "LFCS, Kasimabad Ghazipur",
      desc: "A new branch in Kasimabad, Ghazipur, commencing operations in the 2022-23 session.",
      color: "#842b46",
      bgColor: "bg-[#f8eef1]",
      icon: Building2,
      img: "/schools/Kasimabad.webp",
      imgPosition: "center",
      borderRadius: "60px 24px 60px 24px"
    },
  ];

  return (
    <section className="py-20 bg-[#fdfdfc] relative overflow-hidden">

      {/* Decorative Background Image */}
      <img loading="lazy" decoding="async" 
        src="/decorative_left_top.webp" 
        alt="" 
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none opacity-100"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-[#66733a] font-bold text-[12px] tracking-[0.2em] uppercase">Our Journey</span>
          <h2 className="font-serif text-[36px] md:text-[48px] font-medium text-[#0a192f] leading-tight mb-4">
            Growing with <span className="font-script text-[#dfae19] text-[48px] md:text-[60px] relative inline-block -my-4 pr-1">
              Purpose
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-4">
            From 30 students in a temporary space to a network of CBSE schools, <br className="hidden sm:block" />
            our journey has been about values, growth, and transforming lives.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[1300px] mx-auto">

          {/* Connecting Dashed Line (Desktop) */}
          <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] z-0">
            <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="none">
              <path d="M0,20 C133,40 133,0 266,20 C400,40 400,0 533,20 C666,40 666,0 800,20" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6,6" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex flex-col items-center group">

                {/* Connecting Line (Mobile) */}
                {i !== milestones.length - 1 && (
                  <div className="lg:hidden absolute top-[76px] bottom-[-48px] left-[50%] w-[2px] border-l-2 border-dashed border-gray-300 -translate-x-1/2 z-0"></div>
                )}

                {/* Year Bubble */}
                <div
                  className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.06)] relative z-20 text-[18px] font-bold border-2 mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: m.color, borderColor: `${m.color}30` }}
                >
                  {m.year}
                </div>

                {/* Vertical Drop Line */}
                <div className="w-[2px] h-[20px] relative z-10" style={{ backgroundColor: m.color }}></div>
                <div className="w-[8px] h-[8px] rounded-full -mt-[4px] relative z-10" style={{ backgroundColor: m.color }}></div>

                {/* Blob Card */}
                <div
                  className={`mt-2 ${m.bgColor} p-4 w-full text-center relative shadow-sm group-hover:-translate-y-1 transition-transform duration-300`}
                  style={{ borderRadius: m.borderRadius }}
                >
                  {/* Floating Icon */}
                  <div
                    className="absolute top-[100px] -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 z-30"
                    style={{ color: m.color }}
                  >
                    <m.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 relative">
                    <img loading="lazy" decoding="async" src={m.img} alt={m.title} style={{ objectPosition: m.imgPosition }} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-[#0a192f] text-[17px] mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed px-2 pb-6">{m.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
