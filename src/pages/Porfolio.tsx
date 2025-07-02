const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've transformed brands with our AI-powered creative
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "Ethereal Dreams Campaign",
              category: "Fashion",
              description:
                "AI-generated fashion campaign that increased engagement by 240%",
              image:
                "https://readdy.ai/api/search-image?query=High%20fashion%20model%20in%20avant%20garde%20couture%20floating%20in%20surreal%20minimalist%20space%20with%20flowing%20fabric%20and%20light%20trails%2C%20luxury%20fashion%20photography%20with%20orange%20accent%20lighting%20and%20geometric%20elements%2C%20cinematic%20editorial%20style%20with%20artistic%20composition%2C%20premium%20campaign%20visual%20with%20modern%20aesthetic&width=600&height=400&seq=portfolio-1&orientation=landscape",
            },
            {
              title: "Tech Revolution Series",
              category: "Technology",
              description:
                "Futuristic product videos for a leading tech innovator",
              image:
                "https://readdy.ai/api/search-image?query=Innovative%20tech%20devices%20floating%20in%20modern%20showroom%20with%20interactive%20holographic%20displays%20and%20dynamic%20light%20patterns%2C%20premium%20product%20photography%20with%20orange%20accent%20lighting%20and%20floating%20UI%20elements%2C%20cinematic%20technology%20showcase%20with%20artistic%20composition%2C%20luxury%20presentation%20space&width=600&height=400&seq=portfolio-2&orientation=landscape",
            },
            {
              title: "Culinary Wonders",
              category: "Food & Beverage",
              description:
                "Mouth-watering content that drove 125% increase in conversions",
              image:
                "https://readdy.ai/api/search-image?query=Exquisite%20culinary%20creation%20in%20modern%20luxury%20restaurant%20setting%20with%20artistic%20plating%20and%20floating%20ingredients%2C%20premium%20food%20photography%20with%20dramatic%20spotlights%20and%20orange%20accent%20lighting%2C%20cinematic%20gastronomy%20presentation%20with%20smoke%20elements%2C%20high%20end%20dining%20atmosphere&width=600&height=400&seq=portfolio-3&orientation=landscape",
            },
            {
              title: "Urban Exploration",
              category: "Travel",
              description:
                "City guide series that captivated millions across social platforms",
              image:
                "https://readdy.ai/api/search-image?query=Futuristic%20cityscape%20with%20floating%20transportation%20pods%20and%20holographic%20billboards%2C%20modern%20urban%20photography%20with%20dramatic%20lighting%20and%20orange%20light%20trails%2C%20cinematic%20architectural%20visualization%20with%20geometric%20patterns%2C%20premium%20travel%20campaign%20visual%20with%20artistic%20composition&width=600&height=400&seq=portfolio-4&orientation=landscape",
            },
            {
              title: "Wellness Revolution",
              category: "Health",
              description:
                "Inspiring wellness content that built a community of 500K followers",
              image:
                "https://readdy.ai/api/search-image?query=Modern%20wellness%20space%20with%20floating%20meditation%20platforms%20and%20energy%20visualization%2C%20premium%20fitness%20photography%20with%20orange%20accent%20lighting%20and%20geometric%20patterns%2C%20cinematic%20health%20campaign%20visual%20with%20artistic%20composition%2C%20luxury%20wellness%20environment%20with%20holographic%20elements&width=600&height=400&seq=portfolio-5&orientation=landscape",
            },
            {
              title: "Sustainable Future",
              category: "Environment",
              description:
                "Award-winning campaign highlighting eco-friendly innovations",
              image:
                "https://readdy.ai/api/search-image?query=Futuristic%20eco%20friendly%20technology%20in%20modern%20sustainable%20architecture%20with%20floating%20garden%20elements%2C%20premium%20environmental%20photography%20with%20orange%20accent%20lighting%20and%20geometric%20patterns%2C%20cinematic%20green%20innovation%20showcase%20with%20artistic%20composition%2C%20luxury%20sustainable%20design&width=600&height=400&seq=portfolio-6&orientation=landscape",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-orange-400 text-sm font-medium block mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black w-full py-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
