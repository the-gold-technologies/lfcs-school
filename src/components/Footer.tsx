import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import BackToTopButton from '@/components/BackToTopButton';
import type { SiteConfig } from '@/lib/content';

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
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#6a2238" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export default function Footer({ site }: { site: SiteConfig }) {
  const s = site.socialLinks;
  const socials = [
    { href: site.facebookUrl, label: 'Facebook', Icon: FacebookIcon },
    { href: site.instagramUrl, label: 'Instagram', Icon: InstagramIcon },
    { href: site.youtubeUrl, label: 'YouTube', Icon: YoutubeIcon },
  ].filter((x) => x.href);

  return (
    <div className="bg-[#fdfdfc]">
      <footer className="bg-[#6a2238] text-white pt-20 pb-8 rounded-t-[40px] mx-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 pr-8">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4 mb-6">
              <Image 
                src={s.footerLogo || site.logo} 
                alt="Little Flower Group of Schools logo" 
                width={70} 
                height={70} 
                className="object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-[22px] leading-none uppercase">{s.brandTitle}</span>
                <span className="text-white font-semibold text-[13px] uppercase tracking-widest mt-1">{s.brandSubtitle}</span>
              </div>
            </Link>
            <p className="whitespace-pre-line text-[#eef3ea] text-[13px] leading-relaxed mb-8 pr-4">
              {site.siteDescription}
            </p>
            <div className="flex gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href!} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[#eef3ea] hover:text-white hover:border-white transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns (CMS → Social Media & Footer) */}
          {s.footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-lf-gold font-bold mb-6 uppercase tracking-wider text-xs">{col.title}</h4>
              <ul className="space-y-3.5 text-[13px] text-[#eef3ea]">
                {col.links.map((link) => (
                  <li key={link.url + link.label}><Link href={link.url} className="hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Contact Bar */}
        <div className="border-t border-white/20 pt-8 pb-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-[13px] text-[#eef3ea]">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <a href={telHref(site.phone)} className="hover:text-white transition-colors">{site.phone}</a>
              {s.phone2 && (
                <>
                  <span className="text-white/40">|</span>
                  <a href={telHref(s.phone2)} className="hover:text-white transition-colors">{s.phone2}</a>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <span>{site.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-lf-gold" strokeWidth={1.5} />
              <span>{s.operatingHours}</span>
            </div>
          </div>
          
          <div className="text-center md:text-right mt-4 md:mt-0">
            <BackToTopButton />
          </div>

        </div>

        {/* Credit */}
        <p className="whitespace-pre-line text-center md:text-right text-[11px] text-[#eef3ea]/60 pt-2">
          Designed &amp; Developed by{" "}
          <a href="https://thegoldtechnologies.com/" target="_blank" rel="noopener" className="text-lf-gold/80 hover:text-lf-gold transition-colors">
            The Gold Technologies
          </a>
        </p>

      </div>
    </footer>
    </div>
  );
}
