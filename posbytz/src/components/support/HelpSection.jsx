import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Adjust import for your icons

const iconMap = {
  "fas fa-video": faVideo,
  "far fa-file-alt": faFileAlt,
};

const HelpSection = ({ helpItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (helpItems) {
      setItems(helpItems);
    }
  }, [helpItems]);

  return (
    <section className="py-10 bg-gray-100 text-center">
      <div className="max-w-screen-xl mx-auto  px-10">
        <div className="mb-10">
          <h2 className="text-2xl text-[#051441] mb-7">How can we help?</h2>
        </div>
        <div className="pt-7 grid grid-cols-1 md:grid-cols-2 gap-7">
          {items.map((item, index) => (
            <div
              className="bg-white p-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl pb-12"
              key={index}
            >
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={iconMap[item.icon]} 
                  className="text-[#FF8C00] text-4xl border-4 border-[#FF8C00] rounded-full p-3 bg-white shadow-md" 
                />
              </div>
              <div className="help-content">
                <h2 className="text-[#051441] text-xl font-semibold leading-6">{item.title}</h2>
                <p className="pt-5 pb-1 text-gray-600 text-base leading-relaxed">{item.description}</p>
              </div>
              <div className="help-button pt-10">
                <a
                  className="elementor-button elementor-button-link elementor-size-sm mt-4 px-7 py-4 text-base rounded-full bg-[#FF8C00] text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#FF8C00]"
                  href={item.button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">{item.button.text}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
