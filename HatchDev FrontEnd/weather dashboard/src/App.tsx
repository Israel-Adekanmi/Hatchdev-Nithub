import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherProvider from './context/WeatherContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainWeather from './components/MainWeather';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import CitySearch from './pages/CitySearch';
import MapPage from './pages/MapPage';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Router>
        <div className={`app ${darkMode ? 'dark' : ''}`}>
          <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setSelectedPage={setSelectedPage} />
          <div className="main-content dark:bg-gray-900 dark:text-gray-100">
            <Header showSearch={selectedPage === 'Weather' || selectedPage === 'CitySearch'} />
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <MainWeather />
                    <Forecast />
                    <AirConditions />
                  </>
                } />
                <Route path="/cities" element={<CitySearch />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/settings" element={<div>Settings Page</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </WeatherProvider>
  );
}

export default App;
