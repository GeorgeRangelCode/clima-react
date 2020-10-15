import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStylesLayout } from "../styles/StylesLayout";
import { Header } from "./Header";
import { CustomDrawer } from "./CustomDrawer";
import { useDrawer } from "../hooks/useDrawer";

export const Layout = ({ children }) => {
  const classes = useStylesLayout();
  const theme = useTheme();

  const { open, handleDrawerOpen, handleDrawerClose } = useDrawer();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        classes={classes}
      />

      <CustomDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        classes={classes}
        theme={theme}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
