import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "[SNU Health Service Center] New Year's Resolution for 2026, Three Weight Clinic Experts Are Here for You",
    startDate: 'Jan 05, 2026',
    endDate: 'Dec 31, 2026',
    location: 'Health Service Center',
    type: 'Health',
  },
  {
    id: 2,
    title: '2026 SNU Library OA APC Support',
    startDate: 'Feb 19, 2026',
    endDate: 'Oct 31, 2026',
    location: 'University Library',
    type: 'Academic',
  },
  {
    id: 3,
    title: 'Invitation 〈Opening of the Seoul National University Heritage Library & Lounge〉',
    startDate: 'Feb 09, 2026',
    endDate: 'Apr 30, 2026',
    location: 'Heritage Library',
    type: 'Ceremony',
  },
  {
    id: 4,
    title: 'Call for Paper Submissions for the 26th ICER International Conference',
    startDate: 'Jan 20, 2026',
    endDate: 'Mar 31, 2026',
    location: 'Online Submission',
    type: 'Conference',
  },
];

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="events"
      className="relative py-24 bg-snu-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div 
                className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Calendar className="w-5 h-5 text-snu-gold" />
                <span className="text-snu-gold text-sm font-semibold uppercase tracking-wider">Upcoming</span>
              </div>
              <h2 
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms', fontFamily: 'Playfair Display, serif' }}
              >
                SNU <span className="text-gold-gradient">EVENTS</span>
              </h2>
              <p 
                className={`text-white/50 mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Join us for conferences, ceremonies, and academic events that bring our community together.
              </p>
              <a 
                href="#"
                className={`inline-flex items-center gap-2 btn-gold rounded-sm transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                View Calendar
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Events List */}
          <div className="lg:col-span-8">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-px bg-white/10 transition-all duration-1000 ${
                  isVisible ? 'scale-y-100' : 'scale-y-0'
                }`}
                style={{ transformOrigin: 'top' }}
              />

              {/* Events */}
              <div className="space-y-6">
                {events.map((event, index) => (
                  <a
                    key={event.id}
                    href="#"
                    className={`group relative block pl-8 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-0 top-6 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        hoveredEvent === event.id 
                          ? 'bg-snu-gold border-snu-gold scale-125' 
                          : 'bg-snu-black border-snu-gold'
                      }`}
                      style={{ transform: 'translateX(-50%)' }}
                    />

                    {/* Event Card */}
                    <div 
                      className={`p-6 glass-light rounded-lg transition-all duration-500 ${
                        hoveredEvent === event.id 
                          ? 'bg-white/10 border-l-4 border-snu-gold' 
                          : 'border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          {/* Type Badge */}
                          <span className="inline-block px-2 py-1 bg-snu-gold/20 text-snu-gold text-xs font-semibold rounded mb-3">
                            {event.type}
                          </span>

                          {/* Title */}
                          <h3 className="text-white font-semibold mb-3 group-hover:text-snu-gold transition-colors line-clamp-2">
                            {event.title}
                          </h3>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.startDate} - {event.endDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div 
                          className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/5 transition-all duration-300 ${
                            hoveredEvent === event.id 
                              ? 'bg-snu-gold text-snu-black' 
                              : 'text-white/30'
                          }`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* More Events Link */}
            <div 
              className={`mt-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-snu-gold hover:text-snu-light-gold transition-colors group"
              >
                More Events
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
