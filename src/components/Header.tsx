import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import classNames from 'classnames';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-white shadow-md py-2': scrolled || menuOpen,
          'bg-transparent py-4': !scrolled && !menuOpen,
        }
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div onClick={() => setMenuOpen(false)}>
          <Logo className="text-2xl" />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="p-2 lg:hidden text-purple-800"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            About
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/media"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Media
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/join"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Join Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              classNames('font-medium transition-colors', {
                'text-purple-800': isActive,
                'text-gray-700 hover:text-purple-700': !isActive,
              })
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={classNames(
            'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out transform pt-20',
            {
              'translate-x-0': menuOpen,
              'translate-x-full': !menuOpen,
            }
          )}
        >
          <nav className="flex flex-col items-center space-y-6 p-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Media
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/join"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                classNames('text-xl font-medium', {
                  'text-purple-800': isActive,
                  'text-gray-700': !isActive,
                })
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="pt-6">
              <Link
                to="/join"
                className="btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Join the Choir
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;