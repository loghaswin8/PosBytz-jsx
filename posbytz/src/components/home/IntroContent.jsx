import React from 'react';

const IntroContent = ({ introData }) => {
  return (
    <div>
      <div className="mt-16 text-center p-7 pt-16 bg-[#fffff7]">
        <h1 className="text-5xl text-black font-bold mb-5 leading-[65px] font-roboto pt-[100px]">
          {introData.heading.split('<br>').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== introData.heading.split('<br>').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg text-black max-w-2xl mx-auto text-center font-roboto font-normal">
          {introData.paragraph}
        </p>
      </div>

      <div className="text-center my-5 bg-orange-500 text-white py-1 px-12 rounded-full w-[200.562px] ml-[43%]">
        <button className="bg-transparent text-white font-roboto font-bold text-lg h-12 leading-5  mx-auto transition-all duration-300 ease-in-out">
          {introData.buttonText}
        </button>
      </div>


      <div className="text-center pl-[10%] pt-[30px]">
        <img
          src={introData.image.src}
          alt={introData.image.alt}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IntroContent;
