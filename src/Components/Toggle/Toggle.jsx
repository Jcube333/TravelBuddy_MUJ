import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

function Toggle() {
  return (
    <div className="toggle">
      <Sun />
      <Moon />

      <div className="active"></div>
    </div>
  );
}

export default Toggle;
