import { useContext } from "react";
import { WeatherContext } from "../context/Weather";

function Search() {
  const { setSearchQuery } = useContext(WeatherContext);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter Location to check"
      />
    </>
  );
}

export default Search;
