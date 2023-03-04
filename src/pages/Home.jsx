import { useEffect } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { WeatherContext } from "../context/Weather";

function Home() {
  const { loadCurrentLocationData } = useContext(WeatherContext);

  useEffect(() => {
    loadCurrentLocationData();
    console.log("loadCurrentLocationData");
  }, []);

  return (
    <div className="weather-wrapper">
      <h1>Weather App</h1>
      <Card />
    </div>
  );
}

export default Home;
