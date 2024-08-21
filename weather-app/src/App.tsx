import React from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <WeatherCard />
    </div>
  );
};

export default App;
