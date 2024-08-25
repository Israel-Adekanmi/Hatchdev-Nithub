import React, { useState, useEffect } from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import axios from 'axios';

const Cities: React.FC = () => {
  const { setCurrentCity } = useWeatherContext();
  const [cities, setCities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch cities data (replace with your actual API call)
    const fetchCitiesData = async () => {
      try {
        const response = await axios.get(
          'https://api.example.com/cities' // Replace with your cities API
        );
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching cities data:', error);
      }
    };
    fetchCitiesData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCityClick = (city: string) => {
    setCurrentCity(city);
    // Optionally navigate to the main weather page
  };

  return (
    <div>
      <h1>Cities</h1>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {cities
          .filter((city) =>
            city.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((city) => (
            <li key={city} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cities;