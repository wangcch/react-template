import React, { Component } from "react";
import logo from "@/assets/logo.svg";
import "@/App.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav className="App">
          <Router>
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
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
