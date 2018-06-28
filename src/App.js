import React, { Component } from "react";
import "@/App.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const webTitle = "React-template";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rt-wrap">
          <Header title={webTitle} />
        </div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
