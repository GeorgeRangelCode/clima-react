import { makeStyles } from "@material-ui/core/styles";

export const useStylesWeatherCard = makeStyles((theme) => ({
  weatherCard: {
    [theme.breakpoints.up("md")]: {
      borderLeft: "1px solid gray",
      padding: "0 25px",
      "&:nth-of-type(1)": {
        border: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid gray",
      "&:nth-of-type(7)": {
        border: "none",
      },
      padding: "0",
    },
    width: "170px",
    height: "250px",
    textAlign: "center",
  },
  weatherTextDate: {
    fontSize: "13px",
    color: "#48484a",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  weatherTextTemp: {
    fontWeight: 800,
    fontSize: "15px",
    color: "#4a4a4a",
  },
  weatherTextDescription: {
    fontWeight: 400,
    fontSize: "13px",
    color: "#4a4a4a",
    marginTop: 0,
  },
}));
