import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { teamMembers } from '../data/team';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Tollington Gospel Choir, our history, mission, and the talented people who make our music come alive."
      />

      <Hero
        title="About Tollington Gospel Choir"
        subtitle="Meet the people and the passion behind our music"
        image="https://images.pexels.com/photos/6157048/pexels-photo-6157048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Our Story Section */}
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
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                The Tollington Gospel Choir was established in 2008 by Beth and Dan Allwood, local residents with a love of gospel music and passion for encouraging others to sing. Since then the choir has grown steadily, meeting weekly and performing regularly in pubs, churches, underground stations,  open-air stages, even Tesco stores in the local area.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The choir is un-auditioned and free of charge, welcoming anyone and everyone who loves to sing, regardless of age, faith or experience.
              </p>
              <p className="text-lg text-gray-700">
                We work on the belief that everybody has the ability to sing and love witnessing the confidence and vocal ability of members grow as they explore the wonderful and unbeatably uplifting genre of gospel music.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://ik.imagekit.io/boostkit/Tollington/Dan%20and%20Beth.jpg?updatedAt=1746353476351"
                alt="Beth and Dan Allwood, founders of Tollington Gospel Choir"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="section bg-purple-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="What drives us and shapes our approach to music and community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 01-6-6" />
                  <path d="M18 2a6 6 0 00-6 6" />
                  <path d="M6 16a6 6 0 116 6" />
                  <path d="M6 22a6 6 0 006-6" />
                  <path d="M16 8a6 6 0 00-6 6" />
                  <path d="M16 20a6 6 0 01-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Community & Connection
              </h3>
              <p className="text-gray-700">
                We believe in the power of music to bring people together. Our choir is a diverse family that celebrates differences while creating harmony—both musically and socially.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Excellence & Expression
              </h3>
              <p className="text-gray-700">
                We strive for musical excellence while encouraging authentic expression. We believe that technical skill and emotional connection are equally important in creating moving performances.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9 9 9 0 009 9z" />
                  <path d="M12 3a2 2 0 00-2 2v7l4 2" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Tradition & Innovation
              </h3>
              <p className="text-gray-700">
                We honor the rich heritage of gospel music while embracing creative innovation. Our repertoire spans traditional spirituals to contemporary gospel and original compositions.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 11a2 2 0 00-2-2" />
                  <path d="M12 9a2 2 0 00-2 2" />
                  <path d="M12 13a2 2 0 01-2 2" />
                  <path d="M14 15a2 2 0 01-2-2" />
                  <path d="M3 12l2-2m-2 2l2 2M19 12l2-2m-2 2l2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Inclusion & Accessibility
              </h3>
              <p className="text-gray-700">
                We welcome singers of all backgrounds, faiths, and experience levels. We believe that gospel music's power and joy should be accessible to everyone, both as performers and audience members.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V2M2 12h20M12 22a10 10 0 01-8.45-15.27M12 22a10 10 0 008.45-15.27" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Community Service
              </h3>
              <p className="text-gray-700">
                We are committed to using our music to support and uplift our local community. Through benefit concerts, workshops, and outreach programs, we aim to give back and make a positive impact.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 19a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h8l6 6v10z" />
                  <path d="M8 14h7" />
                  <path d="M8 18h3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                Growth & Development
              </h3>
              <p className="text-gray-700">
                We are dedicated to the musical and personal growth of our members. Through regular training, workshops, and performance opportunities, we help each singer develop their skills and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The talented individuals who lead Tollington Gospel Choir"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-purple-800">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 line-clamp-4">{member.bio}</p>
                  
                  {member.socialLinks && (
                    <div className="flex space-x-4">
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-700 transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                      
                      {member.socialLinks.instagram && (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-700 transition-colors"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <Instagram size={18} />
                        </a>
                      )}
                      
                      {member.socialLinks.facebook && (
                        <a
                          href={member.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-700 transition-colors"
                          aria-label={`${member.name}'s Facebook`}
                        >
                          <Facebook size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-purple-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-amber-300 text-5xl font-bold mb-2">40+</p>
              <p className="text-lg">Choir Members</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-amber-300 text-5xl font-bold mb-2">15</p>
              <p className="text-lg">Years of Music</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-amber-300 text-5xl font-bold mb-2">200+</p>
              <p className="text-lg">Performances</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-amber-300 text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">Songs in Repertoire</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;