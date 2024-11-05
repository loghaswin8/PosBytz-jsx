import React, { useEffect, useState, useRef } from 'react';

// Predefined positions for logos
const predefinedPositions = [
  { left: '5%', top: '23%' },
  { left: '15%', top: '50%' },
  { left: '25%', top: '80%' },
  { left: '30%', top: '20%' },
  { left: '45%', top: '60%' },
  { left: '50%', top: '10%' },
  { left: '65%', top: '40%' },
  { left: '75%', top: '15%' },
  { left: '85%', top: '60%' },
  { left: '10%', top: '10%' },
  { left: '20%', top: '35%' },
  { left: '30%', top: '65%' },
  { left: '40%', top: '25%' },
  { left: '50%', top: '45%' },
  { left: '60%', top: '15%' },
  { left: '70%', top: '65%' },
  { left: '80%', top: '35%' },
  { left: '90%', top: '10%' },
];

// Helper function to generate a random position
const generateRandomPosition = () => ({
  left: `${Math.floor(Math.random() * 80) + 10}%`,
  top: `${Math.floor(Math.random() * 80) + 10}%`,
});

const IntegrationSection = ({ integrationData }) => {
  const [data, setData] = useState({ title: '', description: '', logos: [] });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (integrationData) {
      setData(integrationData);
    }
  }, [integrationData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getImagePath = (imageName) => {
    return `/images/${imageName}`;
  };

  const logosToDisplay = data.logos || [];

  return (
    <div
      ref={sectionRef}
      className="integration-section pt-[190px] bg-[#f9f9f9] text-center px-5 py-10 relative"
    >
      <div>
        <h2 className="text-3xl mb-2 pb-4">{data.title}</h2>
        <p className="text-lg mb-7 pb-6">{data.description}</p>
      </div>
      <div className="integration-logos relative h-[39rem] overflow-hidden">
        {logosToDisplay.map((logo, index) => {
          const delay = index % 2 === 0 ? `${Math.floor(index / 2) * 0.3}s` : `${Math.floor((index - 1) / 2) * 0.3 + 0.15}s`;

          const position = predefinedPositions[index] || generateRandomPosition();

          return (
            <img
              key={index}
              src={getImagePath(logo.src)}
              alt={logo.alt}
              className={`absolute w-[90px] h-auto rounded-[10px] shadow-md opacity-0 transition-opacity duration-700 ${isVisible ? 'animate-fadeIn' : ''}`}
              style={{
                animationDelay: delay,
                left: position.left,
                top: position.top,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationSection;
