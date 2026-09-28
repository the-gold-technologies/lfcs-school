export default function ContactHeroSection() {
  return (
    <section className="relative flex items-center bg-[#fefdfa] pt-40 pb-14 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#dfae19]/[0.07] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c76785]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Contact Us</span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-[50px] font-medium leading-[1.3] mb-6 text-[#0a192f]">
            We&apos;d Love to{" "}
            <span className="font-script text-[#832646] text-[40px] sm:text-[48px] md:text-[55px] relative inline-block -my-2 pr-2">
              Hear From You.
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-[15px] text-gray-600 leading-relaxed">
            Whether you have a question about admissions, academics, or partnering with us to start a school, the Little Flower Group of Schools team is here to help. Reach out and we&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    </section>
  );
}
