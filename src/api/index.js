const base_url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}`;

export const getSearchedWeather = async (city) => {
  const response = await fetch(`${base_url}&q=${city}`, {
    method: "GET",
  });
  return await response.json();
};
