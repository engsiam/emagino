import { footerLinks } from '../data/data';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              Emagino<span className="text-orange-500">.ai</span>
            </a>
          </div>
          <div className="md:flex items-center space-x-8">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                {link.title}
              </a>
            ))}
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
