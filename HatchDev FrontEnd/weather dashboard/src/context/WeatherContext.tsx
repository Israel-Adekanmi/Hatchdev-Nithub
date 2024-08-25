import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { WeatherContextType, WeatherData, ForecastData, AirData } from '../types/WeatherTypes';

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [airData, setAirData] = useState<AirData | null>(null);

  const fetchWeatherData = async (city: string) => {
    const API_KEY = 'cb1c962bcfe4b4a935f6e7bb30f0ca6d';

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeatherData({
        city: weatherResponse.data.name,
        temperature: weatherResponse.data.main.temp,
        chanceOfRain: weatherResponse.data.clouds.all,
      });

      setAirData({
        feelsLike: weatherResponse.data.main.feels_like,
        uvIndex: 3, // OpenWeatherMap free tier doesn't provide UV Index, hardcoded for now
        windSpeed: weatherResponse.data.wind.speed,
        visibility: weatherResponse.data.visibility / 1000,
        pressure: weatherResponse.data.main.pressure,
      });

      setForecastData(forecastResponse.data.list.slice(0, 6).map((forecast: any) => ({
        time: new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temperature: forecast.main.temp,
        icon: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`,
        description: forecast.weather[0].description,
      })));
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, forecastData, airData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
