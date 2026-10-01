import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import BackToTopButton from '@/components/BackToTopButton';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <div className="bg-[#fdfdfc]">
      <footer className="bg-[#6a2238] text-white pt-20 pb-8 rounded-t-[40px] mx-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4 mb-6">
              <Image 
                src="/logo1.webp" 
                alt="Little Flower Logo" 
                width={70} 
                height={70} 
                className="object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-[22px] leading-none uppercase">Little Flower</span>
                <span className="text-white font-semibold text-[13px] uppercase tracking-widest mt-1">Group of Schools</span>
              </div>
            </Link>
            <p className="text-[#eef3ea] text-[13px] leading-relaxed mb-8 pr-4">
              A network of CBSE schools committed to academic excellence, character building and holistic development.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#eef3ea] hover:text-white hover:border-white transition-all">
                <FacebookIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#eef3ea] hover:text-white hover:border-white transition-all">
                <InstagramIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#eef3ea] hover:text-white hover:border-white transition-all">
                <YoutubeIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#eef3ea] hover:text-white hover:border-white transition-all">
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          {/* Links 1 - QUICK LINKS */}
          <div>
            <h4 className="text-lf-gold font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3.5 text-[13px] text-[#eef3ea]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="/our-school" className="hover:text-white transition-colors">Our Schools</Link></li>
              <li><Link href="/start-school" className="hover:text-white transition-colors">Start a School</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links 2 - ADMISSIONS */}
          <div>
            <h4 className="text-lf-gold font-bold mb-6 uppercase tracking-wider text-xs">Admissions</h4>
            <ul className="space-y-3.5 text-[13px] text-[#eef3ea]">
              <li><Link href="/about#our-story" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/academics#curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link href="/academics#approach" className="hover:text-white transition-colors">Teaching Approach</Link></li>
              <li><Link href="/academics#faculty" className="hover:text-white transition-colors">Our Faculty</Link></li>
              <li><Link href="/experience#life-at-lfcs" className="hover:text-white transition-colors">Life at LFCS</Link></li>
              <li><Link href="/our-school#schools" className="hover:text-white transition-colors">Our Campuses</Link></li>
              <li><Link href="/contact#contact-form" className="hover:text-white transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Links 3 - START A SCHOOL */}
          <div>
            <h4 className="text-lf-gold font-bold mb-6 uppercase tracking-wider text-xs">Start A School</h4>
            <ul className="space-y-3.5 text-[13px] text-[#eef3ea]">
              <li><Link href="/start-school#why-partner" className="hover:text-white transition-colors">Why Partner With Us</Link></li>
              <li><Link href="/start-school#model" className="hover:text-white transition-colors">Our School Model</Link></li>
              <li><Link href="/start-school#support" className="hover:text-white transition-colors">Support & Benefits</Link></li>
              <li><Link href="/start-school#requirements" className="hover:text-white transition-colors">Requirements</Link></li>
              <li><Link href="/start-school#process" className="hover:text-white transition-colors">Setup Process</Link></li>
              <li><Link href="/start-school#investment" className="hover:text-white transition-colors">Investment Overview</Link></li>
              <li><Link href="/start-school#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Contact Bar */}
        <div className="border-t border-white/20 pt-8 pb-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-[13px] text-[#eef3ea]">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <a href="tel:+919450879999" className="hover:text-white transition-colors">+91 94508 79999</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <a href="mailto:franchise@lfcsschools.com" className="hover:text-white transition-colors">franchise@lfcsschools.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <span>B-1/142, Sector-G, Aliganj, Lucknow - 226024, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          
          <div className="text-center md:text-right mt-4 md:mt-0">
            <BackToTopButton />
          </div>
          
        </div>
        
      </div>
    </footer>
    </div>
  );
}
