import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Emagino<span className="text-orange-500">.ai</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              About Us
            </Link>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              <Link to="/contact">Get Started</Link>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i
                className={`fas ${
                  isMenuOpen ? 'fa-times' : 'fa-bars'
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300 py-2"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300 py-2"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300 py-2"
            >
              About Us
            </Link>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
