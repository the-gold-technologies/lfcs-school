import Link from 'next/link';
import Image from 'next/image';
import { Home, BookOpen, Building, Menu, ChevronDown, Backpack, GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-1 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[85px]">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image 
              src="/logo1.png" 
              alt="Little Flower Logo" 
              width={80} 
              height={80} 
              className="object-contain" 
            />
            <div className="flex flex-col items-center">
              <span className="text-lf-burgundy font-serif text-[32px] leading-none tracking-[0.06rem] font-semibold">Little Flower</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[1.5px] w-6 bg-lf-burgundy"></div>
                <span className="text-lf-olive font-bold text-[12px] uppercase tracking-[0.1em]">CHILDREN SCHOOL</span>
                <div className="h-[1.5px] w-6 bg-lf-burgundy"></div>
              </div>
              {/* <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] mt-1">
                <span className="text-lf-olive">LEARN</span>
                <span className="text-lf-gold text-[12px] leading-[0] pb-[2px]">•</span>
                <span className="text-lf-gold">GROW</span>
                <span className="text-lf-olive text-[12px] leading-[0] pb-[2px]">•</span>
                <span className="text-lf-olive">LEAD</span>
              </div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-end">
            <Link href="#" className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
              <Home className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
              <span className="text-[13px] font-bold flex items-center gap-1">About Us <ChevronDown className="w-4 h-4" /></span>
            </Link>
            <Link href="#" className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
              <BookOpen className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
              <span className="text-[13px] font-bold flex items-center gap-1">Academics <ChevronDown className="w-4 h-4" /></span>
            </Link>
            <Link href="#" className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
              <Backpack className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
              <span className="text-[13px] font-bold flex items-center gap-1">Experience <ChevronDown className="w-4 h-4" /></span>
            </Link>
            <Link href="#" className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
              <Building className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
              <span className="text-[13px] font-bold flex items-center gap-1">Our Schools <ChevronDown className="w-4 h-4" /></span>
            </Link>
            <Link href="#" className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
              <GraduationCap className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
              <span className="text-[13px] font-bold flex items-center gap-1">Admissions <ChevronDown className="w-4 h-4" /></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="#" className="bg-lf-burgundy text-white px-8 py-3.5 rounded-[16px] font-semibold text-sm hover:bg-lf-burgundy-hover transition-colors">
              Start a School
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-700 hover:text-[#0a192f] p-2">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
