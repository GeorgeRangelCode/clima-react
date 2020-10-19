import React from "react";
import { Alert } from "@material-ui/lab";
import { useStylesWeatherRecentSearchesCard } from "../styles/StylesWeatherRecentSearchesCard";

export const WeatherRecentSearchesCard = () => {
  const classes = useStylesWeatherRecentSearchesCard();

  const recentSearch = localStorage.getItem("recent-search");
  console.log("WeatherRecentSearchesCard -> recentSearch", recentSearch);

  if (recentSearch === null) {
    return (
      <Alert variant="outlined" severity="warning">
        No existe busqueda reciente.
      </Alert>
    );
  }

  const recentSearchJson = JSON.parse(recentSearch);
  console.log(
    "WeatherRecentSearchesCard -> recentSearchJson",
    recentSearchJson
  );

  return (
    <article className={classes.weatherRecentSearchesCard}>
      <h3 className={classes.weatherTextCity}>{recentSearchJson.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${recentSearchJson.weather[0].icon}@2x.png`}
        alt="descripcion"
        width="85"
      />
      <p className={classes.weatherTextTemp}>
        {recentSearchJson.main.temp} &#x2103;
      </p>
      <p className={classes.weatherViewMore}>Ver mas</p>
    </article>
  );
};
