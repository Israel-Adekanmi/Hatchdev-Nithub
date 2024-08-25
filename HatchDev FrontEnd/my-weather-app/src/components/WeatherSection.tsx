import React, { useState } from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const WeatherApp: React.FC = () => {
  const { currentCity, setCurrentCity, weatherData, setWeatherData } = useWeatherContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const fetchWeatherData = async (city: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();

      if (data.cod === 200) { // Check if the request was successful
        setCurrentCity(city);
        setWeatherData(data);
      } else {
        console.error('City not found');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(searchTerm);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData && weatherData.main && (
        <div>
          <h2>{currentCity}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          {/* Display other weather details */}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
