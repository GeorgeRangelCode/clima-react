import { makeStyles } from "@material-ui/core/styles";

export const useStylesWeatherRecentSearchesList = makeStyles(() => ({
  weatherList: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-betwen",
    flexWrap: "wrap",
    gap: "10px",
  },
  weatherListTitle: {
    color: "#575757",
    paddingLeft: "16px",
    fontSize: "18px",
  },
}));
