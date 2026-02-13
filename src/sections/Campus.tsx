import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Compass } from 'lucide-react';

const campusSlides = [
  {
    id: 1,
    image: '/campus-1.jpg',
    title: 'Seoul National University Museum Of Art',
    description: 'A cultural hub showcasing contemporary and traditional Korean art',
    location: 'Gwanak Campus',
  },
  {
    id: 2,
    image: '/campus-2.jpg',
    title: 'Gwanak Campus Main Gate',
    description: 'The iconic entrance welcoming students and visitors from around the world',
    location: 'Gwanak Campus',
  },
  {
    id: 3,
    image: '/campus-3.jpg',
    title: 'Yeongeon Medical Campus',
    description: 'State-of-the-art facilities for medical education and research',
    location: 'Yeongeon Campus',
  },
  {
    id: 4,
    image: '/campus-4.jpg',
    title: 'Pyeongchang Campus',
    description: 'A serene mountain campus dedicated to sports science and research',
    location: 'Pyeongchang Campus',
  },
];

export default function Campus() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % campusSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + campusSlides.length) % campusSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isVisible, nextSlide]);

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
      id="campus"
      className="relative py-24 bg-snu-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              SNU <span className="text-gold-gradient">CAMPUS</span>
            </h2>
            <p 
              className={`text-white/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Explore our world-class facilities across four campuses
            </p>
          </div>
          <div 
            className={`flex gap-4 mt-4 sm:mt-0 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-sm text-white hover:text-snu-gold transition-colors"
            >
              <MapPin className="w-4 h-4" />
              MAP
            </a>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-sm text-white hover:text-snu-gold transition-colors"
            >
              <Compass className="w-4 h-4" />
              TOURS
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div 
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            {campusSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover ${
                    index === currentSlide ? 'animate-ken-burns' : ''
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-snu-black via-snu-black/30 to-transparent" />
              </div>
            ))}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="glass rounded-lg p-6 max-w-xl border-l-4 border-snu-gold">
                <div className="flex items-center gap-2 text-snu-gold text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {campusSlides[currentSlide].location}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {campusSlides[currentSlide].title}
                </h3>
                <p className="text-white/70 text-sm">
                  {campusSlides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-snu-gold hover:text-snu-black transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-snu-gold hover:text-snu-black transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div 
                className="h-full bg-snu-gold transition-all duration-300"
                style={{ 
                  width: `${((currentSlide + 1) / campusSlides.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {campusSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-14 rounded overflow-hidden transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-2 ring-snu-gold opacity-100' 
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
