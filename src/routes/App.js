import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
import { RecentSearches } from "../pages/RecentSearches";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recent-searches" component={RecentSearches} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
