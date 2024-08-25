import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function AirConditions() {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext || !weatherContext.airData) return null;

  const { airData } = weatherContext;

  return (
    <div className="air-conditions">
      <div>
        <p>Feels like: {airData.feelsLike}°C</p>
      </div>
      <div>
        <p>UV Index: {airData.uvIndex}</p>
      </div>
      <div>
        <p>Wind: {airData.windSpeed} km/h</p>
      </div>
      <div>
        <p>Visibility: {airData.visibility} km</p>
      </div>
      <div>
        <p>Pressure: {airData.pressure} hPa</p>
      </div>
    </div>
  );
}

export default AirConditions;
