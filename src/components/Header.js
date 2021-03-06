import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

export const Header = ({ open, handleDrawerOpen, classes }) => {
  return (
    <AppBar
      style={{ background: "#2999bf" }}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link className={classes.textLogo} to="/">
            Weather App
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
