import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CountrySelector = ({ countryCodes, onCountryChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    onCountryChange(country.dial_code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-md text-base bg-white"
      >
        <span>
          {selectedCountry.emoji} {selectedCountry.name}
        </span>
        <FaChevronDown className="text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
          {countryCodes.map((country, index) => (
            <button
              key={index}
              onClick={() => handleCountrySelect(country)}
              className="flex items-center p-2 w-full hover:bg-gray-100 text-left"
            >
              <span className="mr-2">{country.emoji}</span>
              <span>{country.name} ({country.dial_code})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
