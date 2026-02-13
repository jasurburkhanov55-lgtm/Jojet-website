import { useEffect, useState, useRef } from 'react';
import { ArrowRight, GraduationCap, Users, BookOpen, Globe, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Page = 'home' | 'about' | 'vision' | 'history' | 'academics' | 'graduate' | 'faculties' | 'admissions' | 'how-to-apply' | 'scholarships' | 'student-life' | 'news' | 'contact';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  
  return count;
}

function StatCard({ value, label, suffix = '', isVisible }: { value: number; label: string; suffix?: string; isVisible: boolean }) {
  const count = useAnimatedCounter(value, 2000, isVisible);
  return (
    <div className="text-center p-6">
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home({ onPageChange }: HomeProps) {
  const { t } = useLanguage();
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeUserType, setActiveUserType] = useState('prospective');
  const statsRef = useRef<HTMLDivElement>(null);

  // Stats data
  const stats = [
    { value: 15, suffix: '+', label: t('stats.programs') as string },
    { value: 5000, suffix: '+', label: t('stats.students') as string },
    { value: 300, suffix: '+', label: t('stats.faculty') as string },
    { value: 50, suffix: '+', label: t('stats.countries') as string },
  ];

  // News data
  const newsItems = [
    {
      id: 1,
      image: '/news-1.jpg',
      title: 'JIU Hosts International Academic Conference 2024',
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      image: '/news-2.jpg',
      title: 'Scholarship Awards Ceremony Celebrates Excellence',
      date: '2024-01-10',
      featured: false,
    },
    {
      id: 3,
      image: '/news-3.jpg',
      title: 'New Student Housing Complex Opens',
      date: '2024-01-05',
      featured: false,
    },
    {
      id: 4,
      image: '/news-4.jpg',
      title: 'Cultural Festival Brings Global Community Together',
      date: '2024-01-01',
      featured: false,
    },
  ];

  // Campus slides
  const campusSlides = [
    { image: '/campus-1.jpg', title: 'Graduation Ceremony', description: 'Celebrating our graduates success' },
    { image: '/campus-2.jpg', title: 'University Library', description: 'State-of-the-art learning facilities' },
    { image: '/campus-3.jpg', title: 'Research Laboratories', description: 'Cutting-edge research equipment' },
    { image: '/campus-4.jpg', title: 'Sports Complex', description: 'Modern athletic facilities' },
  ];

  // User types for quick links
  const userTypes = [
    { id: 'prospective', label: t('quickLinks.types.prospective') },
    { id: 'current', label: t('quickLinks.types.current') },
    { id: 'faculty', label: t('quickLinks.types.faculty') },
    { id: 'alumni', label: t('quickLinks.types.alumni') },
  ];

  // Quick links based on user type
  const quickLinksMap: Record<string, Array<{ id: Page; label: string; icon: React.ElementType }>> = {
    prospective: [
      { id: 'admissions', label: t('quickLinks.links.admissions') as string, icon: GraduationCap },
      { id: 'academics', label: t('quickLinks.links.programs') as string, icon: BookOpen },
      { id: 'scholarships', label: t('quickLinks.links.scholarships') as string, icon: Globe },
      { id: 'student-life', label: t('quickLinks.links.housing') as string, icon: MapPin },
    ],
    current: [
      { id: 'admissions', label: t('quickLinks.links.portal') as string, icon: GraduationCap },
      { id: 'academics', label: t('quickLinks.links.library') as string, icon: BookOpen },
      { id: 'academics', label: t('quickLinks.links.calendar') as string, icon: Calendar },
      { id: 'academics', label: t('quickLinks.links.career') as string, icon: Globe },
    ],
    faculty: [
      { id: 'admissions', label: t('quickLinks.links.portal') as string, icon: GraduationCap },
      { id: 'academics', label: 'Research', icon: BookOpen },
      { id: 'academics', label: t('quickLinks.links.calendar') as string, icon: Calendar },
      { id: 'academics', label: t('quickLinks.links.career') as string, icon: Users },
    ],
    alumni: [
      { id: 'academics', label: t('quickLinks.links.career') as string, icon: Globe },
      { id: 'academics', label: t('quickLinks.links.programs') as string, icon: BookOpen },
      { id: 'news', label: 'Alumni News', icon: Calendar },
      { id: 'contact', label: 'Stay Connected', icon: MapPin },
    ],
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance campus slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [campusSlides.length]);

  const handlePageClick = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src="/hero-bg.jpg" 
          alt="Jojet International University" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {t('hero.title') as string}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                {t('hero.subtitle') as string}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handlePageClick('admissions')}
                  className="btn-accent flex items-center gap-2"
                >
                  {t('hero.applyBtn') as string}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handlePageClick('about')}
                  className="px-6 py-2.5 rounded font-medium border-2 border-white text-white hover:bg-white hover:text-jojet-blue transition-colors"
                >
                  {t('hero.learnMoreBtn') as string}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-jojet-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                value={stat.value} 
                suffix={stat.suffix}
                label={stat.label} 
                isVisible={statsVisible} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">{t('news.subtitle') as string}</p>
            <h2 className="section-title">{t('news.title') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured News */}
            <div className="md:col-span-2 lg:row-span-2">
              <div className="news-card h-full min-h-[400px]">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="news-card-image"
                />
                <div className="news-card-overlay" />
                <div className="news-card-content">
                  <span className="inline-block px-3 py-1 bg-jojet-gold text-white text-xs rounded mb-3">
                    Featured
                  </span>
                  <h3 className="text-xl font-bold mb-2">{newsItems[0].title}</h3>
                  <p className="text-white/70 text-sm mb-3">{newsItems[0].date}</p>
                  <button 
                    onClick={() => handlePageClick('news')}
                    className="text-jojet-gold-light hover:text-white flex items-center gap-2 text-sm font-medium"
                  >
                    {t('news.readMore') as string}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Other News */}
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="news-card h-[200px]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-card-image"
                />
                <div className="news-card-overlay" />
                <div className="news-card-content">
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => handlePageClick('news')}
              className="btn-outline"
            >
              {t('news.viewAll') as string}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-jojet-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t('quickLinks.title') as string}
            </h2>
            <p className="text-white/70 text-lg">
              {t('quickLinks.question') as string}
            </p>
          </div>
          
          {/* User Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {userTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveUserType(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeUserType === type.id
                    ? 'bg-jojet-gold text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {type.label as string}
              </button>
            ))}
          </div>
          
          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinksMap[activeUserType]?.map((link) => (
              <button
                key={link.id}
                onClick={() => handlePageClick(link.id)}
                className="quick-link-btn group"
              >
                <div className="quick-link-icon group-hover:bg-jojet-blue group-hover:text-white transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">{t('campus.subtitle') as string}</p>
            <h2 className="section-title">{t('campus.title') as string}</h2>
          </div>
          
          <div className="relative">
            {/* Main Slider */}
            <div className="campus-slide rounded-xl overflow-hidden">
              <img 
                src={campusSlides[currentSlide].image} 
                alt={campusSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="campus-slide-caption">
                <h3 className="text-xl font-bold">{campusSlides[currentSlide].title}</h3>
                <p className="text-white/80">{campusSlides[currentSlide].description}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + campusSlides.length) % campusSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-jojet-blue" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % campusSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-jojet-blue" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {campusSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-jojet-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button className="btn-outline flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t('campus.map') as string}
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {t('campus.tour') as string}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
