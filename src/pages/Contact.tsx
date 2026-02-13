import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: (t('pages.contact.info.address') as string),
      content: (t('footer.campuses.main.address') as string),
    },
    {
      icon: Phone,
      title: (t('pages.contact.info.phone') as string),
      content: (t('footer.campuses.main.phone') as string),
    },
    {
      icon: Mail,
      title: (t('pages.contact.info.email') as string),
      content: (t('footer.campuses.main.email') as string),
    },
    {
      icon: Clock,
      title: (t('pages.contact.info.hours') as string),
      content: 'Monday - Friday: 8:00 AM - 6:00 PM',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{t('header.nav.contact') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.contact.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.contact.subtitle') as string}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{t('pages.contact.form.name') as string}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('pages.contact.form.email') as string}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{t('pages.contact.form.phone') as string}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+998 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('pages.contact.form.subject') as string}</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="programs">Program Information</option>
                        <option value="scholarships">Scholarships</option>
                        <option value="visit">Campus Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">{t('pages.contact.form.message') as string}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('pages.contact.form.submit') as string}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t('pages.contact.info.title') as string}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-jojet-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-jojet-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-jojet-gray rounded-lg flex items-center justify-center text-gray-600 hover:bg-jojet-blue hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Map Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Locations</p>
            <h2 className="section-title">Visit Our Campuses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Campus */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map Placeholder</p>
                  <p className="text-sm">Main Campus Location</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {(t('footer.campuses.main.name') as string)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {(t('footer.campuses.main.address') as string)}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {(t('footer.campuses.main.phone') as string)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {(t('footer.campuses.main.email') as string)}
                  </span>
                </div>
              </div>
            </div>

            {/* East Campus */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map Placeholder</p>
                  <p className="text-sm">East Campus Location</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {(t('footer.campuses.east.name') as string)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {(t('footer.campuses.east.address') as string)}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {(t('footer.campuses.east.phone') as string)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'How do I apply to Jojet International University?',
                a: 'You can apply online through our admissions portal. Complete the application form, submit required documents, and pay the application fee.',
              },
              {
                q: 'What are the admission requirements?',
                a: 'Requirements vary by program. Generally, you need a high school diploma for undergraduate programs and a bachelor\'s degree for graduate programs.',
              },
              {
                q: 'Are scholarships available?',
                a: 'Yes, we offer various merit-based and need-based scholarships. Visit our scholarships page for more information.',
              },
              {
                q: 'Can international students apply?',
                a: 'Absolutely! We welcome students from all over the world. International students should meet English language requirements.',
              },
              {
                q: 'How can I schedule a campus visit?',
                a: 'You can schedule a campus tour by contacting our admissions office or filling out the visit request form on our website.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-jojet-gray rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
