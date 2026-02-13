import { Home, Users, Calendar, Trophy, Heart, MapPin, Utensils, Wifi, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function StudentLife() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: Home,
      title: 'Student Housing',
      description: 'Modern dormitories with comfortable living spaces',
    },
    {
      icon: Utensils,
      title: 'Dining Halls',
      description: 'Multiple dining options with diverse cuisines',
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Gym, swimming pool, and sports fields',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Campus-wide WiFi coverage',
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock campus security',
    },
    {
      icon: Heart,
      title: 'Health Center',
      description: 'Medical services for students',
    },
  ];

  const clubs = [
    { name: 'Debate Club', category: 'Academic' },
    { name: 'Robotics Club', category: 'Technology' },
    { name: 'Music Society', category: 'Arts' },
    { name: 'Sports Club', category: 'Athletics' },
    { name: 'Volunteer Group', category: 'Community' },
    { name: 'International Students', category: 'Cultural' },
    { name: 'Photography Club', category: 'Arts' },
    { name: 'Entrepreneurship Club', category: 'Business' },
  ];

  const events = [
    {
      title: 'Welcome Week',
      date: 'September 1-7',
      description: 'Orientation activities for new students',
    },
    {
      title: 'International Culture Day',
      date: 'October 15',
      description: 'Celebrating diversity on campus',
    },
    {
      title: 'Sports Tournament',
      date: 'November 10-15',
      description: 'Inter-faculty sports competition',
    },
    {
      title: 'Spring Festival',
      date: 'March 20',
      description: 'Annual campus celebration',
    },
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{t('header.nav.studentLife') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.studentLife.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.studentLife.subtitle') as string}
          </p>
        </div>
      </div>

      {/* Campus Life Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Experience JIU</p>
              <h2 className="section-title">{t('pages.studentLife.campus.title') as string}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('pages.studentLife.campus.content') as string}
              </p>
              <p className="text-gray-600 leading-relaxed">
                From state-of-the-art facilities to vibrant student organizations, 
                JIU offers a rich and diverse campus experience. Our students enjoy 
                access to world-class resources while building lifelong friendships 
                and professional networks.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/campus-1.jpg" alt="Campus Life" className="rounded-xl shadow-lg" />
              <img src="/campus-2.jpg" alt="Student Activities" className="rounded-xl shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Campus Amenities</p>
            <h2 className="section-title">World-Class Facilities</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-jojet-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <facility.icon className="w-6 h-6 text-jojet-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/news-3.jpg" alt="Student Housing" className="rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-subtitle">Accommodation</p>
              <h2 className="section-title">{t('pages.studentLife.housing.title') as string}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('pages.studentLife.housing.content') as string}
              </p>
              <ul className="space-y-3">
                {[
                  'Single and shared room options',
                  'Fully furnished accommodations',
                  'Common areas for socializing',
                  'Laundry facilities on-site',
                  'Study rooms and quiet spaces',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-jojet-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Clubs Section */}
      <section className="py-16 bg-jojet-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-jojet-gold-light text-sm uppercase tracking-wider mb-2">Get Involved</p>
            <h2 className="text-3xl font-bold text-white">Student Organizations</h2>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              {t('pages.studentLife.activities.content') as string}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
                <Users className="w-8 h-8 text-jojet-gold-light mx-auto mb-2" />
                <h3 className="text-white font-medium text-sm">{club.name}</h3>
                <p className="text-white/60 text-xs">{club.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Campus Events</p>
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="bg-jojet-gray p-6 rounded-xl flex items-start gap-4">
                <div className="w-14 h-14 bg-jojet-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-jojet-gold text-sm font-medium">{event.date}</span>
                  <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">We're Here to Help</p>
            <h2 className="section-title">{t('pages.studentLife.support.title') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Heart className="w-10 h-10 text-jojet-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Counseling Services</h3>
              <p className="text-gray-600 text-sm">Professional mental health support for all students</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="w-10 h-10 text-jojet-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Academic Advising</h3>
              <p className="text-gray-600 text-sm">Guidance for course selection and career planning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Trophy className="w-10 h-10 text-jojet-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Career Services</h3>
              <p className="text-gray-600 text-sm">Job placement and internship opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
