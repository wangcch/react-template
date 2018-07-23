import React, { Component } from "react";
import API from "@/lib/api";

class Home extends Component {
  getAxios = () => {
    API.get(`demo`).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p>
          To get started, edit <code>src/pages</code> and save to reload.
        </p>

        <button onClick={this.getAxios}>get api</button>
      </div>
    );
  }
}

export default Home;
