import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Team"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold">About Emagino</h1>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Emagino, our mission is to empower businesses with transformative AI solutions that drive growth, efficiency, and innovation. We are dedicated to pushing the boundaries of what's possible and delivering intelligent tools that make a real difference.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, Emagino started with a small team of AI enthusiasts who shared a common vision: to make advanced artificial intelligence accessible to everyone. From our humble beginnings in a small garage, we have grown into a leading provider of creative AI solutions, serving clients across the globe.
              </p>
              <p className="text-gray-300">
                Our journey has been one of relentless innovation and a commitment to excellence. We believe in the power of collaboration and have fostered a culture of creativity and continuous learning.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Journey"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a diverse team of thinkers, creators, and innovators, united by a passion for artificial intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-400">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-400">Chief Technology Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-bold">Samuel Green</h3>
            <p className="text-gray-400">Lead AI Researcher</p>
          </div>
          {/* Team Member 4 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/56.jpg"
              alt="Team Member 4"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-bold">Maria Garcia</h3>
            <p className="text-gray-400">Head of Design</p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We are driven by a desire to innovate and create solutions that push the boundaries of technology.
              </p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-400">
                We believe in conducting our business with the utmost integrity, ensuring transparency and trust with our clients.
              </p>
            </div>
            <div className="p-8 border border-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Customer Centricity</h3>
              <p className="text-gray-400">
                Our customers are at the heart of everything we do. We are committed to their success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;