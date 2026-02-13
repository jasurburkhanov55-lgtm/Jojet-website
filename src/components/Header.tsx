import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Page = 'home' | 'about' | 'vision' | 'history' | 'academics' | 'graduate' | 'faculties' | 'admissions' | 'how-to-apply' | 'scholarships' | 'student-life' | 'news' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (page: Page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home' as Page, label: String(t('header.nav.home')) },
    { 
      id: 'about' as Page, 
      label: String(t('header.nav.about')),
      dropdown: [
        { id: 'about' as Page, label: String(t('header.dropdowns.about.overview')) },
        { id: 'vision' as Page, label: String(t('header.dropdowns.about.vision')) },
        { id: 'history' as Page, label: String(t('header.dropdowns.about.history')) },
      ]
    },
    { 
      id: 'academics' as Page, 
      label: String(t('header.nav.academics')),
      dropdown: [
        { id: 'academics' as Page, label: String(t('header.dropdowns.academics.undergraduate')) },
        { id: 'graduate' as Page, label: String(t('header.dropdowns.academics.graduate')) },
        { id: 'faculties' as Page, label: String(t('header.dropdowns.academics.faculties')) },
      ]
    },
    { 
      id: 'admissions' as Page, 
      label: String(t('header.nav.admissions')),
      dropdown: [
        { id: 'admissions' as Page, label: String(t('header.dropdowns.admissions.whyJIU')) },
        { id: 'how-to-apply' as Page, label: String(t('header.dropdowns.admissions.howToApply')) },
        { id: 'scholarships' as Page, label: String(t('header.dropdowns.admissions.scholarships')) },
      ]
    },
    { id: 'student-life' as Page, label: String(t('header.nav.studentLife')) },
    { id: 'news' as Page, label: String(t('header.nav.news')) },
    { id: 'contact' as Page, label: String(t('header.nav.contact')) },
  ];

  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'uz' as const, label: 'UZ' },
    { code: 'ru' as const, label: 'RU' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-jojet-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-jojet-gold-light transition-colors">
                {String(t('header.topBar.college'))}
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-jojet-gold-light transition-colors">
                {String(t('header.topBar.university'))}
              </a>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href="#" className="hover:text-jojet-gold-light transition-colors hidden sm:block">
                {String(t('header.topBar.programs'))}
              </a>
              <a href="#" className="hover:text-jojet-gold-light transition-colors hidden sm:block">
                {String(t('header.topBar.international'))}
              </a>
              {/* Language Switcher */}
              <div className="flex items-center gap-1 border-l border-white/30 pl-4">
                <Globe className="w-4 h-4" />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-jojet-gold text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-header' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button 
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-3"
            >
              <img 
                src="/logo.png" 
                alt="Jojet International University" 
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden sm:block text-left">
                <div className="text-jojet-blue font-bold text-sm md:text-base leading-tight">
                  JOJET
                </div>
                <div className="text-jojet-gold text-xs font-medium">
                  INTERNATIONAL
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handlePageClick(item.id)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      currentPage === item.id || currentPage.startsWith(item.id)
                        ? 'text-jojet-blue'
                        : 'text-gray-700 hover:text-jojet-blue'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 z-50 border-t-2 border-jojet-blue">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handlePageClick(subItem.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-jojet-gray hover:text-jojet-blue transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => handlePageClick('admissions')}
                className="btn-primary"
              >
                {String(t('header.topBar.apply'))}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-jojet-blue"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ top: '88px' }}>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handlePageClick(item.id)}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-jojet-blue text-white'
                    : 'text-gray-700 hover:bg-jojet-gray'
                }`}
              >
                {item.label}
              </button>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handlePageClick(subItem.id)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-jojet-blue"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => handlePageClick('admissions')}
              className="w-full btn-primary"
            >
              {String(t('header.topBar.apply'))}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
