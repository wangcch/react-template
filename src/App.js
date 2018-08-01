import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

import DefaultLayput from "./layouts/DefaultLayout";

class App extends Component {
  render() {
    const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      );
    }

    return (
      <Switch>
        <LayoutRoute exact path="/" component={Home} layout={DefaultLayput} />
        <LayoutRoute exact path="/about" component={About} layout={DefaultLayput} />
        <Route exact component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
