import React from "react";

const WeatherList = ({ data }) => {
  return (
    <div className="weather-list">
      <h2>Weather Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.city_name}>
            <strong>{item.city_name}</strong> - {item.temp}°C -{" "}
            {item.weather.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
