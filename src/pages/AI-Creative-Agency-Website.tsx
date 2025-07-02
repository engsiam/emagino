import React, { useState } from "react";
const AICreativeAgencyWebsite: React.FC = () => {
 

  const [activeStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: 5000,
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, budget: parseInt(e.target.value) }));
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Image Sections */}
      <section className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://imaginoo.b-cdn.net/DIOR%20OP.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              Transform Your Vision
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 px-4 sm:px-0 max-w-3xl mx-auto">
              AI-Powered Creative Solutions for the Digital Age
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold !rounded-button whitespace-nowrap cursor-pointer mx-4 sm:mx-0">
              Book a Meeting
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://imaginoo.b-cdn.net/zara%20spec%20ad%20%202.MP4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Innovate & Create
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Where Human Creativity Meets Artificial Intelligence
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 py-4 rounded-full text-lg font-bold !rounded-button whitespace-nowrap cursor-pointer">
              Book a Meeting
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://imaginoo.b-cdn.net/Puma-optimised.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Elevate Your Brand
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Cutting-Edge Solutions for Modern Businesses
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 py-4 rounded-full text-lg font-bold !rounded-button whitespace-nowrap cursor-pointer">
              Book a Meeting
            </button>
          </div>
        </div>
      </section>
      {/* Latest Campaigns Section */}
      <section id="latest" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent px-2 sm:px-0">
              Latest Campaigns
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-6">
              Explore our most recent AI-powered creative projects that have
              transformed brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Nike Future Run",
                description:
                  "Revolutionary campaign merging sports and AI innovation",
                image:
                  "https://readdy.ai/api/search-image?query=Professional%20athlete%20in%20futuristic%20running%20gear%20sprinting%20through%20a%20minimalist%20modern%20stadium%20with%20dynamic%20lighting%20effects%2C%20glowing%20energy%20trails%20behind%20the%20runner%2C%20cinematic%20sports%20photography%20with%20dramatic%20atmosphere%20and%20orange%20accent%20lights%2C%20ultra%20high%20end%20advertising%20campaign%20visual&width=600&height=800&seq=campaign-1&orientation=portrait",
              },
              {
                title: "Tesla Cybertruck",
                description:
                  "Visionary automotive showcase redefining the future",
                image:
                  "https://readdy.ai/api/search-image?query=Futuristic%20electric%20truck%20in%20sleek%20modern%20showroom%20with%20floating%20holographic%20displays%20and%20geometric%20light%20patterns%2C%20premium%20automotive%20photography%20with%20dramatic%20spotlights%20and%20orange%20accent%20lighting%2C%20cinematic%20vehicle%20showcase%20with%20artistic%20composition%2C%20luxury%20presentation%20environment&width=600&height=800&seq=campaign-2&orientation=portrait",
              },
              {
                title: "Apple Vision Pro",
                description: "Immersive technology narrative that captivates",
                image:
                  "https://readdy.ai/api/search-image?query=Elegant%20modern%20tech%20product%20floating%20in%20a%20minimalist%20luxury%20space%20with%20interactive%20holographic%20interface%20elements%2C%20premium%20technology%20showcase%20with%20artistic%20lighting%20design%20and%20orange%20accent%20lights%2C%20cinematic%20product%20photography%20with%20floating%20geometric%20elements%2C%20high%20end%20marketing%20visual&width=600&height=800&seq=campaign-3&orientation=portrait",
              },
            ].map((campaign, index) => (
              <div
                key={index}
                className="group relative h-[600px] overflow-hidden rounded-lg bg-gray-800"
              >
                <div className="absolute inset-0">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{campaign.title}</h3>
                  <p className="text-gray-300 mb-4">{campaign.description}</p>
                  {/* <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-6 py-2 rounded-full transition-all duration-300 transform group-hover:translate-x-2 !rounded-button whitespace-nowrap cursor-pointer">
                    View Campaign <i className="fas fa-arrow-right ml-2"></i>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Creative%20team%20of%20diverse%20professionals%20in%20modern%20design%20studio%20working%20with%20AI%20tools%2C%20collaborative%20atmosphere%20with%20digital%20displays%20showing%20creative%20work%2C%20premium%20office%20environment%20with%20artistic%20elements%2C%20cinematic%20lighting%20with%20blue%20accents%2C%20professional%20creative%20agency%20atmosphere&width=700&height=500&seq=about-img&orientation=landscape"
                  alt="Our Team"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">7+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Where AI Meets Creativity
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Emagino.ai, we're pioneering the fusion of artificial
                intelligence with human creativity. Our team of visionary
                designers, strategists, and technologists work together to push
                the boundaries of what's possible in digital content creation.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe that AI isn't replacing human creativity—it's
                enhancing it. By leveraging cutting-edge technology, we deliver
                campaigns that are not just visually stunning, but strategically
                powerful, helping brands cut through the noise and make
                meaningful connections with their audiences.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-700 p-5 rounded-lg">
                  <div className="text-orange-400 text-3xl font-bold mb-1">
                    200+
                  </div>
                  <div className="text-gray-300">Successful Projects</div>
                </div>
                <div className="bg-gray-700 p-5 rounded-lg">
                  <div className="text-blue-400 text-3xl font-bold mb-1">
                    98%
                  </div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="bg-gray-700 p-5 rounded-lg">
                  <div className="text-blue-400 text-3xl font-bold mb-1">
                    15+
                  </div>
                  <div className="text-gray-300">Industry Awards</div>
                </div>
                <div className="bg-gray-700 p-5 rounded-lg">
                  <div className="text-blue-400 text-3xl font-bold mb-1">
                    40+
                  </div>
                  <div className="text-gray-300">Creative Experts</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 py-3 rounded-full transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our Creative Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a strategic approach to ensure every project delivers
              exceptional results.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400/30 via-orange-500 to-orange-600/30"></div>
              <div className="space-y-12 md:space-y-24">
                {[
                  {
                    step: 1,
                    title: "Discovery",
                    description:
                      "We begin by understanding your brand, audience, and objectives through in-depth consultation and research.",
                    icon: "fa-magnifying-glass",
                  },
                  {
                    step: 2,
                    title: "Strategy & Concept",
                    description:
                      "Our team develops a tailored creative strategy and conceptualizes innovative approaches powered by AI.",
                    icon: "fa-lightbulb",
                  },
                  {
                    step: 3,
                    title: "Production & Execution",
                    description:
                      "We bring concepts to life using our proprietary AI tools combined with expert human refinement.",
                    icon: "fa-wand-magic-sparkles",
                  },
                  {
                    step: 4,
                    title: "Delivery & Support",
                    description:
                      "We deliver polished assets along with strategic guidance for implementation and ongoing optimization.",
                    icon: "fa-rocket",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        index % 2 === 0
                          ? "md:text-right md:pr-16"
                          : "md:text-left md:pl-16"
                      } mb-8 md:mb-0`}
                    >
                      <div
                        className={`bg-gray-800/50 p-6 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                          activeStep >= step.step
                            ? "shadow-lg shadow-blue-500/20"
                            : ""
                        }`}
                      >
                        <span className="text-orange-400 text-sm font-semibold mb-2 block">
                          STEP {step.step}
                        </span>
                        <h3 className="text-2xl font-bold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                    <div
                      className={`md:absolute relative my-4 md:my-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                        activeStep >= step.step
                          ? "bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-500/50"
                          : "bg-gray-700"
                      }`}
                    >
                      <i className={`fas ${step.icon} text-xl md:text-2xl`}></i>
                    </div>
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              <span className="block mb-2 sm:mb-3">TURNING VISION</span>
              <span className="block mb-2 sm:mb-3">INTO SCALABLE</span>
              <span className="block">SUCCESS</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 leading-relaxed px-4 sm:px-6 md:px-8">
              At Emagino, we don't just create ads—we solve real-world marketing
              challenges by blending human creativity, data-driven insights, and
              cutting-edge AI tools. Our leadership team brings a unique
              combination of market strategy, audience research, and visual
              storytelling to every campaign, crafting content that captivates,
              converts, and resonates.
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 !rounded-button whitespace-nowrap cursor-pointer">
              OUR STORY
            </button>
          </div>
        </div>
      </section>
      {/* <section className="py-16 bg-gradient-to-b from-black to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-black md:px-12 px-8 py-5 rounded-full text-xs font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 whitespace-nowrap cursor-pointer md:text-lg">
              Book a Meeting?
            </button>
          </div>
        </div>
      </section> */}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Start Your Project
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Ready to transform your brand with AI-powered creativity? Let's
                discuss your project.
              </p>
            </div>
            <div className="bg-gray-700 rounded-xl shadow-xl p-4 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="company">
                    Company/Brand
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-300 mb-2"
                    htmlFor="projectType"
                  >
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="brand">Brand Campaign</option>
                      <option value="product">Product Launch</option>
                      <option value="social">Social Media Content</option>
                      <option value="website">Website/App Content</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Budget Range: ${formData.budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={formData.budget}
                  onChange={handleRangeChange}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-orange-400 [&::-webkit-slider-thumb]:to-orange-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-orange-400 [&::-moz-range-thumb]:to-orange-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$1,000</span>
                  <span>$25,000</span>
                  <span>$50,000+</span>
                </div>
              </div>
              <div className="mb-8">
                <label
                  className="block text-gray-300 mb-2"
                  htmlFor="description"
                >
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                  placeholder="Tell us about your project goals and requirements..."
                ></textarea>
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 !rounded-button whitespace-nowrap cursor-pointer w-full sm:w-auto">
                  Let's Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
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
    </div>
  );
};
export default AICreativeAgencyWebsite;
