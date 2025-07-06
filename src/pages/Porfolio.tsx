import { useEffect, useState } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  image?: string; // Optional image
  video_url?: string; // Optional video URL
  thumbnail_url?: string; // Optional thumbnail for the video
};

const allProjects = [
  {
    title: "Ethereal Dreams Campaign",
    category: "Fashion",
    description:
      "AI-generated fashion campaign that increased engagement by 240%",
    video_url: "https://youtu.be/f9m0gnOCq70", // YouTube URL
    thumbnail_url: "/images/Xjo.jpg",
  },
];

const Portfolio = () => {
  const [projectsToShow, setProjectsToShow] = useState(3);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const projectsToDisplay = allProjects.slice(0, projectsToShow);

  const loadMoreProjects = () => {
    setProjectsToShow((prev) => prev + 3);
  };

  const extractYouTubeId = (url: string) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    if (modalProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalProject]);

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
          {projectsToDisplay.map((project, index) => (
            <div
              onClick={() => setModalProject(project)}
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="h-64 overflow-hidden">
                {project.video_url ? (
                  <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                )}
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
                  <button
                    onClick={() => setModalProject(project)}
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black w-full py-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          {/* <button
            onClick={loadMoreProjects}
            className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer"
          >
            View All Work
          </button> */}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed z-[9999] inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all">
          {/* Modal Container */}
          <div
            className="bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 relative flex flex-col items-center animate-fade-in-up"
            style={{
              border: "2px solid #fb923c", // orange-400
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            {modalProject.video_url ? (
              <div className="w-full rounded-xl mb-6">
                {/* Embed YouTube Video */}
                {extractYouTubeId(modalProject.video_url) ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(
                      modalProject.video_url
                    )}?autoplay=1&controls=0&showinfo=0&rel=0&autohide=1&modestbranding=1&loop=1&playlist=${extractYouTubeId(
                      modalProject.video_url
                    )}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={modalProject.title}
                  />
                ) : (
                  <p className="text-white">Invalid video URL</p>
                )}
              </div>
            ) : (
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full rounded-xl mb-6 object-cover max-h-60"
              />
            )}
            <span className="text-orange-400 text-sm font-semibold mb-1 uppercase tracking-wider">
              {modalProject.category}
            </span>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-center">
              {modalProject.title}
            </h3>
            <p className="text-gray-300 text-center mb-4">
              {modalProject.description}
            </p>
            <button
              onClick={() => setModalProject(null)}
              className="mt-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 py-2 rounded-full transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer !rounded-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
