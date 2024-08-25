// import { useContext } from 'react';
// import { WeatherContext } from '../context/WeatherContext';

// function Forecast() {
//   const weatherContext = useContext(WeatherContext);

//   if (!weatherContext || weatherContext.forecastData.length === 0) return null;

//   return (
//     <div className="forecast">
//       <h3>Tomorrow's Forecast</h3>
//       <div className="hourly-forecast">
//         {weatherContext.forecastData.map((hour, index) => (
//           <div key={index} className="hour">
//             <p>{hour.time}</p>
//             <img src={hour.icon} alt={hour.description} />
//             <p>{hour.temperature}°C</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Forecast;


import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function Forecast() {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext || weatherContext.forecastData.length === 0) return null;

  return (
    <div className="forecast">
      <h3 className="text-white text-lg mb-4">Tomorrow's Forecast</h3>
      <div className="hourly-forecast flex flex-wrap gap-4">
        {weatherContext.forecastData.map((hour, index) => (
          <div
            key={index}
            className={`hour p-4 rounded-lg text-white flex flex-col items-center justify-center ${
              index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
            }`}
          >
            <p>{hour.time}</p>
            <img src={hour.icon} alt={hour.description} className="w-10 h-10" />
            <p>{hour.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
