import React from "react";
import "./Current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          s
          alt="weather"
          className="img"
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="row">
            <span className="label">
              <u>Details</u> :
            </span>
          </div>
          <div className="row">
            <span className="label">Feels like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="label">Pressure</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
          <div className="row">
            <span className="label">min/max </span>
            <span className="value">
              {Math.round(data.main.temp_max)}°C /
              {Math.round(data.main.temp_min)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
