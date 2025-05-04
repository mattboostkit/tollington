import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const JoinUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    voiceRange: '',
    message: '',
    agreeTerms: false,
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.experience) {
      errors.experience = 'Please select your singing experience';
    }
    
    if (!formData.voiceRange) {
      errors.voiceRange = 'Please select your voice range';
    }
    
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to our terms';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        voiceRange: '',
        message: '',
        agreeTerms: false,
      });
      
      // Reset submission status after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Join Us" 
        description="Become part of our gospel choir community. Apply to join Tollington Gospel Choir and share your passion for music."
      />

      <Hero
        title="Join Our Choir"
        subtitle="Share your voice and become part of our musical family"
        image="https://images.pexels.com/photos/6157197/pexels-photo-6157197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Join Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Information Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-purple-800">
                  Become a Member
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Tollington Gospel Choir welcomes singers of all backgrounds and experience levels. Whether you're a seasoned performer or just discovering your voice, there's a place for you in our musical family.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  We're particularly looking for singers in all vocal ranges who are passionate about gospel music, reliable for weekly rehearsals, and committed to our performance schedule.
                </p>
              </motion.div>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                    Rehearsals
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We meet every Tuesday evening from 7:00 PM to 9:00 PM at Tollington Community Centre.
                  </p>
                  <p className="text-gray-700">
                    Rehearsals involve warm-up exercises, sectional practice, and full choir arrangements. We work on a mix of traditional gospel, contemporary Christian music, and original compositions.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                    Performances
                  </h3>
                  <p className="text-gray-700">
                    We perform regularly throughout the year at concerts, community events, and private bookings. Members are expected to participate in at least 75% of performances, which typically take place on weekends.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-purple-800">
                    Membership Fees
                  </h3>
                  <p className="text-gray-700 mb-2">
                    There is a monthly membership fee of £25 which helps cover the cost of sheet music, rehearsal space, and choir administration.
                  </p>
                  <p className="text-gray-700">
                    Concessions are available for students, seniors, and those with financial difficulties. We believe everyone should have the opportunity to participate regardless of financial situation.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-center text-purple-800">
                  Apply to Join
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                    <h4 className="text-xl font-serif font-medium text-gray-800 mb-2">
                      Application Received!
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Thank you for your interest in joining Tollington Gospel Choir. We'll review your application and contact you within 5-7 days to arrange an informal meeting.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Singing Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                          formErrors.experience ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Please select your experience level</option>
                        <option value="beginner">Beginner (little to no experience)</option>
                        <option value="intermediate">Intermediate (some choir or performance experience)</option>
                        <option value="advanced">Advanced (extensive singing experience)</option>
                        <option value="professional">Professional (trained or professional singer)</option>
                      </select>
                      {formErrors.experience && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.experience}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="voiceRange" className="block text-sm font-medium text-gray-700 mb-1">
                        Voice Range <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="voiceRange"
                        name="voiceRange"
                        value={formData.voiceRange}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                          formErrors.voiceRange ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Please select your voice range</option>
                        <option value="soprano">Soprano</option>
                        <option value="alto">Alto</option>
                        <option value="tenor">Tenor</option>
                        <option value="bass">Bass</option>
                        <option value="unsure">Not Sure</option>
                      </select>
                      {formErrors.voiceRange && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.voiceRange}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us about yourself (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share why you want to join our choir, any previous musical experience, or anything else you think we should know"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors border-gray-300"
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className={`h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded ${
                            formErrors.agreeTerms ? 'border-red-500' : ''
                          }`}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                          I understand that membership requires regular attendance at rehearsals and participation in performances <span className="text-red-500">*</span>
                        </label>
                        {formErrors.agreeTerms && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.agreeTerms}</p>
                        )}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about joining Tollington Gospel Choir"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Do I need to audition?
              </h3>
              <p className="text-gray-700">
                We don't hold formal auditions. Instead, we invite prospective members to attend a rehearsal and meet with our musical director for an informal voice assessment. This helps us understand your range and place you in the appropriate section.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Do I need to read music?
              </h3>
              <p className="text-gray-700">
                No, we don't require members to read music. We teach primarily by ear, though sheet music is provided for those who prefer it. What's most important is your ability to listen, learn, and retain melodies and harmonies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Do I need to be religious?
              </h3>
              <p className="text-gray-700">
                No, we welcome members of all faiths and backgrounds. While we perform gospel music which has spiritual roots, we focus on the musical and community aspects. Our members join for the love of singing and the joy of creating music together.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                What is the time commitment?
              </h3>
              <p className="text-gray-700">
                Members are expected to attend weekly Tuesday evening rehearsals (7-9pm) and participate in performances throughout the year (typically 8-12 per year). We also hold occasional workshops and special rehearsals before major performances.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Is there a dress code for performances?
              </h3>
              <p className="text-gray-700">
                Yes, we have performance attire that creates a cohesive look. For most performances, we wear purple tops and black bottoms. For more formal events, we wear choir robes which are provided. Details are shared with new members upon joining.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Can I try before committing?
              </h3>
              <p className="text-gray-700">
                Absolutely! We encourage prospective members to attend a rehearsal as a visitor before making a commitment. Contact us to arrange your visit, and you'll be welcomed to observe and participate in a rehearsal session.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-purple-800 text-white">
        <div className="container-custom">
          <SectionTitle
            title="Hear From Our Members"
            subtitle="Discover what it's like to be part of Tollington Gospel Choir"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-purple-700 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Rachel Davies"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Rachel Davies</p>
                  <p className="text-sm text-purple-200">Member for 3 years</p>
                </div>
              </div>
              <p className="italic text-purple-100">
                "Joining Tollington Gospel Choir has been one of the best decisions I've made. Not only have I grown as a singer, but I've also found a wonderful community of friends. The music we create together is truly uplifting."
              </p>
            </motion.div>
            
            <motion.div
              className="bg-purple-700 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mark Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Mark Johnson</p>
                  <p className="text-sm text-purple-200">Member for 5 years</p>
                </div>
              </div>
              <p className="italic text-purple-100">
                "I was nervous about joining since I had no formal music training, but everyone was so welcoming. The directors are patient and supportive, and I've surprised myself with how much I've learned and grown as a performer."
              </p>
            </motion.div>
            
            <motion.div
              className="bg-purple-700 bg-opacity-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sophia Williams"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Sophia Williams</p>
                  <p className="text-sm text-purple-200">Member for 2 years</p>
                </div>
              </div>
              <p className="italic text-purple-100">
                "Tuesday evenings have become the highlight of my week. The energy in our rehearsals is incredible, and performing together gives me such a sense of accomplishment. It's more than a choir—it's like a second family."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-amber-50 rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-purple-800">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the first step today by submitting your application or contacting us with any questions. We can't wait to welcome you to our choir family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#top" className="btn-primary">
                Apply Now
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUsPage;