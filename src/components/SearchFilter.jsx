import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm, filters, setFilters }) => {
  return (
    <div>
      {/* Search by City Name */}
      <input
        type="text"
        placeholder="Search by city name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Temperature Filter (Range Slider) */}
      <div>
        <label>
          Temperature (°C):
          <input
            type="range"
            min={-50}
            max={50}
            value={filters.temp || 0}
            onChange={(e) => setFilters((prev) => ({ ...prev, temp: e.target.value }))}
          />
          <span>{filters.temp}°C</span>
        </label>
      </div>

      {/* Wind Speed Filter (Range Slider) */}
      <div>
        <label>
          Wind Speed (m/s):
          <input
            type="range"
            min={0}
            max={50}
            value={filters.windSpeed || 0}
            onChange={(e) => setFilters((prev) => ({ ...prev, windSpeed: e.target.value }))}
          />
          <span>{filters.windSpeed} m/s</span>
        </label>
      </div>

      {/* Humidity Filter (Text Inputs for Min/Max) */}
      <div>
        <label>
          Min Humidity (%):
          <input
            type="number"
            value={filters.minHumidity || ""}
            onChange={(e) => setFilters((prev) => ({ ...prev, minHumidity: e.target.value }))}
          />
        </label>
        <label>
          Max Humidity (%):
          <input
            type="number"
            value={filters.maxHumidity || ""}
            onChange={(e) => setFilters((prev) => ({ ...prev, maxHumidity: e.target.value }))}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchFilter;
