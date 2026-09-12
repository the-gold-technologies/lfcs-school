export default function LaboratoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-1 flex flex-col items-start max-w-xl">
            <span className="text-[#3498db] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Laboratories</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-6">
              Spaces where Concepts are <br/>
              <span className="font-script text-[#3f5333] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                 brought to life
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#3f5333" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Labs are part of a School where students are made to practically implement concepts learnt. The experiments done in the lab gives students turn their imagination into reality, and also gives them an understanding of how important it is to practically implement your learnings as it builds your foundation.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              At LFCS, that&apos;s exactly what we do - to help children move from learning about something to understanding it through experience. We create a space where students can implement what they have learnt in their classrooms to practically implement them in these laboratories.
            </p>
          </div>

          <div className="order-2 relative w-full h-[400px] md:h-[500px]">
             <div className="absolute top-0 right-0 w-full h-full rounded-[30px] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                alt="Science Lab" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
