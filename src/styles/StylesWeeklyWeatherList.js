import { makeStyles } from "@material-ui/core/styles";

export const useStylesWeeklyWeatherList = makeStyles(() => ({
  weatherList: {
    marginTop: "3rem",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    border: "1px solid gray",
  },
}));
