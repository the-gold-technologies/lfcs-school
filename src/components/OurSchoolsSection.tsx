"use client";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";

const schools = [
  {
    name: 'LFCS, MAU',
    city: 'Mau',
    state: 'Uttar Pradesh',
    address: 'WHPC+9MX, Nizamuddinpura, Sahadatpura, Mau, Uttar Pradesh 275101',
    website: 'https://lfgos.com/',
    instagram: 'https://www.instagram.com/official_lfcsnizamuddinpura?igsh=OHB6ZWE3bzV0cWc4',
    facebook: 'https://www.facebook.com/share/19GPAevD61/',
    youtube: '',
    img: '/schools/Nizamuddinpura-Mau.jpg'
  },
  {
    name: 'LFCS, SIKATIYA',
    city: 'Mau',
    state: 'Uttar Pradesh',
    address: 'Near Sikatiya Overbridge, Mau, Uttar Pradesh',
    website: 'https://lfcsmau.co/',
    instagram: 'https://www.instagram.com/lfcssikatiyamau?igsh=NWNxOHZ6bGVvN2xy',
    facebook: 'https://www.facebook.com/share/19SXEvspwD/',
    youtube: '',
    img: '/schools/Sikatia-Mau.jpg'
  },
  {
    name: 'LFCS, GHOSI',
    city: 'Ghosi',
    state: 'Uttar Pradesh',
    address: 'Zamal Bikkampur, Ghosi, Uttar Pradesh 275304',
    website: 'https://www.lfcsghosi.co.in/',
    instagram: 'https://www.instagram.com/littleflowerchildren?igsh=Zm9kbGQ0Mmh1Z3Jq',
    facebook: 'https://www.facebook.com/share/1bmo1SL5EY/',
    youtube: 'https://youtube.com/@littleflowerchildrenschool7873?si=BaZY_xTs0DmYVV4L',
    img: '/schools/Ghosi.jpeg'
  },
  {
    name: 'LFCS, KHALISHPUR',
    city: 'Mau',
    state: 'Uttar Pradesh',
    address: 'S.H. 34 Mau - Ballia Road khalishpur Mau, Uttar Pradesh 275102',
    website: 'https://lfcsballia.co.in/',
    instagram: 'https://www.instagram.com/lfcs.ballia?igsh=MWlrYjN4OGN0NmtyYg==',
    facebook: 'https://www.facebook.com/share/1EkqBTTVKx/',
    youtube: '',
    img: '/schools/Khalispur-Balia.jpeg'
  },
  {
    name: 'LFCS, KASIMABAD',
    city: 'Kasimabad',
    state: 'Uttar Pradesh',
    address: 'RM22+GPP, Campus: Gehuri, Mardah - Kasimabad Rd, Kasimabad, Uttar Pradesh 233230',
    website: 'https://www.lfcskasimabad.in/',
    instagram: 'https://www.instagram.com/lfcsghazipur?igsh=bzdnOHlueWZ6d3g0',
    facebook: 'https://www.facebook.com/share/1HDhticq5g/',
    youtube: 'https://m.youtube.com/%40lfcs-ghazipur?fbclid=PAb21jcATneaJwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpxOWZnA2iTlDmD-F17tfUplSU6zSWMXnudLmhm37QeOK1oHD_Dqo8SWU6W-u_aem_yXSkKcFwEpvnM-qYsL_hCw',
    img: '/schools/Kasimabad.jpg'
  },
  {
    name: 'LFIS, MAU',
    city: 'Mau',
    state: 'Uttar Pradesh',
    address: 'S.H. 34 Mau - Ballia Road khalishpur Mau, Uttar Pradesh 275102',
    website: 'https://lfismau.co.in/',
    instagram: 'https://www.instagram.com/lfis.mau15?igsh=MXF2YWYzNjN2YXd5eg==',
    facebook: 'https://www.facebook.com/share/1Bd9LEPBNU/',
    youtube: '',
    img: '/schools/lfis-mau.jpg'
  }
];

// Card width + gap in px — must match CSS below
const CARD_W = 300;
const GAP = 20;
const STEP = CARD_W + GAP;

export default function OurSchoolsSection() {
  const [index, setIndex] = useState(0);
  const maxIndex = schools.length - 4; // show 4 at a time

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  // Auto-advance, stops at end then resets
  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, 2800);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Decorative background */}
      <img loading="lazy" decoding="async"
        src="/decorative_left.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 top-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">OUR SCHOOLS</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
              A Strong Network. A Shared{" "}
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-1">
                Vision.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] mt-2">Our schools spread across cities, united by the same values and commitment.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button onClick={prev} disabled={index === 0}
              className="w-10 h-10 rounded-full border border-[#0a192f]/20 text-[#0a192f] flex items-center justify-center hover:bg-[#0a192f] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} disabled={index === maxIndex}
              className="w-10 h-10 rounded-full bg-[#0a192f] text-white flex items-center justify-center hover:bg-[#dfae19] transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 border border-[#0a192f]/20 text-[#0a192f] px-5 py-2.5 rounded-[16px] font-semibold hover:bg-gray-50 transition-colors text-[14px] ml-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5"
            style={{ transform: `translateX(-${index * STEP}px)`, transition: "transform 0.5s ease" }}
          >
            {schools.map((school, i) => (
              <div key={i} className="min-w-[300px] w-[300px] bg-[#f4f5f7] rounded-[20px] overflow-hidden border border-gray-200  hover:-translate-y-1 transition-transform duration-300 group shrink-0">
                <div className="h-[160px] overflow-hidden">
                  <img loading="lazy" decoding="async" src={school.img} alt={school.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col h-[150px]">
                  <h3 className="font-semibold text-[#0a192f] text-[15px] leading-snug mb-2 truncate">
                    {school.name}
                  </h3>
                  <div className="flex items-start gap-2 text-[12.5px] font-medium text-gray-500 mb-3 h-[36px]">
                    <MapPin className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="line-clamp-2" title={school.address}>{school.address}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-1.5">
                      {school.website && (
                        <a href={school.website} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md transition-all">
                          <Globe className="w-3 h-3" />
                        </a>
                      )}
                      {school.facebook && (
                        <a href={school.facebook} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md transition-all">
                          <FaFacebook className="w-3 h-3" />
                        </a>
                      )}
                      {school.instagram && (
                        <a href={school.instagram} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:shadow-md transition-all">
                          <FaInstagram className="w-3 h-3" />
                        </a>
                      )}
                      {school.youtube && (
                        <a href={school.youtube} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:shadow-md transition-all">
                          <FaYoutube className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    
                    <a href={school.website || "#"} target={school.website ? "_blank" : "_self"} rel="noopener noreferrer" className="text-[#0a192f] font-bold text-[11px] uppercase flex items-center gap-1 hover:text-[#dfae19] transition-colors">
                      Website <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#0a192f] w-6" : "bg-gray-300 w-2 hover:bg-gray-400"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
