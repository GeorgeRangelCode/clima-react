import React from "react";
import { useStylesWeatherCard } from "../styles/StylesWeatherCard";
import moment from "moment";

export const WeatherCard = ({ weatherItem }) => {
  const classes = useStylesWeatherCard();

  return (
    <article className={classes.weatherCard}>
      <h3 className={classes.weatherTextDate}>
        {`${moment.unix(weatherItem.dt).format("dddd")}, ${moment
          .unix(weatherItem.dt)
          .format("ll")}`}
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
        alt={weatherItem.weather[0].description}
      />
      <p className={classes.weatherTextTemp}>{weatherItem.temp.day} &#x2103;</p>
      <p className={classes.weatherTextDescription}>
        {weatherItem.weather[0].description}
      </p>
    </article>
  );
};
