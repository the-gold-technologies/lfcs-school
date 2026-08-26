import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

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
    <footer className="bg-[#0a192f] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4 mb-6">
              <Image 
                src="/logo.png" 
                alt="Little Flower Logo" 
                width={64} 
                height={64} 
                className="object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-[22px] leading-none uppercase">Little Flower</span>
                <span className="text-white font-semibold text-[13px] uppercase tracking-widest mt-1">Group of Schools</span>
              </div>
            </Link>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-8 pr-4">
              A network of CBSE schools committed to academic excellence, character building and holistic development.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <FacebookIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <InstagramIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <YoutubeIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          {/* Links 1 - QUICK LINKS */}
          <div>
            <h4 className="text-[#facc15] font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Schools</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Start a School</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

         

          {/* Links 3 - ADMISSIONS */}
          <div>
            <h4 className="text-[#facc15] font-bold mb-6 uppercase tracking-wider text-xs">Admissions</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Admission Process</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Eligibility & Documents</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fee Structure</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Links 4 - START A SCHOOL */}
          <div>
            <h4 className="text-[#facc15] font-bold mb-6 uppercase tracking-wider text-xs">Start A School</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Why Partner With Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our School Model</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support & Benefits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Requirements</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Investment Overview</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Links 5 - RESOURCES */}
          <div className="hidden lg:block">
            <h4 className="text-[#facc15] font-bold mb-6 uppercase tracking-wider text-xs">Resources</h4>
             <ul className="space-y-3.5 text-[13px] text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Contact Bar */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-[13px] text-gray-400">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
              <span className="hover:text-white transition-colors cursor-pointer">+91 123 456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
              <span className="hover:text-white transition-colors cursor-pointer">info@littleflowergroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
              <span>Little Flower Group of Schools, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
              <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          
          <div className="text-center md:text-right mt-4 md:mt-0">
            <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors ml-auto cursor-pointer">
              <ChevronRight className="w-5 h-5 -rotate-90 text-gray-400" />
            </div>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}
