import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

const AppNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Optional: Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Define navigation links
  const navLinks = [
    { to: "/#latest", label: "Campaigns", isHashLink: true },
    { to: "/#about", label: "Creativity", isHashLink: true },
    { to: "/#process", label: "Process", isHashLink: true },
    { to: "/portfolio", label: "Portfolio", isHashLink: false },
    { to: "/about", label: "About Us", isHashLink: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <HashLink smooth to="/#" className="text-2xl font-bold text-white">
              Emagino<span className="text-orange-500">.ai</span>
            </HashLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.isHashLink ? (
                <HashLink
                  key={index}
                  smooth
                  to={link.to}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {link.label}
                </HashLink>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Get Started Button */}
            <HashLink
              smooth
              to="/#contact"
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Get Started
            </HashLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
              aria-label="Open Menu"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) =>
              link.isHashLink ? (
                <HashLink
                  key={index}
                  smooth
                  to={link.to}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </HashLink>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile Get Started Button */}
            <HashLink
              smooth
              to="/#form"
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppNavigation;
