import { useState, useEffect } from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';

const campusLinks = [
  { name: 'Gwanak Campus', href: '#' },
  { name: 'Yeongeon Campus', href: '#' },
  { name: 'Pyeongchang Campus', href: '#' },
  { name: 'Siheung Campus', href: '#' },
];

const utilityLinks = [
  { name: 'Colleges', href: '#' },
  { name: 'Office of Global Affairs', href: '#' },
];

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-snu-black border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'h-8' : 'h-10'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Campus Links */}
          <div className="flex items-center gap-4">
            {campusLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs text-white/70 hover:text-snu-gold transition-all duration-300 hover-underline hidden sm:block ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
                style={{ transitionDelay: `${100 + index * 80}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="relative group sm:hidden">
              <button className="flex items-center gap-1 text-xs text-white/70 hover:text-snu-gold transition-colors">
                Campuses
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Utility Links */}
          <div className="flex items-center gap-4">
            {utilityLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs text-white/70 hover:text-snu-gold transition-all duration-300 hover-underline hidden md:block ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className={`flex items-center gap-1 text-xs text-white/70 hover:text-snu-gold transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}
              style={{ transitionDelay: '360ms' }}
            >
              <Globe className="w-3 h-3" />
              <span className="hidden sm:inline">Korean</span>
            </a>
            <button
              className={`text-white/70 hover:text-snu-gold transition-all duration-300 hover:scale-110 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '440ms' }}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
