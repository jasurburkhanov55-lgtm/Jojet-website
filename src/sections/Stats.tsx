import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, BookOpen, Building2 } from 'lucide-react';

const stats = [
  { 
    icon: Building2, 
    value: 16, 
    suffix: '', 
    label: 'Colleges',
    sublabel: '11 Professional Graduate Schools'
  },
  { 
    icon: GraduationCap, 
    value: 27, 
    suffix: '', 
    label: 'Colleges & Schools',
    sublabel: 'Undergraduate & Graduate'
  },
  { 
    icon: Users, 
    value: 6397, 
    suffix: '', 
    label: 'Faculty Members',
    sublabel: 'World-class Educators'
  },
  { 
    icon: BookOpen, 
    value: 31544, 
    suffix: '', 
    label: 'Students',
    sublabel: 'From 100+ Countries'
  },
];

function AnimatedCounter({ 
  value, 
  suffix = '', 
  isVisible 
}: { 
  value: number; 
  suffix?: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A227 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gold Accent Line */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-snu-gold to-transparent transition-transform duration-1000 ${
          isVisible ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            SNU by the <span className="text-gold-gradient">Numbers</span>
          </h2>
          <div 
            className={`w-24 h-1 bg-snu-gold mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 glass-light rounded-lg transition-all duration-700 hover:bg-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
                transform: isVisible ? 'perspective(1000px) rotateY(-5deg)' : 'perspective(1000px) rotateY(-15deg) translateY(30px)',
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <stat.icon className="w-10 h-10 text-snu-gold transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Value */}
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-snu-gold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/50">
                {stat.sublabel}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stat */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-4 glass-light px-8 py-4 rounded-full">
            <BookOpen className="w-6 h-6 text-snu-gold" />
            <div>
              <span className="text-2xl font-bold text-white">
                <AnimatedCounter value={5477022} suffix="" isVisible={isVisible} />
              </span>
              <span className="text-white/70 ml-2">Library Holdings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
