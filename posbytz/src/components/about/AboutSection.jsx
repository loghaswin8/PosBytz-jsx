import React from 'react';

const AboutSection = ({ aboutData, logos }) => {
  if (!aboutData || !Array.isArray(aboutData) || aboutData.length === 0) {
    return <div>No about data available</div>;
  }

  return (
    <section className="about-section p-5">
      <div className="about-container flex justify-between items-start pt-[110px] px-4">
        <div className="about-left w-48% p-2 pl-10">
          {aboutData.map((item, index) => (
            <div key={index}>
              <h2 className="text-black font-roboto text-5xl font-normal py-2">{item.title}</h2>
              <div>
                {Array.isArray(item.description) && item.description.map((text, descIndex) => (
                  <p key={descIndex} className="mt-2 mb-4 pb-2 w-[80%] text-[#54595f]">{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="about-right w-30% p-4 pt-24 flex flex-col items-center pr-[20%]">
          <div>
            <img
              src={logos.posBytz.src} // Access logos from the passed logos object
              alt={logos.posBytz.alt}
              className="max-w-[150%] mb-2 block"
            />
          </div>
          <div>
            <p className="pt-4 pb-4 text-center text-gray-600">{aboutData[0].productText}</p> {/* Adjust as necessary */}
          </div>
          <div className="logo-img-2 pl-12">
            <img
              src={logos.bytize.src} // Access logos from the passed logos object
              alt={logos.bytize.alt}
              className="max-w-[150%] mb-2 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
