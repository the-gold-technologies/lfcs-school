import { Trophy, Medal, Star, Target, ChevronRight, User } from "lucide-react";

// Placeholder data - Client to replace with real data
const achievements = [
  {
    category: "Academic",
    icon: <Target className="w-5 h-5 text-white" />,
    bg: "bg-[#dfae19]",
    desc: "Board examinations, subject-level performance and academic competitions.",
    students: [
      { name: "John Doe", event: "CBSE Class 12th Board", position: "District Topper (98%)", year: "2023", branch: "Main Campus" },
      { name: "Jane Smith", event: "National Science Olympiad", position: "Gold Medalist", year: "2024", branch: "City Branch" }
    ]
  },
  {
    category: "Sports",
    icon: <Trophy className="w-5 h-5 text-white" />,
    bg: "bg-lf-burgundy",
    desc: "Performance in school, inter-school and other sporting events.",
    students: [
      { name: "Rahul Verma", event: "State Level Athletics", position: "1st in 100m Sprint", year: "2023", branch: "Main Campus" },
      { name: "LFCS Girls Team", event: "Inter-School Basketball", position: "Champions", year: "2024", branch: "City Branch" }
    ]
  },
  {
    category: "Cultural",
    icon: <Star className="w-5 h-5 text-white" />,
    bg: "bg-[#c76785]",
    desc: "Participation and recognition in music, dance, art and cultural programmes.",
    students: [
      { name: "Aarohi Patel", event: "National Classical Dance", position: "Best Performer", year: "2023", branch: "Main Campus" },
      { name: "School Choir", event: "Regional Music Fest", position: "1st Runner Up", year: "2024", branch: "City Branch" }
    ]
  },
  {
    category: "Competition",
    icon: <Medal className="w-5 h-5 text-white" />,
    bg: "bg-[#3498db]",
    desc: "Recognition in quizzes, Olympiads, debates and other competitions.",
    students: [
      { name: "Samir Khan", event: "Inter-School Debate", position: "Best Speaker", year: "2024", branch: "Main Campus" },
      { name: "Priya Sharma", event: "State Level Quiz", position: "Winner", year: "2023", branch: "City Branch" }
    ]
  }
];

export default function StudentAchievementsSection() {
  return (
    <section className="py-16 bg-[#fcfdfe] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 block">Student Achievements</span>
            <h2 className="font-serif text-[34px] md:text-[44px] font-medium text-[#0a192f] leading-tight mb-4">
              Celebrating Participation.<br /> Recognising 
              <span className="font-script text-[#dfae19] text-[38px] md:text-[48px] relative inline-block -my-4 pl-3">
                 Achievement.
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Every achievement reflects effort, preparation and participation. At LFCS, we recognise students who perform well in academics as well as those who participate and achieve in sports, cultural activities, competitions and other areas.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 bg-[#0a192f] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy transition-colors text-sm shrink-0 shadow-md">
            View All Achievements
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className={`w-12 h-12 rounded-[12px] ${item.bg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[18px] text-[#0a192f] mb-1">{item.category} Achievements</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <div className="space-y-4">
                {item.students.map((student, sIdx) => (
                  <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-[12px]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0a192f] text-[14px]">{student.name}</div>
                        <div className="text-[12px] text-gray-500">{student.event} • {student.year}</div>
                      </div>
                    </div>
                    <div className="text-left sm:text-right ml-11 sm:ml-0">
                      <div className="font-bold text-lf-burgundy text-[13px]">{student.position}</div>
                      <div className="text-[11px] text-gray-400">{student.branch}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#0a192f] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy transition-colors text-sm shadow-md">
          View All Achievements
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}
