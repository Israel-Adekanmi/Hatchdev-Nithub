import { useState, useEffect } from 'react';
import WeatherProvider from './context/WeatherContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainWeather from './components/MainWeather';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import CitySearch from './pages/CitySearch';
import MapPage from './pages/MapPage'; // Import the MapPage component
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<string>('Weather');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <WeatherProvider>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setSelectedPage={setSelectedPage} />
        <div className="main-content dark:bg-gray-900 dark:text-gray-100">
          <Header showSearch={selectedPage === 'Weather' || selectedPage === 'CitySearch'} />
          <main>
            {selectedPage === 'Weather' && (
              <>
                <MainWeather />
                <Forecast />
                <AirConditions />
              </>
            )}
            {selectedPage === 'Cities' && <CitySearch />}
            {selectedPage === 'Map' && <MapPage />} {/* Display MapPage if Map is selected */}
          </main>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
