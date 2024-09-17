import React from 'react';
import './ExportButton.module.css';

const ExportButton = () => {
  const handleExport = () => {
    // Implement export functionality
  };

  return (
    <button className="bg-blue-500 text-white px-4 py-2 mt-6 rounded" onClick={handleExport}>
      Export Data
    </button>
  );
};

export default ExportButton;
