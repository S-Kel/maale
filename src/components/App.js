import React, { Component } from "react";

import Header from "./navigation/navBar";
import LandingPage from "./landingPage/landing";
import Posts from "./dashboard/Posts";
import PostForm from "./dashboard/Postform";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <LandingPage />
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
