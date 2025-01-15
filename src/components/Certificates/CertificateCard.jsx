import React, { useState } from 'react';

const CertificateCard = ({ year, logo, title, location, category, backgroundImage, url }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleSelect}
      className={`relative w-full max-w-3xl mx-auto p-4 rounded-lg shadow-lg transition-transform duration-300 ${
        isSelected ? 'text-yellow-500 bg-white' : 'text-white hover:text-yellow-500 hover:bg-white hover:scale-105'
      }`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
          isSelected ? 'opacity-100' : 'opacity-0 hover:opacity-100'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 bg-blue-900 bg-opacity-75 p-4 rounded-lg flex items-center justify-between w-full h-full">
        <div className="text-lg font-bold mr-5">{year}</div>

        <div className="flex items-center justify-center w-12 h-12 rounded-full">
          <img className="h-8 w-8 object-contain" src={logo} alt={`${title} logo`} />
        </div>

        <div className="flex-1 mx-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{location}</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded-full font-medium text-sm">
            <span>{category}</span>
          </div>
          <div>
            <button
              onClick={() => window.open(url, '_blank')}
              className="bg-yellow-500 text-black px-3 py-1 rounded-full font-medium text-sm hover:bg-yellow-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
