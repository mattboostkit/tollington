import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist."
      />

      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center">
            <Music size={64} className="text-purple-700" />
          </div>
          
          <h1 className="mt-6 text-4xl font-serif font-bold text-purple-800">
            404
          </h1>
          <h2 className="mt-2 text-2xl font-serif font-medium text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="btn-primary w-full"
            >
              Return to Homepage
            </Link>
            
            <p className="text-gray-600">
              Or check out some of our popular pages:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/events"
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-purple-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                to="/join"
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-purple-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Join Us
              </Link>
              <Link
                to="/blog"
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-purple-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-white border border-gray-300 rounded-md px-4 py-2 text-purple-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;