import React, { useState, useCallback } from 'react';

const VideoSection = ({ videoData }) => {
  const { title, subtitle, description, videoUrl } = videoData;

  // State to manage video loading
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle video load event
  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="text-center py-10 px-5">
      <h1 className="text-black text-[60px] font-bold leading-[65px] pt-10">
        {title}
      </h1>
      <h4 className="text-black text-lg pt-7">
        {subtitle}
      </h4>
      <p
        className="mt-0 mb-4 text-black pt-7"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>

      <div className="w-[1170px] h-[658px] mx-auto pt-7">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={handleVideoLoad}
          className={videoLoaded ? 'w-full h-full' : 'hidden'}
        ></iframe>
        {!videoLoaded && <p>Loading video...</p>} {/* Loading state */}
      </div>
    </div>
  );
};

export default VideoSection;
