import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function MainWeather() {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext || !weatherContext.weatherData) return null;

  const { weatherData } = weatherContext;

  return (
    <div className="main-weather flex justify-center items-center w-full text-3xl p-4 space-x-4">
      <h1 className="font-semibold">{weatherData.city}</h1>
      <p className="text-center font-semibold">
        Chance of rain: <span>{weatherData.chanceOfRain}%</span>
      </p>
      <h2 className="font-semibold">Temperature: {weatherData.temperature}°C</h2>
    </div>
  );
}

export default MainWeather;
