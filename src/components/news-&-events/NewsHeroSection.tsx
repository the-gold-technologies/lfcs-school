export default function NewsHeroSection() {
  return (
    <section className="relative flex items-center bg-[#fefdfa] pt-36 pb-8 overflow-hidden">
      <div className="hidden md:block absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c76785]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">News & Events</span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-medium leading-[1.3] mb-4 text-[#0a192f]">
            Little Flower{" "}
            <span className="font-script text-[#832646] text-[40px] sm:text-[48px] md:text-[48px] relative inline-block -my-2 pr-2">
              in the News.
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-sm text-gray-600 leading-relaxed">
            Announcements, milestones and events from Little Flower schools, and what media houses across India are saying about them.
          </p>
        </div>
      </div>
    </section>
  );
}
