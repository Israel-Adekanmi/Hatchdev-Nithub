import React, { useState } from 'react';
import axios from 'axios';

const CitySearch: React.FC = () => {
  const [cities, setCities] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [limit] = useState<number>(10); // Number of cities per page

  const searchCities = async (newOffset: number = 0) => {
    try {
      const response = await axios.get(
        'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        {
          params: { namePrefix: searchTerm, limit, offset: newOffset },
          headers: {
            'X-RapidAPI-Key': '9ab4388300msha97653e21e2df91p1cf008jsnb92372ca9d1b',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      );
      setCities(response.data.data);
      setOffset(newOffset);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleNext = () => {
    searchCities(offset + limit);
  };

  const handlePrevious = () => {
    if (offset > 0) {
      searchCities(offset - limit);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"  // Add dark placeholder styling
      />
      <button onClick={() => searchCities(0)} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search City
      </button>

      <ul className="mt-4">
        {cities.map((city) => (
          <li key={city.id} className="p-2 border-b border-gray-300 dark:border-gray-600">
            {city.name}, {city.country}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <button
          onClick={handlePrevious}
          disabled={offset === 0}
          className="mr-2 p-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={cities.length < limit}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CitySearch;
