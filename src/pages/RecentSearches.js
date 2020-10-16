import React from "react";
import { Grid } from "@material-ui/core";
import { WeatherRecentSearchesList } from "../components/WeatherRecentSearchesList";

export const RecentSearches = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WeatherRecentSearchesList />
      </Grid>
    </Grid>
  );
};
