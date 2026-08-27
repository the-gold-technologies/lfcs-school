import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">News & Achievements</span>
            <h2 className="font-serif text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
              Celebrating <span className="font-script text-[#dfae19] text-[48px] relative inline-block -my-4 pr-1">
                Success
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Milestones, achievements and moments that inspire us forward.</p>
          </div>
          <button className="hidden md:block border border-gray-300 text-[#0a192f] px-6 py-2 rounded-[16px] font-semibold hover:bg-gray-100 transition-colors">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { date: '12 Mar 2026', title: 'LF Prayagraj Wins Best School Excellence Award 2025', img: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop' },
            { date: '05 May 2026', title: 'Students Shine at National Science Olympiad', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop' },
            { date: '28 Apr 2026', title: 'Annual Sports Meet 2026 Concludes with Great Spirit', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop' }
          ].map((news, i) => (
            <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">{news.date}</span>
                <h3 className="font-bold text-[#0a192f] text-sm leading-snug mb-3 line-clamp-2">{news.title}</h3>
                <a href="#" className="text-gray-500 text-xs font-bold flex items-center gap-1 hover:text-[#0a192f]">
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
