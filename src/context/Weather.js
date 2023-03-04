import { createContext, useState } from "react";
import { getSearchedWeather } from "../api";
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  //functions
  const loadSearchedData = async () => {
    const data = await getSearchedWeather(searchQuery);
    setWeatherData(data);
  };
  const loadCurrentLocationData = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let longi = position.coords.longitude;
      const data = await getSearchedWeather(`${lat},${longi}`);
      setWeatherData(data);
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loadSearchedData,
        setSearchQuery,
        searchQuery,
        loadCurrentLocationData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
