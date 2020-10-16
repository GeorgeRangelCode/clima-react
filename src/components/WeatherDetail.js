import React from "react";
import { useStylesWeatherDetail } from "../styles/StylesWeatherDetail";

export const WeatherDetail = ({ dataDetail }) => {
  const classes = useStylesWeatherDetail();

  if (dataDetail === null || dataDetail.cod === "404") return null;

  const { main, weather, wind } = dataDetail;

  return (
    <div className={classes.containerWeatherDetail}>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt=""
        />
      </div>
      <div className={classes.containerDetail}>
        <span className={classes.weatherDescription}>
          {weather[0].description}
        </span>
        <span className={classes.tempMax}>{main.temp_max} &#x2103;</span>
        <span className={classes.tempMin}>{main.temp_min} &#x2103;</span>
        <span>
          Humedad: {main.humidity}% | vientos: {wind.speed} m/s
        </span>
      </div>
    </div>
  );
};
