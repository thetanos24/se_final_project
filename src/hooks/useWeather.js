import { useState, useEffect } from "react";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { fetchWeatherWithErrorHandling } from "../utils/weatherError";

export function useWeather() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: { F: 0, C: 0 },
    humidity: 0,
    isApiFailed: false,
  });

  useEffect(() => {
    getWeather()
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.error("Failed to fetch weather:", err);
        fetchWeatherWithErrorHandling().then(setWeatherData);
      });
  }, []);

  return weatherData;
}
