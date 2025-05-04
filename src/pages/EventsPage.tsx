import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../utils/sanityClient';
import { Event } from '../data/events';

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);
      try {
        // Fetch upcoming events
        const upcoming = await fetchEvents('upcoming');
        setUpcomingEvents(upcoming);

        // Fetch past events
        const past = await fetchEvents('past');
        setPastEvents(past);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <>
      <SEO
        title="Events"
        description="Find out where and when you can experience Tollington Gospel Choir live. See our upcoming concerts, workshops, and past performances."
      />

      <Hero
        title="Events & Performances"
        subtitle="Experience the joy and power of gospel music at our upcoming events"
        image="https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Events Calendar Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Join Us In Person"
            subtitle="From concerts to workshops, there are many ways to experience our music"
          />

          <div className="mb-12">
            <div className="flex justify-center border-b border-gray-200">
              <button
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === 'upcoming'
                    ? 'border-b-2 border-purple-700 text-purple-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === 'past'
                    ? 'border-b-2 border-purple-700 text-purple-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
              </div>
            ) : activeTab === 'upcoming' ? (
              <>
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {upcomingEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        image={event.image}
                        description={event.description}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                      No upcoming events
                    </h3>
                    <p className="text-gray-600">
                      Check back soon for new events or subscribe to our newsletter.
                    </p>
                  </div>
                )}

                <div className="bg-amber-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="bg-amber-100 p-4 rounded-full">
                      <Calendar size={32} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">Want to book us for your event?</h3>
                      <p className="text-gray-700 mb-4">
                        Tollington Gospel Choir is available for weddings, corporate events, festivals, and private functions. Get in touch to discuss your requirements and check our availability.
                      </p>
                      <a
                        href="/contact"
                        className="btn-primary"
                      >
                        Contact for Booking
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {pastEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        image={event.image}
                        description={event.description}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                      No past events
                    </h3>
                    <p className="text-gray-600">
                      Our event history will appear here after events have taken place.
                    </p>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {activeTab === 'upcoming' && !isLoading && upcomingEvents.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container-custom">
            <SectionTitle
              title="Featured Event"
              subtitle="Don't miss our special upcoming performance"
            />

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-96 lg:h-auto">
                  <img
                    src={upcomingEvents[0].image}
                    alt={upcomingEvents[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-purple-800">
                      {upcomingEvents[0].title}
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <div>
                          <p className="font-medium text-gray-900">Date & Time</p>
                          <p className="text-gray-600">
                            {format(upcomingEvents[0].date, 'EEEE, do MMMM yyyy')}
                          </p>
                          <p className="text-gray-600">{upcomingEvents[0].time}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-600">{upcomingEvents[0].location}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {upcomingEvents[0].details || upcomingEvents[0].description}
                    </p>
                  </div>

                  {upcomingEvents[0].ticketLink && (
                    <div className="mt-auto">
                      <a
                        href={upcomingEvents[0].ticketLink}
                        className="btn-primary w-full md:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Tickets
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Private Events Section */}
      <section className="section bg-purple-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Book Us For Your Special Event
              </h2>
              <p className="text-purple-100 text-lg mb-8">
                Tollington Gospel Choir is available for private bookings, adding a memorable musical experience to your special occasions:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Weddings and civil partnerships</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Corporate events and galas</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Festivals and community celebrations</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Charity fundraisers</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Television and radio appearances</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-700 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>Private celebrations and parties</p>
                </div>
              </div>

              <a
                href="/contact"
                className="btn-secondary inline-block"
              >
                Enquire About Booking
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3985238/pexels-photo-3985238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Wedding choir performance"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-purple-800 font-serif italic">"The choir made our wedding day truly magical. Our guests were spellbound."</p>
                <p className="text-gray-600 text-sm mt-2">— James & Emily</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;