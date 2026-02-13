import { CheckCircle, Calendar, FileText, Award, ArrowRight, Clock, UserCheck, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Admissions() {
  const { t } = useLanguage();

  const steps = (t('pages.admissions.howToApply.steps') as string[]) || [
    'Complete the online application form',
    'Submit required documents',
    'Pay application fee',
    'Attend entrance examination (if required)',
    'Receive admission decision',
  ];

  const requirements = [
    {
      level: 'Undergraduate',
      icon: BookOpen,
      items: [
        t('pages.admissions.requirements.undergraduate') as string,
        'Minimum GPA 3.0 or equivalent',
        t('pages.admissions.requirements.english') as string,
        'Letter of recommendation',
      ],
    },
    {
      level: 'Graduate',
      icon: UserCheck,
      items: [
        t('pages.admissions.requirements.graduate') as string,
        'Minimum GPA 3.2 in undergraduate studies',
        'GRE/GMAT scores (if applicable)',
        'Two letters of recommendation',
        'Statement of purpose',
      ],
    },
  ];

  const deadlines = [
    {
      semester: 'Fall Semester 2024',
      date: 'July 15, 2024',
      icon: Calendar,
    },
    {
      semester: 'Spring Semester 2025',
      date: 'December 15, 2024',
      icon: Calendar,
    },
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      coverage: 'Up to 100% tuition',
      criteria: 'Outstanding academic achievement',
    },
    {
      name: 'International Student Scholarship',
      coverage: '50% tuition',
      criteria: 'For international students with excellent records',
    },
    {
      name: 'Research Fellowship',
      coverage: 'Full tuition + stipend',
      criteria: 'For graduate research students',
    },
    {
      name: 'Sports Scholarship',
      coverage: 'Up to 75% tuition',
      criteria: 'Exceptional athletic ability',
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
            <span className="text-white">{t('header.nav.admissions') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.admissions.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.admissions.subtitle') as string}
          </p>
        </div>
      </div>

      {/* How to Apply Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Application Process</p>
            <h2 className="section-title">{t('pages.admissions.howToApply.title') as string}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-jojet-blue/20 hidden md:block" />
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-jojet-blue rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div className="bg-jojet-gray p-6 rounded-xl flex-1">
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-accent flex items-center gap-2 mx-auto">
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What You Need</p>
            <h2 className="section-title">{t('pages.admissions.requirements.title') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-jojet-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <req.icon className="w-7 h-7 text-jojet-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{req.level}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jojet-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Mark Your Calendar</p>
            <h2 className="section-title">{t('pages.admissions.deadlines.title') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {deadlines.map((deadline, index) => (
              <div key={index} className="bg-jojet-blue text-white p-8 rounded-xl text-center">
                <Clock className="w-12 h-12 text-jojet-gold-light mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{deadline.semester}</h3>
                <p className="text-3xl font-bold text-jojet-gold-light">{deadline.date}</p>
                <p className="text-white/70 mt-2">Application Deadline</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Financial Support</p>
            <h2 className="section-title">{t('header.dropdowns.admissions.scholarships') as string}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We offer various scholarship opportunities to support talented students 
              in achieving their academic goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Award className="w-10 h-10 text-jojet-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{scholarship.name}</h3>
                <p className="text-jojet-blue font-semibold mb-2">{scholarship.coverage}</p>
                <p className="text-gray-600 text-sm">{scholarship.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jojet-blue rounded-2xl p-8 md:p-12 text-center">
            <FileText className="w-12 h-12 text-jojet-gold-light mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Take the first step towards a world-class education. Our admissions team 
              is here to guide you through the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-accent flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-2.5 rounded font-medium border-2 border-white text-white hover:bg-white hover:text-jojet-blue transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
