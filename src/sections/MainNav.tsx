import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Academics', href: '#', hasDropdown: true },
  { name: 'Research', href: '#', hasDropdown: true },
  { name: 'Admissions', href: '#', hasDropdown: true },
  { name: 'SNU NOW', href: '#', hasDropdown: false },
  { name: 'Campus Life', href: '#', hasDropdown: true },
  { name: 'About SNU', href: '#', hasDropdown: true },
];

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'top-8 h-16 glass shadow-lg' 
          : 'top-10 h-20 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a 
            href="#"
            className={`flex items-center gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-10 h-10 bg-snu-gold rounded-sm flex items-center justify-center">
              <span className="text-snu-black font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white tracking-wide">SEOUL NATIONAL</div>
              <div className="text-xs text-snu-gold tracking-wider">UNIVERSITY</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium text-white/90 hover:text-snu-gold transition-all duration-300 hover-underline ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass rounded-sm overflow-hidden shadow-xl animate-fade-in">
                    <div className="py-2">
                      {[1, 2, 3].map((i) => (
                        <a
                          key={i}
                          href="#"
                          className="block px-4 py-2 text-sm text-white/80 hover:text-snu-gold hover:bg-white/5 transition-colors"
                        >
                          {item.name} Option {i}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className={`text-white/70 hover:text-snu-gold transition-all duration-300 hover:scale-110 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '900ms' }}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="#"
              className={`btn-gold rounded-sm text-sm ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-16 bg-snu-black/95 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl font-medium text-white hover:text-snu-gold transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className={`btn-gold rounded-sm mt-4 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
