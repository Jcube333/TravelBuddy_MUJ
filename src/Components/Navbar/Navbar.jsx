import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle.jsx";

// import "rsuite/dist/rsuite.min.css";

//For Navbar Components from R Suite
// import { Navbar, Nav } from "rsuite";
// import HomeIcon from "@rsuite/icons/legacy/Home";
// import CogIcon from "@rsuite/icons/legacy/Cog";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="n-left">
        <span>
          TBud<span>!</span>
        </span>
        <span>
          <Toggle></Toggle>
        </span>
      </div>
      <div className="n-right">
        <ul className="n-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>

        <button className="button n-login">Login</button>
        <button className="button n-signup">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
