export interface WeatherData {
    city: string;
    temperature: number;
    chanceOfRain: number;
  }
  
  export interface ForecastData {
    time: string;
    temperature: number;
    icon: string;
    description: string;
  }
  
  export interface AirData {
    feelsLike: number;
    uvIndex: number;
    windSpeed: number;
    visibility: number;
    pressure: number;
  }
  
  export interface WeatherContextType {
    weatherData: WeatherData | null;
    forecastData: ForecastData[];
    airData: AirData | null;
    fetchWeatherData: (city: string) => void;
  }
  