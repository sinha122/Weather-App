import React from 'react';

function Weather({ data }) {
  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <p>{data.weather[0].main} - {data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
      <p>Rain: {data.main.rain}%</p>
    </div>
  );
}

export default Weather; 
