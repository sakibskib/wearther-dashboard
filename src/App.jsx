import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./components/WeatherList";
import SummaryStats from "./components/SummaryStats";
import SearchFilter from "./components/SearchFilter";
import './App.css'; 

const API_KEY = "";
// const API_KEY = import.meta.env.VITE_APP_API_KEY;

// const City_ID = "5128581,5368361,4887398,4699066,5308655,4560349,4726206,5391811,4684888,5392171,4671654,4116315,4691930,5066001,4460243,5391959,4259418,5809844,5419384,4140963";
function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/current?city=Raleigh&key=${API_KEY}`
        );
        setWeatherData(response.data.data);
        setFilteredData(response.data.data);
        console.log(response.data.data);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchWeather();
  }, []);

  useEffect(() => {
    const filtered = weatherData.filter((item) => {
      const matchesSearch = item.city_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesTemp =
        (!filters.temp || item.temp <= filters.temp);

      const matchesWindSpeed =
        (!filters.windSpeed || item.wind_spd <= filters.windSpeed);

      const matchesHumidity =
        (!filters.minHumidity || item.rh >= filters.minHumidity) &&
        (!filters.maxHumidity || item.rh <= filters.maxHumidity);

      return matchesSearch && matchesTemp && matchesWindSpeed && matchesHumidity;
    });

    setFilteredData(filtered);
  }, [weatherData, searchTerm, filters]);
console.log(weatherData);
  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
      />
      <SummaryStats data={filteredData} />
      <WeatherList data={filteredData} />
    </div>
  );
}

export default App;
