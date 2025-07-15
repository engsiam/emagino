const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            About <span className="text-orange-500">Emagino</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of innovators and creators dedicated to
            building the future of artificial intelligence.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300">
            To empower businesses with transformative AI solutions that drive
            growth, efficiency, and innovation. We are committed to pushing the
            boundaries of what's possible and delivering intelligent tools that
            make a real difference.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Our Story
            </h2>
          </div>
          <div className="relative">
            <div className="border-l-4 border-orange-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  The Beginning (2020)
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  Emagino was born from a shared vision among a small group of
                  AI enthusiasts to democratize artificial intelligence.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Growth and Expansion
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  Our dedication to innovation led to rapid growth, expanding
                  our team and capabilities to serve a global clientele.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  The Future
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  We continue to explore new frontiers in AI, driven by our
                  commitment to creating a smarter, more connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A diverse group of thinkers, creators, and innovators united by a
            passion for artificial intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1">
          <div className="text-center group">
            <div className="relative">
              <img
                src="/images/evans.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 group-hover:border-orange-500 transition-all duration-300 object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold">Evans Ugo</h3>
            <p className="text-gray-400">CEO & Founder</p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We are driven by a desire to innovate and create solutions that
                push the boundaries of technology.
              </p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-400">
                We believe in conducting our business with the utmost integrity,
                ensuring transparency and trust.
              </p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Customer Centricity</h3>
              <p className="text-gray-400">
                Our customers are at the heart of everything we do. We are
                committed to their success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
