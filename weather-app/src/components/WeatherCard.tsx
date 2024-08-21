/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import axios from "axios";
import "../styles/WeatherCard.css";
import logo from "../assets/logo.png";

const WeatherCard: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = "fd7c266167ec74a8471ac9423bd316fb";

  const getWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      setWeather(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setWeather(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="small">
        <img src={logo} alt="Izzy-Weather Forecast Logo" className="logo" />
        <h1 className="title">Izzy-Weather Forecast App</h1>
      </div>

      <p className="description">
        Get accurate weather forecasts for your location by entering your city
        or state below.
      </p>

      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city or state"
          className="input"
        />
        <button onClick={getWeather} className="button">
          Get Weather
        </button>
      </div>

      {loading && <p className="loading">Fetching Forecast...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
