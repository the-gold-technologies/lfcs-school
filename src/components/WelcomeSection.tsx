import { ArrowRight, BookOpen, Sprout, Lightbulb } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="lg:w-1/3 flex flex-col items-start justify-center">
            <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">Welcome To</span>
            <h2 className="font-serif text-[36px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4 md:mb-6">
              Little Flower Group<br />of <span className="font-script text-[#dfae19] text-[40px] md:text-[48px] relative inline-block -my-4 pr-1">
                Schools
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Our schools are places where children discover their potential, nurture their dreams and grow into confident, compassionate and responsible global citizens.
            </p>
            <button className="bg-lf-burgundy text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors flex items-center gap-2 text-sm md:text-base">
              Know More About Us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop', icon: BookOpen, color: 'bg-lf-olive', title: 'Strong Academics', desc: 'CBSE curriculum with future ready learning.' },
              { img: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1974&auto=format&fit=crop', icon: Sprout, color: 'bg-lf-burgundy', title: 'Holistic Growth', desc: 'Sports, arts, life skills and leadership opportunities.' },
              { img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop', icon: Lightbulb, color: 'bg-lf-gold', title: 'Future Ready', desc: 'Innovation, technology and 21st century skills.' },
            ].map(({ img, icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform group flex flex-col">
                <div className="relative h-44 sm:h-48 w-full">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute -bottom-6 left-6 w-[3.25rem] h-[3.25rem] rounded-full border-[4px] border-white flex items-center justify-center ${color} z-10 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="relative pt-10 pb-6 md:pb-8 px-5 md:px-6 bg-white z-0">
                  <h3 className="font-bold text-[#0a192f] text-[16px] md:text-[17px] mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
