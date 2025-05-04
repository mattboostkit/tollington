import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Tollington Gospel Choir for inquiries, bookings, or to learn more about joining us."
      />

      <Hero
        title="Contact Us"
        subtitle="Get in touch with any questions or inquiries"
        image="https://images.pexels.com/photos/3723233/pexels-photo-3723233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="small"
      />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-purple-800">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-700">
                  Have a question about joining the choir, booking us for an event, or anything else? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </motion.div>
              
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-purple-800">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  You can reach us through any of the following methods or connect with us on social media.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <MapPin className="text-purple-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">123 Tollington Park, London, N4 3AG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Mail className="text-purple-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Address</h3>
                      <a
                        href="mailto:info@tollingtongospelchoir.co.uk"
                        className="text-purple-700 hover:text-purple-800"
                      >
                        info@tollingtongospelchoir.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Phone className="text-purple-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Phone Number</h3>
                      <a
                        href="tel:+442071234567"
                        className="text-purple-700 hover:text-purple-800"
                      >
                        020 7123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Clock className="text-purple-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 10:00 AM - 4:00 PM<br />
                        Weekends: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                  Connect With Us
                </h3>
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-100 p-3 rounded-full text-purple-700 hover:bg-purple-200 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                    Looking to Book Us?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For performance bookings, please contact our booking manager directly via email or phone, or use the contact form with "Booking Inquiry" as the subject.
                  </p>
                  <a
                    href="mailto:bookings@tollingtongospelchoir.co.uk"
                    className="text-purple-700 font-medium hover:text-purple-800"
                  >
                    bookings@tollingtongospelchoir.co.uk
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 pt-0">
        <div className="h-96 w-full">
          <iframe
            title="Tollington Gospel Choir Location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.2775406568385!2d-0.12022468424721013!3d51.561987279644744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7ae939a3b7%3A0x24eef7697a7d5895!2sTollington%20Park%2C%20London%20N4%203AG!5e0!3m2!1sen!2suk!4v1666553731208!5m2!1sen!2suk"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;