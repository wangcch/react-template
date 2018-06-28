import React from "react";
import { Switch, Route } from "react-router-dom";
import { getMenuData } from "@/menu.js";

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact ? route.exact : false}
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const Main = () => (
  <main>
    <Switch>
      {getMenuData().map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </main>
);

export default Main;
