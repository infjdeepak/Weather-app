import Search from "../components/Search";
import Button from "../components/Button";
import { useContext } from "react";
import { WeatherContext } from "../context/Weather";
function Card() {
  const { loadSearchedData, weatherData } = useContext(WeatherContext);
  //handler
  const searchWeatherHandle = (e) => {
    e.preventDefault();
    loadSearchedData();
  };

  return (
    <div className="weather-card">
      <form className="weather-search">
        <Search />
        <Button value="Check" event={searchWeatherHandle} />
      </form>
      {weatherData && (
        <div className="weather-info">
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.location.name}
          />
          <h2>{weatherData.current.temp_c}</h2>
          <p>
            {` ${weatherData.location.name},
           ${weatherData.location.region},
            ${weatherData.location.country}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
