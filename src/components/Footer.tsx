import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube as YouTube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Logo variant="dark" className="text-xl" />
            <p className="mt-4 text-purple-200">
              Bringing musical joy to the community through gospel music since 2005.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YouTube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-purple-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-purple-200 hover:text-white transition-colors">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-purple-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-purple-200 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-medium mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog/summer-concert-highlights" className="group">
                  <p className="text-amber-300 group-hover:text-amber-200 font-medium transition-colors">
                    Summer Concert Highlights
                  </p>
                  <p className="text-sm text-purple-200">June 15, 2023</p>
                </Link>
              </li>
              <li>
                <Link to="/blog/new-members-welcome" className="group">
                  <p className="text-amber-300 group-hover:text-amber-200 font-medium transition-colors">
                    Welcome to Our New Members
                  </p>
                  <p className="text-sm text-purple-200">May 22, 2023</p>
                </Link>
              </li>
              <li>
                <Link to="/blog/gospel-workshop-success" className="group">
                  <p className="text-amber-300 group-hover:text-amber-200 font-medium transition-colors">
                    Gospel Workshop Success
                  </p>
                  <p className="text-sm text-purple-200">April 10, 2023</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-amber-300" />
                <span className="text-purple-200">St Saviour's Church, Hanley Road, London N4 3DQ</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-amber-300" />
                <a href="tel:02071234567" className="text-purple-200 hover:text-white transition-colors">
                  020 7123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-amber-300" />
                <a href="mailto:tollingtongospelchoir@gmail.com" className="text-purple-200 hover:text-white transition-colors">
                  tollingtongospelchoir@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-800 text-sm text-purple-300 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Tollington Gospel Choir. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;