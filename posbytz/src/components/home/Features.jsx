import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Features = ({ featuresData }) => {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]); // Set the initial active feature
  const [imageLoaded, setImageLoaded] = useState(false); // Track if the feature image is loaded

  // Update imageLoaded state when active feature changes
  useEffect(() => {
    setImageLoaded(false); // Reset image loaded state on feature change
  }, [activeFeature]);

  // Handle feature button click and memoize the handler to avoid re-creating the function
  const handleButtonClick = useCallback((feature) => {
    setActiveFeature(feature);
  }, []);

  // Memoize the current feature text to optimize performance
  const featureText = useMemo(() => {
    return (
      <>
        <p>{activeFeature.text[0]}</p>
        <ul className="list-none pl-0">
          {activeFeature.text.slice(1).map((item, index) => (
            <li key={index} className="relative pl-3 mb-2 text-lg text-[#54595F]">
              {item}
              <span className="absolute left-0 text-orange-500">✓</span>
            </li>
          ))}
        </ul>
      </>
    );
  }, [activeFeature]);

  return (
    <div className="p-10">
      <h1 className="text-center mb-8 text-6xl font-bold pt-[100px]">
        Features of Our ERP Software
      </h1>

      <div
        id="buttons-container"
        className="flex flex-wrap gap-6 justify-evenly p-2"
      >
        {featuresData.map((feature) => (
          <button
            key={feature.id}
            className={`flex flex-col items-center justify-center p-6 bg-white border-b-4 cursor-pointer w-10 transition-all duration-300 ${activeFeature.id === feature.id ? 'text-[#263B5E] border-orange-500' : 'text-[#263B5E]'}`}
            onClick={() => handleButtonClick(feature)}
          >
            <img
              src={feature.buttonImgSrc}
              alt={feature.name}
              className="max-w-[60px] mb-2"
            />
            <p className="text-lg font-bold">{feature.name}</p>
          </button>
        ))}
      </div>

      <div
        id="content-display"
        className="flex items-start mt-10 mx-auto p-4 max-w-[90%] bg-[#f9f9f9] rounded-md"
      >
        <div className="content-text font-roboto text-[22px] font-semibold leading-[30px]">
          {featureText} {/* Memoized feature text */}
        </div>


        <div className="ml-4">
          <img
            src={activeFeature.contentImgSrc}
            alt={activeFeature.name}
            onLoad={() => setImageLoaded(true)} // Set image as loaded once fully loaded
            className={`max-w-[500px] w-[130%] h-[750%] rounded-md transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
