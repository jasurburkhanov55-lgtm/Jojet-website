import { BookOpen, GraduationCap, Microscope, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Academics() {
  const { t } = useLanguage();

  const undergraduatePrograms = [
    {
      name: 'Computer Science',
      duration: '4 years',
      description: 'Develop expertise in software engineering, AI, and data science',
      icon: Microscope,
    },
    {
      name: 'Business Administration',
      duration: '4 years',
      description: 'Build skills in management, finance, and entrepreneurship',
      icon: Users,
    },
    {
      name: 'Mechanical Engineering',
      duration: '4 years',
      description: 'Master engineering principles and modern manufacturing',
      icon: Microscope,
    },
    {
      name: 'Medicine',
      duration: '6 years',
      description: 'Comprehensive medical education with clinical training',
      icon: Users,
    },
    {
      name: 'Law',
      duration: '4 years',
      description: 'Study legal systems and develop analytical skills',
      icon: BookOpen,
    },
    {
      name: 'International Relations',
      duration: '4 years',
      description: 'Explore global politics, diplomacy, and economics',
      icon: Users,
    },
  ];

  const graduatePrograms = [
    {
      name: 'MBA',
      duration: '2 years',
      description: 'Advanced business management and leadership training',
    },
    {
      name: 'MSc Computer Science',
      duration: '2 years',
      description: 'Specialized study in advanced computing topics',
    },
    {
      name: 'MSc Engineering',
      duration: '2 years',
      description: 'Deep dive into engineering research and innovation',
    },
    {
      name: 'PhD Programs',
      duration: '3-4 years',
      description: 'Doctoral research across various disciplines',
    },
  ];

  const faculties = (t('pages.academics.faculties.list') as string[]) || [
    'Faculty of Engineering',
    'Faculty of Business',
    'Faculty of Medicine',
    'Faculty of Law',
    'Faculty of Arts & Sciences',
  ];

  const researchAreas = [
    'Artificial Intelligence & Machine Learning',
    'Sustainable Energy Solutions',
    'Biomedical Research',
    'Economic Development',
    'Social Innovation',
    'Climate Change Studies',
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{t('header.nav.academics') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.academics.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.academics.subtitle') as string}
          </p>
        </div>
      </div>

      {/* Undergraduate Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Bachelor Degrees</p>
            <h2 className="section-title">{t('pages.academics.undergraduate.title') as string}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t('pages.academics.undergraduate.description') as string}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergraduatePrograms.map((program, index) => (
              <div key={index} className="card p-6 group hover:border-jojet-blue transition-colors">
                <div className="w-12 h-12 bg-jojet-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-jojet-blue group-hover:text-white transition-colors">
                  <program.icon className="w-6 h-6 text-jojet-blue group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-jojet-gold text-sm mb-3">{program.duration}</p>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <button className="text-jojet-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Advanced Degrees</p>
            <h2 className="section-title">{t('pages.academics.graduate.title') as string}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t('pages.academics.graduate.description') as string}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {graduatePrograms.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-jojet-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-jojet-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{program.name}</h3>
                  <p className="text-jojet-gold text-sm mb-2">{program.duration}</p>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Academic Departments</p>
            <h2 className="section-title">{t('pages.academics.faculties.title') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {faculties.map((faculty, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-jojet-gray rounded-lg hover:bg-jojet-blue hover:text-white transition-colors group cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-jojet-blue group-hover:text-white flex-shrink-0" />
                <span className="font-medium">{faculty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 bg-jojet-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-jojet-gold-light text-sm uppercase tracking-wider mb-2">Research Excellence</p>
              <h2 className="text-3xl font-bold text-white mb-6">Advancing Knowledge</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                At Jojet International University, research is at the heart of our academic mission. 
                Our faculty and students are engaged in cutting-edge research across multiple disciplines, 
                contributing to global knowledge and addressing real-world challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <Microscope className="w-4 h-4 text-jojet-gold-light" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/campus-3.jpg" 
                alt="Research at JIU" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-jojet-gold text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">150+</div>
                <div className="text-sm">Research Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jojet-gray rounded-2xl p-8 md:p-12 text-center">
            <BookOpen className="w-12 h-12 text-jojet-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Stay informed about important academic dates, registration periods, 
              examination schedules, and holidays throughout the academic year.
            </p>
            <button className="btn-primary">
              View Academic Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
