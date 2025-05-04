import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { galleryItems, galleryCategories } from '../data/gallery';

const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <SEO 
        title="Media Gallery" 
        description="Experience Tollington Gospel Choir through our photos and videos. Browse our media gallery of performances, rehearsals, and events."
      />

      <Hero
        title="Media Gallery"
        subtitle="Experience our performances through photos and videos"
        image="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Gallery"
            subtitle="Browse through our performances, rehearsals, and special moments"
          />
          
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === 'All'
                    ? 'bg-purple-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-purple-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer group"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={item.type === 'video' ? item.thumbnail || '' : item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-purple-800 bg-opacity-75 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white font-medium">{item.title}</p>
                      {item.description && (
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              layoutId={selectedItem.id}
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedItem.type === 'image' ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedItem.url}
                      title={selectedItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                <button
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                  {selectedItem.title}
                </h3>
                {selectedItem.description && (
                  <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {selectedItem.date.toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-sm font-medium text-purple-700">
                    {selectedItem.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Samples Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Audio Samples"
            subtitle="Listen to selected performances from our repertoire"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Amazing Grace
              </h3>
              <p className="text-gray-600 mb-4">
                Our unique arrangement of this beloved classic, featuring soloist Jennifer Adams.
              </p>
              <audio
                controls
                className="w-full"
                src="#"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Oh Happy Day
              </h3>
              <p className="text-gray-600 mb-4">
                Recorded live at our Summer Concert 2022, this joyful rendition showcases our full choir.
              </p>
              <audio
                controls
                className="w-full"
                src="#"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Total Praise
              </h3>
              <p className="text-gray-600 mb-4">
                Our interpretation of Richard Smallwood's powerful gospel classic.
              </p>
              <audio
                controls
                className="w-full"
                src="#"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-purple-800">
                Hallelujah Chorus
              </h3>
              <p className="text-gray-600 mb-4">
                Our gospel-infused rendition of Handel's masterpiece from our Christmas concert.
              </p>
              <audio
                controls
                className="w-full"
                src="#"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Press & Media Coverage"
            subtitle="Selected coverage of our performances and community impact"
          />
          
          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                "Uplifting Voices in North London"
              </h3>
              <p className="text-gray-600 mb-2 italic">
                "Tollington Gospel Choir brought the house down with their powerful blend of traditional and contemporary gospel. Their unique arrangements and obvious joy in performance created an electric atmosphere that had the entire audience on their feet."
              </p>
              <p className="text-sm text-gray-500">— London Evening Standard, December 2022</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                "Community Choir Makes a Difference"
              </h3>
              <p className="text-gray-600 mb-2 italic">
                "Beyond their musical excellence, Tollington Gospel Choir has become a cornerstone of community support in North London, raising significant funds for local charities through their benefit concerts and workshops."
              </p>
              <p className="text-sm text-gray-500">— Islington Gazette, March 2023</p>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-serif font-semibold mb-2 text-purple-800">
                "Gospel Workshop Success"
              </h3>
              <p className="text-gray-600 mb-2 italic">
                "The choir's inclusive approach to their workshops has created a space where people of all backgrounds can experience the joy of gospel singing. Their recent all-day workshop attracted participants from across London and demonstrated their commitment to sharing musical knowledge."
              </p>
              <p className="text-sm text-gray-500">— Gospel Music Today, April 2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaPage;