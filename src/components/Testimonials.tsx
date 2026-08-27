"use client";

import { useState } from "react";
import { Quote, Star, Heart, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("PARENTS");

  const testimonialsData = {
    STUDENTS: [
      { name: 'Ananya Singh', role: 'Student, Class X', text: 'I love the activities and sports here. It\'s like a second home where I can learn and grow everyday.' },
      { name: 'Rahul Verma', role: 'Student, Class XII', text: 'The teachers are very supportive and the environment is very conducive to learning. I feel ready for the future!' },
      { name: 'Priya Sharma', role: 'Student, Class IX', text: 'I have made so many friends and the facilities are top-notch. I love coming to school and participating in clubs.' },
    ],
    TEACHERS: [
      { name: 'Mrs. Kavita', role: 'Teacher, English', text: 'Teaching here has been a wonderful experience. The students are eager to learn and the administration is very supportive.' },
      { name: 'Mr. Rajesh', role: 'Teacher, Mathematics', text: 'The school provides excellent resources for us to teach effectively, making every classroom session interactive and fun.' },
      { name: 'Ms. Sunita', role: 'Teacher, Science', text: 'I love the collaborative environment among the staff and the focus on student development beyond just academics.' },
    ],
    PARENTS: [
      { name: 'Mrs. Ishani Dube', role: 'Parent', text: 'We are thrilled with our experience! The nurturing environment and dedicated teachers give us confidence that our child is receiving the best foundation.' },
      { name: 'Mr. Sumit Pandit', role: 'Parent', text: 'The school has exceeded our expectations. Its commitment to both academic excellence and personal growth provides a truly balanced education.' },
      { name: 'Mr. Pratyush Dada', role: 'Parent', text: 'Choosing this school was our best decision. The focus on character development ensures our child is growing into a well-rounded individual.' },
    ]
  };

  // Map each index to a vibrant brand color and unique shape
  const cardStyles = [
    {
      bg: "bg-[#c76785]", // lf-pink
      text: "text-white",
      shape: "rounded-[40px] rounded-bl-[10px]",
      quoteColor: "text-white/20",
      offset: "md:translate-y-0"
    },
    {
      bg: "bg-[#dfae19]", // lf-gold
      text: "text-[#0a192f]",
      shape: "rounded-[40px] rounded-br-[10px]",
      quoteColor: "text-[#0a192f]/10",
      offset: "md:translate-y-8"
    },
    {
      bg: "bg-[#66733a]", // lf-olive
      text: "text-white",
      shape: "rounded-[40px] rounded-tl-[10px]",
      quoteColor: "text-white/20",
      offset: "md:translate-y-4"
    }
  ];

  return (
    <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
      {/* Decorative background */}
      <img
        src="/decorative_right.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
      />
      {/* Playful Background Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <Star className="w-12 h-12 text-[#dfae19] fill-[#dfae19]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-pulse" style={{ animationDuration: '4s' }}>
        <Heart className="w-14 h-14 text-[#c76785] fill-[#c76785]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Playful Heading */}
        <div className="text-center mb-12 relative">
          <h2 className="font-serif text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
            Loved by Parents, <br className="md:hidden" />Trusted for <span className="font-script text-[#dfae19] text-[48px] relative inline-block -my-4 pr-1">
              Generations
              <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mt-6">
            Hear from the wonderful people who make our school a vibrant community of learners and leaders!
          </p>
        </div>

        {/* Playful Pop-Style Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 px-4">
          
          {/* Students Button */}
          <button
            onClick={() => setActiveTab('STUDENTS')}
            className={`group flex items-center gap-2.5 px-5 md:px-6 py-2.5 md:py-3 font-bold text-[13px] md:text-[14px] transition-all duration-300 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[8px] rounded-bl-[8px] border-2 ${
              activeTab === 'STUDENTS'
                ? 'bg-[#c76785] border-[#c76785] text-white shadow-[4px_4px_0px_rgba(199,103,133,0.3)] -translate-y-0.5'
                : 'bg-white border-gray-200 text-gray-500 hover:border-[#c76785] hover:text-[#c76785] shadow-[3px_3px_0px_rgba(229,231,235,1)]'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${activeTab === 'STUDENTS' ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-[#c76785]/10'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            STUDENTS
          </button>

          {/* Teachers Button */}
          <button
            onClick={() => setActiveTab('TEACHERS')}
            className={`group flex items-center gap-2.5 px-5 md:px-6 py-2.5 md:py-3 font-bold text-[13px] md:text-[14px] transition-all duration-300 rounded-tl-[8px] rounded-br-[8px] rounded-tr-[20px] rounded-bl-[20px] border-2 ${
              activeTab === 'TEACHERS'
                ? 'bg-[#dfae19] border-[#dfae19] text-[#0a192f] shadow-[4px_4px_0px_rgba(223,174,25,0.4)] -translate-y-0.5'
                : 'bg-white border-gray-200 text-gray-500 hover:border-[#dfae19] hover:text-[#dfae19] shadow-[3px_3px_0px_rgba(229,231,235,1)]'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${activeTab === 'TEACHERS' ? 'bg-[#0a192f]/10' : 'bg-gray-100 group-hover:bg-[#dfae19]/20'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            TEACHERS
          </button>

          {/* Parents Button */}
          <button
            onClick={() => setActiveTab('PARENTS')}
            className={`group flex items-center gap-2.5 px-5 md:px-6 py-2.5 md:py-3 font-bold text-[13px] md:text-[14px] transition-all duration-300 rounded-full border-2 ${
              activeTab === 'PARENTS'
                ? 'bg-[#66733a] border-[#66733a] text-white shadow-[4px_4px_0px_rgba(102,115,58,0.3)] -translate-y-0.5'
                : 'bg-white border-gray-200 text-gray-500 hover:border-[#66733a] hover:text-[#66733a] shadow-[3px_3px_0px_rgba(229,231,235,1)]'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${activeTab === 'PARENTS' ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-[#66733a]/10'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            PARENTS
          </button>
        </div>

        {/* Unique Vibrant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 pb-10">
          {testimonialsData[activeTab as keyof typeof testimonialsData].map((t, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <div 
                key={i} 
                className={`${style.bg} ${style.shape} ${style.offset} p-8 md:p-10 relative flex flex-col justify-between min-h-[350px] shadow-xl hover:-translate-y-2 transition-transform duration-300`}
              >
                {/* Large Background Quote */}
                <div className={`absolute top-6 left-6 ${style.quoteColor} pointer-events-none`}>
                  <Quote className="w-16 h-16 rotate-180" fill="currentColor" strokeWidth={0} />
                </div>
                
                <p className={`${style.text} text-[16px] leading-[1.8] font-medium relative z-10 mt-12 mb-8`}>
                  "{t.text}"
                </p>
                
                <div className="relative z-10 mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className={`${style.text} font-bold text-lg`}>{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${style.text} text-[15px] mb-0.5`}>{t.name}</h4>
                    <span className={`${style.text} opacity-80 text-[12px] uppercase tracking-wider font-bold`}>{t.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
