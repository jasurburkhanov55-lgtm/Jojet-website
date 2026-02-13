import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Page = 'home' | 'about' | 'vision' | 'history' | 'academics' | 'graduate' | 'faculties' | 'admissions' | 'how-to-apply' | 'scholarships' | 'student-life' | 'news' | 'contact';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const { t } = useLanguage();

  const handlePageClick = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'about' as Page, label: String(t('header.nav.about')) },
    { id: 'academics' as Page, label: String(t('header.nav.academics')) },
    { id: 'admissions' as Page, label: String(t('header.nav.admissions')) },
    { id: 'student-life' as Page, label: String(t('header.nav.studentLife')) },
    { id: 'news' as Page, label: String(t('header.nav.news')) },
    { id: 'contact' as Page, label: String(t('header.nav.contact')) },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-3 mb-4"
            >
              <img 
                src="/logo.png" 
                alt="Jojet International University" 
                className="h-16 w-auto"
              />
            </button>
            <p className="text-gray-400 text-sm mb-4">
              {String(t('pages.about.overview.content'))}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-jojet-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jojet-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handlePageClick(link.id)}
                    className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Campus */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jojet-gold-light">
              {String(t('footer.campuses.main.name'))}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-jojet-blue flex-shrink-0 mt-0.5" />
                <span>{String(t('footer.campuses.main.address'))}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-jojet-blue flex-shrink-0" />
                <span>{String(t('footer.campuses.main.phone'))}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-jojet-blue flex-shrink-0" />
                <span>{String(t('footer.campuses.main.email'))}</span>
              </li>
            </ul>
          </div>

          {/* East Campus */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-jojet-gold-light">
              {String(t('footer.campuses.east.name'))}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-jojet-blue flex-shrink-0 mt-0.5" />
                <span>{String(t('footer.campuses.east.address'))}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-jojet-blue flex-shrink-0" />
                <span>{String(t('footer.campuses.east.phone'))}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {String(t('footer.copyright'))}
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handlePageClick('contact')}
                className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm"
              >
                {String(t('footer.links.contact'))}
              </button>
              <a href="#" className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                {String(t('footer.links.sitemap'))}
              </a>
              <a href="#" className="text-gray-400 hover:text-jojet-gold-light transition-colors text-sm">
                {String(t('footer.links.privacy'))}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
