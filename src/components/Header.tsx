"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Home, BookOpen, Building, Menu, X, ChevronDown, Backpack, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '/about', icon: Home, hasDropdown: false },
    { label: 'Academics', href: '/academics', icon: BookOpen, hasDropdown: false },
    { label: 'Experience', href: '/experience', icon: Backpack, hasDropdown: false },
    { 
      label: 'Our Schools', 
      href: '/our-school', 
      icon: Building, 
      hasDropdown: true,
      dropdownItems: [
        { label: 'LFCS, MAU', href: 'https://lfgos.com/', img: '/schools/Nizamuddinpura-Mau.webp' },
        { label: 'LFCS, SIKATIYA', href: 'https://lfcsmau.co/', img: '/schools/Sikatia-Mau.webp' },
        { label: 'LFCS, GHOSI', href: 'https://www.lfcsghosi.co.in/', img: '/schools/Ghosi.webp' },
        { label: 'LFCS, BALLIA', href: 'https://lfcsballia.co.in/', img: '/schools/Khalispur-Balia.webp' },
        { label: 'LFCS, KASIMABAD', href: 'https://www.lfcskasimabad.in/', img: '/schools/Kasimabad.webp' },
        { label: 'LFIS, MAU', href: 'https://lfismau.co.in/', img: '/schools/lfis-mau.webp' },
      ]
    },
  ];

  return (
    <>
      <header className="w-full bg-transparent absolute top-1 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px] md:h-[85px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo1.webp" alt="Little Flower Logo" width={60} height={60} className="object-contain md:w-[80px] md:h-[80px]" />
              <div className="flex flex-col items-center">
                <span className="text-lf-burgundy font-serif text-[22px] md:text-[32px] leading-none tracking-[0.06rem] font-semibold">Little Flower</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1.5px] w-4 md:w-6 bg-lf-burgundy"></div>
                  <span className="text-lf-olive font-bold text-[9px] md:text-[12px] uppercase tracking-[0.1em]">CHILDREN SCHOOL</span>
                  <div className="h-[1.5px] w-4 md:w-6 bg-lf-burgundy"></div>
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex space-x-8 items-end">
              {navLinks.map(({ label, href, icon: Icon, hasDropdown, dropdownItems }) => (
                <div key={label} className="relative group">
                  <Link href={href} className="flex flex-col items-center text-[#0a192f] py-1 px-2">
                    <div className="relative">
                      <Icon className="w-6 h-6 mb-1 text-lf-olive group-hover:scale-110 group-hover:text-lf-burgundy transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative z-10" strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-lf-burgundy/20 rounded-full scale-0 group-hover:scale-[1.7] blur-md transition-all duration-500 opacity-0 group-hover:opacity-100 z-0" />
                    </div>
                    <span className="text-[13px] font-bold flex items-center gap-1 group-hover:text-lf-burgundy transition-colors duration-300 relative">
                      {label} 
                      {hasDropdown && <ChevronDown className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-180" />}
                    </span>
                  </Link>
                  {hasDropdown && dropdownItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 p-4 z-[100]">
                      <div className="grid grid-cols-3 gap-3.5">
                        {dropdownItems.map((item, idx) => (
                          <Link 
                            key={idx} 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group/item block rounded-lg overflow-hidden hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 pb-2"
                          >
                            <div className="h-20 w-full overflow-hidden mb-2 rounded-t-lg">
                              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500" />
                            </div>
                            <span className="px-2.5 block text-[12px] font-bold text-[#0a192f] group-hover/item:text-lf-burgundy transition-colors truncate">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/start-school" className="hidden md:block bg-lf-burgundy text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-[16px] font-semibold text-sm hover:bg-lf-burgundy-hover transition-colors">
                Start a School
              </Link>
              <button
                className="lg:hidden text-gray-700 hover:text-[#0a192f] p-2"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />

          {/* Drawer */}
          <div className="relative ml-auto w-[280px] h-full bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/logo1.webp" alt="Logo" width={44} height={44} className="object-contain" />
                <span className="text-lf-burgundy font-serif text-[18px] font-semibold">Little Flower</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-500 hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-2">
              {navLinks.map(({ label, href, icon: Icon, hasDropdown, dropdownItems }) => (
                <div key={label}>
                  <Link
                    href={href}
                    onClick={() => !hasDropdown && setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-[12px] text-[#0a192f] hover:bg-gray-50 font-semibold text-[15px] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-5 h-5 text-lf-olive shrink-0" strokeWidth={1.5} />
                      {label}
                    </div>
                    {hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </Link>
                  {hasDropdown && dropdownItems && (
                    <div className="ml-12 mt-1 mb-2 flex flex-col gap-2 border-l-2 border-gray-100 pl-4">
                      {dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg transition-colors group/mob"
                        >
                          <img src={item.img} alt={item.label} className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                          <span className="text-[13px] font-semibold text-[#0a192f] group-hover/mob:text-lf-burgundy transition-colors truncate">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-5 border-t border-gray-100">
              <Link href="/start-school" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-lf-burgundy text-white px-6 py-3 rounded-[16px] font-semibold text-sm hover:bg-lf-burgundy-hover transition-colors">
                Start a School
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
