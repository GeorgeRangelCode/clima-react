import React from "react";
import { useStylesWeatherDetail } from "../styles/StylesWeatherDetail";

export const WeatherDetail = ({ data }) => {
  console.log("WeatherDetail -> data", data);
  const classes = useStylesWeatherDetail();

  if (data === null || data.cod === "404") return null;

  const { list } = data;

  return (
    <div className={classes.containerWeatherDetail}>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@4x.png`}
          alt=""
        />
      </div>
      <div className={classes.containerDetail}>
        <span className={classes.weatherDescription}>
          {list[0].weather[0].description}
        </span>
        <span className={classes.tempMax}>
          {list[0].main.temp_max} &#x2103;
        </span>
        <span className={classes.tempMin}>
          {list[0].main.temp_min} &#x2103;
        </span>
        <span>
          Humedad: {list[0].main.humidity}% | vientos: {list[0].wind.speed} m/s
        </span>
      </div>
    </div>
  );
};
