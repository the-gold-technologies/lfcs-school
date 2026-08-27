const partners = [
  { name: 'Amazon', link: 'https://amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', link: 'https://google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', link: 'https://microsoft.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Cisco', link: 'https://cisco.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'IBM', link: 'https://ibm.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', link: 'https://intel.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Adobe', link: 'https://adobe.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Adobe_Systems_logo_and_wordmark.svg' },
];

export default function TrustedPartners() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          
          {/* Left side: Heading */}
          <div className="w-full lg:w-[35%] shrink-0">
            <span className="text-lf-gold font-bold text-xs tracking-[0.2em] uppercase mb-3 block">Our Trusted Partners</span>
            <h2 className="font-serif text-[40px] font-medium text-[#0a192f] leading-tight mb-2">
              Collaborating for <span className="font-script text-[#dfae19] text-[44px] relative inline-block -my-4 pr-1">
                Excellence
                <svg className="absolute bottom-[4px] left-0 w-full h-[6px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7 Q 50 12 98 3" stroke="#dfae19" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We partner with industry leaders to provide our students and faculty with the best resources, and opportunities.
            </p>
          </div>
          
          {/* Right side: Marquee */}
          <div className="w-full lg:w-[65%] relative overflow-hidden flex bg-white py-4">
            {/* Left/Right Gradients for fade effect */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Marquee Content */}
            <div className="animate-marquee flex items-center">
              {/* Render partners array twice for seamless infinite scrolling */}
              {[...partners, ...partners].map((partner, idx) => (
                <a 
                  key={idx} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mx-8 shrink-0"
                >
                  <img src={partner.logo} alt={partner.name} className="h-10 md:h-12 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
