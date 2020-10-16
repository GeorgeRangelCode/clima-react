import React from "react";
import { useStylesWeatherRecentSearchesCard } from "../styles/StylesWeatherRecentSearchesCard";

export const WeatherRecentSearchesCard = () => {
  const classes = useStylesWeatherRecentSearchesCard();

  return (
    <article className={classes.weatherRecentSearchesCard}>
      <h3 className={classes.weatherTextCity}>Bogotá</h3>
      <img
        src={`http://openweathermap.org/img/wn/04d@2x.png`}
        alt="descripcion"
        width="85"
      />
      <p className={classes.weatherTextTemp}>15.3 &#x2103;</p>
      <p className={classes.weatherViewMore}>Ver mas</p>
    </article>
  );
};
