import { Target, Eye, Users, Award, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and research',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to advance knowledge',
    },
    {
      icon: Users,
      title: 'Diversity',
      description: 'Creating an inclusive environment for all backgrounds',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Upholding ethical standards in all our endeavors',
    },
  ];

  const timeline = [
    {
      year: '1995',
      title: 'Foundation',
      description: 'Jojet International University was established with a vision to transform education',
    },
    {
      year: '2000',
      title: 'First Graduation',
      description: 'Our first cohort of students graduated, marking a significant milestone',
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Opened the East Campus to accommodate growing student population',
    },
    {
      year: '2010',
      title: 'Research Center',
      description: 'Established the Center for Advanced Research and Innovation',
    },
    {
      year: '2015',
      title: 'International Recognition',
      description: 'Achieved international accreditation and global partnerships',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched comprehensive online learning platform',
    },
    {
      year: '2024',
      title: 'Global Leader',
      description: 'Recognized as a leading international university in the region',
    },
  ];

  const leadership = [
    {
      name: 'Dr. John Smith',
      position: 'President',
      image: '/campus-1.jpg',
    },
    {
      name: 'Dr. Sarah Johnson',
      position: 'Vice President for Academic Affairs',
      image: '/campus-2.jpg',
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Vice President for Research',
      image: '/campus-3.jpg',
    },
    {
      name: 'Dr. Emily Davis',
      position: 'Vice President for Student Affairs',
      image: '/campus-4.jpg',
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
            <span className="text-white">{t('pages.about.title') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.about.title') as string}</h1>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">{t('pages.about.overview.title') as string}</p>
              <h2 className="section-title">Welcome to Jojet International University</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('pages.about.overview.content') as string}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence is reflected in our world-class faculty, 
                state-of-the-art facilities, and diverse student body representing over 
                50 countries. We offer a wide range of undergraduate, graduate, and 
                doctoral programs designed to prepare students for success in a rapidly 
                changing global landscape.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/hero-bg.jpg" 
                alt="Jojet International University Campus" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-jojet-blue text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">29+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">{t('pages.about.vision.title') as string}</p>
            <h2 className="section-title">Our Guiding Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-jojet-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-jojet-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('pages.about.vision.visionTitle') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('pages.about.vision.visionContent') as string}
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-jojet-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-jojet-gold" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('pages.about.vision.missionTitle') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('pages.about.vision.missionContent') as string}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-jojet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-jojet-blue" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">{t('pages.about.history.title') as string}</p>
            <h2 className="section-title">Our Journey</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="inline-block px-3 py-1 bg-jojet-gold text-white text-sm font-medium rounded mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Meet Our Team</p>
            <h2 className="section-title">University Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
                  <p className="text-jojet-gold text-sm">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="py-16 bg-jojet-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-jojet-gold-light text-sm uppercase tracking-wider mb-2">Our Locations</p>
            <h2 className="text-3xl font-bold text-white">Campuses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Building2 className="w-10 h-10 text-jojet-gold-light mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {(t('footer.campuses.main.name') as string)}
              </h3>
              <p className="text-white/70 mb-4">
                {(t('footer.campuses.main.address') as string)}
              </p>
              <p className="text-white/70 text-sm">
                Tel: {(t('footer.campuses.main.phone') as string)}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Building2 className="w-10 h-10 text-jojet-gold-light mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {(t('footer.campuses.east.name') as string)}
              </h3>
              <p className="text-white/70 mb-4">
                {(t('footer.campuses.east.address') as string)}
              </p>
              <p className="text-white/70 text-sm">
                Tel: {(t('footer.campuses.east.phone') as string)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
