import { makeStyles } from "@material-ui/core/styles";

export const useStylesWeatherRecentSearchesCard = makeStyles((theme) => ({
  weatherRecentSearchesCard: {
    border: "1px solid #9b9999",
    padding: "0 25px",
    width: "170px",
    height: "220px",
    textAlign: "center",
  },
  weatherTextCity: {
    marginBottom: 0,
    fontSize: "16px",
    color: "#48484a",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  weatherTextTemp: {
    color: "white",
    margin: "3px",
    padding: "3px 5px",
    background: "#2999bf",
    fontWeight: 800,
    borderRadius: "2px",
    margin: "0px 25px 25px 25px",
  },
  weatherViewMore: {
    fontWeight: 400,
    fontSize: "13px",
    color: "#48484a",
    marginTop: 0,
    borderTop: "1px solid #9b9999",
    paddingTop: "10px",
  },
}));
