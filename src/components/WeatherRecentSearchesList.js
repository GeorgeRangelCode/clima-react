import React from "react";
import { useStylesWeatherRecentSearchesList } from "../styles/StylesWeatherRecentSearchesList";
import { WeatherRecentSearchesCard } from "./WeatherRecentSearchesCard";

export const WeatherRecentSearchesList = () => {
  const classes = useStylesWeatherRecentSearchesList();

  return (
    <>
      <h1 className={classes.weatherListTitle}>Busqueda reciente</h1>
      <section className={classes.weatherList}>
        <WeatherRecentSearchesCard />
      </section>
    </>
  );
};
