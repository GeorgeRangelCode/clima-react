import { makeStyles } from "@material-ui/core/styles";

export const useStylesSearchForm = makeStyles(() => ({
  searchForm: {
    maxWidth: "350px",
  },
  searchInput: {
    padding: "5px",
    fontSize: "17px",
    border: "1px solid grey",
    float: "left",
    width: "80%",
    background: "white",
    boxSizing: "border-box",
  },
  searchButton: {
    display: "flex",
    float: "left",
    padding: "3px 2px 3px 2px",
    background: "#c9c5c5",
    color: "#555454",
    border: "1px solid grey",
    borderLeft: "none",
    cursor: "pointer",
  },
  searchLabel: {
    fontWeight: 600,
    fontSize: "12px",
  },
}));
