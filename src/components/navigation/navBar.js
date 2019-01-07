import React from "react";

function navBar() {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <a href="google.com" className="brand-logo center">
          <i className="material-icons">cloud</i>
          YeYo!
        </a>
        <ul id="nav-mobile" className=" left hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">About Us</a>
          </li>
          <li>
            <a href="collapsible.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;
