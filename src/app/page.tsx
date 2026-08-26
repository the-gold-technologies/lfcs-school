import Image from "next/image";
import { ArrowRight, ChevronRight, ChevronLeft, MapPin, GraduationCap, Award, Flag, BookOpen, Trophy, Lightbulb, Heart, Target, Diamond, Users, Calendar, ShieldCheck, Palette, Code, Quote, Play, Building, ClipboardList, Sprout, Monitor, Star, Microscope, LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 1. Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hersection_bg.png"
            alt="Students"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[55%] bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
          <img
            src="/herobg1.png"
            alt="Hero Overlay"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto mt-14">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-medium leading-tight max-w-2xl mb-6">
            <span className="text-[#0a192f]">Rooted in Values.</span><br />
            <span className="text-lf-burgundy">Rising with Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10 leading-relaxed font-light">
            A network of CBSE schools committed to academic excellence, character building and holistic development.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lf-burgundy text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-all flex items-center gap-2">
              Explore Our Schools <ArrowRight className="w-5 h-5 text-lf-gold" />
            </button>
            <button className="bg-transparent border border-lf-burgundy text-lf-burgundy px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy/5 transition-all flex items-center gap-2">
              Admissions Open <GraduationCap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Statistics Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full -mt-16 mb-16">
        <div className="bg-white rounded-[32px] shadow-xl py-8 px-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-left divide-x divide-gray-100">
          <div className="flex flex-row gap-4 items-start">
            <BuildingIcon className="w-11 h-11 text-red-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">60+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Schools</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <MapPin className="w-11 h-11 text-orange-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">40+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Cities</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Flag className="w-11 h-11 text-green-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">5</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">States</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Users className="w-11 h-11 text-blue-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">50,000+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Students</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start">
            <Award className="w-11 h-11 text-pink-500 mb-3" strokeWidth={1.5} />
            <div>
              <div className="text-3xl font-medium text-[#0a192f]">20+</div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 flex flex-col items-start justify-center">
              <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">Welcome To</span>
              <h2 className="font-serif text-4xl font-medium text-[#0a192f] leading-tight mb-6">
                Little Flower Group<br />of Schools
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our schools are places where children discover their potential, nurture their dreams and grow into confident, compassionate and responsible global citizens.
              </p>
              <button className="bg-lf-burgundy text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-lf-burgundy-hover transition-colors flex items-center gap-2">
                Know More About Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform group flex flex-col">
                <div className="relative h-48 w-full">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" alt="Strong Academics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-6 left-6 w-[3.25rem] h-[3.25rem] rounded-full border-[4px] border-white flex items-center justify-center  bg-lf-olive z-10 shadow-sm">
                    <BookOpen className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="relative pt-10 pb-8 px-6 bg-white z-0">
                  <h3 className="font-bold text-[#0a192f] text-[17px] mb-1.5">Strong Academics</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">CBSE curriculum with future ready learning.</p>
                </div>
              </div>

              <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform group flex flex-col">
                <div className="relative h-48 w-full">
                  <img src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1974&auto=format&fit=crop" alt="Holistic Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-6 left-6 w-[3.25rem] h-[3.25rem] rounded-full border-[4px] border-white flex items-center justify-center bg-lf-burgundy z-10 shadow-sm">
                    <Sprout className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="relative pt-10 pb-8 px-6 bg-white z-0">
                  <h3 className="font-bold text-[#0a192f] text-[17px] mb-1.5">Holistic Growth</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">Sports, arts, life skills and leadership opportunities.</p>
                </div>
              </div>

              <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform group flex flex-col">
                <div className="relative h-48 w-full">
                  <img src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop" alt="Future Ready" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-6 left-6 w-[3.25rem] h-[3.25rem] rounded-full border-[4px] border-white flex items-center justify-center bg-lf-gold z-10 shadow-sm">
                    <Lightbulb className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="relative pt-10 pb-8 px-6 bg-white z-0">
                  <h3 className="font-bold text-[#0a192f] text-[17px] mb-1.5">Future Ready</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">Innovation, technology and 21st century skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Learning Beyond Classrooms */}
      <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            {/* Left Image Area */}
            <div className="xl:w-[40%] relative w-full px-4 xl:px-0">
              <div className="relative z-10 ml-4">
                {/* Teal background frame */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] bg-[#dceae8] z-0"></div>
                <div className="absolute -top-4 -left-4 w-full h-full rounded-[32px] border-[6px] border-[#89b3a9] z-10"></div>
                {/* Peach blob top right */}
                <div className="absolute -top-10 -right-8 w-40 h-32 bg-[#f5d7ce] rounded-[40px] rounded-bl-[80px] rotate-[15deg] z-20"></div>
                {/* Yellow blob bottom left */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#fae5a0] rounded-[40px] rounded-tr-[80px] -rotate-[15deg] z-20"></div>

                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Students learning" className="w-full h-auto min-h-[350px] rounded-[32px] object-cover relative z-10" />
              </div>
            </div>

            {/* Right Text Area */}
            <div className="xl:w-[60%] z-10 xl:pl-6">
              <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">HOW WE EDUCATE</span>
              <h2 className="font-serif text-[44px] font-medium text-[#0a192f] leading-tight mb-2">
                Learning Beyond Classrooms
              </h2>
              <p className="text-gray-500 mb-14 text-[16px] max-w-2xl leading-relaxed">
                We blend strong academics with innovation and creativity to nurture curious minds and confident hearts.
              </p>

              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0 md:divide-x md:divide-gray-100">

                {/* Feature 1 */}
                <div className="flex-1 md:pr-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-full bg-[#71a1ec] flex items-center justify-center shrink-0">
                      <Target className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Experiential<br />Learning</h4>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Hands-on learning that builds curiosity.</p>
                </div>

                {/* Feature 2 */}
                <div className="flex-1 md:px-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f87878] flex items-center justify-center shrink-0">
                      <Award className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Academic<br />Excellence</h4>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Strong foundation with personalized support.</p>
                </div>

                {/* Feature 3 */}
                <div className="flex-1 md:px-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-full bg-[#6db387] flex items-center justify-center shrink-0">
                      <Monitor className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Technology &<br />Innovation</h4>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed pr-2">Smart classrooms and digital integration.</p>
                </div>

                {/* Feature 4 */}
                <div className="flex-1 md:pl-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-full bg-[#a37ee8] flex items-center justify-center shrink-0">
                      <Star className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0a192f] text-[15px] leading-tight">Holistic<br />Development</h4>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Nurturing mind, body and character.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="py-12 bg-[#fcfdfe]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a192f] rounded-[40px] p-10 md:p-14 flex flex-col lg:flex-row items-center relative overflow-hidden shadow-xl">
            {/* Left Content */}
            <div className="lg:w-[32%] z-10 shrink-0">
              <span className="text-[#dfae19] font-bold text-[11px] tracking-[0.15em] uppercase mb-4 block">OUR APPROACH</span>
              <h2 className="font-serif text-[42px] font-medium text-white leading-tight mb-5">
                Learning That<br />Builds <span className="text-[#dfae19] italic font-serif relative inline-block">
                  Life Skills
                  <svg className="absolute -bottom-2 left-0 w-full h-[8px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="text-gray-400 mb-10 text-[15px] leading-relaxed max-w-sm">
                Not just academics — we prepare children for life, with knowledge, character and curiosity.
              </p>

              <button className="bg-[#dfae19] text-[#0a192f] px-7 py-3.5 rounded-[16px] font-bold text-[14px] hover:bg-white transition-colors flex items-center gap-2">
                Explore Academics <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Carousel Area */}
            <div className="lg:w-[71%] w-full relative z-10">
              {/* Navigation Arrows */}
              <div className="absolute -top-10 right-0 hidden lg:flex gap-3">
                <button className="w-9 h-9 rounded-full bg-white text-[#0a192f] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-5 overflow-x-auto pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Card 1 */}
                <div className="relative snap-start shrink-0">
                  <div className="absolute -inset-0.5 rounded-[24px]"></div>
                  <div className="w-[200px] h-[280px] rounded-[24px] overflow-hidden relative group border-[1.5px] border-white/20 bg-[#0a192f]">
                    <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Experiential Learning" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-medium text-[15px] leading-snug">Experiential<br />Learning</h4>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative snap-start shrink-0">
                  <div className="w-[200px] h-[280px] rounded-[24px] overflow-hidden relative group border-[1.5px] border-white/20 bg-[#0a192f]">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Technology & Innovation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-medium text-[15px] leading-snug">Technology &<br />Innovation</h4>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative snap-start shrink-0">
                  <div className="w-[200px] h-[280px] rounded-[24px] overflow-hidden relative group border-[1.5px] border-white/20 bg-[#0a192f]">
                    <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" alt="Sports & Physical Growth" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-medium text-[15px] leading-snug">Sports &<br />Physical Growth</h4>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative snap-start shrink-0">
                  <div className="w-[200px] h-[280px] rounded-[24px] overflow-hidden relative group border-[1.5px] border-white/20 bg-[#0a192f]">
                    <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" alt="Art, Culture & Expression" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-medium text-[15px] leading-snug">Art, Culture &<br />Expression</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. School Experience */}
      <section className="py-24 bg-[#fcfdfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="xl:w-[40%]">
              <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-4 block">THE SCHOOL EXPERIENCE</span>
              <h2 className="font-serif text-[42px] text-[#0a192f] leading-tight mb-5">
                Where Learning Comes Alive
              </h2>
              <p className="text-gray-500 mb-8 text-[15px] max-w-lg leading-relaxed">
                From world-class infrastructure to vibrant activities, we provide experiences that shape well-rounded individuals.
              </p>

              <div className="flex gap-4 sm:gap-5 flex-wrap mb-10">
                <div className="flex flex-col items-center gap-3 w-[70px]">
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                    <Trophy className="w-[24px] h-[24px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Sports</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-[70px]">
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                    <Lightbulb className="w-[24px] h-[24px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Arts & Culture</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-[70px]">
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                    <Microscope className="w-[24px] h-[24px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Modern Labs</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-[70px]">
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                    <LayoutGrid className="w-[24px] h-[24px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Clubs & Activities</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-[70px]">
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#0a192f]/10 flex items-center justify-center text-[#0a192f]">
                    <ShieldCheck className="w-[24px] h-[24px]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#0a192f] text-center leading-tight">Safe Campus</span>
                </div>
              </div>

              <button className="bg-[#0a192f] text-white pl-7 pr-2 py-2 rounded-[16px] font-bold text-[14px] hover:bg-[#112a4f] transition-colors flex items-center gap-6 w-fit shadow-md group">
                Explore Experience
                <div className="w-10 h-10 rounded-full bg-[#dfae19] flex items-center justify-center group-hover:bg-[#c99a12] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0a192f]" />
                </div>
              </button>
            </div>

            <div className="xl:w-[60%] flex gap-4 h-[440px] relative">
              {/* Star overlap */}
              <div className="absolute -bottom-6 -left-6 z-20">
                <Star className="w-14 h-14 text-[#c7a4ff] fill-[#c7a4ff]/30 rotate-[-15deg]" strokeWidth={1.5} />
              </div>

              <div className="w-1/3 rounded-[20px] overflow-hidden h-full shrink-0 shadow-sm border border-gray-100">
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" alt="Sports" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="w-1/3 rounded-[20px] overflow-hidden h-full shrink-0 shadow-sm border border-gray-100">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Labs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-1/3 rounded-[20px] overflow-hidden h-full shrink-0 shadow-sm border border-gray-100">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Schools */}
      <section className="py-24 bg-[#fcfdfe] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 md:gap-0">
            <div>
              <span className="text-[#dfae19] font-bold text-[12px] tracking-[0.15em] uppercase mb-3 block">OUR SCHOOLS</span>
              <h2 className="font-serif text-[38px] text-[#0a192f] leading-tight mb-2">
                A Strong Network. A Shared Vision.
              </h2>
              <p className="text-gray-500 text-[15px]">Our schools spread across cities, united by the same values and commitment.</p>
            </div>
            <button className="hidden md:flex items-center gap-3 border border-[#0a192f]/20 text-[#0a192f] px-6 py-2.5 rounded-[16px] font-semibold hover:bg-gray-50 transition-colors text-[14px]">
              View All Schools <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { city: 'Prayagraj', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop' },
              { city: 'Lucknow', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop' },
              { city: 'Varanasi', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop' }, { city: 'Kanpur', state: 'Uttar Pradesh', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop' },
            ].map((school, i) => (
              <div key={i} className="min-w-[300px] w-[300px] bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform group snap-start shrink-0">
                <div className="h-[150px] overflow-hidden relative">
                  <img src={school.img} alt={school.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#0a192f] text-[15px] leading-snug mb-3">
                    Little Flower School {school.city}
                  </h3>
                  <div className="flex items-center gap-2 text-[12.5px] font-medium text-gray-500 mb-6">
                    <MapPin className="w-4 h-4 text-red-500/80 shrink-0" strokeWidth={2} />
                    {school.city}, {school.state}
                  </div>
                  <a href="#" className="text-[#0a192f] font-bold text-[13px] flex items-center gap-2 hover:text-[#dfae19] transition-colors">
                    Visit School <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="md:hidden mt-4 w-full flex justify-center items-center gap-2 border border-[#0a192f]/20 text-[#0a192f] px-6 py-3 rounded-[16px] font-semibold hover:bg-gray-50 transition-colors">
            View All Schools <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. CTA Banners */}
      <section className="max-w-7xl mx-auto w-full py-5">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-lf-burgundy rounded-[40px] overflow-hidden relative p-10 flex flex-col justify-center min-h-[300px]">
            <div className="absolute right-0 top-0 bottom-0 w-3/5">
              <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt="Student" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <GraduationCap className="w-6 h-6 text-lf-burgundy" strokeWidth={1.5} />
              </div>
              <h2 className="text-[32px] font-serif text-white mb-2 leading-tight">Admissions Open</h2>
              <p className="text-gray-200 text-[14px] mb-8 max-w-sm leading-relaxed">Begin your child's journey of excellence and endless possibilities.</p>
              <button className="bg-lf-gold text-[#0a192f] px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#c99a12] transition-colors w-max flex items-center gap-2">
                Learn About Admissions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 bg-lf-gold rounded-[40px] overflow-hidden relative p-10 flex flex-col justify-center min-h-[300px]">
            <div className="absolute right-0 top-0 bottom-0 w-3/5">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale" style={{ maskImage: 'linear-gradient(to left, black 40%, transparent)' }} alt="School" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Building className="w-6 h-6 text-lf-gold" strokeWidth={1.5} />
              </div>
              <h2 className="text-[32px] font-serif text-[#0a192f] mb-2 leading-tight">Start a School</h2>
              <p className="text-[#0a192f]/80 text-[14px] mb-8 max-w-sm leading-relaxed">Partner with us to bring quality education to more communities.</p>
              <button className="bg-lf-burgundy text-white px-6 py-2.5 rounded-[16px] font-bold text-[14px] hover:bg-[#6c2339] transition-colors w-max flex items-center gap-2">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">What Our Community Says</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0a192f] leading-tight">
              Voices of Trust. Stories of Success.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0a192f] shadow-sm shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex overflow-hidden gap-6 w-full max-w-5xl">
              {[
                { name: 'Mrs. Neha Sharma', role: 'Parent, Prayagraj', text: 'The school has given my child confidence, discipline and a love for learning.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
                { name: 'Mr. Amit Verma', role: 'Parent, Lucknow', text: 'Excellent teachers, great environment and focus on overall development.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
                { name: 'Ananya Singh', role: 'Student, Class X', text: 'I love the activities and sports here. It\'s like a second home.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex-1 min-w-[300px]">
                  <Quote className="w-8 h-8 text-lf-gold/40 mb-4" />
                  <p className="text-gray-600 mb-8 min-h-[60px] text-sm leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#0a192f] text-sm">{t.name}</h4>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0a192f] shadow-sm shrink-0">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-lf-burgundy"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* 10. News & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">News & Achievements</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0a192f] leading-tight">
                Celebrating Success
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

    </div>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}
