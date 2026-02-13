import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Microscope, ExternalLink } from 'lucide-react';

const researchItems = [
  {
    id: 1,
    image: '/research-1.jpg',
    title: 'Multiple protein structure alignment at scale with FoldMason',
    category: 'Bioinformatics',
    description: 'Revolutionary algorithm enables rapid comparison of thousands of protein structures.',
  },
  {
    id: 2,
    image: '/research-2.jpg',
    title: 'AI-Powered Climate Change Prediction Models',
    category: 'Climate Science',
    description: 'Machine learning models predict climate patterns with unprecedented accuracy.',
  },
  {
    id: 3,
    image: '/research-3.jpg',
    title: 'Quantum Computing Breakthroughs in Materials Science',
    category: 'Quantum Physics',
    description: 'New quantum algorithms accelerate materials discovery by 1000x.',
  },
  {
    id: 4,
    image: '/research-4.jpg',
    title: 'Revolutionary Cancer Treatment Using Nanotechnology',
    category: 'Medical Science',
    description: 'Targeted nanoparticles deliver drugs directly to cancer cells.',
  },
];

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="research"
      className="relative py-24 bg-snu-dark-gray overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-snu-black via-snu-dark-gray to-snu-black opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <div 
              className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Microscope className="w-5 h-5 text-snu-gold" />
              <span className="text-snu-gold text-sm font-semibold uppercase tracking-wider">Discover</span>
            </div>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms', fontFamily: 'Playfair Display, serif' }}
            >
              Research <span className="text-gold-gradient">Highlights</span>
            </h2>
            <p 
              className={`text-white/50 max-w-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Pioneering discoveries that shape the future of science and technology
            </p>
          </div>
          <a 
            href="#"
            className={`mt-4 sm:mt-0 inline-flex items-center gap-2 text-snu-gold hover:text-snu-light-gold transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            View All Research
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchItems.map((item, index) => (
            <a
              key={item.id}
              href="#"
              className={`group relative block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                transform: isVisible 
                  ? hoveredCard === item.id 
                    ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px)' 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                  : 'perspective(1000px) rotateX(10deg) rotateY(-5deg) translateY(30px)',
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-snu-medium-gray">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === item.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-snu-black via-snu-black/30 to-transparent transition-opacity duration-500 ${
                      hoveredCard === item.id ? 'opacity-80' : 'opacity-60'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-snu-gold/20 text-snu-gold text-xs font-semibold rounded mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-snu-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-snu-gold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Border Glow */}
                <div 
                  className={`absolute inset-0 rounded-lg border-2 border-snu-gold/0 transition-all duration-500 pointer-events-none ${
                    hoveredCard === item.id ? 'border-snu-gold/50 shadow-gold' : ''
                  }`}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Stats Bar */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 glass rounded-lg transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            { value: '3,500+', label: 'Research Projects' },
            { value: '450', label: 'Research Centers' },
            { value: '$850M', label: 'Research Funding' },
            { value: '12,000+', label: 'Publications/Year' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-snu-gold mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
