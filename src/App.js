import React, { Component } from "react";
import "@/App.scss";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import Main from "@/components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <NavMenu />
        </header>
        <Main />
        <footer>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
