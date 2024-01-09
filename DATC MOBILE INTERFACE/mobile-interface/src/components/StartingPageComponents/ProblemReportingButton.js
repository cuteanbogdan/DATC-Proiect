import React from 'react';

const Button = ({ setShowModal }) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="absolute left-1/2 bottom-10 transform -translate-x-1/2 px-4 py-3 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      style={{ width: '40%' }}
    >
      Raporteaza probleme
    </button>
  );
};

export default Button;
