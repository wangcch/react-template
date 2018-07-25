import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

import DefaultLayput from "./layouts/DefaultLayout";

class App extends Component {
  render() {
    return (
      <Switch>
        <DefaultLayput exact path="/" component={Home} />
        <DefaultLayput exact path="/about" component={About} />
        <Route exact component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
