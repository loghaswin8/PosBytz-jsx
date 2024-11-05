import React from 'react';

const ReasonsSection = ({ reasonsData }) => {
  // Log the reasonsData received
  console.log('ReasonsSection data:', reasonsData);

  // Destructure properties from reasonsData, providing default values
  const { mainTitle, subtitle, highlight, reasons = [] } = reasonsData || {};

  return (
    <div className="text-center pt-24">
      <h1 className="text-black font-roboto text-[50px] font-semibold leading-[65px] mb-5">
        {mainTitle}
      </h1>
      <h2 className="text-black font-semibold mb-5">
        {subtitle}
      </h2>
      <h1 className="text-[#FF8C00] pt-2">{highlight}</h1>
      <div className="pt-2 grid grid-cols-3 gap-[100px] mx-auto max-w-[1000px]">
        {reasons.length > 0 ? (
          reasons.map((reason) => (
            <div
              className="border-[4px] rounded-tl-[80px] rounded-br-[80px] p-5 bg-[#f9f9f9] transition-transform duration-300 ease-in-out"
              key={reason.id}
              style={{ borderColor: reason.borderColor }}
            >
              <img
                src={reason.image}
                alt={reason.title}
                className="mx-auto h-auto"
              />
              <h2
                className="mt-4 mb-2 transition-transform duration-300 ease-in-out text-[20px] font-bold"
                style={{ color: reason.borderColor }}
              >
                {reason?.title}
              </h2>
              <h5 className="mt-2 mb-2">{reason?.subtitle}</h5>
              <p className="mt-2 mb-2">{reason?.description}</p>
            </div>
          ))
        ) : (
          <p>No reasons available.</p>
        )}
      </div>
    </div>
  );
};

export default ReasonsSection;
