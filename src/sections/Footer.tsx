import { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter, 
  Linkedin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const campuses = [
  {
    name: 'Gwanak Main Campus',
    address: '1 Gwanak-ro, Gwanak-gu, Seoul 08826',
    phone: '82-2-880-5114',
    fax: '82-2-887-8658',
  },
  {
    name: 'Yeongeon Medical Campus',
    address: '103 Daehak-ro, Jongno-gu, Seoul 03080',
    phone: null,
    fax: null,
  },
  {
    name: 'Pyeongchang Campus',
    address: '1447 Pyeongchang-daero, Daehwa-myeon, Pyeongchang-gun, Gangwon-do 25354',
    phone: null,
    fax: null,
  },
  {
    name: 'Siheung Campus',
    address: 'Seouldaehak-ro 173, Siheung-si, Gyeonggi-do 15011',
    phone: null,
    fax: null,
  },
];

const quickLinks = [
  { name: 'Maps & Directions', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'A-Z Site Index', href: '#' },
  { name: 'Sitemap', href: '#' },
];

const legalLinks = [
  { name: 'Office of Global Affairs', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-snu-dark-gray pt-16 pb-8"
    >
      {/* Gold Top Border */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-snu-gold to-transparent transition-transform duration-1000 ${
          isVisible ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo & Social */}
        <div 
          className={`flex flex-col md:flex-row md:items-center md:justify-between pb-10 border-b border-white/10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-14 h-14 bg-snu-gold rounded-sm flex items-center justify-center">
              <span className="text-snu-black font-bold text-2xl">S</span>
            </div>
            <div>
              <div className="text-lg font-semibold text-white tracking-wide">SEOUL NATIONAL</div>
              <div className="text-sm text-snu-gold tracking-wider">UNIVERSITY</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-snu-gold hover:bg-snu-gold/20 transition-all duration-300 hover:scale-110 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Campuses Grid */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-white/10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {campuses.map((campus, index) => (
            <div 
              key={campus.name}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-snu-gold" />
                {campus.name}
              </h4>
              <p className="text-white/50 text-sm mb-2">{campus.address}</p>
              {campus.phone && (
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  Tel. {campus.phone}
                </p>
              )}
              {campus.fax && (
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  Fax. {campus.fax}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Links Section */}
        <div 
          className={`flex flex-wrap justify-center gap-6 py-8 border-b border-white/10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-snu-gold text-sm transition-colors flex items-center gap-1 group"
            >
              {link.name}
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </a>
          ))}
          {legalLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-snu-gold text-sm transition-colors flex items-center gap-1 group"
            >
              {link.name}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div 
          className={`pt-8 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-white/40 text-sm">
            Copyright {new Date().getFullYear()} Seoul National University. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
