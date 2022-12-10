import "./App.css";
import Search from "./Components/Search/Search";
import Forecast from "./Components/forecast/forecast";
import CurrentWeather from "./Components/Current weather/Current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currWeather, setCurrWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherF = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastF = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherF, forecastF])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currWeather && <CurrentWeather data={currWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
