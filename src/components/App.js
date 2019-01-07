import React, { Component } from "react";

import Header from "./navigation/navBar";
import LandingPage from "./landingPage/landing";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
