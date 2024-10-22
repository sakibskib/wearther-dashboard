import React from "react";

const SummaryStats = ({ data }) => {
  const totalCities = data.length;
  const avgTemp = data.reduce((acc, item) => acc + item.temp, 0) / totalCities;
  const highestWindSpeed = Math.max(...data.map((item) => item.wind_spd));

  return (
    <div className="summary-stats">
      <h2>Summary Statistics</h2>
      <p>Total Cities: {totalCities}</p>
      <p>Average Temperature: {avgTemp.toFixed(2)}°C</p>
      <p>Highest Wind Speed: {highestWindSpeed} m/s</p>
    </div>
  );
};

export default SummaryStats;
