export default function CampusOverviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col items-start max-w-xl">
            <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Campus Overview</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              A Campus designed for <br/>
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                 EveryDay Learning
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At LFCS, the Campus is created with a vision where students can learn through classrooms, conversations, discovery, activities and interaction. Each place gives an opportunity to students to learn, grow & lead in their schooling journey. The space contributes to creating a balanced school experience—one that supports academic foundations while allowing children to explore their interests and develop independence.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              From classrooms to laboratories, to the library and sport spaces the campus on a whole brings different experiences that shape a student’s life in their school years.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[30px] overflow-hidden shadow-lg border-[8px] border-white">
              <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop" alt="Campus Life" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[5%] left-[5%] w-[60%] h-[50%] rounded-[30px] overflow-hidden shadow-xl border-[8px] border-white z-10">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-[20px] -right-[20px] w-24 h-24 bg-[radial-gradient(#dfae19_2px,transparent_2px)] [background-size:16px_16px] opacity-30 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
