import { getWeather, filterWeatherData } from "./weatherApi";

export const fetchWeatherWithErrorHandling = () => {
  return getWeather()
    .then((data) => {
      const filteredData = filterWeatherData(data);
      return {
        ...filteredData,
        isApiFailed: false,
      };
    })
    .catch((err) => {
      console.error("Environment detection failed:", err);
      return {
        city: "",
        temp: { F: 0, C: 0 },
        humidity: 0,
        isApiFailed: true,
      };
    });
};
