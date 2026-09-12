import { BookOpen } from "lucide-react";

export default function LibrarySection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="rounded-[40px] overflow-hidden relative shadow-2xl bg-black">
          
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop" 
            alt="Library" 
            className="w-full h-[600px] object-cover opacity-60 mix-blend-overlay"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-2xl text-left">
              <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-4 block">Library</span>
              <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-white leading-tight mb-6">
                Making Books <br/>
                <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pr-3">
                   your Friend
                  <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-[15px] text-gray-200 leading-relaxed mb-6">
                Library is a place where students see various parts of the world, beyond their textbooks. It is a space where children can discover new ideas, develop reading habits and learn to explore independently. 
              </p>
              
              <p className="text-[15px] text-gray-200 leading-relaxed mb-6">
                At LFCS, the library is mainly developed to help students explore the world, develop their reading habits, learn to make books as their friends, read new stories, learn new lessons of life and shape their personality beyond academics.
              </p>
              
              <div className="mt-8 flex items-start gap-4 p-5 bg-white/10 backdrop-blur-md rounded-[20px] border border-white/20">
                <BookOpen className="w-6 h-6 text-[#dfae19] shrink-0 mt-1" />
                <p className="text-[14px] text-white leading-relaxed font-medium">
                  Because a strong reading habit builds more than knowledge—it builds imagination, understanding and a lifelong relationship with learning.
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
