import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WeatherApp from './components/WeatherSection';
import Cities from './components/CitiesSection';
import Map from './components/MapSection';
import SettingsSection from './components/SettingsSection';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <Routes>
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/cities" element={<Cities />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/settings" element={<SettingsSection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
