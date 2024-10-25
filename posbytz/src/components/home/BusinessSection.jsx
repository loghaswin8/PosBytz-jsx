import React from 'react';

const BusinessSection = ({ businessData }) => {
  if (!businessData) {
    return <div>Loading...</div>;  // Handle case when data isn't loaded yet
  }

  return (
    <section className="business-section">
      <div className="business-content">
        <h1 className="business-heading">
          {businessData.heading && businessData.heading.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </h1>
      </div>
      <div className="button-container">
        <a className="cta-button" href={businessData.buttonLink}>
          <span className="cta-button-text">{businessData.buttonText}</span>
        </a>
      </div>
    </section>
  );
};

export default BusinessSection;
