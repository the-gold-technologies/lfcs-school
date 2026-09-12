export default function SportsFacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative w-full h-[400px] md:h-[500px]">
            <div className="absolute bottom-0 left-0 w-[75%] h-[80%] rounded-[30px] overflow-hidden shadow-lg border-[6px] border-white z-10">
              <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop" alt="Sports Game" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-[30px] overflow-hidden shadow-xl border-[6px] border-white">
              <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" alt="Kids playing" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[10%] left-[-20px] w-24 h-24 bg-[radial-gradient(#3498db_2px,transparent_2px)] [background-size:16px_16px] opacity-30 z-0"></div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start max-w-xl">
            <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Sports Facilities</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              A Ground of <br/>
              <span className="font-script text-[#e74c3c] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                 Games
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#e74c3c" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Play, movement and sport is an important part of any Student&apos;s Life in School years.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Sports teach students various aspects of life, they learn to play together, understand winning & losing is part of life - shape their attitude towards life. At LFCS, we provide students with these activities where they learn to grow while playing. They learn to explore their interest, take responsibility, handle both achievement and setbacks, learn from it and move ahead to do better.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
