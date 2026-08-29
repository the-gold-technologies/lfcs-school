"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Home, BookOpen, Building, Menu, X, ChevronDown, Backpack, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '/about', icon: Home },
    { label: 'Academics', href: '#', icon: BookOpen },
    { label: 'Experience', href: '#', icon: Backpack },
    { label: 'Our Schools', href: '#', icon: Building },
    { label: 'Admissions', href: '#', icon: GraduationCap },
  ];

  return (
    <>
      <header className="w-full bg-transparent absolute top-1 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px] md:h-[85px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo1.png" alt="Little Flower Logo" width={60} height={60} className="object-contain md:w-[80px] md:h-[80px]" />
              <div className="flex flex-col items-center">
                <span className="text-lf-burgundy font-serif text-[22px] md:text-[32px] leading-none tracking-[0.06rem] font-semibold">Little Flower</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1.5px] w-4 md:w-6 bg-lf-burgundy"></div>
                  <span className="text-lf-olive font-bold text-[9px] md:text-[12px] uppercase tracking-[0.1em]">CHILDREN SCHOOL</span>
                  <div className="h-[1.5px] w-4 md:w-6 bg-lf-burgundy"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-end">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <Link key={label} href={href} className="flex flex-col items-center text-[#0a192f] hover:text-lf-burgundy group">
                  <Icon className="w-6 h-6 mb-1 text-lf-olive group-hover:-translate-y-1 group-hover:text-lf-burgundy transition-all" strokeWidth={1.5} />
                  <span className="text-[13px] font-bold flex items-center gap-1">{label} <ChevronDown className="w-4 h-4" /></span>
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link href="#" className="hidden md:block bg-lf-burgundy text-white px-5 lg:px-8 py-2.5 lg:py-3.5 rounded-[16px] font-semibold text-sm hover:bg-lf-burgundy-hover transition-colors">
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
                <Image src="/logo1.png" alt="Logo" width={44} height={44} className="object-contain" />
                <span className="text-lf-burgundy font-serif text-[18px] font-semibold">Little Flower</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-500 hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-2">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-[12px] text-[#0a192f] hover:bg-gray-50 font-semibold text-[15px] transition-colors"
                >
                  <Icon className="w-5 h-5 text-lf-olive shrink-0" strokeWidth={1.5} />
                  {label}
                </Link>
              ))}
            </nav>

            <div className="p-5 border-t border-gray-100">
              <Link href="#" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-lf-burgundy text-white px-6 py-3 rounded-[16px] font-semibold text-sm hover:bg-lf-burgundy-hover transition-colors">
                Start a School
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
