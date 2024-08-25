import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: 'b8a1401fece75a1f4948414ce3af352e' // Replace with your OpenWeatherMap API key
        }
      });

      const { coord } = response.data; // Extract coordinates from the response
      if (coord) {
        setLocation({ lat: coord.lat, lon: coord.lon });
      } else {
        setError('Coordinates are not available in the response');
      }
    } catch (error) {
      setError('Error fetching location data');
      console.error('Error fetching location data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="map-container p-4">
      <h2 className="text-xl font-bold mb-4">Map</h2>
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          onClick={fetchLocation}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Find Location'}
        </button>
      </div>
      <div className="map-content bg-gray-200 dark:bg-gray-700 h-80 flex justify-center items-center rounded">
        {error && <p className="text-red-500">{error}</p>}
        {location ? (
          <MapContainer 
            center={[location.lat, location.lon]} 
            zoom={13} 
            className="h-full w-full rounded"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lon]}>
              <Popup>
                {`Location: ${location.lat}, ${location.lon}`}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          !loading && <p className="text-gray-700 dark:text-gray-300">Enter a city and click "Find Location" to see the map.</p>
        )}
      </div>
    </div>
  );
};

export default MapPage;

