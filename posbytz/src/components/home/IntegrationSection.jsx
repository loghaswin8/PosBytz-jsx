import React, { useEffect, useState } from 'react';

const IntegrationSection = ({ integrationData }) => {
  // State to hold the integration data
  const [data, setData] = useState({ title: '', description: '', logos: [] });

  // Use useEffect to set data from props
  useEffect(() => {
    if (integrationData) {
      setData(integrationData);
    }
  }, [integrationData]);

  // Function to require images dynamically
  const requireImage = (imageName) => {
    return require(`../../images/${imageName}`);
  };

  // Split logos into rows of 6 for 3 rows
  const logoRows = [];
  const logosToDisplay = data.logos || [];

  for (let i = 0; i < logosToDisplay.length; i += 6) {
    logoRows.push(logosToDisplay.slice(i, i + 6));
  }

  return (
    <div className="integration-section pt-[190px] bg-[#f9f9f9] text-center px-5 py-10">
      <div>
        <h2 className="text-3xl mb-2 pb-4">{data.title}</h2>
        <p className="text-lg mb-7 pb-6">{data.description}</p>
      </div>
      <div className="integration-logos">
        {logoRows.map((row, rowIndex) => (
          <ul key={rowIndex} className="flex justify-center flex-wrap gap-2">
            {row.map((logo, index) => (
              <li key={index} className="pt-2 mx-2">
                <img
                  src={requireImage(logo.src)}
                  alt={logo.alt}
                  className="w-[90px] h-auto rounded-[10px] shadow-md transition-transform duration-400 ease-in-out transform rotate-[-5deg] hover:rotate-[-10deg] hover:scale-[1.1] hover:shadow-lg animate-diagonalMove"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSection;
