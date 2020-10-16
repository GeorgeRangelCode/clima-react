import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useStylesLoading } from "../styles/StylesLoading";

export const Loading = () => {
  const classes = useStylesLoading();

  return (
    <div className={classes.wrapperLoading}>
      <CircularProgress style={{ color: "#2999bf" }} size={150} />;
    </div>
  );
};
