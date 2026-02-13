import { useEffect } from 'react';
import './App.css';
import TopBar from './sections/TopBar';
import MainNav from './sections/MainNav';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import News from './sections/News';
import Research from './sections/Research';
import Events from './sections/Events';
import QuickLinks from './sections/QuickLinks';
import Campus from './sections/Campus';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-snu-black">
      {/* Navigation */}
      <TopBar />
      <MainNav />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Stats />
        <News />
        <Research />
        <Events />
        <QuickLinks />
        <Campus />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
