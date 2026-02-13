import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      image: '/news-1.jpg',
      title: 'JIU Hosts International Academic Conference 2024',
      excerpt: 'Leading scholars from around the world gathered at JIU to discuss the future of education and research.',
      date: 'January 15, 2024',
      category: 'Events',
    },
    {
      id: 2,
      image: '/news-2.jpg',
      title: 'Scholarship Awards Ceremony Celebrates Excellence',
      excerpt: 'Over 200 students received merit-based scholarships for their outstanding academic achievements.',
      date: 'January 10, 2024',
      category: 'Awards',
    },
    {
      id: 3,
      image: '/news-3.jpg',
      title: 'New Student Housing Complex Opens',
      excerpt: 'State-of-the-art accommodation facility adds 500 beds to campus housing capacity.',
      date: 'January 5, 2024',
      category: 'Campus',
    },
    {
      id: 4,
      image: '/news-4.jpg',
      title: 'Cultural Festival Brings Global Community Together',
      excerpt: 'Students from 30 countries showcased their traditions at the annual International Culture Day.',
      date: 'January 1, 2024',
      category: 'Student Life',
    },
    {
      id: 5,
      image: '/campus-1.jpg',
      title: 'Research Grant Secured for Renewable Energy Project',
      excerpt: 'JIU engineering faculty awarded $2M grant for sustainable energy research initiative.',
      date: 'December 28, 2023',
      category: 'Research',
    },
    {
      id: 6,
      image: '/campus-2.jpg',
      title: 'Library Extends Hours for Final Exams',
      excerpt: '24/7 study access provided to support students during examination period.',
      date: 'December 20, 2023',
      category: 'Academics',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Spring Semester Orientation',
      date: 'February 1, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      description: 'Welcome event for new and returning students',
    },
    {
      title: 'Career Fair 2024',
      date: 'February 15, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'Student Center',
      description: 'Meet with top employers and explore career opportunities',
    },
    {
      title: 'Research Symposium',
      date: 'March 5, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Science Building',
      description: 'Showcase of student and faculty research projects',
    },
    {
      title: 'Alumni Networking Night',
      date: 'March 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Grand Hall',
      description: 'Connect with JIU alumni and expand your professional network',
    },
  ];

  const categories = ['All', 'Events', 'Academics', 'Research', 'Campus', 'Student Life', 'Awards'];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{t('header.nav.news') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.news.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.news.subtitle') as string}
          </p>
        </div>
      </div>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="section-title mb-4 md:mb-0">{t('pages.news.latestNews') as string}</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-jojet-blue text-white'
                      : 'bg-jojet-gray text-gray-700 hover:bg-jojet-blue hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="card group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-jojet-blue/10 text-jojet-blue text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-jojet-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <button className="text-jojet-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-lg bg-jojet-blue text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-jojet-gray text-gray-700 hover:bg-jojet-blue hover:text-white flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-jojet-gray text-gray-700 hover:bg-jojet-blue hover:text-white flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg bg-jojet-gray text-gray-700 hover:bg-jojet-blue hover:text-white flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Mark Your Calendar</p>
            <h2 className="section-title">{t('pages.news.upcomingEvents') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-jojet-blue rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jojet-blue rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest news, events, 
              and updates from Jojet International University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
