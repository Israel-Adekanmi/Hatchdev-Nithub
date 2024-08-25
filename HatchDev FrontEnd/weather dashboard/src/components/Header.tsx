import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

interface HeaderProps {
  showSearch: boolean;  // Conditionally render search bar
}

const Header: React.FC<HeaderProps> = ({ showSearch }) => {
  const [city, setCity] = useState<string>('');
  const weatherContext = useContext(WeatherContext);

  const handleSearch = () => {
    if (weatherContext) {
      weatherContext.fetchWeatherData(city);
    }
  };

  return (
    <header className="header">
      {showSearch && (
        <>
          <input
            type="text"
            placeholder="Search for cities..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-dark-placeholder p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-100"
          />
          <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
