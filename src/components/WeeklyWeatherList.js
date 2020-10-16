import React from "react";
import { useStylesWeeklyWeatherList } from "../styles/StylesWeeklyWeatherList";
import { WeatherCard } from "./WeatherCard";

export const WeeklyWeatherList = ({ dataWeek }) => {
  const classes = useStylesWeeklyWeatherList();

  if (dataWeek === null || dataWeek.cod === "404") return null;

  return (
    <section className={classes.weatherList}>
      {dataWeek.map((weatherItem, index) => (
        <WeatherCard key={index} weatherItem={weatherItem} />
      ))}
    </section>
  );
};
