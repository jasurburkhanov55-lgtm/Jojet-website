import { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Plane, 
  Users, 
  Sun, 
  Home, 
  HelpCircle, 
  Globe,
  ArrowRight
} from 'lucide-react';

const userTypes = [
  { id: 'incoming', label: 'Incoming Student' },
  { id: 'current', label: 'Current Student' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'researcher', label: 'Researcher' },
  { id: 'alumni', label: 'Alumni' },
];

const quickLinks = [
  { icon: GraduationCap, label: 'Admissions Information', href: '#' },
  { icon: BookOpen, label: 'Korean Language Program', href: '#' },
  { icon: Plane, label: 'Exchange Program', href: '#' },
  { icon: Users, label: 'Visiting Program', href: '#' },
  { icon: Sun, label: "Int'l Summer Program", href: '#' },
  { icon: Home, label: 'On-campus Housing', href: '#' },
  { icon: HelpCircle, label: 'Admissions FAQ', href: '#' },
  { icon: Globe, label: 'Admissions FAQ (中文)', href: '#' },
];

export default function QuickLinks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUserType, setActiveUserType] = useState('incoming');
  const [displayText, setDisplayText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    const text = 'Are you';
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-snu-dark-gray overflow-hidden"
    >
      {/* Wave Pattern Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-snu-gold/50 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #C9A227 25%, transparent 25%), linear-gradient(-45deg, #C9A227 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #C9A227 75%), linear-gradient(-45deg, transparent 75%, #C9A227 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Question */}
        <div className="text-center mb-10">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {displayText}
            <span className="text-gold-gradient"> {userTypes.find(u => u.id === activeUserType)?.label}?</span>
          </h2>
        </div>

        {/* User Type Tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveUserType(type.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeUserType === type.id
                  ? 'bg-snu-gold text-snu-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`group p-5 glass-light rounded-lg transition-all duration-500 hover:bg-snu-gold ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-snu-gold/20 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-snu-black">
                  <link.icon className="w-6 h-6 text-snu-gold transition-colors group-hover:text-snu-gold" />
                </div>
                <span className="text-white text-sm font-medium transition-colors group-hover:text-snu-black line-clamp-2">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-snu-gold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
