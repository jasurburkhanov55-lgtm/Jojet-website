import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.5), 1);
      
      const img = heroRef.current.querySelector('.hero-image') as HTMLElement;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      const overlay = heroRef.current.querySelector('.hero-overlay') as HTMLElement;
      
      if (img) {
        img.style.transform = `scale(${1 + progress * 0.1}) translateY(${progress * 100}px)`;
      }
      if (content) {
        content.style.opacity = `${1 - progress}`;
        content.style.transform = `translateY(${-progress * 50}px)`;
      }
      if (overlay) {
        overlay.style.opacity = `${0.4 + progress * 0.3}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <img
          src="/hero-campus.jpg"
          alt="Seoul National University Campus"
          className="hero-image w-full h-full object-cover gpu-accelerate"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="hero-overlay absolute inset-0 bg-gradient-to-b from-snu-black/30 via-snu-black/50 to-snu-black/80"
        style={{ opacity: 0.4 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-snu-gold/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="w-2 h-2 bg-snu-gold rounded-full animate-pulse" />
            <span className="text-sm text-white/80">Established 1946</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6">
            <span 
              className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '900ms', fontFamily: 'Playfair Display, serif' }}
            >
              Shaping the Future
            </span>
            <span 
              className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-gradient transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '1000ms', fontFamily: 'Playfair Display, serif' }}
            >
              of Knowledge
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Seoul National University — Where Excellence Meets Innovation. 
            Join Asia's leading institution in advancing human knowledge and shaping global leaders.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <a 
              href="#programs"
              className="btn-gold rounded-sm flex items-center gap-2 group"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="btn-outline-gold rounded-sm flex items-center gap-2"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              Virtual Tour
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1600ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-snu-gold rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Stats */}
      <div 
        className={`absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: '1500ms' }}
      >
        {[
          { value: '#1', label: 'In Asia' },
          { value: '76', label: 'Global Rank' },
          { value: '29', label: 'Nobel Laureates' },
        ].map((stat, index) => (
          <div key={index} className="text-right">
            <div className="text-2xl font-bold text-snu-gold">{stat.value}</div>
            <div className="text-xs text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
