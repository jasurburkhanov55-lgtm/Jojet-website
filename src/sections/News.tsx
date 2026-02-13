import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Play } from 'lucide-react';

const featuredNews = [
  {
    id: 1,
    image: '/news-1.jpg',
    category: 'SNU Catch',
    title: 'Why Are Respected Adults Disappearing from Our Society?',
    date: 'Jan 15, 2026',
    isVideo: true,
  },
  {
    id: 2,
    image: '/news-2.jpg',
    category: 'Research',
    title: 'Seoul National University Secures Its First Horizon Europe Project',
    date: 'Jan 12, 2026',
    isVideo: false,
  },
];

const newsList = [
  {
    id: 3,
    category: 'Arts',
    title: 'From Gayageum to AI: The Evolution of Contemporary Korean Music',
    date: 'Jan 10, 2026',
  },
  {
    id: 4,
    category: 'Environment',
    title: 'Bees Living on the Campus Rooftop?',
    date: 'Jan 8, 2026',
  },
  {
    id: 5,
    category: 'SNU Catch',
    title: 'Why Has Seoul Become a City for Survival Rather Than Living?',
    date: 'Jan 5, 2026',
    isVideo: true,
  },
];

export default function News() {
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
      id="news"
      className="relative py-24 bg-snu-black"
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
              SNU <span className="text-gold-gradient">TODAY</span>
            </h2>
            <p 
              className={`text-white/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Latest news and stories from our community
            </p>
          </div>
          <a 
            href="#"
            className={`mt-4 sm:mt-0 inline-flex items-center gap-2 text-snu-gold hover:text-snu-light-gold transition-all duration-300 group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            View All News
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News Cards */}
          {featuredNews.map((news, index) => (
            <a
              key={news.id}
              href="#"
              className={`group relative block overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(news.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === news.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-snu-black via-snu-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === news.id ? 'opacity-90' : 'opacity-70'
                  }`}
                />
                
                {/* Video Play Button */}
                {news.isVideo && (
                  <div className="absolute top-4 left-4 w-12 h-12 bg-snu-gold rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-snu-black ml-1" />
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-snu-gold text-snu-black text-xs font-semibold rounded-sm mb-3">
                    {news.category}
                  </span>
                  <h3 
                    className={`text-xl sm:text-2xl font-bold text-white mb-2 transition-transform duration-500 ${
                      hoveredCard === news.id ? 'translate-y-0' : 'translate-y-0'
                    }`}
                  >
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div 
                  className={`absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === news.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* News List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsList.map((news, index) => (
            <a
              key={news.id}
              href="#"
              className={`group p-6 glass-light rounded-lg transition-all duration-500 hover:bg-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block px-2 py-1 bg-snu-gold/20 text-snu-gold text-xs font-semibold rounded">
                  {news.category}
                </span>
                {news.isVideo && (
                  <Play className="w-4 h-4 text-snu-gold" />
                )}
              </div>
              <h4 className="text-white font-semibold mb-3 line-clamp-2 group-hover:text-snu-gold transition-colors">
                {news.title}
              </h4>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Calendar className="w-3 h-3" />
                {news.date}
              </div>
              <div className="mt-4 flex items-center gap-1 text-snu-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
