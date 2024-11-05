import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faEnvelopeOpenText, faHeadset, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const HowToReach = ({ howToReachData }) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (howToReachData) {
      setTitle(howToReachData.title);
      setDescription(howToReachData.description);
      setCards(howToReachData.cards);
    } else {
      setError("No data available for 'How to Reach'");
    }
  }, [howToReachData]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Icon mapping
  const iconMap = {
    handshake: faHandshake,
    "envelope-open-text": faEnvelopeOpenText,
    headset: faHeadset
  };

  return (
    <section className="py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md text-center w-full max-w-xs">
            <i className="mb-5">
              <FontAwesomeIcon icon={iconMap[card.icon]} className="text-5xl text-orange-500" aria-hidden="true" />
            </i>
            <h2 className="text-xl font-medium text-blue-800 mb-3 text-[#263b5e]">
              <a href={card.link} className="no-underline hover:underline">
                {card.title}
              </a>
            </h2>
            <p className="text-base text-gray-700 mb-12">{card.description}</p>
            <a href={card.link} className="text-2xl text-gray-400 transition-colors duration-300 hover:text-orange-500">
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToReach;
