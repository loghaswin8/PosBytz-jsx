import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Features = ({ featuresData }) => {
  // Ensure featuresData is an array or set to an empty array
  const validFeaturesData = Array.isArray(featuresData) ? featuresData : [];

  // Set the initial active feature safely; if no features are available, set it to null
  const [activeFeature, setActiveFeature] = useState(validFeaturesData.length > 0 ? validFeaturesData[0] : null);
  const [imageLoaded, setImageLoaded] = useState(false); // Track if the feature image is loaded

  // Update imageLoaded state when active feature changes
  useEffect(() => {
    setImageLoaded(false); // Reset image loaded state on feature change
  }, [activeFeature]);

  // Handle feature button click
  const handleButtonClick = useCallback((feature) => {
    setActiveFeature(feature);
  }, []);

  // Memoize the current feature text to optimize performance
  const featureText = useMemo(() => {
    if (!activeFeature) return null; // Handle case where activeFeature is null
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

  // If there are no valid features, display a message or a fallback UI
  if (validFeaturesData.length === 0) {
    return <div>No features available</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-center mb-8 text-6xl font-bold pt-[100px]">
        Features of Our ERP Software
      </h1>

      <div id="buttons-container" className="flex flex-wrap gap-6 justify-evenly p-2">
        {validFeaturesData.map((feature) => (
          <button
            key={feature.id}
            className={`flex flex-col items-center justify-center p-6 bg-white border-b-4 cursor-pointer w-10 transition-all duration-300 ${activeFeature && activeFeature.id === feature.id ? 'text-[#263B5E] border-orange-500' : 'text-[#263B5E]'}`}
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

      <div id="content-display" className="flex items-start mt-10 mx-auto p-4 max-w-[90%] bg-[#f9f9f9] rounded-md">
        <div className="content-text font-roboto text-[22px] font-semibold leading-[30px]">
          {featureText} {/* Memoized feature text */}
        </div>

        <div className="ml-4">
          {activeFeature && (
            <img
              src={activeFeature.contentImgSrc}
              alt={activeFeature.name}
              onLoad={() => setImageLoaded(true)} // Set image as loaded once fully loaded
              className={`max-w-[500px] w-[130%] h-[750%] rounded-md transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
