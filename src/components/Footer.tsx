

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12 px-4 sm:px-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Emagino<span className="text-orange-500">.ai</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Pioneering the future of creative content with AI-powered
                solutions that elevate brands and captivate audiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Our Process
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest insights on AI
                creativity.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-4 py-2 rounded-r-lg transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="mt-6">
                <p className="text-gray-400">
                  <i className="fas fa-map-marker-alt mr-2"></i> 123 Innovation
                  Ave, San Francisco, CA
                </p>
                <p className="text-gray-400">
                  <i className="fas fa-phone mr-2"></i> +1 (555) 123-4567
                </p>
                <p className="text-gray-400">
                  <i className="fas fa-envelope mr-2"></i> hello@emagino.ai
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Emagino.ai. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
