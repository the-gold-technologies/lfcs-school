export default function ClassroomsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fcfdfe] relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
              alt="Classroom" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start max-w-xl">
            <span className="text-[#832646] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Classrooms</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              Where Knowledge <br/>
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                 Shapes
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              the Students
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Classrooms are a place where students learn through various concepts that exist in this world. They see the Outer World through the lens of a textbook, learn the art of imagination and build an understanding of every aspect. They create a version of learning & based on that learning they explore what interests them, what makes them resonate more.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              At LFCS, we create an environment where students learn these concepts along with are open to conversations, have the opportunity to clear their doubts-thereby giving them an interactive space allowing them to use their imagination and eventually shape their academic future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
