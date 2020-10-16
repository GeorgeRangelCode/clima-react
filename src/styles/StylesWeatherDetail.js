import { makeStyles } from "@material-ui/core/styles";

export const useStylesWeatherDetail = makeStyles(() => ({
  containerWeatherDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerDetail: {
    borderTop: "1px solid gray",
    paddingTop: "15px",
  },
  weatherDescription: {
    fontWeight: 700,
  },
  tempMax: {
    background: "#2999bf",
    padding: "3px 5px",
    margin: "3px",
    borderRadius: "5px",
    fontWeight: 800,
    color: "white",
  },
  tempMin: {
    background: "#48484a",
    padding: "3px 5px",
    margin: "3px",
    borderRadius: "5px",
    fontWeight: 800,
    color: "white",
  },
}));
