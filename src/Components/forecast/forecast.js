import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <>
      <label className="title"> Recent Forecasts: </label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="descript">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid">
                <div className="grid-item">
                  <label className="label">Pressure : </label>
                  <label className="value">{item.main.pressure} hPa</label>
                </div>
                <div className="grid-item">
                  <label className="label">Humidity : </label>
                  <label className="value">{item.main.humidity} %</label>
                </div>
                <div className="grid-item">
                  <label className="label">Clouds : </label>
                  <label className="value">{item.clouds.all} %</label>
                </div>
                <div className="grid-item">
                  <label className="label">Wind Speed : </label>
                  <label className="value">{item.wind.speed} m/s</label>
                </div>
                <div className="grid-item">
                  <label className="label">Sea Level : </label>
                  <label className="value">{item.main.sea_level} m</label>
                </div>
                <div className="grid-item">
                  <label className="label">Feels Like : </label>
                  <label className="value">
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
