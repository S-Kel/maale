import React, { Component } from "react";

class Landing extends Component {
  render() {
    // return (
    //   <div className="text-center">
    //     <ul class="collection">
    //       <li class="collection-item avatar">
    //         <img
    //           src="https://materializecss.com/images/yuna.jpg"
    //           alt=""
    //           class="circle"
    //         />
    //         <span class="title">Title</span>
    //         <p>
    //           First Line <br />
    //           Second Line{" "}
    //         </p>
    //         <a href="#!" class="secondary-content">
    //           <i class="material-icons">grade</i>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // );

    return (
      <div className="section no-pad-bot grey lighten-5">
        <div className="container">
          <br />
          <br />
          <h1 className="header center teal-text text-lighten-2">
            Latest Plugins
          </h1>
          <div className="row center">
            <h5 className="header col s12 light">Innovative and elegant</h5>
          </div>
          <div className="row center">
            <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light teal lighten-1"
            >
              Get Started
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Landing;
