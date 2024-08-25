import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WeatherContextType {
  currentCity: string;
  setCurrentCity: (city: string) => void;
  weatherData: any; // Replace with your actual weather data type
  setWeatherData: (data: any) => void;
  theme: string;
  setTheme: (theme: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const WeatherContext = createContext<WeatherContextType>({
  currentCity: '',
  setCurrentCity: () => {},
  weatherData: {},
  setWeatherData: () => {},
  theme: 'light', // Default theme
  setTheme: () => {},
  backgroundColor: 'white', // Default background color
  setBackgroundColor: () => {},
});

interface WeatherProviderProps {
  children: ReactNode;
}

const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [theme, setTheme] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <WeatherContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        weatherData,
        setWeatherData,
        theme,
        setTheme,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => useContext(WeatherContext);

export { WeatherProvider, useWeatherContext };
