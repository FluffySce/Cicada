import React, { useState } from 'react';
import './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search publications..."
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
