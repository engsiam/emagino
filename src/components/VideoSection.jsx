import { useEffect, useState } from "react";

const LazyVideo = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasPlayed) {
            setHasPlayed(true); // Set hasPlayed to true once the video is about to load
          }
        }
      },
      { threshold: 0.25 }
    );
    const videoElement = document.getElementById(`video-${src}`);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => observer.disconnect();
  }, [src, hasPlayed]);

  return (
    <div id={`video-${src}`} className="relative">
      <video
        autoPlay={isVisible && hasPlayed}
        loop
        muted
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {isVisible ? <source src={src} type="video/mp4" /> : <p>{alt}</p>}
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
    </div>
  );
};

const VideoSection = ({ videoData }) => {
  return (
    <div>
      {videoData.map((video, index) => (
        <section key={index} className="h-screen relative overflow-hidden">
          <LazyVideo
            src={video.src}
            title={video.title}
            description={video.description}
            alt={video.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                {video.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8">{video.description}</p>
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black px-8 py-4 rounded-full text-lg font-bold !rounded-button whitespace-nowrap cursor-pointer">
                Book a Meeting
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default VideoSection;
