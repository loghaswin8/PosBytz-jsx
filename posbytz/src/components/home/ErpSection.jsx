import React from 'react';

const ErpSection = ({ erpData }) => {
  if (!erpData) {
    return <div>Loading...</div>;  // Handle case when data isn't loaded yet
  }

  return (
    <section className="erp-section">
      <div className="erp-content">
        <div>
          <h2 className="run-business-head">
            {erpData.heading.split('With')[0]}
            <span style={{ color: '#FF8C00' }}> With {erpData.heading.split('With')[1]}</span>
          </h2>
        </div>
        <div>
          <a
            className="elementor-button elementor-button-link elementor-size-md"
            href={erpData.buttonLink}
          >
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">{erpData.buttonText}</span>
            </span>
          </a>
        </div>
      </div>
      <div className="erp-image">
        <img src={erpData.imageSrc} alt={erpData.imageAlt} />
      </div>
    </section>
  );
};

export default ErpSection;
