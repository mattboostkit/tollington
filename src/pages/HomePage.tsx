import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Music, ChevronRight } from 'lucide-react';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';

import { fetchBlogPosts, fetchEvents } from '../utils/sanityClient';

const HomePage: React.FC = () => {
  const [blogPosts, setBlogPosts] = React.useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Load blog posts
        const posts = await fetchBlogPosts(3);
        setBlogPosts(posts);

        // Load upcoming events
        const events = await fetchEvents('upcoming');
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Tollington Gospel Choir - Bringing musical joy to the community through gospel music since 2008."
      />

      <Hero
        title="Raising Voices, Lifting Spirits"
        subtitle="Tollington Gospel Choir brings musical joy to the community through the powerful tradition of gospel music"
        image="https://ik.imagekit.io/boostkit/Tollington/Header.jpg?updatedAt=1746353410348"
        ctaText="Join the Choir"
        ctaLink="/join"
        secondaryCtaText="Upcoming Events"
        secondaryCtaLink="/events"
        height="large"
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-purple-800">
                Bringing Gospel Music to the Heart of London
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 2008, Tollington Gospel Choir has been bringing together people from all walks of life to share in the joyful tradition of gospel music. Based in North London, our choir combines powerful vocals, moving harmonies, and infectious energy.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether performing in concert halls, community centers, or places of worship, we aim to uplift and inspire through music that speaks to the soul.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <Music size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Soulful Performances</h3>
                    <p className="text-gray-600">Authentic gospel music delivered with passion and joy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <Users size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Inclusive Community</h3>
                    <p className="text-gray-600">Welcoming singers of all backgrounds and experience levels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <CalendarDays size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Regular Events</h3>
                    <p className="text-gray-600">Concerts, workshops, and community outreach programs</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-outline">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tollington Gospel Choir performing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium">Spring Concert 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us at our next performance or workshop. Experience the uplifting power of gospel music!"
          />

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
            </div>
          ) : upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.slice(0, 3).map((event) => (
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

          <div className="mt-12 text-center">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-purple-800 text-white">
        <div className="container-custom">
          <SectionTitle
            title="What People Say"
            subtitle="Hear from choir members, audience members, and workshop participants"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Joining Tollington Gospel Choir has been life-changing. The music we create together is powerful, and the community is so welcoming."
              name="Rachel Davies"
              role="Choir Member"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />

            <TestimonialCard
              quote="Their performance brought tears to my eyes. The harmony, the emotion, the pure joy of their singing was incredible."
              name="David Johnson"
              role="Concert Attendee"
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />

            <TestimonialCard
              quote="The workshop was fantastic! I came in nervous about singing, but left feeling confident and inspired."
              name="Michelle Thompson"
              role="Workshop Participant"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="From Our Blog"
            subtitle="Stay updated with choir news, event recaps, and insights into gospel music"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                publishedAt={new Date(post.publishedAt)}
                author={post.author}
                featuredImage={post.featuredImage}
                category={post.category}
                estimatedReadingTime={post.estimatedReadingTime}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog" className="btn-outline">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-purple-800">
                  Join Our Choir Family
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're always looking for new voices to join our community. Whether you're an experienced singer or just starting out, there's a place for you in Tollington Gospel Choir.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/join" className="btn-primary">
                    Become a Member
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2">
                <img
                  src="https://images.pexels.com/photos/6157197/pexels-photo-6157197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Choir rehearsal"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;