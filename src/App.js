import React, { Component } from "react";
import logo from "@/assets/logo.svg";
import "@/App.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { getMenuData } from "@/menu.js";

class App extends Component {
  render() {
    const RouteWithSubRoutes = route => (
      <Route
        exact={route.exact ? route.exact : false}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-template</h1>
        </header>
        <nav className="App-nav">
          <Router>
            <div>
              {getMenuData().map((route, index) => (
                <NavLink
                  exact={route.exact}
                  key={index}
                  to={route.path}
                  className="nav-link"
                  activeClassName="nav-link_active"
                >
                  {route.name}
                </NavLink>
              ))}
              {getMenuData().map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </div>
          </Router>
        </nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
